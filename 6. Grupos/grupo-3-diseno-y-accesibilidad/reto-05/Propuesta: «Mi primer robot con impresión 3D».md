# Propuesta: «Mi primer robot con impresión 3D»

## Grupo

Grupo 3 · Diseño y Accesibilidad

| Integrante | Usuario de GitHub | Rol en el reto |
| --- | --- | --- |
| Alexandra Dominguez | [@usuario] | Investigación con IA y diseño de la propuesta de mejora |
| Aylin Escobar | [@usuario] | Presentación (pitch) |
| Carlos Batista | [@usuario] | Presentación (pitch) |
| Juan Antonio Quiel Hernández | [@usuario] | Redacción y publicación; presentación (pitch) |
| Kevin Fernández | [@usuario] | Navegación: identificar la idea principal del repositorio |
| Pablo Daniel Hernández Meléndezz | [@usuario] | Investigación con IA y diseño de la propuesta de mejora |

## Repositorio analizado

- **Nombre:** MojeeBOT
- **Enlace:** <https://github.com/Mojee3D/MojeeBOT>
- **Autoría:** Mojee3D (contacto indicado en el README: corey@mojee3d.com)
- **Licencia:** CC BY-NC 4.0 para el hardware (diseños, STL y documentación) y MIT para el código, según el [README](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md). No hay un archivo `LICENSE` separado en la raíz. El uso comercial requiere permiso del autor.

## Qué es el proyecto

MojeeBOT es un robot pequeño que se mueve sobre dos ruedas y esquiva obstáculos. Casi todo su cuerpo se imprime en 3D y se programa en CircuitPython. Un sensor ultrasónico mide la distancia a lo que tiene enfrente: si algo se acerca demasiado, el robot se detiene, retrocede y gira.

Está pensado para makers, estudiantes y docentes que quieren un robot barato y abierto para aprender. Resuelve un problema común: tener una plataforma completa (piezas, electrónica y código) sin diseñarla desde cero.

## Hallazgos con evidencia

Consultado en GitHub el 10 de noviembre de 2026.

