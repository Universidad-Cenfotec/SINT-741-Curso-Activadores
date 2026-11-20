# Revisión con IA del recurso

**Fecha:** 21 de octubre de 2026.  
**Documento revisado:** `recursos/semaforo-tinkercad.md`, junto con README, invitación, esquema e instrucciones de entrega.  
**Tipo:** revisión documental desde la perspectiva de principiante y comprobación local de la lógica del programa.  
**Estado:** revisión documental y comprobación local de lógica registradas durante la preparación del recurso. El grupo debe confirmar qué recomendaciones adoptó efectivamente. Posteriormente se reportaron pruebas internas de la simulación en Tinkercad; esas pruebas no forman parte de la comprobación local aquí descrita.

## Instrucción utilizada

Lee esta guía como alguien que quiere realizar la actividad por primera vez. Usando solamente lo documentado, explica qué harías. Identifica información faltante y formula preguntas. No inventes materiales, pasos ni resultados.

## Qué haría una persona principiante según lo escrito

1. Prepararía una computadora con internet e iniciaría sesión en Tinkercad.
2. Crearía un circuito y agregaría un Uno R3, tres LED y tres resistencias.
3. Asignaría los colores y fijaría cada resistencia en 220 Ω.
4. Identificaría ánodo y cátodo con las etiquetas y realizaría las nueve conexiones, usando un GND diferente para cada LED.
5. Abriría el editor de Texto, reemplazaría el programa y comenzaría la simulación.
6. Observaría los LED externos: rojo 8 segundos, verde 8 y amarillo 3, durante dos ciclos.
7. Consultaría la tabla de problemas si el resultado difiere y dejaría una duda o corrección de un paso.

Esta reconstrucción surge de leer la guía; no registra una ejecución por una persona principiante.

## Hallazgos y ajustes incorporados en la propuesta

| Hallazgo de la revisión | Ajuste realizado |
| --- | --- |
| Un principiante podría buscar los cables como componentes. | Se aclara que las nueve conexiones se crean pulsando terminales. |
| Las instrucciones de carga advertían sobre el README existente después de indicar la subida. | Se revisan README y licencia antes de cargar los archivos, con exclusiones explícitas. |
| Los cables de retorno cruzaban los nombres de los LED en el esquema. | Se movieron los rótulos y se inspeccionó visualmente la imagen corregida. |
| Faltaba el archivo de revisión con IA durante la revisión inicial. | Se agregó este registro y se comprobaron los enlaces internos al cerrar el paquete. |
| La duración podía interpretarse como garantía para cualquier principiante. | Se expresa como estimación de 20–30 minutos con la cuenta preparada, pendiente de medir con personas. |

El recurso mantiene los pasos esenciales y el código completo; las instrucciones de organización y publicación están en un archivo aparte.

## Qué se comprobó del código

Se compiló una comprobación local en C++, sustituyendo `pinMode`, `digitalWrite` y `delay` por funciones que registran estados y tiempos. Se contrastaron las salidas con el orden y las duraciones documentadas, durante tres ciclos del original y tres de la variante.

| Caso | Secuencia por ciclo | Duración por ciclo | Resultado local |
| --- | --- | --- | --- |
| Original | Rojo 8 s, verde 8 s, amarillo 3 s | 19 s | Coincide; tres ciclos suman 57 s lógicos. |
| Variante | Rojo 8 s, verde 8 s, amarillo 5 s | 21 s | Coincide; tres ciclos suman 63 s lógicos. |

También se comprobó que los tres pines se configuran como salidas, empiezan apagados y que no queda más de un LED activado simultáneamente en las instrucciones de transición. El código del archivo `.ino` coincide con el incluido en el Markdown.

**Límite:** esta comprobación no compila contra el núcleo de Arduino Uno, no simula electricidad y no ejecuta la interfaz de Tinkercad. El tiempo indicado aquí es tiempo lógico acumulado por el programa de comprobación. No demuestra que una persona haya realizado bien las conexiones.

## Preguntas que requieren una prueba humana

- ¿La persona encuentra los tres GND y distingue ánodo y cátodo en su interfaz?
- ¿Puede completar las nueve conexiones sin explicación oral?
- ¿Localiza el tiempo del simulador para comprobar los ciclos?
- ¿Cuánto tarda realmente y en qué paso necesita ayuda?

## Actualización: simulación reportada por el Grupo 5

El grupo informó que probó el circuito [Semáforo Grupo 5 en Tinkercad](https://www.tinkercad.com/things/159oklSwmbn-semaforo-grupo-5?sharecode=Hu2hL66F69LfDO6nUz_bjbiNr8pTk8fxQz1K8weei0w) y que los LED rojo, amarillo y verde se encendieron correctamente en secuencia. Este dato complementa la comprobación de la lógica que se describe arriba; no implica que esta revisión con IA haya inspeccionado el circuito en Tinkercad ni que se hayan medido los tiempos exactos.

## Qué sigue pendiente

- Registrar la fecha, participantes y, si están disponibles, evidencias adicionales de la simulación interna.
- Recibir y documentar las cinco respuestas reales de otro grupo, sin sustituirlas por respuestas esperadas.
- Anotar los ajustes que surjan de esas respuestas, cuando se reciban.
- Confirmar los aportes individuales y la experiencia previa de los integrantes. Los nueve nombres y la elección de CC BY 4.0 ya figuran en la documentación del grupo.
- Publicar la versión corregida en GitHub y comprobar su acceso y el canal de contribuciones.

Esta revisión con IA no reemplaza la revisión de otro grupo exigida por el reto.
