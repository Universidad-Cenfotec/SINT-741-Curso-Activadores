import os
import json
import re
import urllib.parse
from typing import Dict, Any, List, Optional
from google import genai
from google.genai import types

# Cargar variables de entorno desde un archivo .env si está disponible (solo desarrollo local).
try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

# SEGURIDAD: la API key se lee EXCLUSIVAMENTE de variables de entorno.
# Nunca escribas la clave en el código ni la subas al repositorio público.
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()

# Lista de modelos configurable por entorno (separados por coma). No incluye secretos.
_DEFAULT_MODELS = "gemini-flash-latest,gemini-3.5-flash-lite,gemini-3.5-flash,gemini-3.7-flash"
MODELOS = [m.strip() for m in os.environ.get("GEMINI_MODELS", _DEFAULT_MODELS).split(",") if m.strip()]

# Inicialización del cliente
_client = None

def get_client() -> genai.Client:
    global _client
    if _client is None:
        if not GEMINI_API_KEY:
            # No exponer detalles: solo indicar que falta configuración del servidor.
            raise RuntimeError("El servicio de IA no está configurado en el servidor.")
        _client = genai.Client(api_key=GEMINI_API_KEY)
    return _client

PROMPT_SYSTEM = """
Eres el motor de inteligencia artificial de VisualNotes AI, un asistente avanzado para estudiantes universitarios.
Tu objetivo es procesar notas de clase (desde audio, imágenes de pizarra/apuntes o texto) y transformarlas en un kit integral de estudio con:
1. Descripción del material fuente (de qué trata el audio, la imagen o el texto).
2. Transcripción COMPLETA y literal de todo lo dicho/escrito (sin resumir, sin omitir ideas).
3. Versión limpia y ordenada del contenido: elimina muletillas, repeticiones, ruido y frases inconexas, y organiza las ideas por temas.
4. Síntesis pedagógica, apuntes estructurados y puntos clave.
5. Palabras clave para búsqueda y repaso.
6. Un Mapa Conceptual: el mismo mapa entregado por partida doble: (a) en sintaxis Mermaid y (b) como datos estructurados ('concepts' y 'relations') para poder editarlo de forma interactiva.
6b. Una cronología ('events') cuando el material mencione fechas, etapas o una secuencia temporal, y tablas comparativas ('tables') cuando haya elementos que convenga contrastar.
7. Preguntas de autoevaluación (quiz con respuestas).
8. Ayudas visuales y modelos mentales conceptuales explicativos.
9. Enlaces y recursos recomendados de estudio (videos de YouTube reales y relevantes, documentación web oficial y artículos de blogs universitarios de referencia).
10. Un documento Markdown (.md) completo y listo para exportar a Obsidian, Notion o PDF.

Debes responder SIEMPRE con un objeto JSON estrictamente válido que contenga exactamente estas propiedades:
{
  "title": "Título conciso y profesional del tema (ej. Arquitectura de Redes y Protocolo TCP/IP)",
  "subject": "Materia o área universitaria estimada (ej. Redes de Computadoras)",
  "audio_description": "Descripción del material fuente: de qué trata, tipo de clase, tema general, hablantes o fuentes detectadas, tono, estructura y para qué sirve. Si la fuente es el audio, describe el audio; si es imagen o texto, descríbelo igualmente.",
  "transcription": "Transcripción COMPLETA, literal y fiel de TODO lo dicho o escrito en la fuente, sin resumir ni omitir. Si es audio, transcribe todo lo que se escucha. Si es extenso, organiza por párrafos o por momento de la clase pero conserva el contenido íntegro.",
  "clean_text": "Versión limpia, ordenada y legible del contenido anterior: se eliminan muletillas, repeticiones, titubeos, ruido y frases sueltas; se corrigen errores obvios de dicción y se agrupan las ideas por subtemas en párrafos coherentes, sin perder ningún contenido académico.",
  "summary": "Resumen ejecutivo estructurado en párrafos claros y directos explicando los conceptos clave y su relevancia académica",
  "keywords": [
    "palabra clave 1",
    "palabra clave 2",
    "palabra clave 3",
    "palabra clave 4",
    "palabra clave 5"
  ],
  "notes": "Apuntes estructurados en formato Markdown (usa ##, ###, listas y negritas) que organicen el tema en secciones, definiciones, fórmulas, ejemplos y aclaraciones del profesor.",
  "mermaid_code": "Código Mermaid válido que represente el mapa conceptual. Usa preferentemente 'flowchart TD' o 'graph TD'. Envolver SIEMPRE los textos de cada nodo en comillas dobles ej: A[\"Concepto Central\"] --> B[\"Subtema\"]. No uses caracteres reservados dentro de los nodos sin escapar.",
  "concepts": [
    {"id": "c1", "label": "Concepto clave 1 (máx. 70 caracteres)", "description": "Explicación breve de 1-2 frases sobre el concepto.", "importance": 1, "evidence": "Frase textual corta tomada del material donde aparece el concepto"},
    {"id": "c2", "label": "Concepto clave 2", "description": "Explicación breve de 1-2 frases.", "importance": 2, "evidence": "Otra frase textual corta del material"}
  ],
  "relations": [
    {"from": "c1", "to": "c2", "label": "tipo de relación breve (ej. 'se compone de', 'depende de', 'causa')"}
  ],
  "events": [
    {"date": "1947", "text": "Descripción breve de lo ocurrido en esa fecha o etapa"}
  ],
  "tables": [
    {
      "title": "Título comparativo (ej. 'Comparación de enfoques')",
      "headers": ["Criterio", "Opción A", "Opción B"],
      "rows": [
        ["Qué es", "Descripción A", "Descripción B"],
        ["Cuándo se usa", "Caso A", "Caso B"]
      ]
    }
  ],
  "key_points": [
    "Definición o principio fundamental 1",
    "Definición o principio fundamental 2",
    "Definición o principio fundamental 3",
    "Definición o principio fundamental 4"
  ],
  "quiz": [
    {
      "question": "Pregunta de autoevaluación 1 para preparar el examen",
      "answer": "Explicación concisa y clara de la respuesta correcta"
    },
    {
      "question": "Pregunta de autoevaluación 2 para preparar el examen",
      "answer": "Explicación concisa y clara de la respuesta correcta"
    }
  ],
  "visual_resources": [
    {
      "title": "Diagrama de Flujo del Proceso",
      "category": "Esquema Operativo",
      "description": "Explicación de cómo fluyen los datos o componentes secuencialmente.",
      "diagram_code": "flowchart LR\n  S1[\"1. Entrada\"] --> S2[\"2. Procesamiento Central\"] --> S3[\"3. Salida o Estado Final\"]",
      "steps": [
        {"step": 1, "title": "Fase Inicial", "detail": "Condición inicial o entrada de datos."},
        {"step": 2, "title": "Fase de Transformación", "detail": "Mecanismo central y operaciones clave."},
        {"step": 3, "title": "Fase Final", "detail": "Resultado o impacto en el sistema."}
      ]
    },
    {
      "title": "Modelo Mental y Analogía Visual",
      "category": "Modelo Cognitivo",
      "description": "Metáfora visual para recordar y relacionar el concepto con facilidad.",
      "diagram_code": "flowchart TD\n  M1[\"Concepto Teórico\"] --> M2[\"Metáfora Visual\"]\n  M2 --> M3[\"Regla de Oro en Examen\"]",
      "steps": [
        {"step": 1, "title": "Núcleo Conceptual", "detail": "Idea matriz que da origen a la regla."},
        {"step": 2, "title": "Regla Crítica", "detail": "Lo que los evaluadores suelen preguntar en evaluaciones."}
      ]
    }
  ],
  "study_links": {
    "youtube": [
      {
        "title": "Video / Clase recomendada sobre este tema",
        "channel": "Canal Educativo Universitario (ej. Khan Academy, CrashCourse, Platzi, DotCSV)",
        "query": "Termino de busqueda exacto en YouTube",
        "description": "Por qué este video aclara el tema y qué conceptos cubre."
      },
      {
        "title": "Explicación visual animada o práctica",
        "channel": "Canal de Ingeniería / Ciencias",
        "query": "Termino de busqueda visual",
        "description": "Visualización práctica con animaciones y casos reales."
      }
    ],
    "websites": [
      {
        "title": "Documentación o Enciclopedia de Referencia",
        "site": "Wikipedia / MDN / GeeksforGeeks / LibreTexts",
        "url": "https://es.wikipedia.org/wiki/...",
        "description": "Fuente enciclopédica detallada para profundizar en la teoría formal."
      },
      {
        "title": "Portal Académico o Repositorio Educativo",
        "site": "Portal Universitario / OpenCourseWare",
        "url": "https://...",
        "description": "Recurso abierto con ejercicios resueltos y guías de cátedra."
      }
    ],
    "blogs": [
      {
        "title": "Artículo o Tutorial Explicativo",
        "source": "Medium / Dev.to / Blog Académico",
        "url": "https://...",
        "description": "Lectura recomendada con ejemplos paso a paso y lenguaje accesible."
      }
    ]
  },
  "markdown_doc": "# Título del Apunte\\n\\n## Descripción del Material\\n...\\n\\n## Resumen Ejecutivo\\n...\\n\\n## Palabras Clave\\n...\\n\\n## Apuntes Estructurados\\n...\\n\\n## Contenido Ordenado y Limpio\\n...\\n\\n## Transcripción Completa\\n...\\n\\n## Mapa Conceptual (Mermaid)\\n```mermaid\\n...\\n```\\n\\n## Conceptos Clave\\n...\\n\\n## Preguntas de Repaso\\n...\\n\\n## Recursos y Enlaces Recomendados\\n..."
}
"""