| Hallazgo | Archivo o enlace que lo respalda |
| --- | --- |
| La raíz del repositorio solo tiene 4 archivos: un PDF, un 3MF, el README y el código. No hay subcarpetas. | [Raíz del repositorio](https://github.com/Mojee3D/MojeeBOT) |
| El README dice que el repositorio incluye «STL files for all printable parts», «Bill of Materials (BOM)» y «Wiring guide», pero no hay archivos STL, ni lista de materiales, ni guía de cableado como archivos separados. | [`README.md`](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md) frente a la [raíz](https://github.com/Mojee3D/MojeeBOT) |
| El modelo 3D está en un solo archivo 3MF, no en STL por pieza. | [`MojeeBot V1.3mf`](https://github.com/Mojee3D/MojeeBOT/blob/main/MojeeBot%20V1.3mf) |
| La lista de materiales, el cableado y el armado están dentro del manual en PDF, en inglés. | [`MojeeBOT V1 Assembly Manual.pdf`](https://github.com/Mojee3D/MojeeBOT/blob/main/MojeeBOT%20V1%20Assembly%20Manual.pdf) (revisado por el grupo; la IA no abrió el PDF) |
| Usa la placa Cytron Maker Pi RP2040, dos motores N20 con encoder, un sensor ultrasónico y un chasis redondo impreso de unos 200 mm. | [`README.md`](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md), sección de hardware |
| Todo el programa está en un solo archivo de CircuitPython (245 líneas) que usa la librería `adafruit_hcsr04` para el sensor. | [`code.py`](https://github.com/Mojee3D/MojeeBOT/blob/main/code.py) |
| `code.py` tiene una sección `# TUNING` con variables fáciles de cambiar, como `BASE_SPEED = 0.50`, `STOP_DISTANCE_CM = 20.0` y `RESUME_DISTANCE_CM = 28.0`. | [`code.py`](https://github.com/Mojee3D/MojeeBOT/blob/main/code.py) |
| El README y los comentarios del código están solo en inglés. | [`README.md`](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md), [`code.py`](https://github.com/Mojee3D/MojeeBOT/blob/main/code.py) |
| No hay `CONTRIBUTING.md`. El README tiene una sección «Contributing» breve (fork, rama y Pull Request). | [`README.md`](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md) |
| Es un proyecto reciente y pequeño: 9 commits, sin descripción en GitHub. | [Raíz del repositorio](https://github.com/Mojee3D/MojeeBOT) |
| Si el 3MF trae la rueda y la caja del sensor como piezas separables. | **No verificado** (hay que abrirlo en un laminador como PrusaSlicer o Bambu Studio) |
| Cantidad de Issues abiertos. | **No verificado** |

## Oportunidad identificada

El README promete archivos que no existen como tales, y lo que sí existe está en un PDF en inglés. Para una persona principiante en Costa Rica eso significa tres barreras: buscar dentro del PDF, leer en inglés y armar el robot completo antes de ver algún resultado.

Sin embargo, el proyecto tiene tres partes que se pueden aprender por separado: una pieza impresa, un sensor y un archivo de código con variables claras. Eso permite ofrecer una primera experiencia corta sin tener todos los componentes.

## Propuesta

Una guía en español, **«Mi primer robot con impresión 3D»**, para los espacios Maker CENFOTEC e Infoplazas. Está dirigida a principiantes (jóvenes y personas adultas sin experiencia previa) y se organiza en **3 estaciones cortas** de 15 a 20 minutos. Ninguna exige armar el robot completo.

| Estación | Qué hace la persona | Qué aprende | Materiales |
| --- | --- | --- | --- |
| 1. La pieza | Abre el archivo 3MF, separa una pieza (una rueda o la caja del sensor) e inicia su impresión. | Qué es un archivo 3D, cómo se lamina y se imprime. | Impresora 3D, filamento PLA, computadora con laminador. |
| 2. El sensor | Conecta el sensor ultrasónico a una placa con CircuitPython y mira en pantalla cómo cambia la distancia al acercar la mano. | Cómo un robot «ve» lo que tiene enfrente. | Placa RP2040 (Maker Pi RP2040 u otra compatible), sensor HC-SR04, cable USB, editor Mu o Thonny. |
| 3. El código | Abre `code.py`, cambia una variable (por ejemplo `STOP_DISTANCE_CM` de 20 a 10, o `BASE_SPEED` de 0.50 a 0.30) y observa qué pasa. | Que el comportamiento del robot depende de valores que cualquiera puede ajustar. | Un MojeeBOT ya armado por el equipo facilitador, o solo la placa con motores. |

**Por qué es útil:** quita la barrera del idioma y la de tener que construirlo todo. La persona sale con una pieza impresa, una lectura del sensor o un cambio en el código que hizo por sí misma.

**Aporte al autor:** abrir un Issue en MojeeBOT que explique, con respeto, que el README menciona STL, BOM y guía de cableado que no están como archivos, y ofrecer la traducción al español de la guía.

## Pasos para realizarla

| # | Paso | Recursos | Responsable |
| --- | --- | --- | --- |
| 1 | Abrir el 3MF en un laminador y confirmar qué piezas trae y si la rueda y la caja del sensor se pueden imprimir por separado. | PrusaSlicer o Bambu Studio | Kevin |
| 2 | Extraer del PDF la lista de materiales y el cableado del sensor, y traducirlos al español. | Manual en PDF | Alexandra y Pablo |
| 3 | Escribir un programa mínimo para la estación 2, basado en `code.py`, que solo imprima la distancia. Mantener la licencia MIT y dar crédito a Mojee3D. | `code.py`, librería `adafruit_hcsr04` | Alexandra y Pablo |
| 4 | Redactar las 3 fichas de estación en español, con fotos y pasos numerados de una sola acción. | Markdown, cámara | Juan |
| 5 | Probar las fichas con una persona que nunca haya usado una impresora 3D y ajustar lo que no entienda. | 1 voluntaria o voluntario | Kevin |
| 6 | Abrir el Issue en MojeeBOT sobre los archivos faltantes y ofrecer la traducción. | Cuenta de GitHub | Juan |
| 7 | Realizar la sesión piloto en Maker CENFOTEC o una Infoplaza. | Espacio, materiales de la tabla anterior | Todo el grupo |

**Atención a la licencia:** el hardware es CC BY-NC 4.0, así que la guía y las piezas impresas se pueden usar en talleres gratuitos y educativos, pero no se pueden vender sin permiso del autor. Siempre hay que citar a Mojee3D.

## Cómo comprobar que funciona

- **Criterio principal:** la guía funciona si **al menos 4 de 5 principiantes completan una estación solo con la guía**, sin ayuda de quien facilita.
- **Qué observamos en cada estación:**
  - Estación 1: la pieza queda en la cama de impresión o el laminado se envía a imprimir.
  - Estación 2: la persona ve que el número de la distancia baja cuando acerca la mano.
  - Estación 3: la persona explica con sus palabras qué cambió después de modificar la variable.
- **Registro:** anotamos en qué paso se trabó cada persona y cuánto tiempo tardó, para corregir la guía.
- **Aporte al autor:** el Issue queda abierto con enlace y registramos si el autor responde.

## Cómo podría continuar otra persona

- Leer esta propuesta y el [README de MojeeBOT](https://github.com/Mojee3D/MojeeBOT/blob/main/README.md). Para el cableado y los materiales, usar el PDF, porque el README no los trae.
- Empezar por el paso 1: confirmar qué piezas trae el 3MF. Es lo único que todavía está **No verificado**.
- Revisar si el Issue en MojeeBOT tuvo respuesta. Si el autor sube STL o acepta la traducción, actualizar la guía con esos archivos.
- Ideas para seguir: una cuarta estación con los motores, una versión con la IdeaBoard de CENFOTEC o una versión de la guía con lectura fácil.

## Uso de IA

- **Herramienta:** [Claude / ChatGPT / Gemini] con el prompt inicial del reto, y Claude para revisar el repositorio y redactar este documento.
- **Qué le preguntamos:** qué es el proyecto, qué archivos tiene, qué licencia usa, qué variables de `code.py` puede cambiar un principiante y cómo ordenar la propuesta con la plantilla.
- **Qué aprovechamos:** la explicación del proyecto, la lista de variables de la sección `# TUNING` de `code.py` y el formato en Markdown.
- **Qué corregimos al verificar:** la IA repitió lo que dice el README («trae STL, lista de materiales y guía de cableado»). Al revisar GitHub vimos que solo hay un archivo 3MF y que todo lo demás está dentro del PDF, en inglés. Ese error se convirtió en nuestro hallazgo principal. También marcamos como **No verificado** lo que ni la IA ni nosotros pudimos confirmar (el contenido del 3MF y los Issues abiertos).

## Referencias

- Repositorio MojeeBOT: <https://github.com/Mojee3D/MojeeBOT>
- README: <https://github.com/Mojee3D/MojeeBOT/blob/main/README.md>
- Código: <https://github.com/Mojee3D/MojeeBOT/blob/main/code.py>
- Modelo 3D: <https://github.com/Mojee3D/MojeeBOT/blob/main/MojeeBot%20V1.3mf>
- Manual de armado: <https://github.com/Mojee3D/MojeeBOT/blob/main/MojeeBOT%20V1%20Assembly%20Manual.pdf>
- Issues de MojeeBOT: <https://github.com/Mojee3D/MojeeBOT/issues>
- Licencia CC BY-NC 4.0: <https://creativecommons.org/licenses/by-nc/4.0/deed.es>
- Librería del sensor: <https://github.com/adafruit/Adafruit_CircuitPython_HCSR04>
- Enunciado del reto 5, curso SINT-741: <https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores>
