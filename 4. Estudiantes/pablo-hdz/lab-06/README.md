# Laboratorio 6 · De mi proyecto a nuestra comunidad

**Estudiante:** Pablo Hernández (`pablo-hdz`)
**Curso:** SINT-741 – Activadores de Comunidades de Práctica

## Repositorio personal

### 👉 https://github.com/pablo-hdz/aprende-c-sumobot

**Aprende C con un Sumobot:** repositorio educativo para aprender el lenguaje C y software embebido
programando un robot real, el Sumobot CENFOTEC 2025 (placa IdeaBoard de CRCibernética, ESP32).

## Evidencias del entregable

| Requisito | Evidencia |
|---|---|
| `README.md` con la descripción del proyecto | [README](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/README.md): nombre, descripción, problema, público, origen, estado actual, cómo comenzar y próximos pasos |
| `CONTRIBUTING.md` con instrucciones para colaborar | [CONTRIBUTING](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/CONTRIBUTING.md): proponer ideas, reportar errores, aportar documentación y solicitar cambios, con niveles de entrada |
| Al menos un Issue con una propuesta de mejora | [Issue #1 · Probar el firmware en C en un sumobot real](https://github.com/pablo-hdz/aprende-c-sumobot/issues/1) |
| Al menos un Pull Request creado e integrado | [PR #2 · Agregar glosario de términos técnicos](https://github.com/pablo-hdz/aprende-c-sumobot/pull/2): rama `docs/glosario`, autorrevisión y merge |
| Declaración del uso de IA | [README → Uso de inteligencia artificial](https://github.com/pablo-hdz/aprende-c-sumobot#uso-de-inteligencia-artificial) |

## Relación con la rúbrica del curso

| Criterio | Dónde se ve |
|---|---|
| 1. Dominio y trayectorias de participación | [Mapa de comunidad](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/mapa-de-comunidad.md): explorar → probar → aprender → contribuir → mentorear → mantener |
| 2. Simplicidad y modularidad | Carpetas `circuitpython/`, `firmware-c/` y `docs/`; un archivo `.c` por componente; ajustes en `config.h` |
| 3. Transparencia y documentación | [docs/](https://github.com/pablo-hdz/aprende-c-sumobot/tree/main/docs): teoría de C, arquitectura con diagramas, módulos, instalación, tácticas, glosario; [estado](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/06-estado-y-verificacion.md) separa lo probado de lo pendiente |
| 4. Experimentación y recursos | [Historia del proyecto](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/07-historia.md): 8 iteraciones con errores reales convertidos en scripts y documentos reutilizables |
| 5. Evolución y continuidad | [Plan de sostenibilidad](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/plan-de-sostenibilidad.md): roles, decisiones, riesgos; licencia libre de dominio público |
| 6. Retroalimentación | [Registro de retroalimentación](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/retroalimentacion.md), abierto a los comentarios de la docente |

## Presentación (3 minutos)

**1. ¿Qué proyecto seleccioné y por qué?**
Un sumobot del kit CENFOTEC 2025. Al probarlo encontré problemas reales (el sensor IR del ejemplo
en un pin que no es el del kit, una librería del ultrasónico que falla una lectura de cada dos,
sensores que leen distinto en cada robot) y quise convertir esas soluciones en material para
aprender C: el robot hace visible cada concepto, porque un error en un `if` lo saca del dojo.

**2. ¿Qué mejora propuse mediante el Issue?**
[Probar el firmware en C en un sumobot real](https://github.com/pablo-hdz/aprende-c-sumobot/issues/1):
el firmware compila sin errores pero todavía no se ha cargado en un robot. El Issue define qué
revisar (autodiagnóstico, sensores, motores, ultrasónico, IMU y una pelea) y cómo reportar el resultado.

**3. ¿Cómo podría crecer con futuras contribuciones?**
Estudiantes que publiquen soluciones a los 11 ejercicios de la ruta de C, resultados de prueba en
sus propios robots, tácticas nuevas de pelea, fotos del cableado, y lecciones nuevas (WiFi, ESP-NOW
entre robots). También puede ser el código base de ModuBot, el proyecto de comunidad del curso.

## Uso de inteligencia artificial

Usé **Claude** (Anthropic) en Claude Code como asistente para escribir los scripts de prueba, el
código CircuitPython y el firmware en C; correr pruebas por el puerto serie en las placas;
investigar la documentación de la IdeaBoard y del ESP32; redactar la documentación; y crear el
repositorio, el Issue y el Pull Request. Lo que todavía no está verificado se indica en
[docs/06-estado-y-verificacion.md](https://github.com/pablo-hdz/aprende-c-sumobot/blob/main/docs/06-estado-y-verificacion.md),
en especial el firmware en C en un robot real.
