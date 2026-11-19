
# Reto 3 · Mi primera página web en 20 minutos

**Estudiante:** Paula Castillo  
**Curso:** Activadores de Comunidades de Práctica · SENACYT / CENFOTEC  
**Área:** Educación STEAM y programación  
**Público:** Niñas, jóvenes, docentes y personas principiantes  
**Duración estimada:** 20–30 minutos  
**Modalidad:** Trabajo individual  
**Estado:** Guía documentada; pruebas con participantes pendientes.

## 1. Para qué sirve

Esta actividad enseña a crear una primera página web utilizando HTML, CSS y un poco de JavaScript, sin necesidad de tener conocimientos previos de programación.

La idea nace de mi experiencia como fundadora de Teen4STEAM, una comunidad que busca motivar a más niñas y jóvenes a aprender sobre ciencia, tecnología, ingeniería, arte y matemáticas.

A través de los talleres que he organizado, he aprendido que una de las mejores maneras de acercar a las personas a la tecnología es permitirles crear algo propio.

**Objetivo:** Que cualquier persona pueda crear, abrir y personalizar una página web siguiendo únicamente esta guía.

Al terminar, tendrá una página con títulos, textos, colores y un botón interactivo.

## 2. Qué necesitas

- Una computadora.
- Un navegador web, como Chrome, Safari o Edge.
- Un editor de texto, como Visual Studio Code, Bloc de notas o TextEdit.
- Conocimientos básicos para crear y guardar archivos.
- Aproximadamente 20–30 minutos.

No necesitas comprar programas ni saber programar.

### Conceptos básicos

**HTML:** Organiza el contenido de una página web.

**CSS:** Permite modificar colores, tamaños y apariencia.

**JavaScript:** Permite agregar interacciones, como hacer que un botón muestre un mensaje.

## 3. Cómo hacerlo

### Paso 1. Crear el archivo

1. Abre un editor de texto.
2. Crea un documento nuevo.
3. Guárdalo con el nombre `index.html`.
4. Verifica que termine en `.html` y no en `.txt`.

Si utilizas TextEdit en Mac, selecciona **Formato → Convertir en texto sin formato** antes de pegar el código.

### Paso 2. Copiar el código

