# Tú Decides · Mapa de Comunidad

SINT-741 · Activadores de Comunidades de Práctica · Reto de clase 2 · Grupo 1, Arte y cultura
8 de octubre de 2026

## Nombre del proyecto

**Tú Decides**, un juego corto para el navegador donde una decisión pequeña cambia cómo termina la historia.

## Situación e intención

Partimos de la pregunta del grupo: *¿qué objeto maker podría expresar la cultura local?* Nos interesó una situación cotidiana: la basura en los espacios comunes y lo difícil que es ver cómo una decisión pequeña, como qué hacer con una lata, afecta al lugar donde vivimos.

Primero pensamos en un video en 3D. Para tener algo que se pudiera probar el mismo día, lo bajamos a un juego sencillo: un personaje tiene una lata y el jugador elige entre reciclarla o tirarla al suelo. El video, las fotos del barrio y la música del grupo quedan como el siguiente paso, cuando haya una primera versión revisada.

- **Intención.** Queremos crear una experiencia interactiva para que niños de 6 a 12 años, con un adulto cerca, puedan ver y conversar qué pasa con el entorno según lo que decidimos.
- **Función.** La primera versión debe permitir elegir entre dos opciones, mostrar un final distinto para cada una y volver a jugar para comparar.
- **Prueba.** Sabremos que cumple si quien juega encuentra las opciones sin ayuda, distingue los dos finales y puede explicar con sus palabras qué cambió.

## Dominio

Aprender y crear en grupo sobre la cultura y el cuidado del entorno usando arte digital: ilustración, animación, fotografía, música y programación.

## Comunidad

| Participante | Qué aporta |
|---|---|
| Mario Barsallo | Diseño y animación 3D, escenarios y objetos, interfaz. Documentación y exposición. |
| Melvin Buford | Música, producción y enseñanza. Banda sonora para los dos caminos. |
| Maykol Rodríguez | Fotografía y comunicación con jóvenes. Referencias del entorno y convocatoria. |
| Yonathan González | Pasaporte digital de museos. Entrevista y contacto con espacios culturales. |
| Grace | Diseño de producto, modelado 3D y narrativa. Propuso contar la historia como un juego de decisiones. |
| Mayck | Estudiante de Psicología, con interés en fotografía y contenido para redes. |
| Jimena Londoño | Segunda coordinadora. Seguimiento del rumbo y de los acuerdos. |

En la clase facilitó Melvin, documentó Mario y observó la participación Maykol. Mario presenta el proyecto.

Podrían sumarse jugadores de prueba, adultos acompañantes, docentes, jóvenes del Clubhouse y personas con experiencia en temas ambientales de la zona.

## Práctica compartida

Nos reuniremos para jugar, conversar sobre una decisión del entorno, crear una escena nueva, probarla y anotar una mejora. Usamos recursos que ya tenemos: un navegador, el juego, esta documentación y las fotos y la música que aporte cada quien.

## Trayectorias de participación

| Camino | Primera acción concreta |
|---|---|
| Observar | Abrir el juego, elegir un camino y reiniciar para ver el otro. |
| Preguntar | Decir qué cambió entre los dos finales y por qué creen que pasó. |
| Contribuir | Proponer una decisión del barrio, dibujar un final o aportar una foto propia con permiso de uso. |
| Acompañar | Ayudar a otra persona a jugar o a preparar una escena. |
| Coordinar | Preparar un encuentro y anotar lo que se acordó. |

Para entrar basta con abrir `prototipo/Tu-Decides.html` en el navegador. No necesita internet ni instalar nada.

## Representación

| Decisión | Reciclar | Tirar al suelo |
|---|---|---|
| Un personaje tiene una lata y el jugador elige qué hacer. | El paisaje y el texto cambian, y se conversa sobre dónde dejar una lata. | Aparece basura, cambia el texto y se invita a reconsiderar. |

![Pantalla inicial del juego](prototipo/captura-inicio.png)

## Prototipo y función

Es un archivo HTML que se juega solo, con ilustración en SVG, dos finales y sonido generado en el navegador. Se pulsa **Comenzar la aventura**, se elige **Reciclarla** o **Tirarla al suelo** (también con las teclas **1** y **2**), se mira el final y se pulsa **Volver a jugar**. El sonido se puede apagar con su botón.

