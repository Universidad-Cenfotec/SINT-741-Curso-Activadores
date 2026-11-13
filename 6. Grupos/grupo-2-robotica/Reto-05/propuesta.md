# Propuesta: Kit Maker de Iniciación a la Robótica Cuadrúpeda (pata robótica de tres articulaciones y guía educativa en español)

## Grupo

**Número y nombre del grupo:** Grupo 2 – robotica

| Integrante | Usuario de GitHub | Rol en el reto |
| --- | --- | --- |
| Jose Aaron Aponte Franco | japonte14 | Redacción y publicación; Navegación |
| Lizmarie Loraine Camacho Vega | Lizmarie82 | Navegación; Investigación con IA |
| Milena Giraldo Herrera | mgiraldoh-debug | Investigación con IA |
| Fidel Antonio Pena Espinosa | fpena1703-bit | Navegación |
| Madai Arelis Samudio Candanedo | dachizu07-ux | Pregunta de principiante |
| Hazael Eliezer Moreno Vanegas | haza507 | Navegación |
| Melvin Eugene Buford Bernal | mbuford29 | Navegación |
| Katherine Gálvez López| katherinegalvez047-stack | Navegación |



**Descripción de los roles:**

- **Navegación:** recorre el repositorio y ubica los archivos pertinentes.
- **Investigación con IA:** dialoga con la IA y pide evidencia de cada respuesta.
- **Pregunta de principiante:** revisa si una persona nueva entendería el proyecto y la propuesta.
- **Redacción y publicación:** escribe la propuesta en Markdown y la sube a GitHub.

## Repositorio analizado

| Dato | Información |
| --- | --- |
| Nombre | OpenQuadruped (`open-quadruped`) |
| Enlace | <https://github.com/adham-elarabawy/open-quadruped> |
| Autoría | Adham Elarabawy (creador y autor principal). Maurice Rahme aparece como colaborador que brindó orientación técnica en la arquitectura de software y en un modelo URDF. |
| Licencia | MIT, con copyright de Adham Elarabawy (2020). Incluye una disposición adicional que exige dar crédito explícito y formal al creador original y conservar el aviso de copyright y licencia. |

## Qué es el proyecto

OpenQuadruped es un proyecto de robótica de código abierto para diseñar, construir y programar un robot de cuatro patas fabricado sobre todo con piezas impresas en 3D. Combina tres ideas técnicas:

- **12 grados de libertad (DOF):** tres articulaciones por cada una de las cuatro patas.
- **Curvas de Bézier:** generan las trayectorias que coordinan los pasos del robot.
- **Cinemática inversa:** calcula los ángulos que deben tener las articulaciones para llevar la pata a una posición deseada.

**Para quién está hecho:** el repositorio no declara un público objetivo, así que este dato es **no verificado**. Por las tecnologías que usa, podría interesar a estudiantes y aficionados de robótica, impresión 3D, electrónica y programación.

**Qué problema resuelve:** hacer caminar a un robot de cuatro patas exige coordinar muchos motores, calcular posiciones y generar movimientos. El proyecto ofrece una plataforma abierta (diseño mecánico, placa electrónica, control y cinemática) para experimentar con estos retos. El repositorio **no** presenta un caso de uso comercial o industrial concreto.

## Hallazgos con evidencia

