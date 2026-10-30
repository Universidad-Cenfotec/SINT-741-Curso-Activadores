# Reto de clase 5 · De exploradores a colaboradores Maker

**Curso Activadores de Comunidades de Práctica · SINT-741**  
**Fecha** 29 de octubre de 2026  
**Trabajo en grupo** 45 minutos

## El reto

Elijan un repositorio Maker o de robótica creado por una persona o una comunidad. Exploren cómo está construido y documentado, usen la IA para extraer la información que necesitan y desarrollen **una propuesta** basada en ese repositorio.

La propuesta puede ser de dos tipos:

- **Mejorar el repositorio:** una contribución pequeña y realista, como aclarar la documentación, traducir una sección, agregar un ejemplo o proponer un reto nuevo.
- **Adaptarlo a su comunidad:** una actividad, un recurso o una primera versión de un proyecto para su comunidad, inspirada en lo que encontraron.

La pregunta que guía el trabajo es **¿qué podemos construir o mejorar a partir de lo que otra comunidad ya dejó documentado?**

No necesitan construir físicamente un robot durante la actividad.

## Para qué hacemos este ejercicio

Cuando una comunidad publica sus diseños, código y aprendizajes en GitHub, otras personas pueden continuar ese trabajo sin empezar de cero. Un buen repositorio no solo guarda archivos. También explica para qué sirve el proyecto, cómo se reproduce, quiénes contribuyeron y cómo sumarse.

En este reto practicarán tres capacidades del curso:

1. **Leer un repositorio como memoria colectiva:** encontrar lo pertinente sin leerlo todo primero.
2. **Usar la IA con evidencia:** pedirle que cite las rutas de los archivos y verificar lo que responde.
3. **Documentar en Markdown y publicar en GitHub:** dejar la propuesta disponible para que otras personas la revisen y la continúen.

## Repositorios para elegir

### Repositorios de CENFOTEC

