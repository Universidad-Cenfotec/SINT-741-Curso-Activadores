# Reto 3: Una experiencia que otra persona pueda continuar
## Grupo 2 · Robótica Educativa

**Proyecto:** Kit Maker de Retos Animatrónicos Expresivos de Bajo Costo  
**Pregunta generadora:** ¿Cómo aprender robótica con pocos equipos y materiales?

### Equipo participante y roles

| Integrante | Rol en el proyecto | Responsabilidades principales |
| :--- | :--- | :--- |
| **Fidel Antonio Peña Espinosa** | Coordinación técnica y electrónica | Diseño del circuito, conexión del servomotor SG90 a la placa Arduino y verificación eléctrica. |
| **Jose Aaron Aponte Franco** | Programación y control de movimiento | Desarrollo del código en Arduino IDE (`Servo.h`) y calibración de los ángulos de expresión. |
| **Hazael Eliezer Moreno Vanegas** | Diseño estructural y prototipado | Trazado, corte y ensamblaje de la estructura articulada en cartón reciclado. |
| **Melvin Eugene Buford Bernal** | Integración mecánica y pruebas | Acople entre el brazo del servomotor y las piezas móviles de cartón, y ejecución de pruebas de giro. |
| **Lizmarie Loraine Camacho Vega** | Diseño pedagógico y guía paso a paso | Redacción de instrucciones claras y estructuración de la experiencia para futuros estudiantes. |
| **Milena Giraldo Herrera** | Documentación y registro de hallazgos | Registro de dificultades técnicas, aprendizajes del equipo y elaboración del diagrama de conexiones. |
| **Madai Arelis Samudio Candanedo** | Gestión de materiales y sostenibilidad | Selección y validación de materiales reciclados y de bajo costo accesibles en el entorno escolar. |
| **Katherine Gálvez López** | Validación de experiencia y vinculación | Revisión de claridad con otros grupos (Grupo 3) y diseño de la guía de continuidad y aportes. |

---

## 1. Propósito
Diseñar una experiencia de aprendizaje de robótica educativa que pueda ser comprendida, desarrollada y continuada por otras personas, utilizando materiales accesibles y componentes electrónicos básicos.

## 2. Descripción de la experiencia
Nuestra propuesta consiste en construir un mecanismo animatrónico sencillo (como un rostro expresivo con cejas o párpados móviles) con cartón reciclado, un servomotor SG90 y una placa Arduino Uno. Mediante la programación de movimientos angulares básicos, los participantes representan distintas expresiones (neutro, sorpresa, enojo o saludo) y comprenden en la práctica cómo se relacionan la construcción mecánica, la electrónica y la programación.

## 3. Materiales necesarios
* Cartón reciclado de rigidez media o doble canal (evitar cartón excesivamente delgado).
* 1 servomotor micro SG90 (con sus brazos/cuernos plásticos y tornillo de fijación).
* 1 placa Arduino Uno (o compatible).
* 3 cables jumper macho-macho (o macho-hembra según el conector).
* Cable USB tipo B para alimentar y programar la placa.
* Computadora con Arduino IDE instalado.
* Materiales básicos de taller: tijeras o cúter, regla, lápiz, silicón frío/caliente o cinta adhesiva resistente y un palillo o alambre delgado como varilla de transmisión.

---

## 4. Pasos para desarrollar la experiencia

1. **Presentar el propósito del proyecto:** Explicar el reto de construir un mecanismo expresivo de bajo costo y definir qué emoción o movimiento representará.
2. **Identificar y preparar los materiales:** Verificar que el cartón tenga suficiente firmeza para soportar el torque del servomotor sin doblarse.
3. **Diseñar y armar el mecanismo de cartón:** Recortar la base, la pieza móvil (por ejemplo, ceja o boca articulada) y el eje de giro, asegurando que la pieza se mueva sin fricción excesiva.
4. **Conectar el servomotor a la placa Arduino:** Realizar el cableado siguiendo el diagrama de conexiones.
5. **Elaborar y cargar el programa:** Abrir Arduino IDE, copiar el código con la librería `Servo.h`, verificar los límites de ángulo y subirlo a la placa.
6. **Probar y calibrar el funcionamiento:** Observar el recorrido del mecanismo y ajustar los grados en el código para evitar que el cartón choque o force el motor.
7. **Documentar resultados y dificultades:** Registrar qué funcionó, qué falló y cómo se resolvió.
8. **Compartir la guía:** Dejar el código, el esquema y las recomendaciones listos para que otro equipo pueda replicar o mejorar el prototipo.

