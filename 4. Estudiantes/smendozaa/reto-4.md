# Reto Clase 4: Documentación y Reflexión del Show and Tell

* **Curso:** Taller de Activadores Maker / Espacios de Aprendizaje
* **Sesión:** Clase 4 – Rituales de Facilitación: El *Show and Tell*
* **Autor(a):** Said Enrique Mendoza / smendozaa-afk
* **Fecha:** 10/11/2026

---

## 1. Introducción y Contexto de la Actividad

En esta sesión se puso en práctica uno de los rituales fundamentales de facilitación en comunidades maker: el **Show and Tell** (mostrar y contar). A diferencia de una presentación académica formal o la defensa de un producto terminado, el *Show and Tell* busca socializar trabajos en progreso (*work in progress*), prototipos tempranos, fallos técnicos y lecciones aprendidas dentro de un entorno seguro, participativo y ágil (intervenciones de 2 a 3 minutos por persona con apoyo de moderación).

La dinámica contó con la moderación compartida de **Samantha** (primera etapa) y **Olmedo** (segunda etapa), demostrando la importancia de rotar liderazgos y dinamizar la interacción en entornos virtuales.

---

## 2. Registro y Documentación de los Proyectos Presentados

A continuación se resumen las iniciativas compartidas durante la sesión por facilitadores y participantes:

| # | Expositor(a) | Proyecto | Descripción del Proyecto | Desafíos / Problemas Reportados |
|---|---|---|---|---|
| **1** | **César** | *Reto Squad* | Plataforma web para organizar y distribuir tareas de equipo en Cenfotec cargando archivos Markdown. Integra notificaciones automatizadas a grupos de WhatsApp mediante Python y un asistente de contexto impulsado por IA. | Optimización y consumo desmedido de *tokens* en las llamadas a la API de IA (Gemini); costo de las consultas. |
| **2** | **Prof. Tomás** | *IdeaSense / IdeaBoard* | Placa con sensores integrados (acelerómetro, giroscopio, temperatura, luz, humedad y botones marcadores) conectada en tiempo real a una interfaz web vía Web Serial para graficar y exportar datos a CSV con fines educativos. | Lograr la lectura inmediata de datos por puerto serial desde el navegador sin requerir flashear o cargar código previo en la placa cada vez. |
| **3** | **Josué** | Panel de Control para Servidor de Minecraft | Sistema de administración remota para un servidor de Minecraft alojado en un equipo casero ("Miranda"). Incluye copias de seguridad sincronizadas mediante USB ("Parkour5") y una IA local integrada llamada "Luna". | Restricciones de hardware (equipo sin bisagras que no puede moverse de casa), sincronización manual de backups por USB y alto costo de tokens que obligó a correr la IA localmente. |
| **4** | **Gabriela** | Plataforma de *Nano-cursos* (Cenfotec) | Rediseño de una plataforma educativa interactiva orientada a empresas. Reemplaza el consumo pasivo de video por un agente conversacional y un cuaderno inteligente de apuntes (estilo NotebookLM). | Romper con el paradigma visual tradicional de plataformas educativas para lograr una experiencia de usuario única y basada en diálogo activo. |
| **5** | **Pablo** | Prótesis e Insumos Médicos 3D de Bajo Costo | Desarrollo de empuñaduras ergonómicas y soportes axilares para muletas impresos en 3D, basados en filosofías de código abierto y hardware médico accesible. | Certificación de calidad/pruebas biomecánicas, lograr porosidad y adherencia adecuada en la empuñadura, y contactar usuarios reales para pruebas de campo. |
| **6** | **Nicole** | Club de Cuentos Infantiles (*Rulo el Caracol*) | Serie de cuentos ilustrados sobre un caracol de pelo liso en búsqueda del diario de su abuela. Utiliza la metodología de Pixar, diagramas de emociones en Claude y material didáctico físico con mensajes secretos para padres. | Falta de experiencia técnica en impresión gráfica: selección de tintas, gramajes de papel, costos entre imprenta tradicional vs. impresoras domésticas. |
| **7** | **Mario** | Modelado y *Rigging* 3D de Personaje | Modelado 3D de la cabeza de un personaje estilizado (estilo Disney/Pixar) con animación facial y movimiento de ojos articulado. | Dificultad técnica en el *rigging* facial; problemas de conectividad/latencia que cortaron el audio y la pantalla compartida durante la sesión. |
| **8** | **Samantha** | Papelera Inteligente Clasificadora | Depósito automatizado que emplea visión por computadora (entrenada en Google Colab) para clasificar residuos y abrir compuertas específicas mediante servomotores. | Saturación y tiempos de espera en Google Colab; falta de datasets locales con empaques panameños; colapso del enlace de recolección de fotos que saturó su WhatsApp personal. |
| **9** | **Guillermo** | *Dungeons & Dragons* para Educación Tecnológica | Adaptación pedagógica del juego de rol D&D mediante reglas simplificadas por IA para enseñar diseño 3D, programación, electrónica y robótica en 5 sesiones de juego. | Simplificar los densos manuales de reglas para niños sin perder la esencia lúdica; absentismo y coordinación de horarios fijos para partidas grupales. |
| **10** | **Zareth** | *BioMyco* (Biomateriales con Micelio) | Cultivo de micelio fúngico en medios de agar, cultivo líquido y sustratos agrícolas para crear bloques biodegradables y envases sostenibles. | Alta vulnerabilidad a la contaminación por moho debido a fallas en la esterilización casera de los frascos. |
| **11** | **José Aarón** | *OlimpIA* (Olimpiada Panameña de IA) | Iniciativa nacional para convocar y capacitar a estudiantes de premedia y media en IA aplicada, ciencia de datos y pensamiento computacional, con miras a torneos internacionales. | Posicionamiento como fundación emergente, credibilidad institucional, y logística para abarcar las escuelas del interior del país en igualdad de condiciones. |
| **12** | **Olmedo** | Mapeo de Ayuda Humanitaria Post-Terremoto | Propuesta de encuesta georreferenciada mediante ArcGIS / Survey123 para cuantificar y mapear la distribución de donaciones a damnificados por el sismo en Azuero, Coclé y Veraguas. | "Fatiga de encuestas" en la población afectada y apatía ciudadana para registrar información en formularios formales. |

