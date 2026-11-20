import os
import hashlib
import json
import time
import logging
import secrets
from collections import defaultdict
from typing import Optional
from fastapi import Body, FastAPI, Depends, HTTPException, UploadFile, File, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import database as db_module
from database import User, Note, get_db, init_db, hash_password, verify_password
import gemini_service

# ==========================================================
# CONFIGURACIÓN POR VARIABLES DE ENTORNO (sin secretos en el código)
# ==========================================================
def _env_flag(name: str, default: bool = False) -> bool:
    return os.environ.get(name, str(default)).strip().lower() in ("1", "true", "yes", "on")

# El inicio de sesión está deshabilitado por defecto (modo local).
ENABLE_AUTH = _env_flag("ENABLE_AUTH", False)

# Orígenes permitidos para CORS (lista separada por comas). Vacío = solo mismo origen.
ALLOWED_ORIGINS = [o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "").split(",") if o.strip()]

# Límite de peticiones a la IA por IP (por minuto).
RATE_LIMIT_PER_MINUTE = int(os.environ.get("RATE_LIMIT_PER_MINUTE", "20") or 20)

# Tamaño máximo de archivo subido (audio/imagen), en MB.
MAX_UPLOAD_MB = int(os.environ.get("MAX_UPLOAD_MB", "25") or 25)
MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024

# Política de seguridad de contenido (permite CDNs necesarios para el frontend).
CONTENT_SECURITY_POLICY = (
    "default-src 'self'; "
    "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; "
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
    "font-src 'self' https://fonts.gstatic.com data:; "
    "img-src 'self' data: blob:; "
    "media-src 'self' blob:; "
    "connect-src 'self'; "
    "worker-src 'self' blob:; "
    "object-src 'none'; "
    "base-uri 'self'; "
    "form-action 'self'; "
    "frame-ancestors 'none'"
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("visualnotes")

# Inicializar Base de Datos
init_db()

app = FastAPI(
    title="VisualNotes AI",
    description="Plataforma universitaria de estudio con IA",
    version="1.0.0",
    docs_url=None,
    redoc_url=None,
    openapi_url=None
)

# CORS: solo se habilita si se define una lista explícita de orígenes.
if ALLOWED_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allow_headers=["Content-Type"],
    )

# Cabeceras de seguridad en todas las respuestas.
@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "microphone=(self), camera=(self), geolocation=()"
    response.headers["Content-Security-Policy"] = CONTENT_SECURITY_POLICY
    return response

# Limitador de tasa simple en memoria (por IP).
_rate_buckets = defaultdict(list)

def enforce_rate_limit(request: Request) -> None:
    client_ip = request.client.host if request.client else "unknown"
    now = time.time()
    window = 60.0
    bucket = _rate_buckets[client_ip]
    bucket[:] = [t for t in bucket if now - t < window]
    if len(bucket) >= RATE_LIMIT_PER_MINUTE:
        raise HTTPException(
            status_code=429,
            detail="Demasiadas solicitudes. Intenta de nuevo en un momento."
        )
    bucket.append(now)

# Directorios de estáticos y plantillas
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")

os.makedirs(STATIC_DIR, exist_ok=True)
os.makedirs(os.path.join(STATIC_DIR, "css"), exist_ok=True)
os.makedirs(os.path.join(STATIC_DIR, "js"), exist_ok=True)
os.makedirs(TEMPLATES_DIR, exist_ok=True)

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


def _compute_static_version() -> str:
    """Versión de los estáticos basada en tamaño y fecha de modificación.

    Cambia automáticamente en cada despliegue que modifique algún archivo de
    /static, de modo que el navegador descarte la caché y muestre los cambios.
    """
    digest = hashlib.md5()
    try:
        for root, _dirs, files in os.walk(STATIC_DIR):
            for name in sorted(files):
                path = os.path.join(root, name)
                try:
                    stat = os.stat(path)
                    digest.update(f"{path}:{stat.st_size}:{int(stat.st_mtime)}".encode("utf-8"))
                except OSError:
                    continue
    except Exception:
        pass
    return digest.hexdigest()[:10]


STATIC_VERSION = _compute_static_version()


