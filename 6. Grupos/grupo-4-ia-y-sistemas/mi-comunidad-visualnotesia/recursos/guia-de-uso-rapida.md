# Guía rápida: de una clase a un kit de estudio

**Origen:** experiencia detectada al preparar el proyecto final. Una persona nueva en el grupo tenía el audio de una clase y no sabía por dónde empezar: no estaba claro qué configurar primero ni qué hacer con el resultado. Esta guía se escribió para que eso se pueda hacer sin preguntarle a nadie del equipo.

**Para quién es:** estudiantes y docentes que quieren generar y compartir un kit de estudio con VisualNotes AI.

**Duración estimada:** 15-20 minutos la primera vez.

---

## 1. Preparar el entorno

Necesitas Python 3.12 o Docker, y una clave de API de Gemini (plan gratuito). La clave se obtiene en <https://aistudio.google.com/app/apikey>.

```bash
git clone https://github.com/nexusdigitalsolutionspa-maker/visualnotesia.git
cd visualnotesia
cp .env.example .env
```

Edita `.env` y deja al menos:

```env
GEMINI_API_KEY=tu_clave_de_gemini
ENABLE_AUTH=false
RATE_LIMIT_PER_MINUTE=20
MAX_UPLOAD_MB=25
```

> Nunca subas `.env` ni pegues la clave en un Issue, PR o documento.

## 2. Levantar la aplicación

**Con Docker (recomendado):**

```bash
docker compose up --build
```

**Sin Docker:**

```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

pip install -r requirements.txt
python -m uvicorn app:app --host 127.0.0.1 --port 8000
```

Abre <http://localhost:8000> para la landing y <http://localhost:8000/app> para la aplicación.

## 3. Generar el kit

1. En `/app`, elige una fuente: sube un audio, una foto de pizarra/apuntes o pega texto.
2. Envía la solicitud y espera el resultado.
3. Revisa la **transcripción**, el **contenido limpio**, los **apuntes**, las **palabras clave**, el **mapa conceptual**, el **resumen**, el **quiz** y los **recursos recomendados**.
4. Corrige lo que la IA haya interpretado mal. El resultado es un borrador, no un apunte definitivo.
5. Descarga el `.md` y expórtalo a PDF si lo necesitas para imprimir.

## 4. Compartirlo con la comunidad

1. Copia la [plantilla de kit de estudio](plantilla-kit-de-estudio.md) a una carpeta nueva con nombre descriptivo del tema.
2. Rellena la plantilla con tu resultado revisado.
3. Indica la fuente, la fecha y quién revisó el contenido.
4. Abre un Pull Request agregando el archivo en `recursos/` o propón el enlace en un Issue.
5. Cuenta en el PR qué ajustaste y qué te costó: eso es lo que otra persona reutiliza.

## Problemas frecuentes

| Síntoma | Causa probable | Acción |
|---|---|---|
| Error 401 o "invalid API key" | Falta `GEMINI_API_KEY` o está mal escrita | Revisa `.env` y reinicia el servidor |
| El archivo no se sube | Supera `MAX_UPLOAD_MB` (25 por defecto) | Comprime el audio o sube el límite en `.env` |
| El mapa conceptual no se ve | Mermaid no cargó | Recarga la página y revisa la consola del navegador |
| La transcripción tiene errores | Audio con ruido o muy largo | Divide el audio en partes y revisa el texto manualmente |

## Sin conexión con el equipo

Puedes usar esta guía, la plantilla y el README sin escribirnos. Si encuentras un error, abre un Issue con el pasaje exacto donde te detuviste.

---

Relacionado: [Plantilla de kit de estudio](plantilla-kit-de-estudio.md) · [README](../README.md) · [CONTRIBUTING](../CONTRIBUTING.md).
