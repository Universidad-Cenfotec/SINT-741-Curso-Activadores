# Reto · Registro del Show & Tell

## 1. El encuentro

- **Fecha:** 22 de octubre de 2026
- **Persona anfitriona:** Tomás De Camino Beck (anfitrión principal), con el apoyo de Samantha Valentina Matos Gutiérrez y Olmedo Alonso en la moderación de los bloques de presentación, y Gabriela Urbina Hernández en la coordinación logística.
- **Participantes y proyectos presentados:**
  1. **César Adrián Villamil Alzamora — *Reto Squad*:** Plataforma web para organizar equipos y asignar tareas a partir de archivos Markdown según los intereses y habilidades de cada integrante, con integración de calendario, asistente con Gemini y notificaciones automáticas por WhatsApp mediante Python.
  2. **Tomás De Camino Beck — *Ideas en Ciencias*:** Página web que lee y grafica en tiempo real los sensores (acelerómetro, giroscopio, temperatura, luz, humedad y botones) de las placas *Sense* e *ID Board* sin necesidad de cargar código previo en el microcontrolador, permitiendo exportar los datos en formato CSV.
  3. **Josué Antonio Parfait Miranda — *Servidor personalizado de Minecraft y bot Luna*:** Panel web de administración remota para un servidor de Minecraft alojado en una computadora reciclada en casa, con respaldos automáticos por USB y un personaje controlado por IA local llamado *Luna*, orientado a futuros entornos educativos.
  4. **Gabriela Urbina Hernández — *Nanocursos (Universidad Cenfotec)*:** Prototipo de plataforma de aprendizaje que contrasta una interfaz tradicional con una experiencia interactiva asistida por un agente conversacional y cuaderno de apuntes dinámico tipo NotebookLM.
  5. **Pablo Daniel Hernández Meléndez — *Prótesis y ayudas técnicas imprimibles en 3D*:** Repositorio abierto de modelos 3D adaptables y de bajo costo para accesibilidad en salud, mostrando prototipos de soporte axilar y empuñadura con textura rugosa para muletas.
  6. **Nicole Lasso Canto — *Cuentos de Rulo y club de cartas*:** Serie de 13 cuentos infantiles interconectados desarrollados con la metodología de Pixar, gestionados mediante un artefacto interactivo en Claude (mapa emocional y aprendizajes) y complementados con cartas físicas para niños.
  7. **Mario Esteban Barsallo Vásquez — *Modelado y animación 3D de personaje*:** Diseño y animación facial (enfocada en el movimiento de los ojos) de un personaje estilo Disney.
  8. **Samantha Valentina Matos Gutiérrez — *Papelera inteligente clasificadora*:** Contenedor automatizado que identifica y separa residuos mediante visión por computadora e IA entrenada en Google Colab con fotografías locales de empaques de Panamá.
  9. **Guillermo Javier González Montenegro — *Aprendizaje tecnológico con Dungeons & Dragons*:** Modelo didáctico gamificado de cinco sesiones basado en juegos de rol para enseñar diseño 3D, programación, electrónica y robótica, apoyado en un manual simplificado mediante IA.
  10. **Saret Jezreel Medina Hernández — *Biomico*:** Cultivo experimental de micelio (en agar, cultivo líquido, grano de maíz y sustrato) para producir bloques de biomateriales y envases sostenibles.
  11. **José Aarón Aponte Franco — *OlimpIA (Olimpiada Panameña de Inteligencia Artificial)*:** Iniciativa nacional impulsada junto a una fundación de docentes y profesionales para formar y competir con estudiantes de premedia y media en IA aplicada, ciencia de datos, pensamiento computacional e IA creativa.
  12. **Olmedo Alonso — *Propuesta de mapeo humanitario con Survey123*:** Idea de encuesta georreferenciada en ArcGIS Survey123 para cuantificar la ayuda comunitaria recibida y detectar necesidades pendientes tras el sismo en la península de Azuero, Coclé y Veraguas.

## 2. Lo que ocurrió

- **¿Qué mostraron los participantes?**
  Los participantes compartieron avances reales y en proceso sin presentaciones formales: demostraciones en vivo de interfaces web y lecturas de sensores físicos (*Ideas en Ciencias* y *Reto Squad*), paneles de administración de servidores, prototipos de plataformas educativas, piezas impresas en 3D con fotografías de validación en campo, mapas narrativos digitales, pruebas en video de prototipos electrónicos, frascos de cultivo biológico y portales de divulgación educativa.
- **¿Qué preguntas surgieron?**
  - **Técnicas y de optimización:** César consultó al grupo sobre estrategias de *prompting* para reducir el consumo de tokens al integrar la API de Gemini en *Reto Squad*.
  - **Sobre diseño e interfaz:** Nicole preguntó a Gabriela cómo se organizaban los paneles laterales (temas relacionados, apuntes e infografías) dentro de la interfaz de *Nanocursos*.
  - **Sobre producción y materiales:** Nicole planteó dudas sobre qué tipo de impresora (láser o tinta) y materiales resultan más rentables para producir las cartas y empaques físicos de sus cuentos.
  - **De seguimiento por parte de los moderadores:** Samantha y Olmedo preguntaron de forma recurrente qué dificultades habían enfrentado en el proceso y cuál sería el siguiente paso en cada proyecto.
