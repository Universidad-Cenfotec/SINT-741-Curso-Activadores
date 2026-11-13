# Reto de clase 2 · Generador de círculo: Mapa de Comunidad Maker

- **Estudiante:** dachizu07-ux
- **Curso:** SINT-741 Activadores de Comunidades de Práctica
- **Grupo temático:** Grupo 2 · Robótica
- **Pregunta generadora:** ¿Cómo aprender robótica con pocos equipos y materiales?
- **Fecha:** Octubre 2026

---

## 1. Nombre del proyecto
**Kit Maker de Retos Animatrónicos Expresivos de Bajo Costo**

---

## 2. Situación e intención
- **Situación identificada:** En muchas comunidades y centros de aprendizaje locales, los estudiantes y facilitadores perciben la robótica como algo costoso, distante o inaccesible por falta de kits comerciales especializados.
- **Intención compartida:** Queremos crear *guías y retos maker con mecanismos sencillos de cartón y servomotores reutilizables* para que *jóvenes y docentes de centros comunitarios* puedan *aprender los fundamentos de la robótica y la programación construyendo prototipos interactivos con materiales accesibles*.

---

## 3. Frases clave de diseño
- **Intención:** Queremos crear retos maker de robótica de bajo costo y replicables para que jóvenes puedan aprender robótica construyendo funciones mecánicas sencillas y compartiéndolas con otros.
- **Función:** La primera versión debe ser capaz de mover un mecanismo articulado sencillo de cartón (gesto de ceja o boca) accionado por un servomotor estándar (SG90) controlado por una placa programable básica (Arduino/ESP32).
- **Prueba:** Sabremos que cumple esa función si observamos que el mecanismo completa un ciclo de movimiento de 0° a 90° de forma fluida al presionar un pulsador o recibir una señal de prueba, sin deformar la estructura de cartón.

---

## 4. Dominio
Robótica educativa comunitaria, computación física, mecanismos animatrónicos básicos y cultura maker con materiales reciclados y de bajo costo.

---

## 5. Comunidad
- **Participantes actuales:** Facilitadores y estudiantes de entornos comunitarios interesados en robótica, electrónica básica y prototipado rápido.
- **Posibles participantes:** Docentes escolares de ciencias, entusiastas del modelado y jóvenes de comunidades rurales y urbanas.
- **Capacidades aportadas:** Programación en bloques/C++, ensamblaje mecánico artesanal, diseño pedagógico de retos y documentación abierta.

---

## 6. Práctica compartida
- **Qué haremos juntos:** Sesiones quincenales de prototipado donde se prueba un mecanismo diferente (levas, bielas, articulaciones para gestos) y se optimiza el código de control.
- **Recursos utilizados:** Cartón corrugado, palitos de madera, servomotores genéricos (SG90), microcontroladores económicos, cables de conexión, pegamento termofusible y plantillas descargables en PDF/Markdown.

---

## 7. Trayectorias de participación
- **Observar:** Asistir a las sesiones de prueba o ver videos cortos de demostración de los mecanismos funcionando.
- **Preguntar:** Plantear dudas en el repositorio o canal grupal sobre calibración de grados de giro y ensamble del cartón.
- **Contribuir:** Diseñar una nueva plantilla de corte de cartón o compartir una variación del código de control.
- **Acompañar:** Guiar a un nuevo participante en la conexión de su primer servomotor y en la carga del código básico.

---

## 8. Representación y boceto
```text
      [ Sensor / Pulsador ]
               │
               ▼
   [ Microcontrolador (Arduino) ]
               │ Señal PWM
               ▼
     [ Servomotor SG90 ]
         │ (Eje móvil)
         ▼
9. Prototipo, prueba y aprendizaje
Prototipo construido: Mecanismo uniaxil montado sobre base de cartón con servomotor fijado mediante abrazadera de cartón, conectado al pin digital 9 con código de barrido continuo (sweep).

Resultado observado: El servomotor movió la varilla y levantó la ceja de cartón en un ángulo de 80°. La estructura mostró estabilidad durante 20 repeticiones continuas.

Ajuste realizado: Se reforzó el punto de anclaje de la varilla con una arandela plástica para evitar que el orificio del cartón se ensanchara con la fricción repetida.

Tarea pendiente: Integrar un sensor ultrasónico para que el gesto animatrónico reaccione automáticamente ante la presencia de una persona.

10. Continuidad y uso de IA
Próxima acción: Publicar la plantilla imprimible en PDF con las medidas exactas de corte de cartón y el sketch de código comentado.

Responsables y fecha: dachizu07-ux y colaboradores del grupo; próxima sesión de prueba técnica programada para la siguiente semana.

Uso de la IA y decisiones: Se utilizó la IA para estructurar el Mapa de Comunidad, comparar mecanismos de transmisión de bajo roce y redactar criterios de verificación observables. Las decisiones de selección de materiales (cartón y servomotores accesibles) se tomaron priorizando la disponibilidad en centros locales.




  [ Varilla de alambre/clip ]
         │
         ▼
[ Mecanismo de Ceja / Mandíbula de Cartón ] ──▶ (Gesto visible: 0° - 90°)
