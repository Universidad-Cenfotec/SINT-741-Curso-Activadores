# Reto 3: Una experiencia que otra persona pueda continuar

## Grupo 2 · Robótica Educativa
* **Ruta en repositorio:** `6. Grupos/grupo-2-robotica/reto-03/`
* **Proyecto:** Control de Servomotor SG90 con Arduino para Expresiones Animatrónicas con Cartón

### Integrantes:
* José Aarón Aponte Franco (`Japonte14`)
* Katherine Gálvez López (`katherinegalvez047-stack`)
* Hazael Eliezer Moreno Vanegas (`haza507`)
* Ronald
* Fidel (`fpena1703-bit`)
* Milena (`mgiraldoh-debug`)
* Lizmarie Loraine Camacho Vega (`lizmarie82`)
* Madai Arelis Samudio Candanedo (`dachizu07-ux`)

---

## 1. Descripción de la Experiencia
Este proyecto documenta el diseño y montaje de un mecanismo básico de cartón articulado controlado por un servomotor SG90 y una placa Arduino Uno. El objetivo principal es permitir que cualquier persona interesada en robótica educativa pueda replicar movimientos mecánicos y expresiones animatrónicas simples de forma totalmente autónoma.

---

## 2. Materiales Requeridos
* 1 Placa Arduino Uno (o compatible) + Cable USB.
* 1 Micro Servomotor SG90 (con sus aspas y tornillos).
* Cables de conexión tipo Dupont (Macho - Macho).
* Cartón reciclado o cartulina rígida.
* Tijeras, regla y pegamento caliente (silicón).

---

## 3. Conexiones del Circuito
El servomotor SG90 cuenta con 3 terminales que se conectan directamente a los pines del Arduino Uno:

| Cable del Servomotor | Pin en Arduino Uno | Función |
| :--- | :--- | :--- |
| **Marrón / Negro** | GND | Tierra / Conexión común |
| **Rojo** | 5V | Alimentación eléctrica |
| **Naranja / Amarillo** | Pin Digital 9 | Señal de control PWM |

---

## 4. Código de Control (Arduino IDE)
Para cargar el programa en la placa, se utiliza la librería estándar `Servo.h`:

```cpp
#include <Servo.h>

Servo miServo;

void setup() {
  miServo.attach(9); // Servomotor asignado al pin digital 9
}

void loop() {
  // Movimiento a posición inicial (expresión neutra)
  miServo.write(0);
  delay(1000);

  // Movimiento a posición intermedia
  miServo.write(90);
  delay(1000);

  // Movimiento a posición final (expresión activa)
  miServo.write(180);
  delay(1000);
}
5. Aporte y Documentación - Madai Samudio
Metodología Didáctica: Adaptación de las instrucciones técnicas para que sean claras y accesibles en procesos de alfabetización digital comunitaria.

Guía de Montaje: Organización de las pautas de seguridad eléctrica en el conexionado y recomendaciones para el corte y ensamble de las piezas mecánicas de cartón.

Control de Calidad: Revisión paso a paso del flujo de trabajo para garantizar que la guía pueda ser ejecutada sin requerir supervisión técnica directa.

6. Invitación a Contribuir
¡Invitamos a la comunidad de práctica a enriquecer este proyecto educativo!

Propón nuevos diseños de articulaciones en cartón (ojos móviles, cejas o mandíbulas).

Optimiza el código incorporando sensores ultrasónicos o potenciómetros para interacción en tiempo real.

Comparte tus mejoras abriendo un Issue o enviando un Pull Request a esta carpeta.