- **¿Qué dificultades o experiencias compartieron?**
  - **Problemas técnicos de desarrollo y despliegue:** César señaló el alto consumo de tokens en consultas de IA; Tomás explicó la dificultad inicial para leer sensores directamente desde la web sin flashear código al microcontrolador; Samantha relató cómo el uso incorrecto de memoria en Google Colab ralentizó su modelo y cómo el colapso de un enlace web provocó que le enviaran decenas de fotos de basura directamente a su WhatsApp.
  - **Logística, validación y alcance:** Pablo destacó la responsabilidad de probar la seguridad de piezas ortopédicas y la dificultad para encontrar usuarios que necesiten bastones o muletas; Saret compartió la pérdida de un frasco de micelio por falta de esterilización adecuada; Guillermo mencionó el reto de simplificar las reglas de *Dungeons & Dragons* y mantener la asistencia constante de los estudiantes durante cinco sesiones; y José Aarón señaló el desafío de dar a conocer *OlimpIA* en todo el país al ser una fundación nueva.
  - **Fallas de conectividad en vivo:** Durante la intervención de Mario se produjo un efecto de pantalla espejo y cortes de audio que impidieron apreciar su animación 3D en tiempo real.

## 3. Interacciones entre participantes

| Quién aportó | Pregunta, comentario o ayuda | Qué produjo ese aporte |
| --- | --- | --- |
| **Nicole Lasso Canto** | Preguntó a Gabriela Urbina cómo funcionaban los paneles laterales de la interfaz de *Nanocursos* respecto al video y al chatbot inferior. | Gabriela explicó que el panel izquierdo funciona como repositorio de apuntes, infografías y evaluaciones, mientras el derecho sugiere temas relacionados, aclarando el valor diferencial frente a plataformas tradicionales. |
| **Fernando Ulises Barría Cornejo y Tomás De Camino Beck** | Fernando felicitó a Pablo Hernández destacando que los proyectos deben enfocarse en resolver problemas sociales; Tomás complementó aclarando que en una comunidad *maker* tanto los proyectos sociales como los personales o lúdicos son valiosos. | Se generó un consenso inclusivo en el grupo, evitando que los participantes sientan presión por presentar únicamente desarrollos complejos o de gran impacto social. |
| **Tomás De Camino Beck** | Ante los cortes de audio y el fallo de pantalla compartida de Mario Barsallo, le sugirió enviar un video corto de su personaje 3D por el grupo de WhatsApp. | Mario se comprometió a grabar y compartir el video desde su computadora en casa para que toda la comunidad pudiera apreciar el detalle de la animación facial. |
| **Guillermo Javier González Montenegro** | Comentó tras la exposición de Saret Medina (*Biomico*) sobre el potencial ecológico de los hongos para degradar plásticos y radiación. | Reforzó la relevancia ambiental del proyecto de biomateriales de Saret y conectó su experimento de laboratorio con aplicaciones sostenibles más amplias. |

## 4. Reflexión

- **¿Qué facilitó la participación?**
  La amenidad del anfitrión al invitar a los participantes, promoviendo un ambiente informal, libre de evaluaciones y enfocado en mostrar trabajos en proceso en lugar de presentaciones terminadas.
- **¿Qué dificultó la conversación?**
  Que los participantes a veces hablaban de más y no se centraban en sus proyectos directamente, además de inconvenientes puntuales de audio y pantalla compartida durante la videollamada.
- **¿Cómo ayudó la persona anfitriona?**
  Interviniendo en las presentaciones, en ocasiones de formas más sutiles que otras, para que los participantes se centraran en su tema principal, y gestionando junto a los moderadores el control del tiempo exacto (3 minutos) por participante.
- **¿Qué cambiarían para repetir la experiencia?**
  Nada.

## 5. Continuidad

- **¿Qué colaboraciones o próximas pruebas surgieron?**
  - **Optimización de IA:** César abrió la invitación para colaborar con compañeros que tengan experiencia en ingeniería de *prompts* y reducción de consumo de tokens en modelos de lenguaje.
  - **Divulgación nacional de *OlimpIA*:** Olmedo propuso utilizar la red de Rincones como canal de difusión para llevar las Olimpiadas Panameñas de IA hacia las provincias del interior del país.
  - **Piloto educativo gamificado:** Guillermo planteó realizar una prueba piloto de sus cinco sesiones de aprendizaje basado en *Dungeons & Dragons* en el Rincón Clubhouse de Boquete.
  - **Muestra diferida en WhatsApp:** Mario quedó pendiente de compartir un video corto de su personaje animado en 3D en el grupo de WhatsApp.
  - **Levantamiento de datos comunitarios:** Olmedo planteó colaborar con un colega especialista en ArcGIS Survey123 para diseñar y aplicar la encuesta de ayuda humanitaria en Azuero, Coclé y Veraguas.
- **¿Quiénes les darán seguimiento?**
  Cada proponente dará seguimiento a sus respectivas iniciativas junto a sus equipos de trabajo y contactos de los Rincones (César Villamil en *Reto Squad*, José Aarón Aponte junto a Olmedo Alonso en la divulgación de *OlimpIA*, Guillermo González en la prueba de Boquete y Mario Barsallo en el envío de su demostración por WhatsApp).

