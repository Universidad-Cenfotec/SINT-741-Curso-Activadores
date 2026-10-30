# Cómo ejecutar y continuar VisualNotes AI

> Recurso del **Grupo 4 — Universidad Cenfotec** para el reto
> «Una experiencia que otra persona pueda continuar» ·
> **Activadores de Comunidades de Práctica · SENACYT**.

## Para qué sirve

Permite que una persona con conocimientos básicos de Python **levante la aplicación VisualNotes AI** en su computadora y convierta una sola fuente (audio de clase, foto de pizarra/apuntes o texto) en un kit de estudio generado con IA:

- transcripción completa y contenido limpio y ordenado;
- apuntes estructurados y palabras clave;
- **mapa conceptual editable** (grafo interactivo + Mermaid);
- resumen ejecutivo y **quiz** de autoevaluación;
- **cronología** de fechas y **tablas comparativas**;
- documento **Markdown** listo para Obsidian/Notion.

Sirve para estudiar con IA, para preparar clase con material propio y como **base para que otra persona agregue funciones** (exportar a PDF, más representaciones visuales, nuevos idiomas, etc.) sin depender de nosotros.

## Enlace Para probar la web sin necesidad de descargar el repositorio: https://visualnotesia.nexusdigitalsolutions.group/

## Qué necesitás

- **Python 3.12** (o 3.11+).
- **Git** (para clonar el repositorio).
- Una **clave de API de Google Gemini** (hay plan gratuito): <https://aistudio.google.com/app/apikey>.
- Conexión a Internet (Gemini y las librerías de CDN: Mermaid, marked, Three.js).
- **Opcional:** Docker y Docker Compose para ejecutarlo en contenedor.
- Conocimientos previos: abrir una terminal, editar un archivo de texto y entender qué es «una variable de entorno».

Repositorio del recurso: <https://github.com/nexusdigitalsolutionspa-maker/visualnoteia-comunidad>

## Cómo hacerlo

### 1. Clonar el repositorio

```bash
git clone https://github.com/nexusdigitalsolutionspa-maker/visualnoteia-comunidad.git
cd visualnoteia-comunidad
```

### 2. Crear el entorno e instalar dependencias

```bash
python -m venv .venv
```

- **Windows:** `.venv\Scripts\activate`
- **Linux/macOS:** `source .venv/bin/activate`

```bash
pip install -r requirements.txt
```

### 3. Configurar la clave de Gemini

Copia el archivo de ejemplo y edita tu clave. **Nunca** la escribas en el código ni la subas al repositorio.

```bash
cp .env.example .env
```

Contenido mínimo de `.env`:

```env
GEMINI_API_KEY=tu_clave_de_gemini
ENABLE_AUTH=false
RATE_LIMIT_PER_MINUTE=20
MAX_UPLOAD_MB=25
```

### 4. Iniciar el servidor

```bash
python -m uvicorn app:app --host 127.0.0.1 --port 8000
```

Abre en el navegador:

- **Landing (inicio):** <http://127.0.0.1:8000>
- **Aplicación:** <http://127.0.0.1:8000/app>

### 5. Generar tu primer apunte

En la vista **Crear**: elige el tipo de entrada (audio, imagen o texto), adjunta o escribe el material y pulsa el botón de procesar. Cuando termine, recorre las vistas del menú (Mapa Conceptual, Guías Visuales, Resumen y Quiz, Transcripción, Documento Markdown, Videos y Enlaces, Mis Apuntes).

### 5.b. Ejecución con Docker (alternativa)

```bash
docker compose up --build
# Abre: http://localhost:8000
```

Manual:

```bash
docker build -t visualnotes-ai .
docker run --rm -p 8000:8000 --env-file .env -v "$(pwd)/data:/app/data" visualnotes-ai
```

> El volumen `./data` (montado en `/app/data`) conserva la base SQLite entre reinicios. **Sin ese volumen, las notas se pierden en cada despliegue.**

### 6. Extender el mapa conceptual

