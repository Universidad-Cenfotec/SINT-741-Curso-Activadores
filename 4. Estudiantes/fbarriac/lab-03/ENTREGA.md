# Organización del grupo y entrega en GitHub

## Valoración de la propuesta

El semáforo es una elección adecuada porque convierte una experiencia concreta en una tarea pequeña, con un resultado observable. Integra educación, electrónica y programación. La dimensión comunitaria se demuestra cuando alguien externo interpreta el recurso, deja una pregunta o corrección y el grupo incorpora o responde ese aporte.

**Pregunta de trabajo:** ¿cómo dejar documentado un primer semáforo con Arduino para que otra persona pueda simularlo y mejorar una instrucción sin nuestra presencia?

**Destinatarios:** docentes y estudiantes principiantes de Panamá y Costa Rica, con acceso a una computadora e internet. Los nombres de botones se incluyen en español e inglés. Las conexiones también están descritas en texto para no depender de la imagen ni solo de los colores.

**Alcance elegido:** montaje virtual directo, código de texto y observación de tres LED. Las conexiones usan un GND distinto por LED para evitar introducir la protoboard en la primera experiencia.

Los **40 minutos del reto** se destinan a organizar, revisar y publicar la guía. El **taller de 20–30 minutos** es la actividad que otra persona realizará después. Durante el intercambio de ocho minutos pueden evaluar comprensión; si no hay tiempo de simular, registrarlo como pendiente.

## Antes de la sesión

De ser posible, iniciar sesión en Tinkercad y GitHub, abrir el repositorio del grupo y confirmar quién tiene permiso para editarlo. Estos archivos son una propuesta avanzada que el grupo debe leer y adaptar a su experiencia, no evidencia de participación de integrantes que aún no han intervenido.

## Roles

| Rol | Aporte concreto propuesto | Persona propuesta |
| --- | --- | --- |
| Aporta la experiencia | Explicar el funcionamiento del semáforo y revisar conexiones y código. | Olmedo Alexander Alonso Madrigales |
| Mira como principiante | Leer la guía desde la perspectiva de una persona principiante e identificar dudas. | Laura Victoria Vente Urbano y Roselyn Montenegro Othón |
| Redacta | Organizar la documentación, integrar explicaciones y mejoras. | Fernando Ulises Barría |
| Coordina revisión y publicación | Coordinar comentarios y comprobar archivos, README y enlaces. | Guillermo Javier González Montenegro |

**Estado de los roles:** distribución propuesta y aceptada como esquema de organización para el documento; los aportes concretos de cada integrante deberán contrastarse con lo que efectivamente realizó. Los roles pueden combinarse o rotarse. Esta tabla no constituye por sí sola evidencia de participación o de una revisión externa.

**Integrantes del Grupo 5 — Activación Comunitaria:**

1. Guillermo Javier González Montenegro
2. Olmedo Alexander Alonso Madrigales
3. Laura Victoria Vente Urbano
4. Roselyn Montenegro Othón
5. Jeniree Parra Rocco
6. Fernando Ulises Barría
7. Leonel Azael Montezuma Bejerano
8. Vianca Cuevas
9. Esteban Bejerano

## Plan de 40 minutos

| Tiempo | Acción | Evidencia |
| --- | --- | --- |
| 0–5 | Acordar el semáforo, destinatarios y experiencia de partida; asignar roles. | Nombres y alcance confirmados. |
| 5–18 | Leer y adaptar el recurso; comprobar materiales, conexiones y código. Si da tiempo, ejecutar la simulación. | Versión del grupo y estado de pruebas correcto. |
| 18–25 | Contrastar la revisión con IA; aceptar o rechazar sugerencias con criterio. | Registro de decisiones y vacíos resueltos. |
| 25–33 | Compartir solo el documento con otro grupo y recoger sus cinco respuestas antes de explicar. | Registro de comprensión o de ejecución, según lo ocurrido. |
| 33–40 | Incorporar cambios, completar créditos y condiciones de reutilización, publicar y comprobar el acceso. | Recurso enlazado desde README e invitación con URL real. |

## Resultado reportado de la simulación

El Grupo 5 indicó que realizó pruebas del circuito **Semáforo Grupo 5** en Tinkercad y observó que los LED rojo, verde y amarillo encendieron correctamente en secuencia. Este registro recoge el resultado comunicado por el grupo; no incluye mediciones de tiempos ni sustituye una revisión técnica independiente. No se ha confirmado una evaluación del recurso por otro grupo.

