# Reto · Registro del Show & Tell

Este documento registra lo acontecido durante la sesión sincrónica de ensayo de Show & Tell, recopilando las presentaciones de proyectos en proceso, los intercambios de retroalimentación entre pares, los obstáculos técnicos y metodológicos abordados, y las reflexiones sobre la facilitación de comunidades de aprendizaje práctico.

---

## 1. El encuentro

La sesión se organizó como un espacio horizontal para visibilizar proyectos en desarrollo y fomentar la colaboración sin la presión de una evaluación formal.

* **Fecha:** Sesión sincrónica de clase (jornada posterior al retorno de las actividades en Panamá y el Rincón Explora tras los recientes sismos).
* **Persona anfitriona:** 
  * **Facilitación general docente:** Tomás.
  * **Moderación dividida por bloques:** Samanta (primer bloque de exposiciones) y Olmedo (segundo bloque de exposiciones).
* **Participantes y proyectos presentados:**
  * **César:** *Reto Squad* — Plataforma web para coordinar retos de equipo y distribuir tareas según las habilidades e intereses de cada integrante, con asistencia de inteligencia artificial y recordatorios automatizados hacia WhatsApp.
  * **Tomás:** *Ideas en Ciencias* — Interfaz web para captura y visualización en tiempo real de telemetría proveniente de placas *IdeaBoard* e *IdeaSense* (acelerómetro, giroscopio, luz, temperatura, humedad y pulsadores) con exportación directa a formato CSV para la enseñanza de ciencia de datos.
  * **Josué:** *Panel de administración de Minecraft y agente Luna* — Servidor ejecutado sobre una computadora portátil reciclada (*laptop Miranda*) conectada por USB a un microcontrolador *Firefly*, integrando un agente conversacional local y una interfaz de control para enseñar conceptos de programación y electrónica a niños.
  * **Gabriela:** *Dano Cursos / CINFOTEC* — Entorno web interactivo de nanocursos que articula material audiovisual, infografías, repositorio de notas y un tutor de inteligencia artificial que dialoga con el alumno y genera resúmenes en un cuaderno de apuntes en paralelo.
  * **Pablo:** *Dispositivos de salud y movilidad en impresión 3D* — Piezas funcionales personalizadas para muletas (empuñadura con acabado de piel difusa y soporte axilar ergonómico) y prototipos de adaptación para sillas de ruedas orientadas a contextos de asistencia humanitaria.
  * **Nicole:** *Club de cartas y cuentos infantiles: "Rulo el caracol"* — Propuesta de narrativa infantil estructurada bajo los principios de narración de Pixar, complementada con un mapa de emociones desarrollado con inteligencia artificial y cartas didácticas con mensajes ocultos para padres.
  * **Mario:** *Animación y modelado de personaje en 3D* — Diseño de modelado tridimensional enfocado en expresiones faciales vivas, movimiento ocular y parpadeo continuo con estilo visual semejante al arte de Disney.
  * **Samanta:** *Papelera inteligente* — Prototipo automatizado con mecanismos de clasificación mecánica y visión por computadora para clasificar y separar residuos sólidos urbanos en diferentes contenedores.
  * **Guillermo:** *Dungeons & Dragons tecnológico* — Adaptación de manuales de juegos de rol de mesa mediante inteligencia artificial para integrar desafíos de diseño en 3D, programación de microcontroladores y electrónica dentro de las sesiones del Rincón Clubhouse de Boquete.
  * **Zareth:** *Biomico* — Proceso de investigación biológica y cultivo de micelio sobre sustratos de granos para la elaboración de biomateriales sostenibles, empaques ecológicos y alternativas al poliestireno expandido.
  * **José Aarón:** *Fundación Olympia / Olimpiada Panameña de Inteligencia Artificial* — Convocatoria y plataforma educativa nacional para capacitar y evaluar a estudiantes de premedia y media en inteligencia artificial aplicada, análisis de datos y pensamiento lógico-computacional.
  * **Olmedo (intervención especial):** Levantamiento geoespacial y cuantificación en tiempo real de la ayuda humanitaria entregada tras los terremotos en Azuero, Coclé y Veraguas utilizando formularios de *Survey123* y la plataforma *ArcGIS*.

---

## 2. Lo que ocurrió

### Qué mostraron los participantes
Los participantes presentaron prototipos en distintos niveles de madurez. Se exhibieron placas electrónicas con sensores activos transmitiendo señales en vivo, código fuente y arquitecturas web desplegadas, piezas mecánicas impresas en 3D para movilidad asistida, árboles de decisión narrativa, modelos tridimensionales con animación de personajes, mecanismos físicos automatizados con visión artificial, manuales de juego pedagógicos, cultivos biológicos en frascos de laboratorio y portales institucionales de alcance nacional.

### Qué preguntas surgieron
* **Consumo y eficiencia de recursos en inteligencia artificial:** Surgieron consultas sobre cómo optimizar el diseño de instrucciones (*prompts*) y el almacenamiento en caché para mitigar el gasto excesivo de tokens al invocar modelos de lenguaje comercial.
* **Diseño y usabilidad de interfaces educativas:** Samanta consultó sobre la disposición espacial en pantalla del proyecto de Gabriela, específicamente sobre la interacción simultánea entre el reproductor de video, la ventana de conversación con el agente y el panel de notas automáticas.
* **Proyección operativa:** Los moderadores indagaron de forma recurrente sobre la mayor barrera encontrada durante el prototipado y la acción inmediata planificada para la siguiente iteración.