- El mapa se alimenta de los campos `concepts` y `relations` que devuelve Gemini (con `importance` y una `evidence` textual).
- El editor interactivo vive en `static/js/conceptmap.js`; la vista se integra en `static/js/app.js` (`renderConceptMapView`, `saveConceptMap`) y se guarda con `PUT /api/notes/{id}/map`.
- La **cronología** (`events`) y las **tablas** (`tables`) se normalizan en `gemini_service.py` y se persisten dentro de `map_json` (ver `database.py`).

## Cómo comprobar que funcionó

1. **Servidor arriba:** visita <http://127.0.0.1:8000/api/health>. Debe responder:

   ```json
   {"status":"ok"}
   ```

2. **Interfaz viva:** la landing carga en `/` y la app en `/app` muestra el menú lateral con las vistas.
- **Generación con IA:** genera un apunte desde un texto corto (por ejemplo, dos o tres frases sobre un tema) y verifica que aparezcan el resumen, los conceptos y el mapa. Si no aparece el mapa, revisa que `GEMINI_API_KEY` sea válida y que tengas cuota disponible.
- **Mapa interactivo:** en la vista *Mapa Conceptual* deben verse nodos unidos por flechas; al hacer clic en un nodo aparece su detalle y, si hay evidencia, un chip «Fragmento N» que resalta la frase en la vista *Transcripción*.
- **Cronología y tablas:** si el material menciona fechas o compara elementos, aparecen en *Resumen y Quiz*.
- **Persistencia:** genera un apunte, recarga el navegador y confírmalo en *Mis Apuntes* (si recargas y has perdido las notas en un despliegue, el problema es el volumen de la base de datos; ver más abajo).

## Qué aprendimos y qué falta resolver

**Errores frecuentes que ya vivimos (y cómo los resolvimos):**

1. **La clave de API estaba en el código.** La movimos a `.env` (ignorado por Git). Si una clave queda expuesta, **rótala** en Google AI Studio.
2. **La evidencia de los conceptos no coincidía con el texto ordenado.** La IA suele citar el texto original: por eso los «Fragmentos» se construyen desde `transcription` y el emparejado cae a coincidencia por palabras clave.
3. **La base de datos se reinicia en cada despliegue.** En servicios con sistema de archivos efímero (planes gratuitos) hay que **montar un volumen persistente en `/app/data`**; si no, las notas se pierden al actualizar.
4. **El navegador mostraba versiones viejas.** Añadimos *cache-busting* (`?v=<versión>` en los estáticos y `Cache-Control: no-cache` en el HTML).
5. **Detalles de contenedor.** El `Dockerfile` respeta la variable `PORT` de la plataforma y expone un `HEALTHCHECK` en `/api/health`.
6. **Tropiezos con PowerShell (Windows).** No soporta `&&`; usa `;` y `if ($?)`. Para enviar JSON usa `curl.exe --data-binary "@archivo.json"`.

**Pendiente / a verificar por quien continúe:**

- [ ] **Revisión con IA** del documento como persona principiante (instrucción sugerida abajo).
- [ ] **Prueba con otro grupo** y registro de lo comprendido (aún no ejecutada).
- [ ] Exportación a **PDF** de los apuntes y del mapa.
- [ ] Pruebas automatizadas (hoy solo hay verificación de sintaxis en CI).
- [ ] Migrar de SQLite a una base gestionada si crece el uso.

## Cómo podés contribuir

No hace falta saber programar para aportar. Elegí **una** acción pequeña:

- **Probá la guía:** ejecutá la app en tu equipo y contá en una *issue* en qué paso te trabaste o qué instrucción resultó confusa.
- **Probá una función:** generá un apunte desde un audio o una foto y compartí si el mapa, la cronología o las tablas aparecieron correctamente.
- **Creá una variante:** cambiá el prompt de `gemini_service.py` (por ejemplo, para otro idioma o nivel académico) y compartí qué cambiaste y qué resultado obtuviste.
- **Documentá:** si tuviste que hacer un paso extra en tu sistema operativo, describilo para agregarlo a «Qué aprendimos».
- **Corregí o completá:** abrí una *issue* o un *Pull Request* con la mejora.