def clean_mermaid_code(code: str) -> str:
    """Limpia el bloque de código Mermaid si viene con delimitadores markdown."""
    if not code:
        return "graph TD\n  A[\"Tema Principal\"] --> B[\"Concepto Clave\"]"
    
    code = code.strip()
    if code.startswith("```"):
        lines = code.splitlines()
        if lines[0].startswith("```"):
            lines = lines[1:]
        if lines and lines[-1].strip() == "```":
            lines = lines[:-1]
        code = "\n".join(lines).strip()
    
    if not (code.startswith("graph") or code.startswith("flowchart") or code.startswith("mindmap")):
        code = "flowchart TD\n" + code
        
    return code

def normalize_concept_map(concepts: Any, relations: Any) -> tuple:
    """Normaliza el mapa conceptual estructurado devuelto por la IA.

    Garantiza identificadores válidos, longitudes razonables e integridad
    referencial entre conceptos y relaciones para poder dibujar un grafo.
    """
    clean_concepts = []
    ids = []
    raw_concepts = concepts if isinstance(concepts, list) else []
    for index, concept in enumerate(raw_concepts[:24]):
        if not isinstance(concept, dict):
            continue
        label = str(concept.get("label", "") or "").strip()
        if not label:
            continue
        cid = str(concept.get("id", "") or "").strip() or f"c{index + 1}"
        if cid in ids:
            cid = f"{cid}-{index + 1}"
        try:
            importance = int(concept.get("importance", 2))
        except Exception:
            importance = 2
        importance = max(1, min(3, importance))
        clean_concepts.append({
            "id": cid,
            "label": label[:70],
            "description": str(concept.get("description", "") or "")[:400],
            "importance": importance,
            "evidence": str(concept.get("evidence", "") or "")[:400],
        })
        ids.append(cid)

    id_set = set(ids)
    clean_relations = []
    seen = set()
    raw_relations = relations if isinstance(relations, list) else []
    for relation in raw_relations[:60]:
        if not isinstance(relation, dict):
            continue
        source = str(relation.get("from", "") or "").strip()
        target = str(relation.get("to", "") or "").strip()
        if source not in id_set or target not in id_set or source == target:
            continue
        key = tuple(sorted((source, target)))
        if key in seen:
            continue
        seen.add(key)
        clean_relations.append({
            "from": source,
            "to": target,
            "label": str(relation.get("label", "") or "").strip()[:60],
        })

    return clean_concepts, clean_relations