| Hallazgo | Archivo o enlace que lo respalda |
| --- | --- |
| El proyecto describe un robot cuadrúpedo impreso en 3D, con generación de pasos mediante curvas de Bézier de 12 DOF y cinemática inversa de 3 DOF por pata. | [README.md](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md) |
| La licencia es MIT (2020, Adham Elarabawy) y exige crédito explícito al creador original. | [LICENSE](https://github.com/adham-elarabawy/open-quadruped/blob/master/LICENSE) |
| El repositorio incluye una placa electrónica personalizada para controlar 12 servomotores y conectar sensores; la carpeta `hardware/` contiene los archivos Gerber. | [README.md](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md) y carpeta `hardware/` |
| La estructura raíz visible incluye `control_library/`, `depracated/RPi/`, `hardware/`, `llc-teensy/`, `media/`, `ros-workspace/` y `vis-tool/`. El contenido interno de varias de ellas **no pudo inspeccionarse**. | [Vista principal del repositorio](https://github.com/adham-elarabawy/open-quadruped) |
| El control se reparte en dos equipos: una Jetson Nano planifica movimientos y trayectorias, y un Teensy recibe coordenadas de las patas, calcula los ángulos y controla los servomotores. Se comunican mediante ROS. | [Wiki – ROS Node Infrastructure](https://github.com/adham-elarabawy/open-quadruped/wiki) y [página técnica del autor](https://elarabawy.com) |
| Existe una guía de conexiones eléctricas con una advertencia de seguridad sobre el interruptor de alimentación para evitar cortocircuitos en la batería. | [Wiki – Wiring Diagram](https://github.com/adham-elarabawy/open-quadruped/wiki) |
| Existe una guía para conectar una computadora a la Jetson Nano por Wi-Fi y SSH. No es una guía de ensamblaje completa. | [Wiki – Networking Setup](https://github.com/adham-elarabawy/open-quadruped/wiki) |
| El README reconoce trabajo pendiente: mejoras de hardware, pruebas automatizadas, simulación y calibración de servos. Advierte que la herramienta de visualización con Matplotlib (versión 3.0.3 mencionada) está en desarrollo y puede fallar. | [README.md](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md) |
| El README menciona una carpeta `model/` con archivos STEP/STL, la lista de materiales y guías de construcción (indicadas como en desarrollo). Esa carpeta **no apareció** en la raíz consultada. | [README.md](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md) |
| Exiten los archivos STEP/STL, están en la carpeta 3d-printing por secciones, donde cada sección tiene su carpeta step y stl  | [Hardware 3D printing](https://github.com/adham-elarabawy/open-quadruped/tree/master/hardware/3d-printing)  |
| **No verificado:** contenido actual de la lista de materiales (BOM). | Enlace "Bill of Materials – OpenQuadruped" indicado en el README |
| **No verificado:** guía completa de ensamblaje. | No se encontró en el README ni en la Wiki consultada |
| **No verificado:** existencia de `CONTRIBUTING.md` e instrucciones oficiales para contribuir. | Raíz del repositorio; canales disponibles: [Issues](https://github.com/adham-elarabawy/open-quadruped/issues) y [Pull Requests](https://github.com/adham-elarabawy/open-quadruped/pulls) |

## Oportunidad identificada

Tener un proyecto de código abierto no equivale a tener una guía fácil de reproducir. Según lo revisado:

- Las instrucciones de construcción están anunciadas como trabajo en desarrollo y no hay una guía de ensamblaje completa (no verificada).
- La documentación está repartida entre el README, la Wiki y la página del autor, y está en inglés.
- La disponibilidad de los modelos 3D y de la lista de materiales no se pudo confirmar.
- El proyecto completo (12 servos, placa personalizada, Jetson Nano, Teensy y ROS) es complejo y costoso para estudiantes que recién inician.

La oportunidad para nuestra comunidad universitaria es **convertir esa información técnica en una experiencia de aprendizaje accesible, ordenada y reproducible**, empezando por una sola pata en lugar del robot completo.

## Propuesta

Desarrollar un **kit Maker de iniciación a la robótica cuadrúpeda**, inspirado en OpenQuadruped, formado por dos productos:

1. **Prototipo físico:** una pata robótica de tres articulaciones con servomotores, microcontrolador, alimentación y un programa básico de control.
2. **Guía educativa en español:** documenta cómo investigar, diseñar, fabricar, ensamblar, conectar, programar y probar la pata, con lista de materiales, glosario y solución de problemas básicos.

**Para quién:** estudiantes universitarios que inician su formación tecnológica.

**Por qué es útil:** permite aprender fabricación digital, electrónica, programación y cinemática de forma práctica, con un alcance y un costo menores que el robot completo, y deja una guía que otros equipos pueden reutilizar.

**Alcance y límites de esta primera versión.** No incluye:

- el cuadrúpedo completo,
- caminata autónoma,
- equilibrio dinámico,
- integración completa con ROS,
- navegación.

Estas ideas quedan como posibles ampliaciones.

**Aclaración:** el prototipo es una adaptación educativa inspirada en OpenQuadruped, no una reproducción certificada de su pata original. No asumimos que todos sus componentes puedan reutilizarse directamente.

## Pasos para realizarla

| Etapa | Actividades | Resultado esperado |
| --- | --- | --- |
| 1. Investigación | Estudiar el diseño original; verificar si existen modelos STEP/STL y la BOM; identificar la arquitectura de una pata; investigar componentes electrónicos; hacer un inventario preliminar de materiales. | Documentación de referencia y lista preliminar de materiales. | 
| 2. Diseño y adaptación | Elegir el diseño de referencia; definir características del prototipo; adaptar la estructura a los recursos disponibles; preparar archivos de fabricación. | Diseño de pata listo para fabricar. | 
| 3. Fabricación y ensamblaje | Imprimir piezas; ensamblar la estructura; instalar los tres servomotores; conectar el microcontrolador y la alimentación. | Prototipo físico ensamblado. |
| 4. Programación y pruebas | Programar el control básico; configurar movimientos por articulación; probar movimientos individuales y coordinados; corregir errores. | Pata que ejecuta movimientos básicos de forma controlada. |
| 5. Documentación y socialización | Registrar el proceso; elaborar instrucciones ilustradas; documentar código y conexiones; registrar pruebas; compartir con la comunidad Maker. | Guía educativa en español. |  

**Recursos necesarios** (disponibilidad, especificaciones y presupuesto):

- Computadora
- Impresora 3D y filamento
- Tres servomotores compatibles con el diseño
- Microcontrolador
- Fuente de alimentación adecuada
- Cables y conectores
- Herramientas básicas
- Software de programación y de documentación



## Cómo comprobar que funciona

**Prototipo físico**

- Los tres servomotores responden a las instrucciones.
- Cada articulación cambia de posición.
- Se ejecutan movimientos coordinados de las tres articulaciones.
- La estructura soporta los movimientos sin desprenderse ni atascarse.
- Se registran las dificultades y correcciones.

**Guía educativa**

- Estudiantes que no participaron en su elaboración pueden identificar los componentes.
- Pueden seguir las instrucciones sin conocimientos avanzados.
- Otro equipo logra reproducir el prototipo siguiendo los pasos.
- Se detectan y corrigen pasos confusos, enlaces rotos e información faltante.

**Evidencias a recopilar:** fotografías del proceso, videos de los movimientos, código de control, diagramas de conexiones, lista de materiales, registro de pruebas y versión final de la guía.

 Los resultados se documentarán después de realizar las pruebas. 

## Cómo podría continuar otra persona

Estado actual: **propuesta definida, pendiente de planificación y ejecución.** No se ha construido ni probado nada.

Para retomarla, una persona nueva debería:

1. Leer el [README](https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md) y la [Wiki](https://github.com/adham-elarabawy/open-quadruped/wiki) del repositorio, y revisar la licencia (conservar la atribución a Adham Elarabawy).
2. Verificar los puntos marcados como **no verificados**: carpeta `model/` y archivos STEP/STL, BOM, guía de ensamblaje y normas de contribución.
3. Confirmar los recursos disponibles: impresora 3D, materiales y presupuesto.
4. Seleccionar servomotores y microcontrolador, y verificar la compatibilidad con el diseño antes de comprar.
5. Asignar responsables y fijar un cronograma, y seguir las cinco etapas.
6. Registrar fotos, video, código y pruebas desde el inicio.

**Posibles ampliaciones (fuera del alcance inicial):** segunda pata, prototipo de cuatro patas, sensores, experimentos de cinemática inversa, herramienta de simulación e integración progresiva de algoritmos de locomoción.

**Alternativas evaluadas y no elegidas:** una guía de iniciación sola (Propuesta 1, de menor costo) y un simulador educativo de movimientos con Python y Matplotlib (Propuesta 3, más orientado a programación).

## Uso de IA

- **Herramienta:** Claude (Anthropic), usado como mentor Maker durante cuatro fases: comprender, investigar, proponer y documentar.
- **Qué le preguntamos:** Se utilizó un prompt inicial propuesto en las indicaciones del reto basado en las fases propuestas, las fuimos inclueyndo una a una. En resumen, se le pidió explicar el repositorio, revisar su documentación, utilizar nuestras propuestas para el reto, concretar y redactar un documento base para realizar este documento en formato md.
- **Qué aprovechamos:** una explicación inicial del proyecto, un resumen de la estructura y la documentación del repositorio, tres propuestas comparadas, la integración de las propuestas 1 y 2, y el borrador de este documento.
- **Qué verificamos o corregimos:**
  - La IA indicó como **no verificados** los puntos que no pudo comprobar (carpeta `model/`, STEP/STL, BOM, guía de ensamblaje, `CONTRIBUTING.md`) y así se mantuvieron.
  - No se asignaron presupuesto, fechas, integrantes ni resultados por no estar definidos.
  - Se comprobó qué algunos enlaces no abrieron y qué alguna información no estaba del todo clara, que habia pendientes por hacer dentro de la misma documentación. 

## Referencias

- Repositorio: <https://github.com/adham-elarabawy/open-quadruped>
- README: <https://github.com/adham-elarabawy/open-quadruped/blob/master/README.md>
- Licencia: <https://github.com/adham-elarabawy/open-quadruped/blob/master/LICENSE>
- Wiki del proyecto (Wiring Diagram, Networking Setup, ROS Node Infrastructure): <https://github.com/adham-elarabawy/open-quadruped/wiki>
- Issues: <https://github.com/adham-elarabawy/open-quadruped/issues>
- Página técnica del autor: <https://elarabawy.com>