Copia este código completo en tu archivo `index.html`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Mi primera página web</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            text-align: center;
            margin: 0;
            padding: 40px 20px;
        }

        .contenedor {
            background-color: white;
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        h1 {
            color: #6345b8;
        }

        h2 {
            color: #287eaa;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
        }

        button {
            background-color: #6345b8;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #49318b;
        }
    </style>
</head>

<body>
    <div class="contenedor">

        <h1>¡Hola, mundo!</h1>

        <h2>Bienvenidos a mi primera página web</h2>

        <p>
            Mi nombre es Paula y estoy aprendiendo
            a crear páginas web con HTML.
        </p>

        <p>
            Me gusta la tecnología, la robótica
            y aprender cosas nuevas.
        </p>

        <button onclick="mostrarMensaje()">
            Haz clic aquí
        </button>

        <p id="mensaje"></p>

    </div>

    <script>
        function mostrarMensaje() {
            document.getElementById("mensaje").textContent =
                "¡Felicidades! Tu primera página funciona.";
        }
    </script>
</body>
</html>
```

### Paso 3. Abrir la página

1. Guarda el archivo.
2. Busca `index.html` en tu computadora.
3. Ábrelo con tu navegador.
4. Observa el resultado.

Debería aparecer una página con fondo celeste, un recuadro blanco, textos y un botón morado.

### Paso 4. Probar el botón

Presiona **Haz clic aquí**.

Debería aparecer el mensaje:

**¡Felicidades! Tu primera página funciona.**

### Paso 5. Personalizar

Realiza estos tres cambios:

1. Reemplaza el nombre Paula por tu nombre.
2. Cambia el color del fondo, modificando `#f0f8ff` por `#fff0f5`.
3. Cambia el mensaje que aparece cuando presionas el botón.

Guarda los cambios y actualiza el navegador.

## 4. Cómo comprobar que funcionó

| Prueba | Resultado esperado |
| --- | --- |
| Abrir `index.html` | La página aparece en el navegador. |
| Ver el título | Aparece "¡Hola, mundo!". |
| Presionar el botón | Aparece el mensaje de felicitación. |
| Cambiar el nombre | Se muestra el nuevo nombre. |
| Cambiar el color | El fondo cambia. |
| Modificar el mensaje | El botón muestra el nuevo texto. |

**Criterio de éxito:** La persona puede abrir su página, utilizar el botón y realizar al menos una modificación sin recibir ayuda directa.

**Estado de las pruebas:** Pendiente de probar con personas principiantes.

## 5. Qué aprendimos y qué falta resolver

Esta actividad permite comprender que una página web combina diferentes tecnologías y que no es necesario tener conocimientos avanzados para comenzar.

También desarrolla habilidades como pensamiento lógico, creatividad, resolución de problemas y aprendizaje autónomo.

### Errores frecuentes

| Problema | Solución |
| --- | --- |
| La página muestra código en lugar del diseño. | Revisar que el archivo termine en `.html`. |
| El botón no funciona. | Verificar que el código JavaScript esté completo. |
| El color no cambia. | Guardar el archivo y actualizar el navegador. |
| No aparece el contenido. | Comprobar que el HTML esté completo. |

### Pendientes

- Probar la guía con tres personas principiantes.
- Registrar las dificultades que encuentren.
- Agregar capturas de pantalla.
- Mejorar las instrucciones según los comentarios.
- Crear una segunda actividad con imágenes y enlaces.

## 6. Cómo puedes contribuir

### ¡Crea tu propia versión!

Te invito a utilizar esta guía y personalizar tu primera página web.

Puedes contribuir:

- Cambiando los colores.
- Agregando una sección nueva.
- Compartiendo una captura de tu resultado.
- Identificando una instrucción confusa.
- Proponiendo mejoras al código.
- Ayudando a otra persona a realizar la actividad.

### ¿Cómo compartir tu aporte?

1. Entra al repositorio de GitHub donde está publicada la guía.
2. Abre **Issues**.
3. Selecciona **New issue**.
4. Escribe como título: `Mi experiencia creando una página web`.
5. Explica qué hiciste, qué dificultad encontraste y qué mejorarías.

También puedes proponer una modificación mediante un pull request.

No es necesario saber programar para contribuir.

## 7. Autoría y fuentes

**Autora:** Paula Castillo.

**Modalidad:** Trabajo individual.

**Origen:** Actividad inspirada en mi experiencia enseñando tecnología y organizando actividades educativas a través de Teen4STEAM.

### Fuentes

- [MDN: Introducción a HTML](https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
- [MDN: CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools: HTML Tutorial](https://www.w3schools.com/html/)

### Reutilización

Se propone publicar el contenido original bajo la licencia [Creative Commons CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), permitiendo compartirlo y adaptarlo con reconocimiento de autoría.

La licencia deberá confirmarse al publicar. Los materiales de terceros mantienen sus propias condiciones de uso.

### Uso de inteligencia artificial

Utilicé inteligencia artificial como apoyo para organizar las instrucciones, explicar conceptos básicos, identificar posibles dificultades y definir cómo comprobar el resultado.

Las recomendaciones deben verificarse mediante pruebas reales antes de considerarlas validadas.

## 8. Revisión durante la clase

### Revisión documental

Se revisó la claridad de las instrucciones con apoyo de IA, considerando la perspectiva de una persona que nunca ha programado.

Se identificó la importancia de explicar qué es HTML, cómo guardar un archivo, cómo abrirlo y cómo comprobar que funciona.

### Revisión con otra persona

| Pregunta | Respuesta |
| --- | --- |
| ¿Qué podemos hacer con este recurso? | Pendiente de revisión externa. |
| ¿Qué necesitamos para comenzar? | Pendiente de revisión externa. |
| ¿Cuál sería el primer paso? | Pendiente de revisión externa. |
| ¿Cómo sabríamos que funcionó? | Pendiente de revisión externa. |
| ¿Dónde necesitaríamos ayuda? | Pendiente de revisión externa. |

**Persona revisora:** Pendiente.  
**Fecha:** Pendiente.  
**Cambios realizados:** Pendientes de la revisión.  
**Prueba práctica:** No documentada todavía.

## 9. Continuidad

El objetivo es que esta actividad pueda seguir utilizándose y mejorándose.

Una persona puede aprender a crear su página, modificarla, compartir su experiencia y ayudar a otra persona.

Como siguiente paso, me gustaría utilizar este recurso en actividades educativas de Teen4STEAM y recopilar comentarios para mejorar las instrucciones.

De esta manera, el conocimiento puede seguir creciendo y compartiéndose dentro de una comunidad.

## 10. Reflexión final

Como fundadora de Teen4STEAM, considero que una de las mejores maneras de aprender tecnología es creando algo propio.

Muchas personas piensan que programar es demasiado difícil, pero una actividad sencilla puede demostrarles que también son capaces de hacerlo.

Este reto me permitió reflexionar sobre la importancia de documentar lo que sabemos para que otras personas puedan aprender sin depender de nuestras explicaciones.

**El conocimiento crece cuando lo compartimos y permitimos que otras personas construyan a partir de él.**

---

**Autora:** Paula Castillo  
**Curso:** Activadores de Comunidades de Práctica · SENACYT / CENFOTEC
