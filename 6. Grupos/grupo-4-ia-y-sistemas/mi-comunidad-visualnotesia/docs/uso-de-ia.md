# Uso de IA — VisualNotes AI

Este archivo distingue tres cosas: las ideas del equipo, lo que sugirió la IA y lo que el equipo decidió después de revisar esas sugerencias.

## 1. Ideas propias del equipo

- La definición del dominio: producir y compartir kits de estudio a partir de material de clase.
- La elección de fuentes soportadas (audio, imagen y texto) y de salidas (transcripción, apuntes, mapa conceptual, resumen, quiz y Markdown/PDF), tal como están implementadas en `gemini_service.py` y descritas en el [README](../README.md).
- La decisión de usar GitHub como infraestructura de la comunidad: Issues, Pull Requests y documentación versionada.
- La elección de los recursos reutilizables: [guía rápida](../recursos/guia-de-uso-rapida.md) y [plantilla de kit de estudio](../recursos/plantilla-kit-de-estudio.md).
- El documento de Entrega 3 del equipo: [plan de sostenibilidad](plan-de-sostenibilidad.md).
- Las decisiones de diseño y seguridad del producto (clave por variable de entorno, `.env` ignorado, rate limiting y cabeceras HTTP) ya presentes en el repositorio antes de este proyecto final.

## 2. Sugerencias de la IA

- Proponer la estructura `README.md`, `CONTRIBUTING.md`, `docs/` y `recursos/` indicada en la guía del proyecto final.
- Redactar borradores del mapa de comunidad, del plan de sostenibilidad y de la escalera de participación.
- Sugerir la separación entre señales reales de comunidad y métricas de vanidad.
- Sugerir que cada recurso indique su origen y pueda usarse sin el equipo presente.
- Ayudar a detectar los vacíos del repositorio frente a la guía: faltaban `docs/`, `recursos/` y una escalera de participación explícita.

## 3. Decisiones tomadas después de revisar

| Sugerencia de la IA | Decisión del equipo | Motivo |
|---|---|---|
| Redactar la bitácora con una activación de ejemplo | **Rechazado como plantilla.** Se registraron las 11 activaciones con datos consolidados por el equipo | La guía pide registrar solo lo ocurrido; la plantilla permanece en la guía, no en el repo |
| Escribir nombres y fechas concretas en el mapa y el plan | **Aceptado con revisión.** Se usan los 6 nombres del mapa, las fechas acordadas y la rotación de roles | Evita marcadores sin confirmar y mantiene responsabilidades compartidas |
| Crear más recursos de forma automática | **Reducido a dos** | El plan de sostenibilidad se usa como Entrega 3 y los dos apoyos cubren arranque y formato |
| Renombrar el repositorio a `mi-comunidad` | **Descartado.** Se conserva `visualnotesia` | El repo oficial del grupo ya es público con ese nombre y todos los enlaces apuntan a él |

## 4. IA dentro del producto

La aplicación usa **Google Gemini** (vía `google-genai`) para analizar audios, imágenes y texto y generar los kits de estudio. Esa IA produce contenido que una persona debe revisar antes de compartirlo: la plantilla de kit incluye un campo de revisión humana para ese fin.

---

Relacionado: [Retroalimentación](retroalimentacion.md) · [Recursos](../recursos/).
