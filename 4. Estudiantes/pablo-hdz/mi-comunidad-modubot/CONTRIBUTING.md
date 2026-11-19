# Cómo contribuir a ModuBot

No hace falta programar ni modelar en 3D para aportar. Una medición, una foto o una pregunta también mejoran el proyecto.

## Aportes según el tiempo que tengas

| Tiempo | Aporte | Cómo |
|---|---|---|
| 5 min | Hacer una pregunta o señalar algo confuso | Abrí un [issue](../../issues/new) |
| 15 min | Medir tu IdeaBoard con un calibrador | Plantilla **"Prueba de ajuste"** |
| 1 h | Imprimir la tapa y probar el ajuste | Seguí la [ficha](recursos/carcasa-ideaboard.md) y reportá con **"Prueba de ajuste"** |
| 1 tarde | Diseñar un módulo nuevo | Plantilla **"Nuevo módulo"** y luego un pull request |

## Subir archivos (pull request)

Si nunca usaste Git, podés hacerlo todo desde la web de GitHub:

1. Hacé un **fork** del repositorio (botón *Fork*, arriba a la derecha).
2. En tu fork, entrá a la carpeta que corresponda (por ejemplo `hardware/`) y usá *Add file → Upload files*.
3. Escribí qué cambiaste y elegí *Create a new branch*.
4. Abrí el **pull request** hacia este repositorio.

## Reglas de la casa

- **Una carpeta por componente** dentro de `hardware/`, con el STL, el archivo fuente editable y una imagen.
- **Distinguí lo probado de lo pendiente.** Marcá las medidas como [VERIF], [EST] o [PEND].
- **Si cambiás una medida del estándar,** actualizá [`docs/estandar-de-acople.md`](docs/estandar-de-acople.md) en el mismo pull request.
- **Registrá tu iteración** en [`docs/bitacora-de-iteraciones.md`](docs/bitacora-de-iteraciones.md): qué probaste y qué resultó.
- **Respetá las licencias.** Tus aportes se publican bajo CC BY-SA 4.0. Si usás material de otras personas, citá la fuente y verificá que su licencia lo permita.
- **Usar IA está bien,** pero revisá lo que propone: las pruebas físicas son las que validan el contenido.
