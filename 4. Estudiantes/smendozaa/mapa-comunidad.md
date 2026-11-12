# Visual Notes (Estudia tu clase)

# Situación e intención

## Situación
En el entorno de educación superior y técnica, los estudiantes se enfrentan de forma cotidiana a clases magistrales donde los docentes imparten contenido denso a un ritmo acelerado, apoyándose prioritariamente en la exposición verbal y sin suficiente material visual o esquematizado en tiempo real. Esto genera una sobrecarga cognitiva inmediata, dificultando la captura fiel de ideas clave, fórmulas, autores o procedimientos. Esta situación afecta de manera desproporcionada a estudiantes con Trastorno por Déficit de Atención e Hiperactividad (TDAH) y a personas con estilos de aprendizaje visual o kinestésico, quienes se ven excluidas de un seguimiento efectivo y deben invertir horas extenuantes descifrando notas fragmentadas y desordenadas.

## Intención
Diseñar una libreta interactiva e inteligente de código abierto, accesible vía web y alojada en GitHub, que transforme los apuntes crudos de clase (texto, términos sueltos y transcripciones) en representaciones visuales, modulares y jerarquizadas mediante el apoyo de Inteligencia Artificial (con miras al uso de modelos locales ligeros). La intención no es sustituir el acto de estudiar, sino amplificarlo y democratizarlo: permitir que el alumno procese, comprenda y personalice activamente la información en múltiples formatos accesibles (ideas clave, mapas mentales, secuencias paso a paso y tablas comparativas).

# Dominio
Inteligencia Artificial aplicada al aprendizaje, accesibilidad cognitiva (diseño universal para el aprendizaje y apoyo a la neurodiversidad/TDAH), y tecnologías *maker* de código abierto para la gestión del conocimiento.

# Comunidad

* **Participantes actuales:** Integrantes del Grupo 4 (estudiantes de carreras técnicas, ingeniería, sistemas e IA: Josué, César, Alice, Samantha, Zareth).
* **Comunidad beneficiaria directa:** Estudiantes universitarios y de secundaria técnica que enfrentan clases con alta carga teórica o docentes que exponen a gran velocidad.
* **Comunidad extendida:** Personas neurodivergentes (especialmente con TDAH), docentes interesados en proveer notas más digeribles a sus grupos, y comunidades *maker* de clubes estudiantiles (Clubhouses/Rincones) que buscan herramientas educativas autogestionadas.

# Práctica compartida
Creación colaborativa de un flujo de estudio y documentación asistido por IA, en el cual los participantes comparten sus métodos de síntesis, estructuran glosarios interactivos y desarrollan formatos visuales reutilizables. La práctica no se reduce al uso pasivo de una herramienta, sino al aprendizaje colectivo de cómo descomponer un tema complejo en piezas elementales y transferibles, documentando todo en repositorios públicos bajo estándares abiertos (Markdown).

# Trayectorias de participación

* **Observar:** El estudiante accede a la plataforma o repositorio, lee las notas estructuradas por otros compañeros y navega por los mapas conceptuales e ideas clave para repasar antes de una prueba.
* **Preguntar:** Consulta dudas sobre la lógica de los apuntes generados, pide aclaraciones a través de *Issues* en GitHub o sugiere conceptos que quedaron incompletos durante la clase.
* **Contribuir:** Carga sus propios apuntes crudos de diferentes materias, valida la fidelidad técnica de las respuestas generadas por la IA, corrige esquemas de mapas mentales y aporta bocetos de interfaz.
* **Acompañar / Facilitar:** Enseña a otros estudiantes a desplegar y configurar su propia instancia local de *Visual Notes*, guiándolos en el uso de herramientas de código abierto e IA para potenciar su rendimiento académico.

# Representación
El proyecto se representa mediante:
1. **Boceto de Interfaz Modular:** Una interfaz web limpia y sin distracciones (diseñada para evitar la dispersión sensorial en personas con TDAH) con un panel central de entrada de apuntes y un selector dinámico de visualización.
2. **Componentes visuales interactivos:** 
   * Tarjetas modulares de conceptos.
   * Diagramas de árbol y grafos de nodos para mapas conceptuales interactivos.
   * Tablas comparativas matriciales.
3. **Flujograma de procesamiento:** Entrada de notas brutas $\rightarrow$ Limpieza y extracción semántica $\rightarrow$ Segmentación funcional (Ideas / Procesos / Comparaciones / Conexiones) $\rightarrow$ Renderizado visual en pantalla.

# Prototipo y función

## Prototipo propuesto
Una aplicación web interactiva (prototipada inicialmente con código web alojado en GitHub Pages e interfaz funcional) que integra lógica de estructuración semántica. 

## Función principal
Convertir un bloque de notas de clase en cuatro modalidades interactivas e independientes:
1. **Vista de Ideas Clave:** Botones interactivos que categorizan los términos principales (por ejemplo, en programación: *Clase*, *Objeto*, *Constructor*, *Método*). Al presionar cada botón, se despliega la síntesis precisa sin distracciones.
2. **Paso a Paso:** Estructuración de procedimientos algorítmicos o conceptuales en una secuencia lineal ordenada (1. Identificar atributos, 2. Definir constructor, 3. Declarar métodos).
3. **Tablas Comparativas:** Cuadros de doble entrada que contrastan responsabilidades y diferencias entre conceptos análogos (ej. Clase vs. Objeto).
4. **Mapa Mental / Visual:** Diagramación jerárquica de nodos vinculados que permite visualizar las relaciones de causa, composición y herencia entre conceptos.

# Prueba y aprendizaje

## Prueba realizada
El equipo puso a prueba el prototipo con apuntes reales de una clase universitaria de Programación Orientada a Objetos (POO). Se ingresó una explicación verbal desordenada y rápida sobre la estructura de clases y constructores.

## Resultados y aprendizajes
* **Claridad cognitiva inmediata:** La separación entre vista de ideas y mapa conceptual redujo significativamente la ansiedad de enfrentarse a un texto plano y extenso.
* **Validación de la interfaz:** Los botones interactivos permitieron una lectura focalizada, idónea para estudiantes con TDAH.
* **Aprendizaje técnico:** Se identificó que no basta con usar APIs de nube; la verdadera autonomía de la comunidad requiere permitir que la libreta funcione de forma local, offline y sin costos de suscripción, procesando texto y notas de pizarras con modelos ligeros.

# Continuidad

1. **Alojamiento y distribución en GitHub:** Todo el código fuente, la documentación y las plantillas de apuntes se mantienen en un repositorio público, permitiendo bifurcaciones (*forks*) personalizadas por escuela, materia o comunidad.
2. **Integración de IA Local:** Desarrollar guías técnicas para vincular modelos de lenguaje locales (SLMs/LLMs ligeros tipo Llama o Mistral) y modelos de transcripción (Whisper), permitiendo procesar grabaciones de audio de clases y fotografías de apuntes sin conexión a internet ni fuga de datos privados.
3. **Comunidad intercolegial y universitaria:** Articular talleres entre estudiantes para que cada grupo adapte *Visual Notes* a sus propias carreras (ingeniería, medicina, ciencias sociales), manteniendo la filosofía *maker*: diseñar herramientas simples y modulares que empoderen a las personas en lugar de crear dependencia tecnológica.