### Qué dificultades o experiencias compartieron
* **Gestión técnica y computacional:** Se señalaron demoras por saturación de memoria RAM en entornos como Google Colab al cargar modelos pesados, así como retos para leer sensores en tiempo real sin requerir una reprogramación constante del microcontrolador.
* **Procesos físicos y biológicos:** Nicole compartió su falta de conocimiento previo sobre las diferencias entre impresión láser y de inyección de tinta al producir papelería interactiva, mientras que Zareth explicó que uno de sus frascos de cultivo de micelio se contaminó con moho debido a un protocolo de esterilización casera incompleto.
* **Logística, pruebas de campo y validación:** Pablo comentó la dificultad para encontrar voluntarios y bastones estándar con los que calibrar sus accesorios ortopédicos; Samanta experimentó la saturación de su número de WhatsApp al intentar recolectar imágenes masivas para entrenar su modelo de visión; Guillermo relató el desafío de simplificar reglas densas de rol para ajustarlas a tiempos de taller; y José Aarón destacó el reto comunicacional que enfrenta una fundación emergente para lograr cobertura fuera de la capital.

---

## 3. Interacciones entre participantes

Los comentarios entre pares permitieron validar ideas, enriquecer enfoques conceptuales y generar conexiones inmediatas de apoyo mutuo:

| Quién aportó | Pregunta, comentario o ayuda | Qué produjo ese aporte |
| :--- | :--- | :--- |
| **Fernando** | Reflexionó a partir del proyecto de Pablo, afirmando que las iniciativas deben concentrarse en solucionar problemas reales y necesidades sentidas de la comunidad. | Motivó una aclaración del profesor Tomás, quien remarcó que en una comunidad maker todos los proyectos son legítimos (desde el impacto social hasta el goce lúdico personal), preservando un clima de seguridad psicológica sin jerarquías de valor. |
| **Nicole** | Planteó en el chat la posibilidad de difundir la convocatoria de la Olimpiada Panameña de IA a través de la infraestructura de los Rincones Explora. | José Aarón acogió con entusiasmo la propuesta, ratificando su compromiso de llevar oportunidades equitativas tanto al interior del país como a la capital. |
| **Guillermo** | Compartió referencias sobre la versatilidad biológica del micelio, destacando su capacidad documentada para degradar polímeros plásticos y absorber radiación. | Respaldó la relevancia científica y ecológica del proyecto de Zareth, animándola a persistir en sus pruebas de cultivo pese a las contaminaciones iniciales. |
| **Josué** | Retomó públicamente el llamado de auxilio de César respecto a la optimización del uso de tokens en aplicaciones con modelos de lenguaje. | Evidenció el valor práctico del Show & Tell como mecanismo para articular necesidades técnicas específicas con colaboradores que dominan herramientas complementarias. |

---

## 4. Reflexión

### Qué facilitó la participación
* **Cultura de trabajo en proceso:** Se eliminó el requisito de presentar resultados concluidos o diapositivas formales, incentivando a los participantes a mostrar bocetos, piezas defectuosas y dilemas abiertos.
* **Tono horizontal y cercano:** La moderación evitó juicios de valor y escalas de calificación académica, tratando cada intervención como un aporte colectivo.
* **Gestión ágil del tiempo:** El tope estricto de tres minutos por participante aseguró un ritmo dinámico, impidiendo monólogos extensos y garantizando espacio para todo el grupo.

### Qué dificultó la conversación
* **Fricciones de conectividad:** Interrupciones esporádicas por mala señal, ecos de audio, micrófonos silenciados por error y demoras al proyectar pantalla.
* **Inhibición inicial:** Nerviosismo perceptible en algunos expositores al abrir su proceso de trabajo ante sus compañeros.

### Cómo ayudó la persona anfitriona
* **Samanta y Olmedo:** Ejercieron una moderación cálida y atenta, confirmaron la escucha activa mediante síntesis breves tras cada intervención, cuidaron los tiempos con amabilidad y plantearon preguntas orientadas al aprendizaje.
* **Tomás y Gabriela:** Proveyeron el encuadre pedagógico, gestionaron la lista de turnos en el chat y reforzaron activamente la noción de que el error y la duda son elementos esenciales del aprendizaje maker.

### Qué cambiarían para repetir la experiencia
* **Articulación de formatos híbridos:** Combinar sesiones virtuales con talleres presenciales periódicos para sumar la riqueza del contacto físico directo con los prototipos.
* **Fase técnica previa:** Disponer de una breve sala de espera o prueba de sonido y pantalla para resolver fallas antes de iniciar la ronda de presentaciones.

---

## 5. Continuidad

### Colaboraciones y próximas pruebas
* **Asistencia técnica entre pares:** Colaboración directa para optimizar el consumo de tokens y la gestión de memoria en proyectos de inteligencia artificial.
* **Pruebas de campo ortopédicas:** Validación de las empuñaduras y apoyos 3D de Pablo con usuarios reales y modelos estándar de bastón.
* **Pilotaje educativo:** Ejecución de las primeras partidas de rol tecnológico de Guillermo en el Rincón Clubhouse de Boquete.
* **Divulgación científica:** Presentación del proyecto *Biomico* de Zareth en las actividades de la semana de la ciencia.
* **Red de difusión nacional:** Articulación entre la Fundación Olympia y los Rincones Explora para la convocatoria de las olimpiadas de IA.

### Responsables de seguimiento
* **Liderazgo individual:** Cada expositor asume la continuidad de su desarrollo apoyado por los miembros de su mesa de trabajo.
* **Acompañamiento institucional:** El equipo docente coordinará los repositorios compartidos y mantendrá activos los canales de soporte comunitario.

---

## Evidencia

* **Respaldo audiovisual:** Grabación íntegra de la sesión sincronizada en la plataforma de la comunidad para consulta asincrónica.
* **Repositorio central:** Publicación del presente archivo Markdown en el repositorio comunitario de GitHub para su trazabilidad y mejora continua.
