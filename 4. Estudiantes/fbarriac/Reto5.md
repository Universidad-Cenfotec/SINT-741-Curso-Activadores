# Propuesta: Guía de bienvenida en español para OpenQuadruped

**Estado:** propuesta de trabajo. La elaboración de la guía y su prueba con participantes están pendientes.

**Fecha de consulta de las fuentes:** 4 de noviembre de 2026.

## Grupo

**Número del grupo:** 5.

**Nombre del grupo:** Activación Comunitaria.

**Comunidad de práctica:** Activación Comunitaria.

| Integrante | Usuario de GitHub | Rol en el reto |
| --- | --- | --- |
| Guillermo Javier González Montenegro | por confirmar | **Coordinación general y seguimiento:** organiza el trabajo, acuerda los próximos pasos y revisa los avances del equipo. |
| Olmedo Alexander Alonso Madrigales | olmedoalonso | **Investigación y verificación de fuentes:** revisa los enlaces y registra evidencias, fechas de consulta y recursos pendientes. |
| Laura Victoria Vente Urbano | lventeu | **Redacción de la guía:** desarrolla la presentación, el recorrido de bienvenida y las explicaciones principales. |
| Roselyn Montenegro Othón | Roseroselynn | **Traducción y claridad del lenguaje:** apoya la comprensión de las fuentes en inglés y adapta las explicaciones al español sencillo. |
| Jeniree Parra Rocco | jenireepr | **Revisión técnica:** contrasta las explicaciones con las fuentes y distingue características descritas, tareas pendientes y aspectos No verificado. |
| Fernando Ulises Barría Cornejo | fbarriac | **Créditos, evidencias y uso de IA:** revisa las referencias, la atribución al autor original y la descripción del apoyo de IA. |
| Asael | por confirmar | **Edición Markdown y gestión en GitHub:** organiza el formato, revisa la vista previa y prepara la versión y los cambios para revisión. |
| Bianca | Vianvavc | **Facilitación de pruebas y retroalimentación:** organiza la actividad de bienvenida, observa la prueba con una persona que no haya redactado la guía y registra mejoras. |
| Esteban Bejerano | Esteban2026-source | **Documentación y continuidad:** organiza los registros de prueba, mantiene la lista de pendientes y prepara la información para que otra persona pueda continuar. |

Esta es una distribución inicial de responsabilidades para los nueve integrantes. El equipo podrá ajustarla al discutir la propuesta y sustituir «Miembro 1» a «Miembro 9» por los nombres reales, junto con sus usuarios de GitHub. Los pasos siguientes utilizan esta misma distribución.

## Repositorio analizado

