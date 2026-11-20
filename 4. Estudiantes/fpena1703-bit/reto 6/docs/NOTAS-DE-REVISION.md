# Notas de revisión técnica

Este archivo documenta diferencias entre las instrucciones, el Excel y las capturas. **No representa una verificación eléctrica independiente ni una certificación de seguridad.**

| Referencia | Información | Pendiente |
| --- | --- | --- |
| Documentación del autor | Potenciómetro de 5 kΩ; salida máxima aproximada de 21–22 V DC | Comprobar mediante mediciones bajo carga |
| Hoja de cálculos suministrada | Variante con 2 kΩ y salida objetivo de 15 V | Actualizar cálculos si se confirma la versión actual |
| Capturas de Proteus | Muestran iteraciones con valores y designadores distintos | Identificar el esquemático definitivo |
| Fotografías físicas | Muestran montaje sobre protoboard y placa perforada dentro de gabinete | Las fotos por sí solas no validan aislamiento, disipación ni prestaciones |

## Pendientes de validación

- Revisar la correspondencia entre esquema, valores reales montados y lista de materiales.
- Registrar mediciones de tensión y corriente bajo carga, rizado, temperatura y condiciones de prueba.
- Verificar fusible, aislamiento primario de 120 V AC, fijación del transformador y ventilación del gabinete antes de cualquier prueba energizada; recurrir a personal cualificado.
- Incorporar el proyecto editable de Proteus cuando esté disponible (no se adjuntó un archivo `.pdsprj`).
- El nombre del repositorio contiene «0-25v» por decisión del autor, pero **no significa que la salida pueda regularse de 0 a 25 V**.

> El uso de la red de 120 V AC implica riesgo de choque eléctrico e incendio. No replicar ni energizar el equipo basándose solamente en esta documentación.
