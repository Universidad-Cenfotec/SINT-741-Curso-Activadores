# Reto de clase 2 · Mapa de Comunidad

## Nombre del proyecto

**VisualNotes AI**  
Prototipo del Grupo 4 · IA y Sistemas

---

## 1. Situación e intención

### Situación

A muchos estudiantes universitarios les resulta difícil tomar apuntes rápidamente durante una clase y posteriormente organizar esa información de una manera que facilite su comprensión y repaso.

### Intención

Queremos crear una herramienta web que ayude a estudiantes universitarios a procesar información de sus clases y organizarla visualmente, permitiéndoles revisar los conceptos principales de una manera más estructurada y a su propio ritmo.

### Para quién

La propuesta está dirigida principalmente a **estudiantes universitarios**, aunque también podría involucrar a docentes como usuarios o participantes en etapas posteriores.

---

## 2. Dominio

El dominio que reúne al grupo es la **inteligencia artificial aplicada a la educación**, especialmente el procesamiento de información y la visualización interactiva del conocimiento.

---

## 3. Comunidad

### Participantes actuales

El proyecto está siendo desarrollado por **6 integrantes**:

- Cesar Adrian Villamil Alzamora
- Said Enrique Mendoza Acevedo
- Alice Alexandra Rojas Vergara
- Samantha Valentina Matos Gutierrez
- Josue Antonio Parfait Miranda
- Saret Medina

El grupo reúne diferentes experiencias relacionadas con inteligencia artificial, programación, visión artificial, desarrollo web, diseño e integración de sistemas.

### Posibles participantes

En el desarrollo y prueba del proyecto podrían participar:

- Estudiantes universitarios de diferentes carreras.
- Docentes.
- Personas con conocimientos de desarrollo web.
- Personas interesadas en inteligencia artificial y educación.

### Capacidades que podrían aportar

Entre las capacidades disponibles en el grupo se encuentran:

- Programación y desarrollo web.
- Inteligencia artificial.
- Visión artificial.
- Diseño.
- Integración de sistemas.
- Experiencia en proyectos tecnológicos.

---

## 4. Práctica compartida

La práctica compartida consistirá en **experimentar, probar y mejorar el prototipo de manera colaborativa**.

El grupo podrá realizar pruebas con información similar a la que un estudiante utilizaría durante una clase, observar los resultados, compartir retroalimentación y realizar modificaciones.

Los recursos utilizados podrán incluir código, herramientas de inteligencia artificial, interfaces web, materiales de prueba y documentación del proyecto.

La práctica podrá repetirse durante el desarrollo del proyecto mediante ciclos de:

**Construir → Probar → Observar → Compartir → Mejorar**

---

## 5. Trayectorias de participación

Una persona podría incorporarse progresivamente a la comunidad mediante diferentes niveles de participación:

### Observar

Probar el prototipo con información sencilla y observar cómo organiza los conceptos.

### Probar

Ejecutar la [guía rápida](../recursos/guia-de-uso-rapida.md), generar un kit con material propio y compartir qué funcionó y qué no en un Issue.

### Aportar

Aportar código, documentación, ideas de diseño, ejemplos de uso o propuestas de nuevas funcionalidades mediante un Pull Request.

### Facilitar