| Repositorio | Qué es | Qué conviene observar |
| --- | --- | --- |
| [Sumobot](https://github.com/Universidad-Cenfotec/Sumobot) | Robot simple para competencias colegiales de sumo, desarrollado en Costa Rica con la placa abierta IdeaBoard. | Armado, conexiones, código de inicio, calibración de sensores, reglas del torneo y la sección de retos abiertos. |
| [IdeaSense](https://github.com/Universidad-Cenfotec/IdeaSense) | Ejemplos, librerías y material educativo para programar la IdeaBoard con la tarjeta de sensores IdeaSense Explorer en CircuitPython. | Encabezados de cada ejemplo, un README por carpeta, créditos de quienes contribuyeron y la guía CONTRIBUTING.md. |

### Repositorios creados por personas y comunidades Maker

| # | Repositorio | Qué es | Notas para explorar |
| --- | --- | --- | --- |
| 1 | [Sesame Robot](https://github.com/dorianborian/sesame-robot) · Dorian Todd · [Historia del creador](https://www.doriantodd.com/sesame/) | Robot cuadrúpedo pequeño impreso en 3D, basado en ESP32. | **Recomendado.** Guías de construcción y cableado, firmware, lista de materiales y sección de contribución. Licencia Apache-2.0. |
| 2 | [TNY-360](https://github.com/TNY-Robotics/TNY-360) · TNY Robotics | Perro robótico con ESP32 y componentes personalizados. | CAD, PCB, firmware y lista de materiales. Licencia CC BY-NC-SA 4.0. |
| 3 | [Just1](https://github.com/NRdrgz/Just1) · NRdrgz | Robot autónomo con ruedas mecanum, cámara y LiDAR. | **Recomendado.** Hardware y software separados, con guías de instalación y ROS 2. Tiene pocos commits, así que es una buena oportunidad para proponer mejoras. Licencia MIT. |
| 4 | [Microban](https://github.com/Rhoban/microban) · Marc Duclusaud y Rhoban | Robot humanoide educativo impreso en 3D. | Documentación de materiales, impresión, armado y uso. Licencia doble: CC BY-NC-SA 4.0 para hardware y GPL v3 para software. |
| 5 | [AR2 Robot Arm](https://github.com/chris-annin/ar2) · Chris Annin | Brazo robótico de seis ejes construido por un maker. | **Recomendado.** Manuales en PDF, modelo cinemático, archivos CAD y código para Arduino. La página principal no indica una licencia; revisen ese punto. |
| 6 | [ElectronBot](https://github.com/peng-zhihui/ElectronBot) · Peng Zhihui | Robot de escritorio con brazos articulados y pantalla. | Hardware, firmware, software y CAD ordenados por carpetas numeradas. El README principal está en chino y hay una versión en inglés (enREADME.md). Licencia GPL-3.0. |
| 7 | [AKIRA](https://github.com/Maiguek/AKIRA) · Maiguek | Robot humanoide basado en el proyecto InMoov, que integra robótica e inteligencia artificial. | **Recomendado.** Surge de una tesis de licenciatura. Es un proyecto pequeño y con mucho espacio para mejorar su documentación. La página principal no indica una licencia. |
| 8 | [OpenQuadruped](https://github.com/adham-elarabawy/open-quadruped) · Adham Elarabawy | Robot cuadrúpedo con diseños mecánicos y electrónica abierta. | **Recomendado.** Control, hardware, espacio de trabajo ROS, wiki y una lista de tareas pendientes en el README. Licencia MIT. |
| 9 | [MojeeBOT](https://github.com/Mojee3D/MojeeBOT) · Mojee3D | Robot móvil educativo con componentes imprimibles. | Manual de armado en PDF y código de inicio. Es un proyecto reciente y pequeño. Licencia MIT para el código y CC BY-NC 4.0 para el hardware. |
| 10 | [Stanford Doggo](https://github.com/Nate711/StanfordDoggoProject) · equipo estudiantil | Robot cuadrúpedo desarrollado y documentado por estudiantes. | El README cubre construcción, software, electrónica y diseño mecánico. Tiene un aviso de fin de soporte porque el equipo trabaja en un sucesor (Pupper v3). Licencia MIT. |

Para la práctica de clase, recomendamos priorizar **Sumobot, IdeaSense y los repositorios 1, 3, 5, 7 y 8**, por su utilidad para explorar diseños, documentación, código y oportunidades de mejora.

> Los datos de licencia y estado se consultaron en GitHub el 29 de octubre de 2026. Verifíquenlos en el repositorio antes de usarlos en su propuesta.

## Cómo organizarse

Distribuyan el trabajo para que todas las personas aporten. Los roles pueden combinarse o rotarse.

| Rol | Responsabilidad |
| --- | --- |
| Navegación | Recorre el repositorio y ubica los archivos pertinentes. |
| Investigación con IA | Dialoga con la IA y pide evidencia de cada respuesta. |
| Pregunta de principiante | Revisa si una persona nueva entendería el proyecto y la propuesta. |
| Redacción y publicación | Escribe la propuesta en Markdown y la sube a GitHub. |

## Los 45 minutos

| Tiempo | Momento | Qué hacer | Resultado esperado |
| --- | --- | --- | --- |
| 0–7 min | Comprender | Elegir un repositorio y entender qué es, para quién está hecho y qué problema resuelve. | Repositorio elegido y una descripción breve en sus propias palabras. |
| 7–19 min | Investigar con IA | Analizar el README, la documentación, el código, la licencia, los créditos y las formas de contribuir. | Hallazgos con la ruta o el enlace que los respalda. |
| 19–32 min | Proponer | Identificar una oportunidad y diseñar una mejora o una adaptación para su comunidad. | Propuesta concreta, con pasos y una forma de comprobar que funciona. |
| 32–40 min | Documentar | Redactar la propuesta en Markdown con la plantilla de este reto. | Archivo `reto-05/propuesta.md` en la carpeta del grupo. |
| 40–45 min | Compartir | Presentar en un minuto el repositorio, el hallazgo principal y la propuesta. | Comentarios de otros grupos. |

## Prompt inicial

Copien este prompt en Claude, ChatGPT o Gemini. Reemplacen lo que está entre corchetes.

```text
Actúa como mentor de un equipo que participa en una comunidad de práctica Maker.
Vamos a analizar el repositorio [PEGAR ENLACE] y trabajaremos por fases.
Espera nuestra confirmación antes de pasar a la siguiente fase.

Fase 1 · Comprender: explica en lenguaje sencillo qué es el proyecto, para quién
está hecho y qué problema resuelve.

Fase 2 · Investigar: identifica el README, la documentación de construcción, el
código, la licencia, los créditos y la forma de contribuir. Para cada hallazgo,
cita la ruta del archivo o el enlace que lo respalda.

Fase 3 · Proponer: nuestra comunidad es [DESCRIBIR COMUNIDAD]. Sugiere 3 propuestas
realistas: mejoras al repositorio o adaptaciones para nuestra comunidad. Indica
para cada una la dificultad, los recursos necesarios y cómo comprobaríamos que
funciona.

Fase 4 · Documentar: ayúdanos a redactar la propuesta elegida en Markdown con la
plantilla que te compartiremos.

Reglas: no inventes archivos, cifras, funciones ni resultados. Si no encuentras
evidencia en el repositorio, escribe "No verificado". Si no puedes abrir el enlace,
dínoslo y pegaremos el texto del README.
```

Revisen siempre en GitHub lo que responde la IA. La IA ayuda a encontrar y ordenar información, pero las decisiones y la verificación son del grupo.

## La IA como apoyo para Markdown y Git

No necesitan memorizar comandos. Pueden pedir ayuda a la IA, por ejemplo:

- «¿Cómo hago una tabla en Markdown con tres columnas?»
- «¿Cómo agrego un enlace y una imagen en un archivo README.md?»
- «Explícame paso a paso cómo subir un archivo a mi fork en GitHub y abrir un Pull Request.»
- «Revisa este Markdown y dime si hay errores de formato.»

Para la entrega, sigan la [guía de entregas grupales en 6. Grupos](https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores/tree/main/6.%20Grupos).

## Entregable

La entrega es **grupal**: una sola propuesta por grupo, en la carpeta de su grupo dentro de [`6. Grupos/`](https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores/tree/main/6.%20Grupos).

- **Ubicación y nombre:** `6. Grupos/[carpeta-de-su-grupo]/reto-05/propuesta.md`. Si agregan imágenes, van en `reto-05/images/`.
- **Responsable de entrega:** una sola persona sube la entrega. Recuerden rotar esa responsabilidad respecto de los retos anteriores.
- **Antes de subir:** en su fork, hagan clic en **Sync fork** y luego en **Update branch**.
- **Pull Request:** usen el mensaje `Entrega reto 5 - Grupo N`, elijan **Create a new branch for this commit and start a pull request** y verifiquen que la flecha vaya desde su fork hacia la rama `main` del repositorio del curso. Un Pull Request por entrega.
- **Integrantes y roles:** al inicio del documento escriban quiénes participaron y qué rol tuvo cada persona. Solo se considera a quienes aparezcan en el documento.
- **Validación:** compartan el enlace del Pull Request con el grupo. Cada integrante puede dejar un comentario con su aporte o una corrección.

Si su grupo ya tiene el repositorio `mi-comunidad`, pueden publicar también una copia en la carpeta `recursos/` y enlazarla desde el README.

## Plantilla de la propuesta

```markdown
# Propuesta: [nombre de la propuesta]

## Grupo
Número y nombre del grupo.

| Integrante | Usuario de GitHub | Rol en el reto |
| --- | --- | --- |
|  |  |  |

## Repositorio analizado
Nombre, enlace, autoría y licencia.

## Qué es el proyecto
Para qué sirve, para quién está hecho y qué problema resuelve.

## Hallazgos con evidencia
| Hallazgo | Archivo o enlace que lo respalda |
| --- | --- |
|  |  |

## Oportunidad identificada
Qué falta, qué se podría mejorar o qué podría aprovechar nuestra comunidad.

## Propuesta
Qué proponemos, para quién y por qué es útil.

## Pasos para realizarla
Pasos concretos, recursos necesarios y responsables.

## Cómo comprobar que funciona
Qué observaríamos o mediríamos.

## Cómo podría continuar otra persona
Qué necesitaría saber o hacer alguien nuevo para retomar la propuesta.

## Uso de IA
Qué herramienta usamos, qué le preguntamos, qué aprovechamos y qué corregimos al verificar.

## Referencias
Enlaces a los archivos, Issues o páginas consultadas.
```

## Qué se evaluará

La evaluación es **grupal**: aplica a todas las personas que figuran como integrantes. Los criterios se relacionan con la [rúbrica del proyecto integrador](https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores/blob/main/2.%20Documentos/rubrica_proyecto_cenfotec.md), en particular con los criterios de transparencia y documentación, y de experimentación y aprovechamiento de recursos.

| Criterio | Insatisfactorio | Aceptable | Satisfactorio |
| --- | --- | --- | --- |
| **Comprensión del repositorio** | Describe el proyecto de forma vaga o copiada. | Explica qué es el proyecto, pero no para quién ni qué problema resuelve. | Explica con sus palabras qué es, para quién está hecho y qué problema resuelve. |
| **Hallazgos con evidencia** | Hay afirmaciones sin respaldo o datos inventados. | Algunos hallazgos citan archivos o enlaces. | Cada hallazgo cita la ruta o el enlace, y lo no verificado se indica como tal. |
| **Calidad de la propuesta** | La propuesta es genérica o no se relaciona con el repositorio. | La propuesta es pertinente, pero le faltan pasos o una forma de comprobarla. | La propuesta es concreta, realista y verificable, y otra persona podría continuarla. |
| **Documentación en Markdown** | El archivo está incompleto o es difícil de leer. | Sigue la plantilla, pero tiene secciones débiles o errores de formato. | Está completo, ordenado y usa bien títulos, tablas y enlaces. |
| **Uso transparente de la IA** | No menciona el uso de IA. | Menciona la herramienta, pero no qué aprovechó ni qué corrigió. | Explica qué consultó, qué aprovechó y qué verificó o corrigió. |
| **Entrega en GitHub** | No se entregó por GitHub. | Se entregó con errores de ubicación o de nombre, o faltan integrantes en el archivo. | El grupo entregó un único Pull Request en `6. Grupos/[su grupo]/reto-05/`, con el nombre indicado y todos los integrantes y roles identificados. |

Esta es una **primera versión**. La retroalimentación que reciban se podrá incorporar en el proyecto `mi-comunidad`.