def normalize_events(events: Any) -> list:
    """Normaliza la cronología de fechas/etapas devuelta por la IA."""
    clean_events = []
    raw = events if isinstance(events, list) else []
    for event in raw[:30]:
        if not isinstance(event, dict):
            continue
        text = str(event.get("text", "") or "").strip()
        if not text:
            continue
        clean_events.append({
            "date": str(event.get("date", "") or "").strip()[:40],
            "text": text[:400],
        })
    return clean_events


def normalize_tables(tables: Any) -> list:
    """Normaliza las tablas comparativas devueltas por la IA."""
    clean_tables = []
    raw = tables if isinstance(tables, list) else []
    for table in raw[:6]:
        if not isinstance(table, dict):
            continue
        headers = table.get("headers", [])
        if not isinstance(headers, list):
            continue
        headers = [str(h or "").strip()[:80] for h in headers[:6]]
        if len(headers) < 2:
            continue
        rows = []
        raw_rows = table.get("rows", [])
        if isinstance(raw_rows, list):
            for row in raw_rows[:20]:
                if not isinstance(row, list):
                    continue
                cells = [str(c or "").strip()[:200] for c in row[:len(headers)]]
                while len(cells) < len(headers):
                    cells.append("")
                if any(cells):
                    rows.append(cells)
        if not rows:
            continue
        clean_tables.append({
            "title": str(table.get("title", "") or "Comparación").strip()[:100],
            "headers": headers,
            "rows": rows,
        })
    return clean_tables