- **Nombre:** OpenQuadruped; el repositorio se identifica como `open-quadruped`.
- **Enlace:** https://github.com/adham-elarabawy/open-quadruped
- **Rama consultada:** `master`.
- **Autoría original identificada:** Adham Elarabawy, mencionado como creador original y titular del copyright en el archivo de licencia.
- **Licencia:** el archivo se titula **MIT License**. Incluye la conservación de los avisos de copyright y permiso, y añade un párrafo que exige crédito explícito y formal a Adham Elarabawy para las obras cubiertas y sus derivadas. Por ello, nuestra documentación hará referencia al [archivo completo `LICENSE`](https://github.com/adham-elarabawy/open-quadruped/blob/master/LICENSE), incluyendo ese añadido.

La futura guía reconocerá de forma visible la autoría original y distinguirá los aportes documentales de nuestro grupo.

## Qué es el proyecto

OpenQuadruped es un proyecto abierto de un robot de cuatro patas con piezas impresas en 3D y herramientas para controlar su movimiento. Aborda el reto de coordinar las patas y modificar la posición y orientación del cuerpo. Esta descripción procede del [README](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md).

**Público destinatario declarado expresamente: No verificado.** Por sus contenidos, interpretamos que puede interesar a personas y equipos Maker que quieran estudiar robótica, programación, electrónica o fabricación digital. Esta es una interpretación del equipo, no una declaración del autor.

El README enumera tareas pendientes y limitaciones de su visualizador propio. La posibilidad de reproducir actualmente todo el montaje y ejecutar su software siguiendo instrucciones completas queda **No verificado**.

## Hallazgos con evidencia

| Hallazgo | Archivo o enlace que lo respalda |
| --- | --- |
| El README reúne la presentación, las tareas pendientes y enlaces a recursos técnicos. | [`README.md`](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md). |
| Existe una necesidad de mejorar la documentación: la Issue #5 señala esa oportunidad y el autor manifiesta su acuerdo. | [Issue #5: Documentation/Website](https://github.com/adham-elarabawy/open-quadruped/issues/5). |
| La wiki organiza páginas de configuración de red, estructura de control con ROS y cableado. | [Inicio de la wiki](https://github.com/adham-elarabawy/open-quadruped/wiki). |
| La página de configuración de red se presenta como una referencia y aclara que no es una guía exhaustiva. | [Networking Setup](https://github.com/adham-elarabawy/open-quadruped/wiki/Networking-Setup). |
| La documentación de cableado indica que las conexiones dependen de los componentes empleados en cada montaje. | [Wiring Diagram](https://github.com/adham-elarabawy/open-quadruped/wiki/Wiring-Diagram). |
| El listado principal muestra las carpetas `control_library/`, `llc-teensy/`, `ros-workspace/` y `vis-tool/`. Su contenido completo y ejecución quedan No verificado. | [Raíz del repositorio](https://github.com/adham-elarabawy/open-quadruped). |
| La PR #11 propone reparar el enlace a `animate.py`; aparecía abierta al consultarla. No se debe describir como una corrección ya incorporada. | [Pull request #11: Fix broken link](https://github.com/adham-elarabawy/open-quadruped/pull/11). |
| La Issue #16 reporta un problema con el enlace a la lista de materiales. Durante la revisión no fue posible consultar la lista enlazada; su contenido queda No verificado. | [Issue #16: Broken bill of materials link](https://github.com/adham-elarabawy/open-quadruped/issues/16). |
| El archivo de licencia identifica al creador y añade una exigencia de crédito explícito y formal. | [`LICENSE`](https://github.com/adham-elarabawy/open-quadruped/blob/master/LICENSE). |
| El repositorio dispone de espacios para comunicar problemas y presentar cambios para revisión. Una guía específica `CONTRIBUTING.md` queda No verificado. | [Issues](https://github.com/adham-elarabawy/open-quadruped/issues) y [Pull requests](https://github.com/adham-elarabawy/open-quadruped/pulls). |

## Oportunidad identificada

La información de entrada se encuentra repartida entre el README, la wiki y conversaciones de GitHub. La Issue #5 respalda la oportunidad de mejorar su organización y explicación.

Proponemos crear un recorrido breve en español que ayude a comprender el proyecto, encontrar recursos y reconocer las limitaciones documentadas. La existencia de una guía equivalente en español dentro del repositorio queda **No verificado**; antes de elaborar una nueva, revisaremos si hay algún recurso que podamos ampliar o actualizar.

Para Activación Comunitaria, esta tarea puede facilitar una participación diversa: revisar enlaces, explicar conceptos, traducir, formular preguntas, probar instrucciones o documentar dificultades. El beneficio comunitario esperado es que alguien nuevo encuentre una tarea concreta y pueda aportar a partir de lo que sabe.

## Propuesta

Elaborar una **Guía de bienvenida en español para OpenQuadruped**, dirigida a nuevos participantes de nuestra comunidad y a otras personas hispanohablantes interesadas en explorar el proyecto.

La guía tendrá los siguientes contenidos propuestos:

1. Presentación sencilla del proyecto y del reto técnico que aborda.
2. Recorrido inicial por el README, la documentación, las carpetas relacionadas con el código y la licencia.
3. Enlaces comentados: qué puede encontrar una persona en cada recurso.
4. Explicación breve de términos necesarios para orientarse, como repositorio, wiki, Issue y pull request.
5. Formas de participar según intereses: revisión de enlaces, traducción, explicación, documentación o programación.
6. Limitaciones y preguntas pendientes, usando la expresión **No verificado** cuando falte evidencia.
7. Una primera actividad de participación y una forma de registrar lo aprendido.
8. Fuentes, créditos y fecha de la última revisión.

El primer alcance será documental: ayudar a orientarse y participar. La guía identificará por separado cualquier instrucción de instalación o montaje que todavía requiera comprobación técnica.

La utilidad esperada es reducir las dificultades de entrada y convertir la exploración del repositorio en una actividad compartida que otras personas puedan continuar.

## Pasos para realizarla

| Paso | Acción concreta | Recursos necesarios | Responsable propuesto |
| --- | --- | --- | --- |
| 1 | Completar los datos del grupo y acordar la distribución inicial de las funciones de revisión, redacción, edición y prueba. | Esta propuesta y un espacio de coordinación. | Miembro 1, con participación de todo el equipo. |
| 2 | Revisar los recursos existentes, buscar posibles guías en español y registrar cada enlace, su propósito, fecha de consulta y estado de acceso. | Computadora, internet y registro compartido. | Miembro 2, con apoyo del Miembro 4 para las fuentes en inglés. |
| 3 | Redactar el recorrido de bienvenida y las explicaciones en español, citando la fuente de cada afirmación sobre el proyecto. | Editor Markdown y apoyo para comprender las fuentes en inglés. | Miembro 3, con revisión del lenguaje y traducción a cargo del Miembro 4. |
| 4 | Revisar las explicaciones técnicas, los créditos y la distinción entre funciones descritas, tareas pendientes y aspectos No verificado. | README, wiki, licencia y hallazgos registrados. | Miembro 5 para la revisión técnica y Miembro 6 para créditos, evidencias y uso de IA. |
| 5 | Preparar una primera actividad: elegir un recurso, explicar para qué sirve y anotar una duda o mejora con su enlace de evidencia. | Borrador de la guía y registro de observaciones. | Miembro 8, con apoyo del Miembro 1 para coordinar la actividad. |
| 6 | Pedir a una persona que no haya redactado la guía que realice las tareas de validación; registrar dónde necesita ayuda. | Guía, navegador y ficha de prueba. | Miembro 8 coordina y observa; la persona de prueba realiza las tareas. |
| 7 | Ajustar el texto, revisar la vista previa Markdown y preparar la versión para el repositorio del grupo. Si se propone al repositorio original, presentar los cambios para revisión. | Editor Markdown, GitHub y registro de cambios. | Miembro 7, con ajustes de contenido de los Miembros 3 y 4 y revisión final coordinada por el Miembro 1. |

**Dificultad estimada:** baja para organizar y redactar el recorrido, con revisión técnica necesaria para comprobar sus explicaciones.

**Disponibilidad de los recursos:** No verificado. Se confirmará al iniciar la actividad. Las responsabilidades siguen la distribución inicial de los nueve integrantes indicada en la sección Grupo.

## Cómo comprobar que funciona

La prueba propuesta consiste en observar a una persona que no haya participado en la redacción mientras utiliza la guía. Se registrará si completa cada tarea por sí misma, si necesita ayuda y qué parte del texto produce dudas.

| Tarea de validación | Qué observaríamos o mediríamos | Estado actual |
| --- | --- | --- |
| Explicar el proyecto con sus propias palabras. | Reconoce que se trata de un robot de cuatro patas y que aborda la coordinación de sus movimientos. | Pendiente de prueba. |
| Localizar los recursos básicos. | Encuentra el README, la página de cableado y la licencia utilizando los enlaces de la guía. | Pendiente de prueba. |
| Reconocer una limitación. | Identifica un aspecto pendiente o No verificado y lo distingue de una característica descrita por el autor. | Pendiente de prueba. |
| Elegir una forma de participar. | Propone una tarea concreta y distingue entre comunicar una duda mediante una Issue y presentar un cambio mediante una pull request. | Pendiente de prueba. |
| Dejar una observación útil. | Registra una duda o mejora con el enlace del recurso correspondiente. | Pendiente de prueba. |

**Criterio propuesto de aceptación:** la persona completa las tareas sin explicación adicional del equipo. Si requiere ayuda, se registra el punto de dificultad, se modifica la guía y se repite la tarea afectada.

Además, cada enlace presentado como recurso accesible deberá abrir y corresponder con su descripción. Los enlaces que fallen quedarán identificados, con fecha de revisión y estado pendiente.

**Resultados reales de uso y mejora de la participación: No verificado.** Se documentarán después de realizar la prueba.

## Cómo podría continuar otra persona

Quien retome el trabajo necesitará la versión editable de la guía, esta propuesta, el registro de fuentes, las observaciones de las pruebas y la lista de tareas pendientes.

El recorrido de continuidad propuesto será:

1. Leer la presentación de la guía y su fecha de revisión.
2. Elegir una tarea pendiente con un resultado concreto: comprobar un enlace, aclarar un término o revisar una instrucción.
3. Consultar la fuente original y registrar qué pudo verificar.
4. Proponer el cambio en Markdown, manteniendo los créditos y explicando su motivo.
5. Pedir a otra persona que revise el cambio o pruebe la instrucción afectada.
6. Actualizar el registro con lo realizado y dejar señalado el siguiente paso.

Una invitación concreta para incorporarse sería: **«Revisa un enlace de la guía, explica para qué sirve y comparte una duda o mejora respaldada por esa fuente».**

## Uso de IA

**Herramienta utilizada:** ChatGPT, como apoyo para explorar fuentes públicas del repositorio, comparar opciones y redactar esta propuesta.

**Qué le preguntamos:** qué es OpenQuadruped, dónde se encuentran sus recursos, qué evidencias respaldan los hallazgos y qué mejoras serían realistas para Activación Comunitaria. Después elegimos la guía de bienvenida en español y aportamos esta plantilla para documentarla.

**Qué aprovechamos:** la organización inicial de los hallazgos, las explicaciones en lenguaje sencillo, la comparación de propuestas y el diseño del plan de validación.

**Qué se ajustó al verificar:** se precisó que el archivo titulado MIT License contiene un añadido de atribución; se distinguió la PR #11 abierta de una corrección incorporada; y se señaló la falta de acceso a la lista de materiales. El público destinatario se presentó como una interpretación, porque no se encontró una definición explícita en el README consultado.

La comprobación realizada fue documental y tuvo limitaciones de acceso a algunos recursos. La ejecución del código, el montaje físico y las pruebas con nuevos participantes quedan **No verificado**. El equipo revisará el contenido antes de publicarlo y registrará las correcciones que surjan durante la elaboración de la guía.

## Referencias

Fuentes primarias del proyecto consultadas durante las fases de análisis:

1. [Repositorio OpenQuadruped](https://github.com/adham-elarabawy/open-quadruped).
2. [README.md, rama master](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md).
3. [LICENSE, rama master](https://github.com/adham-elarabawy/open-quadruped/blob/master/LICENSE).
4. [Inicio de la wiki](https://github.com/adham-elarabawy/open-quadruped/wiki).
5. [Wiki: Networking Setup](https://github.com/adham-elarabawy/open-quadruped/wiki/Networking-Setup).
6. [Wiki: ROS Node Infrastructure](https://github.com/adham-elarabawy/open-quadruped/wiki/ROS-Node-Infrastructure).
7. [Wiki: Wiring Diagram](https://github.com/adham-elarabawy/open-quadruped/wiki/Wiring-Diagram).
8. [Issue #5: Documentation/Website](https://github.com/adham-elarabawy/open-quadruped/issues/5).
9. [Issue #16: Broken bill of materials link - says that the file was deleted](https://github.com/adham-elarabawy/open-quadruped/issues/16).
10. [Pull request #11: Fix broken link](https://github.com/adham-elarabawy/open-quadruped/pull/11).
11. [Listado de Issues](https://github.com/adham-elarabawy/open-quadruped/issues).
12. [Listado de Pull requests](https://github.com/adham-elarabawy/open-quadruped/pulls).