---

## 3. Reflexión Crítica: ¿Qué estuvo bien y qué estuvo mal?

### Aspectos Positivos (Qué funcionó bien)
1. **Diversidad temática sin barreras:** Se presentaron proyectos que abarcaron hardware, software, biología, arte digital, educación y acción comunitaria. Se demostró que un maker space no se limita a la impresión 3D ni a la electrónica pura.
2. **Cultura de vulnerabilidad técnica:** Los expositores hablaron con total naturalidad de sus errores, frascos contaminados, consumo excesivo de tokens y fallas de memoria. Esto desmitifica la idea del "experto que todo lo sabe".
3. **Rol activo de la moderación:** Samantha y Olmedo mantuvieron el ritmo de la sesión, formularon preguntas clave cuando faltaba algún detalle y ayudaron a controlar el tiempo sin interrumpir abruptamente a los participantes.
4. **Espontaneidad:** Al no exigir diapositivas formales, las presentaciones fueron directas, mostrando pantallas de código, bocetos, cámaras web y modelos en vivo.

### Aspectos por Mejorar (Qué estuvo mal o causó dificultades)
1. **Fallas técnicas de conectividad y audio:** Se evidenciaron problemas de latencia, pantallas congeladas (como en la exposición de Mario) y micrófonos configurados incorrectamente que consumieron minutos valiosos de la sesión.
2. **Control estricto del tiempo límite:** Algunos participantes se extendieron más de los 3 minutos sugeridos, lo que obligó a acelerar el cierre para no sobrepasar la duración de la clase.
3. **Falta de un canal unificado para compartir enlaces:** Varios enlaces o repositorios se mencionaron verbalmente o se perdieron en el chat de la videollamada, dificultando su consulta posterior.

---

## 4. Propuestas para Mejorar y Escalar el *Show and Tell*

Para replicar este ritual en nuestros propios laboratorios y comunidades (tanto en formato virtual como presencial), propongo las siguientes acciones:

1. **Plantilla de 1 Minuto para Presentaciones:** Proveer una estructura guía básica de 3 preguntas para ordenar la exposición mental:
   * *¿Qué estoy haciendo?* (1 min)
   * *¿En qué me quedé atascado/a o qué falló?* (1 min)
   * *¿Qué necesito de la comunidad o qué sigue?* (1 min)
2. **Uso de un Tablero Visual Compartido (Kanban o Padlet):** Disponer de un enlace previo donde cada participante coloque su nombre, el título del proyecto y el enlace de su repositorio o fotos antes de iniciar la videollamada.
3. **Formato Híbrido Focalizado:** En sesiones presenciales dentro de los Rincones Maker, incorporar la modalidad de "feria de mesa" o círculo de demostración física para interactuar con los artefactos, complementado con transmisión virtual para miembros de otras regiones.
4. **Clínica de Errores derivada:** Identificar los problemas comunes expresados en el *Show and Tell* (por ejemplo, optimización de prompts/tokens o esterilización de cultivos) y agendar pequeñas sesiones específicas de resolución colaborativa.

---

## 5. Conclusión Personal

El *Show and Tell* demostró ser una herramienta de cohesión comunitaria mucho más potente que una clase magistral. Compartir procesos incompletos reduce el miedo al juicio, activa conexiones interdisciplinarias y convierte los repositorios individuales de GitHub en una memoria viva y colectiva del aprendizaje maker.
