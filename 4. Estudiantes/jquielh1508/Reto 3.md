# ModuBot · robot modular abierto para la IdeaBoard
**Equipo de diseño:** Alexandra Domínguez · Carlos Batista · Pablo Hernández Meléndez · Juan Quiel

ModuBot es un kit de robótica educativa de código abierto. Tiene un cuerpo base impreso en 3D que aloja la placa **IdeaBoard (ESP32)** y un sistema de acople modular para sumarle ruedas, sensores, pinzas o carcasas. Cualquier estudiante, docente o maker puede **imprimirlo, modificarlo y compartir sus propios módulos**, sin depender de un fabricante cerrado.

> Reto 3 del curso *Activadores de Comunidades de Práctica* (SINT-741, Universidad Cenfotec / SENACYT). En los archivos de Fusion el proyecto aparece con su nombre de trabajo anterior, *EduBot*.

![Concepto de ModuBot](imagenes/concepto/modubot-resumen.jpg)
*Imagen conceptual: ilustra la visión que definió el equipo (tipos de módulos y configuraciones). No es un prototipo impreso. Lo que ya existe está en la tabla "Estado actual".*

## ¿Por qué existe esta comunidad?

En los talleres con IdeaBoard, cada grupo improvisa cómo montar la placa en su robot: con cinta, cartón o piezas que no encajan con las de otro grupo, y cada solución se pierde al terminar el taller. ModuBot propone **un estándar abierto de montaje**: una carcasa para la placa y una sola forma de acoplar piezas. Así, lo que diseña un grupo lo puede reutilizar el siguiente.

## Elegí cómo participar

| Si querés… | Empezá por | Tiempo | Necesitás |
|---|---|---|---|
| **Explorar** | Ver las [imágenes y el estado actual](#estado-actual) | 5 min | Nada |
| **Probar** | Imprimir la tapa y comprobar el ajuste con la [ficha de fabricación](recursos/carcasa-ideaboard.md) | 1 h | Impresora 3D e IdeaBoard |
| **Armar el robot** | Seguir la [guía de ensamblaje](recursos/guia-de-ensamblaje.md) | 1 tarde | Impresora 3D, IdeaBoard, motores y batería |
| **Contribuir** | Reportar tu prueba con la plantilla de [issue "Prueba de ajuste"](../../issues/new?template=prueba-de-ajuste.md) | 15 min | Haber impreso algo |
| **Crear un módulo** | Leer el [estándar de acople](docs/estandar-de-acople.md) y proponer uno con la plantilla ["Nuevo módulo"](../../issues/new?template=nuevo-modulo.md) | 1 tarde | Saber usar un programa CAD |
| **Liderar** | Ver los [roles de la comunidad](docs/mapa-de-comunidad.md#roles) y el [plan de sostenibilidad](docs/plan-de-sostenibilidad.md) | — | Ganas de coordinar |

El recorrido completo, con los roles, está en el [mapa de comunidad](docs/mapa-de-comunidad.md).

## Estado actual

| Componente | Carpeta | Estado |
|---|---|---|
| Carcasa para IdeaBoard (base + tapa) | [`hardware/carcasa-ideaboard/`](hardware/carcasa-ideaboard/) | OpenSCAD paramétrico, STL y STEP listos · ⏳ falta imprimirla y validarla con una placa real |
| Vigas con cola de milano y adaptador | [`hardware/vigas/`](hardware/vigas/) | STL y STEP listos · ⏳ falta probar el ajuste físico |
| Estructura (chasis) en Fusion 360 | [`hardware/estructura-fusion/`](hardware/estructura-fusion/) | Diseño del equipo en Fusion · ⏳ falta exportar STL/STEP desde Fusion |
| Guía de conexión (KiCad) | [`hardware/electronica/`](hardware/electronica/) | Esquemático KiCad + PDF con pines oficiales · ⏳ falta probar el cableado |
| Módulos (ruedas, sensores, pinza) | — | 💡 Ideas en las imágenes conceptuales; ninguno diseñado todavía |
| Código de ejemplo | — | 💡 Pendiente |

## Estructura del repositorio

Cada carpeta es independiente: podés usar la carcasa sin las vigas, o las vigas en otro proyecto.

```
├── README.md                 ← estás acá
├── CONTRIBUTING.md           ← cómo aportar paso a paso
├── recursos/                 ← guías cortas para usar sin ayuda
│   ├── carcasa-ideaboard.md  ← ficha de fabricación de la carcasa
│   └── guia-de-ensamblaje.md ← guía para armar el robot completo
├── hardware/
│   ├── carcasa-ideaboard/    ← OpenSCAD paramétrico + STL + STEP
│   ├── vigas/                ← sistema de vigas y adaptador (STL + STEP)
│   ├── estructura-fusion/    ← chasis del equipo en Fusion 360 (.f3z)
│   └── electronica/          ← guía de conexión en KiCad (+ PDF)
├── docs/
│   ├── mapa-de-comunidad.md        ← dominio, trayectorias y roles
│   ├── estandar-de-acople.md       ← medidas para crear módulos compatibles
│   ├── bitacora-de-iteraciones.md  ← qué probamos, qué falló y qué cambiamos
│   ├── retroalimentacion.md        ← comentarios recibidos y qué hicimos con ellos
│   └── plan-de-sostenibilidad.md   ← cómo sigue sin el equipo original
├── imagenes/concepto/        ← imágenes conceptuales de la visión del equipo
└── .github/ISSUE_TEMPLATE/   ← plantillas para reportar pruebas y proponer módulos
```

## Usar este repositorio con un asistente de IA

Los documentos son cortos y cada uno trata un solo tema, así que un asistente puede leer solo lo que necesita. Por ejemplo: *"Leé `docs/estandar-de-acople.md` y ayudame a diseñar un soporte para el sensor HC-SR04 que lo cumpla"*. Las medidas marcadas como **[EST]** o **[PEND]** todavía no están verificadas, y el asistente no debería tratarlas como definitivas.

## Equipo y licencia

- **Equipo de diseño:** Alexandra Domínguez · Carlos Batista · Pablo Hernández Meléndez · Juan Quiel.
- **Curso:** SINT-741 Activadores de Comunidades de Práctica (rúbrica adaptada por Tomás de Camino Beck, Ph.D., Universidad Cenfotec).
- **Placa:** la IdeaBoard es una placa educativa de [CRCibernética](https://github.com/CRCibernetica/circuitpython-ideaboard/wiki), Costa Rica, según su documentación oficial. ModuBot es un proyecto independiente, no oficial.
- Diseños, documentos e imágenes bajo [CC BY-SA 4.0](LICENSE): podés usarlos, modificarlos y compartirlos citando la fuente y con la misma licencia.
