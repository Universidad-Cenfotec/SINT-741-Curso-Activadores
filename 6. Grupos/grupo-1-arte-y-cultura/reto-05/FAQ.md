# Preguntas frecuentes del Sumobot · versión ampliada

SINT-741 · Activadores de Comunidades de Práctica · Reto de clase 5 · Grupo 1, Arte y Cultura

> Las preguntas 1 a 4 vienen del [`FAQ.md` original](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/FAQ.md) del Sumobot, sin cambios. Las preguntas 5 a 9 son nuestro aporte para principiantes. Cada respuesta indica el documento del repositorio de donde sale.
> ¿Empiezas de cero? Lee primero la [guía de primeros pasos](primeros_pasos.md).

## Sobre las reglas (FAQ original)

1. **¿Se puede modificar el código del robot?**
   - Sí, el código puede ser adaptado libremente.

2. **¿Se pueden agregar sensores?**
   - Sí, siempre y cuando no impliquen modificaciones estructurales al robot, y no exceda el peso permitido.

3. **¿Se puede modificar el chasis o los motores?**
   - No. Las partes estructurales, motores, ruedas y baterías deben permanecer como en el kit oficial.

4. **¿Los estudiantes deben llevar el código memorizado?**
   - No, pueden llevarlo preparado y modificarlo durante el evento. Se les proporcionará equipo si no tienen acceso a uno.

## Para quien empieza (nuevas)

5. **¿Qué conocimientos previos de programación o electrónica se necesitan?**
   - Ninguno. El kit trae todo y el armado no necesita pegamento: solo un desatornillador y un cautín para soldar los cables de los motores. Si nunca has soldado, el repositorio enlaza un video de don Tomás que lo explica.
   - Para programar puedes empezar **con bloques** en [IdeaScratch](https://ideascratch.crcibernetica.com/), sin instalar nada, y luego pasar a CircuitPython (una versión de Python para placas).
   - El repositorio también enlaza un asistente de IA para programar el Sumobot.
   - 📄 Fuentes: [`Armado paso a paso.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/Armado%20paso%20a%20paso.md), [`programacion.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/programacion.md)

6. **¿Cuál es una buena estrategia para empezar a programar el robot?**
   - Avanza de lo simple a lo complejo y cambia **una sola cosa a la vez**:
     1. [`test_motores.py`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/test_motores.py): el robot avanza, retrocede y gira, y el LED cambia de color con cada movimiento. Así sabes qué está haciendo.
     2. El [código de inicio](https://github.com/Universidad-Cenfotec/Sumobot/tree/main/c%C3%B3digos_de_ejemplo/codigo%20inicio), que explica `code.py` sección por sección.
     3. [`code_scan.py`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/code_scan.py): busca al rival, ataca y revisa que no se salga del dojo. El repositorio lo recomienda como punto de partida, aunque dice que «tiene mucho para mejorar».
   - Guarda una copia de cada versión que funcione. Puedes llevar el código preparado al torneo (pregunta 4).
   - 📄 Fuentes: [`programacion.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/programacion.md), [`códigos_de_ejemplo/README.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/README.md)

7. **¿Cómo pruebo y calibro el robot antes de competir?**
   - **Sensores:** conecta el robot por USB y abre el [monitor web de sensores](https://universidad-cenfotec.github.io/Sumobot/).
   - **Borde del dojo:** los sensores infrarrojos distinguen el negro del blanco con un valor límite (3000 en el ejemplo). Calibra sobre una superficie igual a la del torneo: el dojo oficial tiene una **cubierta de acrílico transparente**, y eso cambia las lecturas. El README enlaza un [video para calibrar los infrarrojos grabando datos](https://youtu.be/5G9ZTyPEq5s), con [`code_storage_IR.py`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/code_storage_IR.py).
   - **Prueba completa:** carga [`Prueba_Dojo.py`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/Prueba_Dojo.py), un programa de solo pruebas.
   - **Peso y energía:** máximo 315 g con baterías y exactamente 4 baterías AA. Las recargables dan 1,2 V y pueden restarle fuerza a los motores.
   - 📄 Fuentes: [`conexiones.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/conexiones.md), [`sensores_infrarrojos.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/c%C3%B3digos_de_ejemplo/sensores_infrarrojos.md), [`dojo.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/dojo.md), [`reglas de competencia.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/reglas%20de%20competencia.md)

8. **¿Qué herramientas básicas necesito para armarlo y configurarlo?**

   | Para | Necesitas |
   | --- | --- |
   | Armar | Desatornillador Phillips pequeño, cautín y estaño, pinzas o tijera |
   | Encender | 4 baterías AA (no de 9 V) |
   | Programar | Computadora con [Thonny](https://thonny.org/) y cable USB-C, o un navegador para IdeaCode o IdeaScratch |
   | Practicar | Un dojo: el oficial o uno casero con cartulina negra y cinta |

   - 📄 Fuentes: [`Armado paso a paso.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/Armado%20paso%20a%20paso.md), [`programacion.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/programacion.md), [`dojo.md`](https://github.com/Universidad-Cenfotec/Sumobot/blob/main/dojo.md)

9. **¿Cuáles son los errores más comunes de los principiantes?**
   - Sacamos estos errores de las advertencias que ya están en la documentación. Todavía no son experiencias recogidas en torneos; para sumarlas está el canal de abajo.

   | Error | Qué pasa | Fuente |
   | --- | --- | --- |
   | Usar una batería de 9 V | Los motores soportan solo 6 V y se queman | `reglas de competencia.md` |
   | Tener Thonny abierto al flashear la IdeaBoard | El flasher no encuentra el puerto | `programacion.md` |
   | No elegir el intérprete «CircuitPython (genérico)» en Thonny | Thonny no se comunica con el robot | `instala_thonny.md` |
   | Dejar los cables por donde pasan las baterías | Las baterías no entran bien en el chasis | `Armado paso a paso.md`, paso 9 |
   | Pasarse de 315 g por sensores extra o baterías pesadas | El robot no puede competir | `reglas de competencia.md` |
   | Bajar los soportes de los lados de los sensores infrarrojos | Los sensores leen mal tan cerca del piso, y además está prohibido | `reglas de competencia.md` |
   | Hacer un agujero sin un sensor funcionando en él | El robot se considera no apto | `reglas de competencia.md` |
   | Buscar `componentes2025.md` desde el README | Es un enlace roto; el archivo correcto es `componentes.md` | `README.md` |

## ¿Probaste el Sumobot? Cuéntanos

Si tienes una duda que no está aquí, o una experiencia que le puede servir a otro equipo (algo que te funcionó, un error que resolviste), compártela con la plantilla **[«Pregunta o experiencia»](plantilla-pregunta-o-experiencia.md)**. Las preguntas que más se repitan se agregarán a este FAQ.

---

**Créditos y licencia:** las preguntas 1 a 4 son del [Sumobot de la Universidad CENFOTEC](https://github.com/Universidad-Cenfotec/Sumobot). Las preguntas 5 a 9 las redactó el Grupo 1 a partir de la documentación de ese repositorio. Se publica con licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es).
