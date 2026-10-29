# Bitácora de iteraciones

Registro de lo que probamos, lo que falló y lo que cambiamos. Sirve para que nadie repita un error ya resuelto.

## v0.1 · Primera carcasa (22/10/2026)

- **Punto de partida:** la [wiki oficial de la IdeaBoard](https://github.com/CRCibernetica/circuitpython-ideaboard/wiki) no publica medidas mecánicas ni archivos CAD, solo ilustraciones.
- **Lo que hicimos:** medimos sobre las ilustraciones oficiales, calibrando la escala con el paso de 2,54 mm de los pines. Dos dibujos distintos dieron el mismo tamaño (≈ 47 × 72 mm) y el USB-C salió con 8,7 mm de ancho (el real mide 8,94), así que el dibujo está a escala.
- **Modelo:** OpenSCAD paramétrico, con cada medida marcada como verificada, estimada o pendiente.
- **Errores encontrados y corregidos:**
  - Los textos grabados de la tapa se superponían con las ranuras de ventilación: los reubicamos.
  - Entre la ventana del jumper y el agujero del LED quedaba una pared de 0,33 mm, imposible de imprimir: achicamos el agujero y la pared quedó en 1,1 mm.
  - Si la tapa apoyaba en las paredes, la placa podía quedar floja: bajamos la pared 0,2 mm para que la presión la hagan los bujes sobre los pads de montaje.
- **Comprobación:** intersección carcasa–maqueta de la placa = volumen 0 (sin choques, con las alturas supuestas).

## v0.2 · Versión simple

- **Retroalimentación:** "más simple, sin letras, que solo encaje bien".
- **Cambio:** quitamos los textos, el logo y los chaflanes. Mantuvimos solo lo funcional: aberturas y ventilación sobre los drivers de motor.

## v0.3 · Sistema de vigas

- **Idea:** combinar las vigas tipo LEGO Technic con colas de milano en todos los lados, para ensamblar desde cualquier ángulo.
- **Decisión de diseño:** una viga Technic mide 7,2 mm de ancho y ahí no caben las ranuras laterales sin romper los agujeros. Elegimos 10 mm de ancho y conservamos el paso de 8 mm y el alto de 7,2 mm, para mantener la compatibilidad con pines y ejes Technic.
- **Decisión de impresión:** flancos a 45° para imprimir sin soportes.
- **Piezas:** adaptador bajo la base, vigas, llave doble, conector L y conector vertical.
- **Comprobación:** viga encastrada en el adaptador y llave entre dos vigas, sin interferencias en el modelo.

## Fusion 360 · Estructura del equipo

- El equipo importó la base y la tapa (v0.1) en Fusion 360 y diseñó una **estructura** tipo chasis, con ventanas laterales y pestañas de sujeción (`hardware/estructura-fusion/Edubot.f3z`).
- **Pendiente:** actualizar la tapa a v0.2/v0.3, exportar STL/STEP y unificar las pestañas con el [estándar de acople](estandar-de-acople.md).

## Recurso para el reto de clase

- Escribimos la [ficha de fabricación](../recursos/carcasa-ideaboard.md) y la revisamos con IA, leyéndola como principiante. Encontró 5 vacíos; corregimos 4 y dejamos 1 como duda abierta (está documentado en la ficha).

## Archivos abiertos: STEP y KiCad

- **Retroalimentación:** el borrador del equipo prometía archivos STEP y esquemáticos KiCad que todavía no existían.
- **STEP:** exportamos la carcasa y las vigas a STEP desde los STL, con OpenCASCADE: las caras planas quedan unidas y las curvas, facetadas. Comprobamos que cada STEP es un sólido válido y que su volumen coincide con el del STL.
- **KiCad:** hicimos una guía de conexión (`hardware/electronica/`) con los pines de la documentación oficial de CRCibernética y comprobamos las conexiones con la netlist que exporta KiCad. Al revisar las tensiones encontramos dos riesgos y los documentamos: el ECHO de 5 V del HC-SR04 clásico y el voltaje del servo cuando V+ = Vin.
- **Pendiente:** el STEP de la estructura de Fusion lo tiene que exportar el equipo desde Fusion (*Archivo → Exportar → STEP*).

## Próxima iteración (pendiente)

1. Medir una IdeaBoard real y pasar las medidas de [EST] a [VERIF].
2. Imprimir la tapa como plantilla y registrar el resultado en un issue.
3. Probar el ajuste de las colas de milano y fijar `dt_clr`.