**[Consultar proyecto en Tinkercad]**(https://www.tinkercad.com/things/159oklSwmbn-semaforo-grupo-5?sharecode=Hu2hL66F69LfDO6nUz_bjbiNr8pTk8fxQz1K8weei0w)

## Cómo publicar desde el navegador

1. Descomprime el paquete. Abre la carpeta `reto-semaforo-comunitario`, si utilizas el paquete original.
2. Revisa que el nombre del Grupo 5 y sus nueve integrantes estén actualizados en el documento principal y en el recurso. El grupo confirmó CC BY 4.0; comprueba los aportes específicos antes de atribuirlos. Registra lo que realmente ocurrió y deja claramente indicado lo que no está documentado.
3. En GitHub, abre el repositorio que usarán. Si no tienen uno, una persona puede crear uno desde **New repository**, con un nombre como `semaforo-compartido`. Para que cualquiera lo consulte, su visibilidad debe permitir ese acceso; si es privado, deben dar acceso al grupo revisor.
4. **Antes de subir**, comprueba si el repositorio ya contiene un README y una licencia. Si existen, consérvalos: no reemplaces archivos del repositorio sin revisar su compatibilidad. El documento principal `Laboratorio 3.md` ya incorpora este enlace relativo a la guía:

   ```md
   - [Semáforo compartido: Arduino en Tinkercad](recursos/semaforo-tinkercad.md)
   ```

   Si el repositorio es nuevo y no contiene esos archivos, utiliza los del paquete según corresponda.
5. En un repositorio existente, elige **Add file → Upload files**. Si está vacío, usa el enlace para subir archivos existentes. Arrastra el contenido de la carpeta, conservando las subcarpetas. No subas únicamente el ZIP: GitHub debe poder mostrar el Markdown directamente.
6. Escribe un mensaje de cambio, por ejemplo `Agrega guía de semáforo y registro de revisión`. Guarda con **Commit changes** o **Propose changes**, según los permisos y las reglas del repositorio. Si se crea una rama, completa la solicitud de incorporación que corresponda para que el recurso aparezca en la rama principal.
7. Abre el documento principal publicado y pulsa el enlace del taller. Comprueba que el código, la imagen y los enlaces internos se vean correctamente. Verifica el acceso desde una sesión equivalente a la de la persona invitada.
8. Comprueba el enlace relativo de la guía en `INVITACION.md` una vez que la rama esté publicada. Si vas a compartirla fuera de GitHub, copia la URL completa del archivo visible en esa rama o, tras integrar el PR, la de `main`.
9. Comprueba que **Issues** esté habilitado. Si no aparece, una persona administradora puede activarlo en la configuración de funciones del repositorio. Opcionalmente, crea una issue con el título `Ayúdanos a mejorar un paso de la guía del semáforo` y pega la invitación. Publicar la guía ya permite invitar desde el propio recurso; esta issue es complementaria.
10. Comparte el enlace en el canal acordado por el curso. Conserva los enlaces y las respuestas del otro grupo en `revision/registro-clase.md`.

La documentación oficial de [GitHub sobre carga de archivos](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) y [creación de issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) amplía estos pasos.

## Evidencia de entrega

| Criterio de la consigna | Dónde está | Qué debe completar o comprobar el grupo |
| --- | --- | --- |
| Tarea concreta y destinatario | Inicio del recurso y «Para qué sirve». | Confirmar el público elegido. |
| Qué se necesita y cómo comprobar | Materiales, tabla de conexiones, código y tabla de tiempos. | Pruebas de secuencia reportadas; documentar otros resultados si existen. |
| Distingue probado y pendiente | Estado inicial y «Qué aprendimos y qué falta resolver». | Actualizar después de cada revisión o prueba. |
| Revisión de otro grupo | Final del recurso y `revision/registro-clase.md`. | Recoger respuestas y documentar cambios reales; no confirmado aún. |
| Autoría y fuentes | Final del recurso y `LICENCIA.md`. | Grupo identificado y licencia CC BY 4.0 acordada; verificar aportes específicos. |
| Publicado y enlazado desde documento principal | `Laboratorio 3.md`. | Comprobar acceso real a la versión definitiva y sus enlaces internos. |
| Contribución pequeña y cómo compartir | «Cómo podés contribuir» e `INVITACION.md`. | Enlace relativo a la guía incluido; canal de aportes aún por comprobar. |

## Lista final

- [ ] Integrantes y aportes reales individuales verificados.
- [x] Condiciones de reutilización CC BY 4.0 acordadas por el grupo.
- [ ] Revisión con IA discutida por el grupo y decisiones registradas.
- [ ] Respuestas del otro grupo registradas, sin inventarlas.
- [x] Correcciones editoriales efectuadas para esta versión documentadas en la guía; los ajustes derivados de otro grupo siguen sin registro.
- [x] Simulación del semáforo realizada y resultado general documentado según el reporte del grupo.
- [ ] Recurso definitivo publicado en GitHub y acceso comprobado.
- [ ] Enlaces e imagen verificados localmente; comprobar su visualización en GitHub tras subir la rama.
- [ ] Invitación con enlace interno relativo; comprobar canal de aportes y URL compartible después de publicar.
- [ ] Reflexión breve basada en los resultados reales preparada.

**Estado:** el grupo reportó pruebas internas satisfactorias en Tinkercad. La participación de revisores externos, el registro de aportes y la publicación final de esta versión corregida siguen pendientes de comprobación.