### Diagrama de conexiones (Arduino Uno + Servomotor SG90)

El servomotor SG90 cuenta con tres cables identificados por color que deben conectarse directamente a la placa Arduino Uno de la siguiente manera:

```text
   +-----------------------+                  +-----------------------+
   |      ARDUINO UNO      |                  |   SERVOMOTOR SG90     |
   |                       |                  |                       |
   |                   5V  |----------------->| Rojo     (VCC / +5V)  |
   |                  GND  |----------------->| Marrón   (GND / Tierra)|
   |            Pin D9 (~) |----------------->| Naranja  (Señal PWM)  |
   +-----------------------+                  +-----------------------+
```

| Cable del Servomotor SG90 | Función eléctrica | Pin en Arduino Uno |
| :--- | :--- | :--- |
| **Naranja** (o amarillo) | Señal de control PWM | **Pin Digital 9 (`D9`)** |
| **Rojo** | Alimentación positiva (+5 V) | **Pin `5V`** |
| **Marrón** (o negro) | Tierra / Referencia común | **Pin `GND`** |

> **Nota técnica:** Si se agregan más de un servomotor en futuras versiones, se recomienda utilizar una fuente externa de 5 V compartiendo la tierra (`GND`) con Arduino para evitar reinicios de la placa por caída de tensión.

### Código funcional del servomotor (`Servo.h`)

Este programa ejecuta una secuencia de expresiones cambiando la posición angular del servomotor SG90 en intervalos definidos:

```cpp
#include <Servo.h>

Servo servoExpresion;  // Crea el objeto para controlar el servomotor
const int PIN_SERVO = 9; // Pin PWM conectado al cable naranja del SG90

void setup() {
  servoExpresion.attach(PIN_SERVO);
  // Inicia en posición neutra (centro)
  servoExpresion.write(90);
  delay(1500);
}

void loop() {
  // 1. Expresión neutra (90°)
  servoExpresion.write(90);
  delay(1500);

  // 2. Expresión de sorpresa o apertura (45°)
  servoExpresion.write(45);
  delay(1500);

  // 3. Expresión de enojo o cierre (135°)
  servoExpresion.write(135);
  delay(1500);

  // 4. Movimiento suave de saludo / transición
  for (int angulo = 135; angulo >= 45; angulo -= 5) {
    servoExpresion.write(angulo);
    delay(40);
  }
  delay(1000);
}
```

---

## 5. Cómo comprobar que funcionó

Para validar que el montaje y la programación operan correctamente, se deben verificar los siguientes cuatro indicadores:

1. **Respuesta al encendido:** Al conectar el Arduino por USB, el mecanismo se posiciona automáticamente en el ángulo neutro (`90°`) sin vibraciones bruscas ni ruidos de esfuerzo.
2. **Secuencia completa de expresiones:** El servomotor ejecuta de forma continua las transiciones entre `90°`, `45°` y `135°`, además del barrido suave, respetando los tiempos de pausa programados.
3. **Transmisión mecánica estable:** La pieza móvil de cartón acompaña el giro del brazo del servo de forma fluida, sin desprenderse, atorarse ni deformar la base.
4. **Ausencia de sobrecalentamiento o reinicios:** La placa Arduino mantiene encendido su LED indicador de alimentación de manera estable durante al menos 3 ciclos completos sin reiniciarse.

---

## 6. Qué aprendimos y qué falta resolver

### Qué aprendimos
* **Fundamentos de electrónica y programación:** Comprendimos cómo una señal PWM enviada desde un pin digital de Arduino controla la posición angular exacta de un servomotor mediante la librería `Servo.h`.
* **Relación entre mecánica y código:** Entendimos que programar un movimiento no basta si la estructura física no tiene la rigidez y el punto de apoyo adecuados para transmitir la fuerza.
* **Calibración iterativa:** Aprendimos a ajustar los ángulos límite en el software para adaptarlos a las restricciones físicas del prototipo construido.