def format_study_links(study_links: Optional[Dict[str, Any]], title: str) -> Dict[str, Any]:
    """Asegura URLs válidas y funcionales para YouTube, sitios y blogs."""
    links = study_links if isinstance(study_links, dict) else {}
    yt_list = links.get("youtube", [])
    web_list = links.get("websites", [])
    blog_list = links.get("blogs", [])

    # Normalizar YouTube links
    processed_yt = []
    if isinstance(yt_list, list):
        for item in yt_list:
            if isinstance(item, dict):
                query = item.get("query") or item.get("title") or title
                encoded_q = urllib.parse.quote_plus(query)
                processed_yt.append({
                    "title": item.get("title", f"Video explicativo sobre {title}"),
                    "channel": item.get("channel", "YouTube Académico"),
                    "url": f"https://www.youtube.com/results?search_query={encoded_q}",
                    "description": item.get("description", "Video recomendado para afianzar el contenido visto en clase.")
                })

    if not processed_yt:
        q_enc = urllib.parse.quote_plus(title)
        processed_yt = [
            {
                "title": f"Clase magistral: {title}",
                "channel": "YouTube Universitario",
                "url": f"https://www.youtube.com/results?search_query={q_enc}+explicacion",
                "description": "Búsqueda directa de videos y lecciones en video sobre los conceptos de esta sesión."
            },
            {
                "title": f"Tutorial y repaso rápido de {title}",
                "channel": "YouTube Edu",
                "url": f"https://www.youtube.com/results?search_query={q_enc}+resumen+tutorial",
                "description": "Guía práctica y animaciones explicativas del tema."
            }
        ]

    # Normalizar Sitios Web
    processed_web = []
    if isinstance(web_list, list):
        for item in web_list:
            if isinstance(item, dict):
                url = item.get("url", "")
                if not url.startswith("http"):
                    wiki_term = urllib.parse.quote(item.get("title", title))
                    url = f"https://es.wikipedia.org/wiki/Especial:Buscar?search={wiki_term}"
                processed_web.append({
                    "title": item.get("title", "Artículo de Referencia"),
                    "site": item.get("site", "Enciclopedia / Documentación"),
                    "url": url,
                    "description": item.get("description", "Página de referencia técnica y conceptual.")
                })

    if not processed_web:
        wiki_q = urllib.parse.quote_plus(title)
        processed_web = [
            {
                "title": f"Enciclopedia y fundamentos de {title}",
                "site": "Wikipedia Académica",
                "url": f"https://es.wikipedia.org/wiki/Especial:Buscar?search={wiki_q}",
                "description": "Definiciones formales y fundamentos teóricos del área de estudio."
            },
            {
                "title": f"Artículos y guías de estudio para {title}",
                "site": "Google Scholar / Repositorios Abiertos",
                "url": f"https://scholar.google.com/scholar?q={wiki_q}",
                "description": "Publicaciones y material de cátedra universitario."
            }
        ]

    # Normalizar Blogs
    processed_blogs = []
    if isinstance(blog_list, list):
        for item in blog_list:
            if isinstance(item, dict):
                url = item.get("url", "")
                if not url.startswith("http"):
                    q = urllib.parse.quote_plus(item.get("title", title))
                    url = f"https://www.google.com/search?q={q}+blog+tutorial"
                processed_blogs.append({
                    "title": item.get("title", "Guía y casos prácticos"),
                    "source": item.get("source", "Blog de Estudio"),
                    "url": url,
                    "description": item.get("description", "Lectura complementaria y ejemplos aplicados.")
                })

    return {
        "youtube": processed_yt,
        "websites": processed_web,
        "blogs": processed_blogs
    }

