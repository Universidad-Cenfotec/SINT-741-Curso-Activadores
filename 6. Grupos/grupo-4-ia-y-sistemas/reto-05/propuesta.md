# Propuesta: Del sensor al mapa visual — una experiencia STEAM con IdeaSense y VisualNotes AI

## Grupo

**Grupo 4 — Círculo Maker**
|Integrante|Usuario de GitHub|Rol en el reto|
|-|-|-|
|Josue Parfait|Josanto21|Navegación e investigación del repositorio|
|Cesar Villamil|Villamil0128|Navegación e investigación del repositorio|
|Alice Rojas|arojasve-wq|Investigación con IA y verificación de evidencia|
|Said Mendoza|smendozaa-afk|Pregunta de principiante y revisión de la propuesta|
|Saret Medina|ct24saretmedina|Pregunta de principiante y revisión de la propuesta|
|Samantha Matos|Savamg|Investigación con IA, redacción en Markdown y publicación|

## Repositorio analizado

* **Nombre:** IdeaSense
* **Enlace:** [https://github.com/Universidad-Cenfotec/IdeaSense](https://github.com/Universidad-Cenfotec/IdeaSense)
* **Autoría y desarrollo:** Universidad CENFOTEC, con participación de CRCibernética, estudiantes y colaboradores.
* **Licencia:** No verificada para el repositorio completo. El README menciona que la librería `ideasense.py` tiene licencia MIT, pero no se debe asumir que esa licencia cubre todos los archivos del repositorio.

## Qué es el proyecto

IdeaSense reúne ejemplos, librerías y material educativo para programar la IdeaBoard con la tarjeta de sensores IdeaSense Explorer mediante CircuitPython.

La IdeaSense Explorer incorpora una matriz LED, botones y sensores para medir temperatura, humedad, luz, aceleración y giroscopio. La IdeaBoard ejecuta los programas y permite trabajar con estos componentes y otros elementos conectados.

El repositorio está dirigido a estudiantes, docentes y personas interesadas en aprender programación, electrónica, sensores e inteligencia artificial mediante experiencias prácticas.

Su propósito es facilitar que otras personas puedan experimentar con el hardware y continuar desarrollando ejemplos y proyectos sin empezar desde cero.

## Hallazgos con evidencia

|Hallazgo|Archivo o enlace que lo respalda|
|-|-|
|El proyecto ofrece ejemplos, librerías y material educativo para programar la IdeaBoard y la IdeaSense Explorer con CircuitPython.|[README.md](https://github.com/Universidad-Cenfotec/IdeaSense/blob/main/README.md)|
|La tarjeta incluye matriz LED, botones y sensores de temperatura, humedad, luz, acelerómetro y giroscopio.|[README.md — ¿Qué es IdeaSense?](https://github.com/Universidad-Cenfotec/IdeaSense#qué-es-ideasense)|
|El README explica los primeros pasos para conectar la tarjeta, abrir IdeaCode, copiar un ejemplo y ejecutarlo.|[README.md — Primeros pasos](https://github.com/Universidad-Cenfotec/IdeaSense#primeros-pasos)|
|Los ejemplos están organizados por temas, como matriz y botones, sensores ambientales, movimiento y pines de la IdeaBoard.|[README.md — Catálogo de ejemplos](https://github.com/Universidad-Cenfotec/IdeaSense#catálogo-de-ejemplos)|
|El repositorio incluye una herramienta de laboratorio de sensores en vivo con gráficos y descarga de datos CSV.|[README.md — Plataformas de programación](https://github.com/Universidad-Cenfotec/IdeaSense#plataformas-de-programación)|
|Existen instrucciones para contribuir: dónde colocar cada tipo de aporte, cómo nombrar archivos, qué encabezado debe tener cada programa y cómo documentar ejemplos.|[CONTRIBUTING.md](https://github.com/Universidad-Cenfotec/IdeaSense/blob/main/CONTRIBUTING.md)|
|El README identifica a las personas y organizaciones que participaron en el desarrollo.|[README.md — Créditos](https://github.com/Universidad-Cenfotec/IdeaSense#créditos)|
|No se confirmó la licencia general de todos los archivos del repositorio.|**No verificado.** La referencia a MIT corresponde específicamente a la librería `ideasense.py`.|

## Oportunidad identificada

IdeaSense documenta cómo utilizar sus sensores y ofrece herramientas para observar y descargar datos. VisualNotes AI, por su parte, permite convertir información escrita en materiales de estudio organizados, como notas, resúmenes, mapas conceptuales y cuestionarios.

Identificamos una oportunidad para conectar ambas experiencias mediante una actividad educativa. Los datos obtenidos al experimentar con sensores pueden convertirse en información que los participantes interpreten, expliquen y organicen visualmente.

La oportunidad no consiste en afirmar que los dos proyectos ya están integrados. La propuesta plantea un proceso manual: exportar o registrar los datos de IdeaSense, organizarlos como texto e introducirlos en VisualNotes AI.

## Propuesta

### Del sensor al mapa visual: una experiencia STEAM con IdeaSense y VisualNotes AI

Proponemos diseñar una actividad breve en la que estudiantes o integrantes de una comunidad Maker recopilen datos ambientales utilizando la IdeaSense Explorer y luego transformen esos datos en materiales de aprendizaje con VisualNotes AI.

Por ejemplo, el grupo puede observar cambios en la temperatura, la humedad o la luz ambiental. Después organiza las mediciones en una tabla sencilla y las introduce como texto en VisualNotes AI para generar notas, un resumen, un mapa conceptual y preguntas de repaso.

La información generada por IA se revisará frente a los datos originales. Así, la herramienta servirá como apoyo para organizar y explicar los resultados, no como sustituto de las mediciones ni de la interpretación del grupo.

**Público destinatario:** estudiantes, docentes y participantes de comunidades STEAM o Maker que estén aprendiendo sobre sensores, programación y análisis de información.

**Por qué es útil:** conecta la experimentación física con la organización digital del conocimiento. Además, aprovecha las capacidades de nuestra comunidad en electrónica, programación, inteligencia artificial, diseño de experiencias y documentación.

## Pasos para realizarla

### Recursos necesarios

* Una IdeaBoard y una tarjeta IdeaSense Explorer.
* Computadora con navegador compatible y acceso a IdeaCode.
* Acceso a IdeaSense Ciencias o a ejemplos de sensores del repositorio.
* Acceso a VisualNotes AI.
* Conexión a internet.
* Una plantilla sencilla para registrar las mediciones.

### Desarrollo propuesto

1. **Preparar el equipo.** Conectar la IdeaSense Explorer a la IdeaBoard y conectar la placa a la computadora, siguiendo las instrucciones del README de IdeaSense.
2. **Explorar los sensores.** Abrir IdeaSense Ciencias o ejecutar un ejemplo de sensores ambientales del repositorio. Identificar qué mide cada sensor.
3. **Recopilar datos.** Registrar varias mediciones de temperatura, humedad o luz, indicando el momento de cada observación. Si se utiliza la herramienta de laboratorio, descargar los datos disponibles en CSV.
4. **Organizar la información.** Revisar que las mediciones tengan sus unidades y que no se hayan mezclado los valores de distintos sensores. Para la primera prueba, seleccionar pocos datos y convertirlos en una tabla o descripción de texto.
5. **Crear el material de estudio.** Introducir el texto en VisualNotes AI y generar los recursos disponibles, como notas estructuradas, resumen, mapa conceptual y preguntas de repaso.
6. **Verificar el resultado.** Comparar los valores y las explicaciones generadas con los datos originales. Corregir cualquier interpretación que no esté respaldada por las mediciones.
7. **Compartir el aprendizaje.** Presentar el mapa y el resumen al grupo, explicar qué se observó y documentar qué pasos podrían mejorarse para repetir la actividad.

### Responsables sugeridos

* **Facilitación y hardware:** preparar la tarjeta y explicar los sensores.
* **Registro de datos:** documentar las mediciones y sus unidades.
* **Procesamiento y visualización:** preparar el texto e introducirlo en VisualNotes AI.
* **Verificación y documentación:** comparar los resultados con los datos originales y registrar los aprendizajes.

Los roles pueden combinarse según el tamaño del grupo.

## Cómo comprobar que funciona

La propuesta se considerará funcional en una primera prueba si:

1. El grupo logra obtener y registrar datos de al menos un sensor.
2. Los datos se pueden organizar en un texto comprensible con sus unidades.
3. VisualNotes AI procesa ese texto y genera al menos un recurso de estudio útil.
4. El grupo puede identificar los conceptos principales sin alterar los valores originales.
5. Otra persona puede repetir la actividad siguiendo las instrucciones documentadas.

**Evidencias que conviene guardar:** fotografía del montaje, archivo o tabla de mediciones, captura del material generado, revisión de exactitud y comentarios de una persona que pruebe la guía.

**Estado:** propuesta diseñada; la actividad todavía debe probarse con participantes. No afirmamos que la integración o la experiencia completa ya hayan sido implementadas.

## Cómo podría continuar otra persona

Una persona que no participó en el diseño puede continuar de esta manera:

1. Consultar el README de IdeaSense y seguir sus primeros pasos.
2. Elegir un sensor y realizar una pequeña recopilación de datos.
3. Usar la plantilla de registro y preparar los datos como texto.
4. Introducirlos en VisualNotes AI y revisar los resultados frente a las mediciones originales.
5. Documentar cualquier dificultad o mejora y compartirla con la comunidad.

Como continuación, se podrían preparar plantillas para distintos sensores, probar la actividad con diferentes edades o niveles, comparar varias formas de visualizar los datos y, en una etapa posterior, explorar una importación más directa de archivos CSV. Esta última posibilidad sería una mejora futura, no una función que afirmemos que ya existe.

## Uso de IA

Utilizamos ChatGPT como apoyo para organizar la investigación, resumir la información del repositorio y estructurar esta propuesta.

Le solicitamos que identificara el propósito de IdeaSense, sus componentes, los ejemplos disponibles, las instrucciones para contribuir y las oportunidades de adaptación a nuestra comunidad.

Aprovechamos la ayuda para ordenar los hallazgos y formular una actividad que conectara IdeaSense con VisualNotes AI. Después contrastamos la información con el README y el archivo `CONTRIBUTING.md` del repositorio.

También mantuvimos como **no verificada** la licencia general del repositorio, porque la referencia a MIT encontrada en el README corresponde específicamente a la librería `ideasense.py`. La propuesta de actividad se presenta como una idea por probar, no como un resultado ya obtenido.

## Referencias

* [Repositorio IdeaSense — Universidad CENFOTEC](https://github.com/Universidad-Cenfotec/IdeaSense)
* [README.md](https://github.com/Universidad-Cenfotec/IdeaSense/blob/main/README.md)
* [CONTRIBUTING.md](https://github.com/Universidad-Cenfotec/IdeaSense/blob/main/CONTRIBUTING.md)
* [Herramienta IdeaSense Ciencias](https://universidad-cenfotec.github.io/IdeaSense/ideaciencia/)
* [VisualNotes AI — aplicación](https://visualnotesia.nexusdigitalsolutions.group/)
* [Repositorio principal de VisualNotes AI](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia)

\---