Decisiones de esta primera versión:

- Dejamos fuera el temporizador que habíamos imaginado, para tener primero lo mínimo funcionando.
- El personaje se llama Nico por ahora. Es un nombre que se eligió al programarlo y el grupo lo puede cambiar.
- Es un juego 2D. El video y la animación 3D vienen después.

**Cómo repetir la prueba del motor:** con Node.js instalado, desde la carpeta `prototipo` se ejecuta `node --test tests.cjs`.

**Cómo cambiarlo:** copiar el HTML y editar los textos en `const text`, las reglas en `game-engine`, el dibujo en el SVG y el sonido en `tone()`. Después repetir la prueba.

## Prueba y aprendizaje

- **Qué esperábamos.** Que cada elección llevara a un final distinto y que se pudiera reiniciar.
- **Qué hicimos.** Corrimos la prueba automática del motor el 8 de octubre de 2026 y abrimos el juego en Edge y en vista móvil.
- **Qué pasó.** La prueba pasó (1 aprobada, 0 fallidas). En la revisión visual corregimos la posición de dos animaciones del dibujo.
- **Qué cambiamos o cambiaríamos.** Ya corregimos esas dos animaciones. Lo siguiente es probarlo con alguien del público al que va dirigido y mejorar lo que le cueste.

La prueba automática confirma que el motor funciona. Todavía no sabemos si a un niño le resulta claro, así que ese es el siguiente experimento.

**Cómo hacer la prueba con una persona:**

1. Que juegue sin que le digamos qué responder y observar si encuentra los controles.
2. Que pruebe los dos caminos y cuente con sus palabras qué cambió.
3. Preguntarle qué haría con una lata en su entorno y por qué.
4. Anotar una dificultad, acordar un cambio y volver a probar.

| Qué observar | Cómo se anota |
|---|---|
| Encuentra las opciones | Sin ayuda, con ayuda o no lo logra, y cuál fue la dificultad. |
| Distingue los finales | Cómo describe cada uno. |
| Explica su elección | Su respuesta, sin nombres de menores. |
| Aporta o pregunta | Una duda, un dibujo o una decisión nueva. |
| La mejora funciona | La dificultad antes y después del cambio. |

## Continuidad

| Próximo paso | Quién | Qué queda como evidencia |
|---|---|---|
| Presentar el proyecto en clase (8 de octubre) | Mario | Comentarios del grupo y del profesor. |
| Revisar el juego y decidir qué se queda | Grupo 1, con seguimiento de Jimena | Cambios aceptados. |
| Hacer la prueba con jugadores, tentativamente un sábado | El grupo define fecha, lugar y quién acompaña | Observaciones en este mismo documento. |
| Aplicar una mejora y volver a probar | Grupo 1 | Diferencia entre la versión anterior y la nueva. |
| Acordar dónde se publica y cuándo es el siguiente encuentro | Coordinación y grupo | Acceso al repositorio y siguiente acción. |

**Si Mario no está.** Cualquier persona del grupo puede abrir este documento, jugar, repetir la prueba, elegir una tarea y anotar lo acordado. Jimena da seguimiento como segunda coordinadora. Convocar, facilitar, documentar y revisar se turnan entre quienes quieran hacerlo.

**Qué miraremos para saber si la comunidad crece:** si regresan las mismas personas, si se ayudan al jugar y preparar escenas, si alguien reutiliza los recursos y si alguien más propone o dirige una actividad.

**Derechos de uso.** Cada aporte conserva su autoría. No usamos fotos de otras personas ni imágenes de menores sin permiso. La licencia del conjunto la acordamos con el grupo.

## Uso de IA

ChatGPT nos ayudó a ordenar las ideas al inicio. Hermes Agent ayudó a programar el prototipo, generar la ilustración y el sonido y preparar la prueba y estas instrucciones. Las decisiones las tomamos nosotros: enfocar el proyecto como un juego de decisiones, separar el juego mínimo del video 3D, definir los roles de Jimena y de Mario y proponer la prueba para un sábado. La IA no sustituye la prueba con personas.