def generate_markdown_file_content(data: Dict[str, Any]) -> str:
    """Genera un archivo Markdown (.md) profesional listo para Obsidian / Notion / PDF."""
    title = data.get("title", "Apunte de Clase")
    subject = data.get("subject", "General")
    description = data.get("audio_description", "") or data.get("description", "")
    transcription = data.get("transcription", "")
    clean_text = data.get("clean_text", "")
    summary = data.get("summary", "")
    keywords = data.get("keywords", [])
    notes = data.get("notes", "")
    mermaid = data.get("mermaid_code", "")
    points = data.get("key_points", [])
    quiz = data.get("quiz", [])
    links = data.get("study_links", {})

    md = f"""# {title}

> **Materia / Área:** {subject}  
> **Generado con:** VisualNotes AI  
> **Herramienta de estudio:** Documento de repaso universitario

---

## 🎧 Descripción del Material Fuente
{description or "_No disponible._"}

---

## 📌 Resumen Ejecutivo
{summary or "_No disponible._"}

---

## 🔑 Palabras Clave
"""
    if keywords:
        md += " ".join([f"`{kw}`" for kw in keywords]) + "\n"
    else:
        md += "_No se detectaron palabras clave._\n"

    md += "\n---\n\n## 📝 Apuntes Estructurados\n"
    md += (notes or "_No disponibles._") + "\n"

    md += "\n---\n\n## 🧹 Contenido Ordenado y Limpio\n"
    md += (clean_text or "_No disponible._") + "\n"

    md += "\n---\n\n## 📄 Transcripción Completa\n"
    md += (transcription or "_No disponible._") + "\n"

    md += f"""
---

## 🗺️ Mapa Conceptual
```mermaid
{mermaid}
```

---

## 💡 Conceptos Fundamentales
"""
    for pt in points:
        md += f"- **Definición:** {pt}\n"

    md += "\n---\n\n## 📝 Autoevaluación y Repaso de Examen\n"
    for idx, q in enumerate(quiz, 1):
        md += f"### {idx}. {q.get('question', '')}\n"
        md += f"<details>\n<summary>Ver Respuesta</summary>\n\n> {q.get('answer', '')}\n\n</details>\n\n"

    md += "---\n\n## 🔗 Recursos Multimedia y Enlaces de Profundización\n\n### 📺 Videos Recomendados (YouTube)\n"
    for yt in links.get("youtube", []):
        md += f"- [{yt.get('title')}]({yt.get('url')}) - *{yt.get('channel')}*: {yt.get('description')}\n"

    md += "\n### 🌐 Sitios Web y Documentación Oficial\n"
    for site in links.get("websites", []):
        md += f"- [{site.get('title')}]({site.get('url')}) - *{site.get('site')}*: {site.get('description')}\n"

    if links.get("blogs"):
        md += "\n### 📖 Blogs y Guías de Lectura\n"
        for blog in links.get("blogs", []):
            md += f"- [{blog.get('title')}]({blog.get('url')}) - *{blog.get('source')}*: {blog.get('description')}\n"

    return md.strip()