Dar la bienvenida, revisar aportes y coordinar una sesión del equipo, rotando esa responsabilidad según el [plan de sostenibilidad](plan-de-sostenibilidad.md#responsabilidades-compartidas).

---

## 6. Representación

### Flujo inicial de la propuesta

```text
[Estudiante / Docente]
          ↓
   [Audio / Imagen / Texto]
          ↓
 [Procesamiento mediante IA]
          ↓
 [Transcripción / Extracción]
          ↓
 [Conceptos principales]
          ↓
 [Mapa conceptual visual]
          ↓
     [Interfaz web]
          ↓
   [Registro de apuntes]
          ↓
 [Prueba y retroalimentación]
          ↺
 [Mejora del prototipo]
```

### Mapa de comunidad

```text
                    DOMINIO
          IA aplicada a la educación
                       │
                       ↓
                  COMUNIDAD
       ┌───────────────┼───────────────┐
       │               │               │
   Estudiantes       Equipo          Docentes
                   desarrollador
       │               │               │
       └───────────────┼───────────────┘
                       ↓
                    PRÁCTICA
          Probar → Compartir → Mejorar
                       │
                       ↓
                VisualNotes AI
                       │
                       ↺
                Nuevas pruebas
                 y aprendizajes

Participación:
Observar → Probar → Aportar → Facilitar
```

---

## 7. Prototipo y función

### Prototipo

Se realizó una exploración inicial de una interfaz web para VisualNotes AI. La primera versión permite introducir información en forma de texto y generar una representación visual sencilla de conceptos mediante reglas básicas.

Esta exploración funciona como una primera aproximación al concepto del proyecto y no representa todavía la implementación definitiva que adoptará el grupo.

### Función

La primera versión debe ser capaz de **recibir información relacionada con una clase y generar una representación visual de los conceptos principales**, de manera que pueda servir como apoyo para organizar y revisar los apuntes.

### Acuerdo registrado

El grupo fijó el alcance de la primera versión: recibir audio, imagen o texto y devolver transcripción, apuntes, palabras clave, mapa conceptual, resumen, quiz y Markdown. La tecnología elegida fue Python con FastAPI, Gemini para el análisis y SQLite para la persistencia local, con despliegue en `https://visualnotesia.nexusdigitalsolutions.group/`.

---

## 8. Prueba y aprendizaje

### Qué esperábamos

Esperábamos explorar una forma de transformar información de una clase en una representación visual que ayudara a identificar y organizar conceptos.

### Qué hicimos

Se realizó una primera exploración de una interfaz web y de una generación sencilla de nodos a partir de texto. Esta versión utiliza reglas básicas para identificar palabras y mostrarlas como elementos de un mapa visual.

### Qué aprendimos

La exploración permitió identificar que una representación visual puede servir como punto de partida para la propuesta, pero que una herramienta útil necesitará métodos más adecuados para identificar conceptos y relaciones entre ellos.

### Qué se probó después

El 4 de noviembre el equipo probó la aplicación con apuntes reales y observó que la representación ayudaba a organizar conceptos, pero que la salida visual y la entrega del resultado necesitaban mejoras. De esa prueba salieron tres acuerdos: mejorar la interfaz, agregar más mapas y exportar el resumen en PDF.

La siguiente prueba la hará una persona externa al equipo usando el [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1).

---

## 9. Continuidad

### Próxima acción

Realizar una reunión del equipo para:

1. Acordar la función exacta que se probará en la primera versión.
2. Definir las tecnologías y herramientas que se utilizarán.
3. Distribuir las tareas según las capacidades e intereses de cada integrante.
4. Definir el procedimiento de prueba.
5. Establecer los siguientes cambios al prototipo.

### Responsables

**Grupo 4 · IA y Sistemas** (6 integrantes). La rotación queda detallada en el [plan de sostenibilidad](plan-de-sostenibilidad.md#responsabilidades-compartidas):

- Facilitación y bienvenida: Cesar Adrian Villamil Alzamora; siguiente rotación: Said Enrique Mendoza Acevedo.
- Documentación: Alice Alexandra Rojas Vergara; siguiente rotación: Samantha Valentina Matos Gutierrez.
- Código e IA: Said Enrique Mendoza Acevedo; siguiente rotación: Josue Antonio Parfait Miranda.
- Revisión: Samantha Valentina Matos Gutierrez; siguiente rotación: Cesar Adrian Villamil Alzamora.
- Pruebas y señales de comunidad: Josue Antonio Parfait Miranda; siguiente rotación: Alice Alexandra Rojas Vergara.
- Evidencia visual y recursos: Saret Medina; siguiente rotación: Josue Antonio Parfait Miranda.

### Fecha

**Próxima reunión del equipo: miércoles 25 de noviembre de 2026, 7:00 p.m.**

---

## 10. Estado del proyecto

### Realizado

- Definición inicial de la situación.
- Definición de una intención compartida.
- Identificación del dominio y de la comunidad.
- Definición inicial de las trayectorias de participación.
- Diseño inicial de la propuesta.
- Exploración de un primer prototipo web.
- Primera exploración de una representación visual de conceptos.

### Capturas de pantalla del prototipo realizado

- [Captura de pantalla 1](https://drive.google.com/file/d/1XfGAUZAWNpR6qqGyO_2i7_Aq6qypwKYX/view?usp=sharing)
- [Captura de pantalla 2](https://drive.google.com/file/d/1cJNtPGNwVAJJDsYKXHuqGnvOExQtiFDF/view?usp=sharing)
- [Captura de pantalla 3](https://drive.google.com/file/d/1JdeD6X7zC09hWVqRgZADwpofUNVQekjZ/view?usp=sharing)

### Siguientes pasos del plan de continuidad

- Mejorar la salida visual y agregar más mapas — Said y Josue, reunión del 25 de noviembre de 2026.
- Preparar la exportación del resumen en PDF — Alice, para la sesión del 9 de diciembre de 2026.
- Recibir comentarios de personas externas en el [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1) — Samantha, seguimiento semanal.
- Registrar los resultados en la [retroalimentación](retroalimentacion.md) y en la [bitácora](bitacora.md) — Alice y Cesar, cierre de cada ciclo de dos semanas.
