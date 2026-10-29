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

| Rol | Aporte concreto | Persona |
| --- | --- | --- |
| Aporta la experiencia | Explica qué práctica realizó y qué comprobó realmente. | [COMPLETAR] |
| Mira como principiante | Sigue los pasos escritos y señala lo que no entiende. | [COMPLETAR] |
| Redacta | Integra cambios y mantiene la guía clara. | [COMPLETAR] |
| Coordina revisión y publicación | Recoge comentarios, actualiza el README y verifica los enlaces. | [COMPLETAR] |

Los roles pueden combinarse o rotarse. Registrar el aporte real de todas las personas.

## Plan de 40 minutos

| Tiempo | Acción | Evidencia |
| --- | --- | --- |
| 0–5 | Acordar el semáforo, destinatarios y experiencia de partida; asignar roles. | Nombres y alcance confirmados. |
| 5–18 | Leer y adaptar el recurso; comprobar materiales, conexiones y código. Si da tiempo, ejecutar la simulación. | Versión del grupo y estado de pruebas correcto. |
| 18–25 | Contrastar la revisión con IA; aceptar o rechazar sugerencias con criterio. | Registro de decisiones y vacíos resueltos. |
| 25–33 | Compartir solo el documento con otro grupo y recoger sus cinco respuestas antes de explicar. | Registro de comprensión o de ejecución, según lo ocurrido. |
| 33–40 | Incorporar cambios, completar créditos y condiciones de reutilización, publicar y comprobar el acceso. | Recurso enlazado desde README e invitación con URL real. |

## Cómo publicar desde el navegador

1. Descomprime el paquete. Abre la carpeta `reto-semaforo-comunitario`.
2. Completa el nombre del grupo y los integrantes en `README.md` y en el recurso. Revisa `LICENCIA.md` y confirma la elección de reutilización con el grupo. Completa los registros con lo que haya ocurrido; conserva como pendiente lo que aún no se realizó.
3. En GitHub, abre el repositorio que usarán. Si no tienen uno, una persona puede crear uno desde **New repository**, con un nombre como `semaforo-compartido`. Para que cualquiera lo consulte, su visibilidad debe permitir ese acceso; si es privado, deben dar acceso al grupo revisor.
4. **Antes de subir**, comprueba si el repositorio ya contiene un README y una licencia. Si existen, conserva ambos: excluye `README.md` y `LICENCIA.md` del paquete al cargar archivos, y revisa la compatibilidad de las condiciones del recurso nuevo. Agrega al README existente este enlace, ajustando la ruta solo si decidieron usar otra carpeta:

   ```md
   - [Semáforo compartido: Arduino en Tinkercad](recursos/semaforo-tinkercad.md)
   ```

   Si el repositorio es nuevo y no contiene esos archivos, utiliza los de este paquete.

5. En un repositorio existente, elige **Add file → Upload files**. Si está vacío, usa el enlace para subir archivos existentes. Arrastra **el contenido de la carpeta**, conservando las subcarpetas y las exclusiones del paso anterior. El README debe quedar en la raíz. No subas únicamente el ZIP: GitHub debe poder mostrar el Markdown directamente.

6. Escribe un mensaje de cambio, por ejemplo `Agrega guía de semáforo y registro de revisión`. Guarda con **Commit changes** o **Propose changes**, según los permisos y las reglas del repositorio. Si se crea una rama, completa la solicitud de incorporación que corresponda para que el recurso aparezca en la rama principal.
7. Abre el README publicado y pulsa el enlace del taller. Comprueba que el código, la imagen y los enlaces internos se vean correctamente. Verifica el acceso desde una sesión equivalente a la de la persona invitada.
8. Copia la URL real del archivo del taller y reemplaza el campo del enlace en `INVITACION.md`. Guarda el cambio. La invitación también está integrada en el taller y puede leerse desde allí.
9. Comprueba que **Issues** esté habilitado. Si no aparece, una persona administradora puede activarlo en la configuración de funciones del repositorio. Opcionalmente, crea una issue con el título `Ayúdanos a mejorar un paso de la guía del semáforo` y pega la invitación. Publicar la guía ya permite invitar desde el propio recurso; esta issue es complementaria.
10. Comparte el enlace en el canal acordado por el curso. Conserva los enlaces y las respuestas del otro grupo en `revision/registro-clase.md`.

La documentación oficial de [GitHub sobre carga de archivos](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) y [creación de issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) amplía estos pasos.

## Evidencia de entrega

| Criterio de la consigna | Dónde está | Qué debe completar o comprobar el grupo |
| --- | --- | --- |
| Tarea concreta y destinatario | Inicio del recurso y «Para qué sirve». | Confirmar el público elegido. |
| Qué se necesita y cómo comprobar | Materiales, tabla de conexiones, código y tabla de tiempos. | Ejecutar si hay tiempo; registrar el resultado real. |
| Distingue probado y pendiente | Estado inicial y «Qué aprendimos y qué falta resolver». | Actualizar después de cada revisión o prueba. |
| Revisión de otro grupo | Final del recurso y `revision/registro-clase.md`. | Recoger respuestas y documentar cambios reales. |
| Autoría y fuentes | Final del recurso y `LICENCIA.md`. | Agregar integrantes, aportes y confirmar licencia. |
| Publicado y enlazado desde README | `README.md`. | Subir los archivos y comprobar el acceso real. |
| Contribución pequeña y cómo compartir | «Cómo podés contribuir» e `INVITACION.md`. | Sustituir URL y habilitar el canal de aportes. |

## Lista final

- [ ] Integrantes, aportes y experiencia previa identificados.
- [ ] Fuentes y condiciones de reutilización revisadas.
- [ ] Revisión con IA discutida por el grupo.
- [ ] Respuestas del otro grupo registradas, sin inventarlas.
- [ ] Cambios realizados o razones para no cambiar documentados.
- [ ] Simulación realizada y documentada, o marcada expresamente como pendiente.
- [ ] Recurso publicado en GitHub y accesible para sus destinatarios.
- [ ] README enlaza al recurso y la imagen se ve.
- [ ] Invitación contiene el enlace real y el modo de aportar funciona.
- [ ] Reflexión breve basada en los resultados reales preparada.

El paquete está preparado para publicar. La publicación, las contribuciones externas y las pruebas prácticas no han sido realizadas por esta preparación de archivos.