def render_template(filename: str, fallback: str) -> HTMLResponse:
    """Lee una plantilla, inyecta la versión de estáticos y evita caché del HTML."""
    path = os.path.join(TEMPLATES_DIR, filename)
    if not os.path.exists(path):
        return HTMLResponse(fallback, status_code=404)
    with open(path, "r", encoding="utf-8") as handle:
        html = handle.read()
    html = html.replace("__STATIC_VERSION__", STATIC_VERSION)
    return HTMLResponse(
        content=html,
        headers={"Cache-Control": "no-cache, must-revalidate"},
    )

# Diccionario de sesiones en memoria para tokens rápidos
ACTIVE_SESSIONS = {}

# Crear un usuario demo por defecto si la base está vacía
def ensure_seed_data():
    with db_module.SessionLocal() as db:
        admin_user = db.query(User).filter(User.email == "demo@cenfotec.ac.cr").first()
        if not admin_user:
            demo = User(
                name="Estudiante Grupo 4",
                email="demo@cenfotec.ac.cr",
                password_hash=hash_password("visualnotes123"),
                career="Ingeniería del Software e IA",
                university="Universidad Cenfotec"
            )
            db.add(demo)
            db.commit()
            db.refresh(demo)

            # Nota de ejemplo precargada
            sample_mermaid = """graph TD
  A["Sistemas Distribuidos"] --> B["Concurrencia"]
  A --> C["Tolerancia a Fallos"]
  A --> D["Consistencia de Datos"]
  B --> E["Hilos y Procesos"]
  B --> F["Paso de Mensajes"]
  C --> G["Replicación Activa/Pasiva"]
  C --> H["Heartbeats y Detección"]
  D --> I["Teorema CAP"]
  D --> J["Consistencia Eventual"]
"""
            note_sample = Note(
                user_id=demo.id,
                title="Fundamentos de Sistemas Distribuidos y Teorema CAP",
                subject="Sistemas Distribuidos",
                input_type="text",
                transcription="En los sistemas distribuidos la concurrencia y la tolerancia a fallos son claves. Según el Teorema CAP, no es posible garantizar simultáneamente Consistencia, Disponibilidad y Tolerancia a particiones.",
                mermaid_code=sample_mermaid,
                summary="Análisis de los pilares arquitectónicos en sistemas distribuidos modernos, con énfasis en el equilibrio entre disponibilidad y consistencia fuerte.",
                key_points_json=json.dumps([
                    "Teorema CAP: Solo se pueden garantizar 2 de las 3 propiedades al mismo tiempo.",
                    "La replicación permite tolerancia a fallos pero añade latencia de sincronización.",
                    "La concurrencia requiere primitivas seguras de comunicación entre nodos."
                ]),
                quiz_json=json.dumps([
                    {
                        "question": "¿Qué establece el Teorema CAP en redes con particiones?",
                        "answer": "Obliga a elegir entre Consistencia (C) o Disponibilidad (A) cuando ocurre una partición de red (P)."
                    }
                ])
            )
            db.add(note_sample)
            db.commit()

ensure_seed_data()

# ==========================================================
# RUTAS DE PÁGINA PRINCIPAL
# ==========================================================
@app.get("/", response_class=HTMLResponse)
async def serve_landing():
    """Página de inicio: la landing / marketing del producto."""
    return render_template("landing.html", "<h1>VisualNotes AI - Landing no encontrada</h1>")


@app.get("/landing", response_class=HTMLResponse)
async def serve_landing_alias():
    """Alias de la landing (compatibilidad con enlaces existentes)."""
    return await serve_landing()


@app.get("/app", response_class=HTMLResponse)
async def serve_index():
    """Aplicación principal (generador de apuntes)."""
    return render_template("index.html", "<h1>VisualNotes AI - Index no encontrado</h1>")


@app.get("/api/health")
async def health():
    """Chequeo de salud para contenedores y balanceadores."""
    return {"status": "ok"}



