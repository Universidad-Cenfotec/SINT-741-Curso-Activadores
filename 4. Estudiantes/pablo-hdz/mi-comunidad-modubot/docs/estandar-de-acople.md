# Estándar de acople ModuBot

Si un módulo cumple estas medidas, encaja con todos los demás. Todas salen de `hardware/carcasa-ideaboard/carcasa_ideaboard.scad`, que es la **fuente única**: si cambia algo, se cambia ahí y se actualiza esta tabla.

> Estado: **[DIS] decidido en el diseño, sin validar físicamente todavía.** Las holguras pueden cambiar después de las primeras impresiones.

## 1. Cola de milano (perfil único)

```
   cara de la pieza
 ───────┐     ┌───────
        │boca │          boca: 2,6 mm
       ╱       ╲         profundidad: 1,3 mm
      ╱  fondo  ╲        flancos a 45° (se imprime sin soportes)
     └───────────┘       fondo: 5,2 mm
```

| Parámetro (`.scad`) | Valor | Notas |
|---|---|---|
| `dt_neck` | 2,6 mm | Ancho en la boca |
| `dt_depth` | 1,3 mm | Profundidad |
| Ángulo de flancos | 45° | No cambiarlo: es lo que permite imprimir sin soportes |
| `dt_clr` | 0,15 mm por lado | Holgura macho–hembra. Ajustar según la impresora (0,10–0,25) |

- **Hembra:** ranura a lo largo de un costado, abierta en los extremos para que la pieza entre deslizando.
- **Macho:** lengüeta del mismo perfil, 0,15 mm más chica por lado.

## 2. Agujeros y grilla

| Parámetro | Valor | Compatibilidad |
|---|---|---|
| Paso entre agujeros (`beam_pitch`) | 8 mm | Igual que LEGO Technic |
| Diámetro (`beam_hole_d`) | 4,9 mm | Entran pines y ejes Technic de Ø4,8 |
| Alto de vigas y adaptador (`beam_h`) | 7,2 mm | Igual que el grosor Technic |
| Ancho de viga (`beam_w`) | 10 mm | Más ancha que Technic (7,2) para que quepan las ranuras |

## 3. Fijación de la carcasa

4 tornillos M3 en las esquinas de la IdeaBoard, posiciones `holes` del `.scad`, **[EST]** a confirmar con una placa real:

- Sin adaptador: tornillo M3 × 14, autorroscante en la base.
- Con adaptador: tornillo M3 × 20 y tuerca M3 cautiva debajo.

## 4. Pendiente de unificar

- La **estructura de Fusion** (`hardware/estructura-fusion/`) usa pestañas propias que todavía no siguen este perfil. El equipo tiene que decidir si la estructura adopta la cola de milano o si se documentan sus pestañas como un segundo estándar.
- Falta validar las holguras con al menos dos impresoras distintas.

## Checklist para un módulo nuevo

- [ ] Usa el perfil de cola de milano o la grilla de 8 mm de esta página.
- [ ] Se imprime sin soportes, o la ficha explica por qué los necesita.
- [ ] Incluye el STL y un archivo editable: `.scad`, o `.step` (si se diseñó en Fusion, exportar también a STEP).
- [ ] Si lleva electrónica, indica a qué pines se conecta según la [guía de conexión](../hardware/electronica/).
- [ ] Incluye una imagen y una ficha corta (copiá la estructura de `recursos/carcasa-ideaboard.md`).
- [ ] Indica qué se probó físicamente y qué no.