Contá siempre **qué hiciste, qué esperabas y qué obtuviste**. Una pregunta, una corrección o una prueba también son aportes.

## Autoría y fuentes

- **Autoría:** Grupo 4 — Universidad Cenfotec (curso IA y Sistemas).
- **Origen de la experiencia:** desarrollo y despliegue de VisualNotes AI, incluidas las pruebas de mapa conceptual, cronología y tablas, y el endurecimiento de seguridad (clave de API fuera del código, *rate limiting*, cabeceras CSP).
- **Atribución del prototipo:** el editor del mapa conceptual se adaptó del prototipo del propio **Grupo 4**; se mantiene el crédito en `static/js/conceptmap.js` y `static/js/diagram.js`.
- **Fuentes y licencias de terceros:**
  - Google Gemini (`google-genai`) — <https://ai.google.dev/gemini-api/docs>
  - Mermaid.js (MIT) — <https://mermaid.js.org>
  - marked.js (MIT) — <https://marked.js.org>
  - Three.js (MIT) — <https://threejs.org>
- **Reutilización de este recurso:** se comparte bajo **licencia MIT** (ver [`LICENSE`](https://github.com/nexusdigitalsolutionspa-maker/visualnoteia-comunidad/blob/HEAD/LICENSE)); podés copiarlo, adaptarlo y ampliarlo manteniendo la mención de autoría.

## Revisión durante la clase

_(Completar cuando otro grupo revise el recurso.)_

- ¿Qué pudieron comprender sin nuestra ayuda?
- ¿Qué dudas aparecieron?
- ¿Qué ajustes hicimos a partir de esa revisión?
- Tipo de revisión: [ ] de comprensión (documento) · [ ] prueba práctica.

---

## Invitación a contribuir

**Probá VisualNotes AI con un material tuyo y contame qué pasó.**

1. Ejecutá la app siguiendo «Cómo hacerlo».
2. Generá **un** apunte desde un audio, una foto o un texto.
3. Abrí una **issue** en el repositorio contando: qué usaste, si apareció el mapa conceptual, si la cronología o las tablas se generaron y en qué paso necesitaste ayuda.

¿Preferís otra forma? Comentá en una issue existente, proponé una mejora o abrí un *Pull Request*. **Puede contribuir quien no programa.**

## Publicación en GitHub

Este recurso vive en `recursos/como-ejecutar-y-continuar-visualnotes-ai.md` y está enlazado desde el [`README.md`](https://github.com/nexusdigitalsolutionspa-maker/visualnoteia-comunidad). Para aportes, usá la pestaña **Issues**.

## Evidencia de entrega

- [x] El recurso explica una tarea concreta y para quién sirve.
- [x] Incluye lo necesario para comenzar y comprobar el resultado.
- [x] Distingue lo probado (ejecución local, mapa, cronología, tablas, despliegue) de lo pendiente (prueba con otro grupo, PDF, pruebas automatizadas).
- [ ] Incorpora la revisión de otro grupo.
- [x] Reconoce la autoría y las fuentes.
- [x] Está publicado y enlazado desde el README.
- [x] Propone una contribución pequeña y explica cómo compartirla.

## Reflexión para la puesta en común

1. **¿Qué pudo comprender el otro grupo sin nuestra ayuda?** _(pendiente de la revisión con otro grupo)_
2. **¿Qué tuvimos que explicar oralmente y ahora debemos documentar?** Los tropiezos de configuración (clave de API, volumen persistente, caché del navegador) y la forma en que la IA entrega la evidencia de cada concepto.
3. **¿Qué aporte permitiría mejorar el recurso?** Una prueba real desde otra computadora y la exportación de los apuntes a PDF.

**La señal de comunidad aparece cuando alguien usa y mejora lo que otra persona dejó.**