# ==========================================================
# AUTENTICACIÓN Y USUARIOS (deshabilitada por defecto)
# ==========================================================
# El inicio de sesión se añadirá más adelante. Estas rutas solo se registran
# cuando ENABLE_AUTH=true, para no exponer endpoints de cuentas en el público.
if ENABLE_AUTH:
    @app.post("/api/auth/register")
    async def register_user(
        name: str = Form(...),
        email: str = Form(...),
        password: str = Form(...),
        career: Optional[str] = Form("Ingeniería"),
        university: Optional[str] = Form("Universidad"),
        db: Session = Depends(get_db)
    ):
        email_clean = email.strip().lower()
        existing = db.query(User).filter(User.email == email_clean).first()
        if existing:
            raise HTTPException(status_code=400, detail="Este correo electrónico ya está registrado.")

        if len(password) < 8:
            raise HTTPException(status_code=400, detail="La contraseña debe tener al menos 8 caracteres.")

        hashed = hash_password(password)
        user = User(
            name=name.strip(),
            email=email_clean,
            password_hash=hashed,
            career=career.strip() if career else "General",
            university=university.strip() if university else "Universidad"
        )
        db.add(user)
        db.commit()
        db.refresh(user)

        token = secrets.token_hex(24)
        ACTIVE_SESSIONS[token] = user.id

        return {"success": True, "token": token, "user": user.to_dict()}

    @app.post("/api/auth/login")
    async def login_user(
        email: str = Form(...),
        password: str = Form(...),
        db: Session = Depends(get_db)
    ):
        email_clean = email.strip().lower()
        user = db.query(User).filter(User.email == email_clean).first()
        if not user or not verify_password(password, user.password_hash):
            raise HTTPException(status_code=401, detail="Credenciales incorrectas. Verifique correo y contraseña.")

        token = secrets.token_hex(24)
        ACTIVE_SESSIONS[token] = user.id

        return {"success": True, "token": token, "user": user.to_dict()}

    @app.get("/api/auth/me")
    async def get_current_user(token: Optional[str] = None, db: Session = Depends(get_db)):
        if not token or token not in ACTIVE_SESSIONS:
            raise HTTPException(status_code=401, detail="Sesión no válida o expirada.")
        user_id = ACTIVE_SESSIONS[token]
        user = db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado.")
        return {"user": user.to_dict()}