def analyze_material(
    input_type: str,
    text_content: Optional[str] = None,
    file_bytes: Optional[bytes] = None,
    mime_type: Optional[str] = None,
    preferred_model: str = "gemini-flash-latest"
) -> Dict[str, Any]:
    """
    Procesa audio, imagen o texto usando los modelos configurados con fallback automático.
    Retorna mapa conceptual, síntesis, quiz, ayudas visuales, enlaces web (YouTube, sitios, blogs) y markdown.
    """
    client = get_client()

    models_to_try = [preferred_model]
    for m in MODELOS:
        if m not in models_to_try:
            models_to_try.append(m)
    if "gemini-3.8-flash" not in models_to_try:
        models_to_try.append("gemini-3.8-flash")

    contents = []

    if input_type == "audio" and file_bytes:
        contents.append(
            types.Part.from_bytes(
                data=file_bytes,
                mime_type=mime_type or "audio/mp3"
            )
        )
        instruction = "Transcribe y analiza ESTE AUDIO universitario de principio a fin. Primero describe el audio (audio_description). Luego entrega la transcripción COMPLETA y literal de todo lo que se habla (transcription), sin resumir ni omitir partes. Después produce una versión limpia y ordenada por temas del contenido hablado (clean_text), un resumen, palabras clave, apuntes estructurados (notes), el mapa conceptual Mermaid, las preguntas de autoevaluación, ayudas visuales y los enlaces a videos y páginas web según el esquema JSON solicitado."
        if text_content:
            instruction += f"\nNotas adicionales del estudiante: {text_content}"
        contents.append(instruction)

    elif input_type == "image" and file_bytes:
        contents.append(
            types.Part.from_bytes(
                data=file_bytes,
                mime_type=mime_type or "image/jpeg"
            )
        )
        instruction = "Examina minuciosamente esta imagen universitaria (pizarra, apunte o diapositiva). Describe el material (audio_description), transcribe de forma COMPLETA todo el texto visible o contenido (transcription), genera una versión limpia y ordenada (clean_text), apuntes estructurados (notes), palabras clave, el mapa conceptual Mermaid, preguntas de examen, ayudas visuales y recomienda enlaces web y videos de YouTube."
        if text_content:
            instruction += f"\nNotas adicionales: {text_content}"
        contents.append(instruction)

    else:
        instruction = f"Analiza estas notas de clase universitaria y estructúralas según el esquema JSON solicitado. Incluye una descripción del material (audio_description), la transcripción/contenido completo (transcription), una versión limpia y ordenada (clean_text), apuntes estructurados (notes), palabras clave, mapa conceptual, ayudas visuales y enlaces web:\n\n{text_content or 'Sin contenido'}"
        contents.append(instruction)

    config = types.GenerateContentConfig(
        system_instruction=PROMPT_SYSTEM,
        response_mime_type="application/json",
        temperature=0.25,
    )

    last_error = None
    for model_name in models_to_try:
        try:
            response = client.models.generate_content(
                model=model_name,
                contents=contents,
                config=config
            )
            if response and response.text:
                raw_text = response.text.strip()
                parsed = json.loads(raw_text)
                
                # Limpiar y enriquecer
                parsed["mermaid_code"] = clean_mermaid_code(parsed.get("mermaid_code", ""))
                parsed["study_links"] = format_study_links(parsed.get("study_links"), parsed.get("title", "Apunte Universitario"))

                # Mapa conceptual estructurado (nodos y relaciones editables).
                parsed["concepts"], parsed["relations"] = normalize_concept_map(
                    parsed.get("concepts"), parsed.get("relations")
                )
                # Cronología de fechas y tablas comparativas.
                parsed["events"] = normalize_events(parsed.get("events"))
                parsed["tables"] = normalize_tables(parsed.get("tables"))

                # Normalizar campos nuevos
                if not isinstance(parsed.get("keywords"), list):
                    parsed["keywords"] = []
                if not parsed.get("audio_description"):
                    parsed["audio_description"] = parsed.get("description", "")
                if not parsed.get("clean_text"):
                    parsed["clean_text"] = parsed.get("transcription", "")
                if not parsed.get("notes"):
                    parsed["notes"] = ""
                if not parsed.get("transcription"):
                    parsed["transcription"] = ""

                # Regenerar SIEMPRE el Markdown para garantizar que incluya
                # descripción, palabras clave, apuntes, contenido limpio y transcripción.
                parsed["markdown_doc"] = generate_markdown_file_content(parsed)

                parsed["used_model"] = model_name
                return parsed
        except Exception as e:
            last_error = e
            continue

    # Estructura de contingencia si fallan llamadas a la API
    fallback_transcription = text_content if text_content else "Contenido procesado en modo de contingencia."
    fallback_title = "Apunte de Clase Universitario"
    fallback_data = {
        "title": fallback_title,
        "subject": "General",
        "audio_description": "Material de clase procesado en modo de contingencia: no fue posible describir la fuente mediante IA.",
        "transcription": fallback_transcription,
        "clean_text": fallback_transcription,
        "summary": "Se estructuró el contenido del apunte. A continuación se presentan el mapa conceptual inicial, ayudas visuales y recursos complementarios.",
        "keywords": ["apunte", "clase", "conceptos"],
        "notes": "1. Revisión de los contenidos impartidos durante la cátedra.\n2. Identificación de los conceptos esenciales para el estudio.",
        "mermaid_code": "flowchart TD\n  A[\"Apunte de Clase\"] --> B[\"Conceptos Principales\"]\n  A --> C[\"Aplicaciones Prácticas\"]\n  B --> D[\"Definición 1\"]\n  B --> E[\"Definición 2\"]\n  C --> F[\"Casos de Estudio\"]",
        "concepts": [
            {"id": "c1", "label": "Apunte de Clase", "description": "Tema central abordado en el material.", "importance": 1, "evidence": ""},
            {"id": "c2", "label": "Conceptos Principales", "description": "Definiciones y principios clave del tema.", "importance": 1, "evidence": ""},
            {"id": "c3", "label": "Aplicaciones Prácticas", "description": "Usos y ejemplos del contenido.", "importance": 2, "evidence": ""},
            {"id": "c4", "label": "Casos de Estudio", "description": "Situaciones reales para repasar.", "importance": 3, "evidence": ""}
        ],
        "relations": [
            {"from": "c1", "to": "c2", "label": "incluye"},
            {"from": "c1", "to": "c3", "label": "se aplica en"},
            {"from": "c2", "to": "c3", "label": "se ejemplifica en"}
        ],
        "events": [],
        "tables": [],
        "key_points": [
            "Revisión de contenidos impartidos durante la cátedra.",
            "Conceptos esenciales extraídos para estudio activo."
        ],
        "quiz": [
            {
                "question": "¿Cuál es la idea central tratada en este tema?",
                "answer": "La comprensión estructural de los componentes analizados en clase."
            }
        ],
        "visual_resources": [
            {
                "title": "Diagrama de Flujo del Proceso",
                "category": "Esquema Operativo",
                "description": "Flujo secuencial de los componentes del tema desde la entrada hasta el resultado.",
                "diagram_code": "flowchart LR\n  P1[\"Entrada / Fundamento\"] --> P2[\"Transformación / Proceso\"] --> P3[\"Resultado Final\"]",
                "steps": [
                    {"step": 1, "title": "Inicio", "detail": "Recepción de conceptos y parámetros básicos."},
                    {"step": 2, "title": "Operación", "detail": "Ejecución del algoritmo o principio de estudio."},
                    {"step": 3, "title": "Cierre", "detail": "Impacto y solución del problema."}
                ]
            },
            {
                "title": "Modelo Mental de Repaso",
                "category": "Modelo Cognitivo",
                "description": "Estructura mental clave para recordar cómo se conectan las partes.",
                "diagram_code": "flowchart TD\n  M1[\"Concepto Central\"] --> M2[\"Caso Típico de Examen\"]\n  M1 --> M3[\"Error Frecuente a Evitar\"]",
                "steps": [
                    {"step": 1, "title": "Regla Central", "detail": "Identificar el principio activo."},
                    {"step": 2, "title": "Precaución", "detail": "Verificar excepciones y condiciones límite."}
                ]
            }
        ],
        "study_links": format_study_links({}, fallback_title),
        "used_model": f"fallback ({str(last_error)})" if last_error else "fallback"
    }
    fallback_data["markdown_doc"] = generate_markdown_file_content(fallback_data)
    return fallback_data
