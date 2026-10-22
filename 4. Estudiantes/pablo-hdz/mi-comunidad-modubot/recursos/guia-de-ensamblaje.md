# Guía de ensamblaje: chasis modular impreso en 3D para robótica con IdeaBoard

> **Estado:** esta guía es la base del trabajo del equipo y describe el robot completo hacia el que vamos. Hoy existen la carcasa de la placa, las vigas y la estructura de Fusion (ver "Estado actual" en el [README](../README.md#estado-actual)). Los soportes de motor, las ruedas y los módulos de sensores **todavía no están diseñados**, así que los pasos que los usan quedan como guía pendiente de prueba.

## Para qué sirve

Esta guía permite a educadores, estudiantes, facilitadores y entusiastas de la tecnología fabricar, ensamblar y personalizar un robot móvil modular de código abierto. Su propósito principal es servir de base para talleres de robótica educativa, donde los participantes pueden intercambiar piezas mecánicas (bloques o conectores modulares) y adaptar la electrónica usando la placa **IdeaBoard (ESP32)**. Es útil cuando se busca un recurso replicable, escalable y adaptable a distintos niveles de aprendizaje, sin necesidad de asistencia presencial constante.

## Qué necesitás

### 1. Materiales y hardware
* **Placa de control:** 1 IdeaBoard (ESP32) de [CRCibernética](https://github.com/CRCibernetica/circuitpython-ideaboard/wiki).
* **Chasis y estructura:**
  * 1 cuerpo base impreso en 3D, con ranuras de acople estándar ([estándar de acople](../docs/estandar-de-acople.md)).
  * Piezas o módulos intercambiables impresos en 3D (soportes de sensores, carcasas personalizadas).
* **Actuadores y movimiento:**
  * 2 motores DC con caja reductora (tipo TT).
  * 2 ruedas de goma compatibles con motores TT.
  * 1 rueda loca (*caster*) metálica o plástica.
* **Energía y conectividad:**
  * 1 portapilas con interruptor. La IdeaBoard acepta de 4,5 a 9 V por la bornera; si vas a usar servos, conviene de 4,5 a 6 V (ver la [guía de conexión](../hardware/electronica/)).
  * Cables tipo *jumper* (macho-macho, macho-hembra).
  * Tornillos M3 y tuercas.

### 2. Software y herramientas
* **Modelado:** Autodesk Fusion 360 para la estructura (`.f3z`), u OpenSCAD (gratuito) para la carcasa y las vigas.
* **Programación:** IdeaScratch, IdeaCode (CircuitPython), Arduino IDE o PlatformIO, según la [documentación oficial](https://github.com/CRCibernetica/circuitpython-ideaboard/wiki).
* **Impresión 3D:** impresora con filamento PLA o PETG.

### 3. Conocimientos previos
* Nociones básicas de electrónica: conexión de motores, alimentación y pines.
* Familiaridad con cargar código en placas ESP32 por USB.

## Cómo hacerlo

### Paso 1: Fabricación digital del chasis y los módulos
1. Descargá los archivos fuente (`.step`) y los modelos para imprimir (`.stl`) de la carpeta [`hardware/`](../hardware/).
2. Configurá el laminador (*slicer*):
   * **Material:** PLA o PETG.
   * **Altura de capa:** 0,2 mm.
   * **Relleno:** 20 % a 30 %, con patrón de rejilla o giroide.
   * **Soportes:** las piezas de la carcasa y las vigas no los necesitan.
3. Imprimí el cuerpo base y los módulos elegidos. Para la carcasa de la placa, seguí la [ficha de fabricación](carcasa-ideaboard.md).

### Paso 2: Ensamblaje mecánico y modular *(pendiente de diseño)*
1. Fijá los dos motores DC en las ranuras inferiores del chasis con abrazaderas impresas o tornillos M3.
2. Colocá las ruedas en los ejes de los motores y la rueda loca atrás, para tener estabilidad de tres puntos.
3. Acoplá los módulos superiores (soporte de sensores u otras placas) con el sistema de rieles de cola de milano o con pines.

### Paso 3: Integración electrónica
1. Ubicá la IdeaBoard en su carcasa sobre el chasis, con los puertos accesibles.
2. Conectá cada motor a las salidas **MOTOR1** y **MOTOR2** de la IdeaBoard, que ya tiene un driver de motores L9110S integrado. No hace falta un *shield*.
3. Conectá el portapilas a la bornera de alimentación, con el interruptor en el cable positivo para encender y apagar de forma segura. Revisá que el jumper SELECT esté en **Vin** para que los motores reciban la tensión de la batería.

### Paso 4: Programación y verificación
1. Conectá la IdeaBoard a la computadora por USB.
2. Cargá un programa de prueba de motores (avance, giro y retroceso). El repositorio oficial incluye ejemplos (`examples/motors.py`).
3. Desconectá el USB y encendé el robot con la batería.

## Cómo comprobar que funcionó
* **Resultado esperado:**
  * El robot avanza estable sobre una superficie lisa y ejecuta la rutina sin que los cables rocen las ruedas ni los módulos.
  * La IdeaBoard enciende con la batería sola.
* **Forma de verificar:**
  * Prueba de banco: con el robot levantado, ambas ruedas giran en el sentido correcto.
  * Prueba en pista plana: al menos 1 m de recorrido libre.

## Qué aprendimos y qué falta resolver
* **Errores frecuentes:**
  * *Tolerancias de impresión:* si los acoples quedan muy flojos o muy justos, ajustá la expansión horizontal del laminador de a 0,05 mm, o el parámetro `dt_clr` del archivo `.scad`.
  * *Gestión de energía:* usá un voltaje adecuado para los motores y la placa, para evitar reinicios por caída de tensión.
* **Pruebas pendientes:**
  * Diseñar y probar los soportes de motor y de rueda loca.
  * Probar el chasis con sensores (seguidores de línea y ultrasónico).
  * Optimizar el peso de los bloques modulares.

## Cómo podés contribuir
1. **Diseño:** creá un módulo nuevo (por ejemplo, un soporte para una cámara o un sensor), exportalo en `.step` y `.stl` y proponelo con la plantilla "Nuevo módulo" (ver [CONTRIBUTING](../CONTRIBUTING.md)).
2. **Pruebas:** armá el chasis o seguí esta guía, y abrí un *issue* contando qué instrucción resultó confusa, qué error encontraste o cómo mejoraste el proceso.

## Autoría y fuentes
* **Integrantes del grupo:** Alexandra Domínguez, Carlos Batista, Pablo Hernández Meléndez, Juan Quiel.
* **Origen de la experiencia:** desarrollo colaborativo en robótica educativa abierta e impresión 3D aplicada a hardware ESP32.
* **Fuentes:** [wiki oficial de la IdeaBoard](https://github.com/CRCibernetica/circuitpython-ideaboard/wiki) y [repositorio circuitpython-ideaboard](https://github.com/CRCibernetica/circuitpython-ideaboard).
* **Licencia:** [CC BY-SA 4.0](../LICENSE).

## Revisión durante la clase
*(Espacio para registrar la retroalimentación al intercambiar este documento con otro grupo.)*
* **Qué comprendió el otro grupo:**
* **Qué dudas o baches aparecieron:**
* **Qué ajustes realizamos en el documento:**