# ==========================================================
# PROCESAMIENTO CON INTELIGENCIA ARTIFICIAL
# ==========================================================
@app.post("/api/process")
async def process_study_material(
    request: Request,
    input_type: str = Form(...),  # 'audio', 'image', 'text'
    text_content: Optional[str] = Form(None),
    model: Optional[str] = Form("gemini-flash-latest"),
    token: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    # Protección: límite de solicitudes por IP (la IA es un recurso costoso).
    enforce_rate_limit(request)

    if input_type not in ("audio", "image", "text"):
        raise HTTPException(status_code=400, detail="Tipo de entrada no válido.")

    # Modo local: siempre se guarda en el dispositivo. Con auth activa, usa el token.
    user_id = None
    if ENABLE_AUTH and token and token in ACTIVE_SESSIONS:
        user_id = ACTIVE_SESSIONS[token]
    else:
        demo = db.query(User).first()
        if demo:
            user_id = demo.id

    file_bytes = None
    mime_type = None

    if file:
        file_bytes = await file.read()
        if len(file_bytes) > MAX_UPLOAD_BYTES:
            raise HTTPException(status_code=413, detail=f"El archivo supera el límite de {MAX_UPLOAD_MB} MB.")
        mime_type = file.content_type
        if input_type == "audio" and not mime_type:
            mime_type = "audio/webm"
        elif input_type == "image" and not mime_type:
            mime_type = "image/jpeg"

    if input_type in ["audio", "image"] and not file_bytes and not text_content:
        raise HTTPException(status_code=400, detail="Debe adjuntar un archivo de audio o imagen, o ingresar texto.")

    if input_type == "text" and not text_content:
        raise HTTPException(status_code=400, detail="Debe ingresar el texto del apunte de clase.")

    if text_content and len(text_content) > 100000:
        raise HTTPException(status_code=413, detail="El texto es demasiado extenso.")

    # Ejecutar análisis con IA (nunca se devuelven detalles internos al cliente).
    try:
        ai_result = gemini_service.analyze_material(
            input_type=input_type,
            text_content=text_content,
            file_bytes=file_bytes,
            mime_type=mime_type,
            preferred_model=model or "gemini-flash-latest"
        )
    except Exception:
        logger.exception("Error al procesar material con IA")
        raise HTTPException(status_code=502, detail="El servicio de IA no está disponible en este momento. Intenta de nuevo.")

    # Guardar en Base de Datos SQLite
    saved_note = None
    if user_id:
        new_note = Note(
            user_id=user_id,
            title=ai_result.get("title", "Apunte de Clase"),
            subject=ai_result.get("subject", "General"),
            input_type=input_type,
            audio_description=ai_result.get("audio_description", ""),
            transcription=ai_result.get("transcription", ""),
            clean_text=ai_result.get("clean_text", ""),
            notes_text=ai_result.get("notes", ""),
            keywords_json=json.dumps(ai_result.get("keywords", [])),
            mermaid_code=ai_result.get("mermaid_code", ""),
            summary=ai_result.get("summary", ""),
            key_points_json=json.dumps(ai_result.get("key_points", [])),
            quiz_json=json.dumps(ai_result.get("quiz", [])),
            study_links_json=json.dumps(ai_result.get("study_links", {})),
            visual_resources_json=json.dumps(ai_result.get("visual_resources", [])),
            map_json=json.dumps({
                "concepts": ai_result.get("concepts", []),
                "relations": ai_result.get("relations", []),
                "events": ai_result.get("events", []),
                "tables": ai_result.get("tables", [])
            }),
            markdown_doc=ai_result.get("markdown_doc", "")
        )
        db.add(new_note)
        db.commit()
        db.refresh(new_note)
        saved_note = new_note.to_dict()

    return {
        "success": True,
        "data": ai_result,
        "note": saved_note
    }

# ==========================================================
# CRUD DE APUNTES Y MAPAS CONCEPTUALES
# ==========================================================
@app.get("/api/notes")
async def list_notes(
    token: Optional[str] = None,
    search: Optional[str] = None,
    input_type: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Note)
    if token and token in ACTIVE_SESSIONS:
        user_id = ACTIVE_SESSIONS[token]
        query = query.filter(Note.user_id == user_id)

    if input_type and input_type != "all":
        query = query.filter(Note.input_type == input_type)

    if search:
        search_fmt = f"%{search.strip()}%"
        query = query.filter(
            (Note.title.ilike(search_fmt)) |
            (Note.subject.ilike(search_fmt)) |
            (Note.summary.ilike(search_fmt))
        )

    notes = query.order_by(Note.created_at.desc()).all()
    return {"notes": [n.to_dict() for n in notes]}

@app.get("/api/notes/{note_id}")
async def get_note(note_id: int, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Apunte no encontrado.")
    return {"note": note.to_dict()}

@app.put("/api/notes/{note_id}")
async def update_note(
    note_id: int,
    title: Optional[str] = Form(None),
    subject: Optional[str] = Form(None),
    mermaid_code: Optional[str] = Form(None),
    summary: Optional[str] = Form(None),
    db: Session = Depends(get_db)
):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Apunte no encontrado.")

    if title:
        note.title = title.strip()
    if subject:
        note.subject = subject.strip()
    if mermaid_code:
        note.mermaid_code = gemini_service.clean_mermaid_code(mermaid_code)
    if summary:
        note.summary = summary.strip()

    db.commit()
    db.refresh(note)
    return {"success": True, "note": note.to_dict()}

@app.put("/api/notes/{note_id}/map")
async def update_note_map(
    note_id: int,
    payload: dict = Body(...),
    db: Session = Depends(get_db)
):
    """Guarda el mapa conceptual editado (conceptos y relaciones) de un apunte."""
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Apunte no encontrado.")

    concepts, relations = gemini_service.normalize_concept_map(
        payload.get("concepts"), payload.get("relations")
    )
    existing = {}
    try:
        existing = json.loads(note.map_json) if note.map_json else {}
        if not isinstance(existing, dict):
            existing = {}
    except (ValueError, TypeError):
        existing = {}
    note.map_json = json.dumps({
        "concepts": concepts,
        "relations": relations,
        "events": existing.get("events", []),
        "tables": existing.get("tables", [])
    })
    db.commit()
    db.refresh(note)
    return {"success": True, "map_data": note.to_dict().get("map_data")}


@app.delete("/api/notes/{note_id}")
async def delete_note(note_id: int, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Apunte no encontrado.")
    db.delete(note)
    db.commit()
    return {"success": True, "message": "Apunte eliminado con éxito."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