### Dificultades encontradas y qué falta resolver
* **Ajuste de ángulos de giro:** Durante las primeras pruebas tuvimos inconvenientes con los ángulos programados, ya que los extremos (`0°` y `180°`) excedían el recorrido físico permitido por el mecanismo y forzaban el cartón. Se resolvió acotando el rango de trabajo entre `45°` y `135°`.
* **Rigidez estructural del cartón:** Al inicio utilizamos un cartón demasiado blando que se doblaba con el movimiento del servo y restaba precisión a la expresión. Aunque se reforzó temporalmente, **queda pendiente mejorar la estructura a futuro**, idealmente diseñando piezas rígidas mediante **impresión 3D** (PLA) o cartón prensado de mayor calibre para darle durabilidad y precisión al kit.

---

## 7. Cómo podés contribuir (y cómo continuar la experiencia)

Este proyecto está pensado como un punto de partida abierto. Otros estudiantes, docentes o grupos maker pueden continuar y enriquecer esta experiencia de las siguientes maneras:

* **Mejorar la estructura física:** Diseñar y compartir archivos STL imprimibles en 3D para reemplazar las piezas de cartón por soportes y articulaciones más resistentes y replicables.
* **Ampliar las expresiones:** Incorporar un segundo servomotor SG90 (por ejemplo, en el pin `D10`) para coordinar movimientos independientes de ojos, cejas y boca.
* **Agregar interactividad:** Conectar sensores de bajo costo (como un botón pulsador, un potenciómetro o un sensor ultrasónico HC-SR04) para que el animatrónico reaccione cuando una persona se acerque.
* **Documentar nuevas variantes:** Compartir plantillas recortables con medidas exactas para distintos personajes o animales, facilitando su uso en talleres introductorios.

---

## 8. Revisión de otro grupo (Grupo 3)

Durante la etapa de validación cruzada, el **Grupo 3** revisó nuestra propuesta y aportó las siguientes observaciones constructivas:

* **Fortalezas destacadas:** Valoraron que el proyecto utiliza muy pocos componentes, tiene un costo accesible y logra conectar de forma visual e intuitiva la programación con un resultado físico inmediato.
* **Observaciones y sugerencias de mejora:**
  1. *Especificar el rango seguro de ángulos:* Señalaron la importancia de advertir explícitamente en el código que no se deben usar `0°` ni `180°` sin probar antes la libertad mecánica de la pieza, para evitar dañar los engranajes internos del SG90.
  2. *Incluir medidas de referencia para el cartón:* Sugirieron añadir en futuras versiones una plantilla con dimensiones aproximadas de la base y el brazo articulado, de modo que otros grupos no elijan un cartón demasiado blando ni desproporcionado al replicarlo.
  3. *Aclarar la alimentación eléctrica:* Recomendaron indicar qué ocurre si se conectan dos o más servos simultáneamente, dejando asentada la necesidad de alimentación externa.

---

## 9. Reflexión final
La robótica educativa no depende exclusivamente de contar con equipos costosos. Con creatividad, colaboración y materiales accesibles podemos desarrollar experiencias significativas de aprendizaje. Nuestro objetivo es que el conocimiento construido no termine con nuestro grupo, sino que pueda compartirse, corregirse y continuar creciendo en otras comunidades.

---

## 10. Autoría y fuentes

* **Autoría:** Desarrollado por el **Grupo 2 · Robótica Educativa** (Jose Aaron Aponte Franco, Lizmarie Loraine Camacho Vega, Milena Giraldo Herrera, Fidel Antonio Peña Espinosa, Madai Arelis Samudio Candanedo, Hazael Eliezer Moreno Vanegas, Melvin Eugene Buford Bernal y Katherine Gálvez López).
* **Revisión entre pares:** Aportes de validación realizados por el **Grupo 3**.
* **Fuentes técnicas y referencias consultadas:**
  * Documentación oficial de la librería `Servo` de Arduino: *Arduino Reference – Servo Library* (`https://www.arduino.cc/reference/en/libraries/servo/`).
  * Hoja de datos técnicos del micro servomotor TowerPro SG90 (*SG90 9g Micro Servo Technical Specifications*: voltaje de operación 4.8 V – 6.0 V, ancho de pulso PWM 500–2400 µs).
  * Guías de prototipado rápido con cartón y mecanismos articulados (*Cardboard Automata & Maker Education Guides*, Exploratorium Tinkering Studio).
