# Plan de evolución y sostenibilidad — VisualNotes AI

> Grupo 4 — Universidad Cenfotec (curso IA y Sistemas).
> Este plan explica cómo sigue viviendo la comunidad después de la entrega: quién hace qué, cada cuánto se reúne, cómo entra una persona nueva y qué señales muestran que el proyecto continúa.
> No depende de una sola persona: las responsabilidades se rotan y todo queda registrado en el repositorio.

## Objetivo de continuidad

Queremos que una persona que no participó en el desarrollo pueda entender VisualNotes AI, probarlo, aportar una mejora y encontrar el registro de lo que hicimos. La continuidad se mide por esas acciones, no por la presencia permanente de los integrantes originales.

Tres acuerdos sostienen el plan:

1. **El repositorio es la memoria:** README, mapa, bitácora, entregas, recursos e imágenes viven en `visualnotesia`.
2. **Cada aporte deja una huella visible:** un Issue, un Pull Request, una entrada en la bitácora o un recurso actualizado.
3. **Las responsabilidades rotan:** nadie queda como único dueño de una tarea.

## Responsabilidades compartidas

Equipo base: **6 integrantes del Grupo 4 · IA y Sistemas**.

| Responsabilidad | Responsable actual | Siguiente rotación | Qué hace |
|---|---|---|---|
| Facilitación y bienvenida | Cesar Adrian Villamil Alzamora | Said Enrique Mendoza Acevedo | Coordina la sesión, abre el orden del día y saluda a quien llega |
| Documentación | Alice Alexandra Rojas Vergara | Samantha Valentina Matos Gutierrez | Actualiza bitácora, mapa y retroalimentación |
| Código e IA | Said Enrique Mendoza Acevedo | Josue Antonio Parfait Miranda | Atiende fallos de la app, prompts y despliegue |
| Revisión de Pull Requests | Samantha Valentina Matos Gutierrez | Cesar Adrian Villamil Alzamora | Revisa cambios, aplica el checklist de `CONTRIBUTING.md` |
| Pruebas y señales de comunidad | Josue Antonio Parfait Miranda | Alice Alexandra Rojas Vergara | Invita a probar, recoge comentarios y los registra |
| Evidencia visual y recursos | Saret Medina | Josue Antonio Parfait Miranda | Mantiene capturas, imágenes y recursos reutilizables |

La rotación ocurre **cada dos semanas**, al cierre del ritual de sesión de trabajo. Si una persona no puede asistir, delega su responsabilidad en la persona indicada en "Siguiente rotación" y lo anota en la bitácora.

## Calendario de rituales

| Ritual | Frecuencia | Próxima fecha | Responsable | Salida observable |
|---|---|---|---|---|
| Sesión de trabajo | Cada dos semanas | Miércoles 25 de noviembre de 2026, 7:00 p.m. | Cesar | Acta en `docs/bitacora.md` con acuerdos y ajuste |
| Revisión de Pull Requests | Semanal | Miércoles 25 de noviembre de 2026 | Samantha | PR revisado con comentarios o aprobación |
| Prueba con una persona externa | Cada dos semanas | Sábado 28 de noviembre de 2026 | Josue | Comentario en el [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1) |
| Cierre de ciclo | Cada cuatro semanas | Sábado 12 de diciembre de 2026 | Alice | Bitácora y retroalimentación actualizadas |

Cada ritual termina con la misma pregunta: **¿qué cambió para que otra persona pueda continuar sin nosotros?**

## Cómo dar la bienvenida

Una persona nueva entra por una acción pequeña y visible:

1. Leer el [README](../README.md), el [mapa de comunidad](mapa-de-comunidad.md) y este plan.
2. Sumarse al [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1) y contar qué probó, qué funcionó y en qué paso se detuvo.
3. Seguir la [guía rápida](../recursos/guia-de-uso-rapida.md) en su propia computadora o usar la versión desplegada en <https://visualnotesia.nexusdigitalsolutions.group/>.
4. Tomar la [plantilla de kit de estudio](../recursos/plantilla-kit-de-estudio.md) como formato común y comparte el resultado.
5. Si quiere ir más lejos, abrir un Pull Request siguiendo [CONTRIBUTING.md](../CONTRIBUTING.md).

**Primer aporte mínimo:** un comentario en el Issue #1 con una observación concreta. No se pide permiso especial ni saber programar para dar ese paso. La persona responsable de facilitación responde en un plazo de dos días y la de documentación registra el aporte.

## Señales reales de comunidad

No contamos estrellas, visitas ni descargas como prueba de comunidad. Observamos acciones que otra persona puede verificar:

| Señal real | Cómo se observa | Dónde se registra |
|---|---|---|
| Una persona nueva genera un kit sin pedir ayuda | Comentario con material usado y resultado | [Retroalimentación](retroalimentacion.md) |
| Otra persona corrige o amplía un documento | Pull Request revisado y fusionado | Historial de commits de `main` |
| Alguien vuelve a probar en una segunda sesión | Segundo comentario en el Issue #1 | [Bitácora](bitacora.md) |
| Un recurso se reutiliza fuera del equipo | Copia del recurso con mención de origen | `recursos/` y `docs/uso-de-ia.md` |
| Una responsabilidad se rota sin confusiones | Acta de la sesión con nuevo responsable | [Responsabilidades compartidas](#responsabilidades-compartidas) |

Si una señal aparece y no está registrada, la persona de documentación la agrega en el cierre de ciclo.

## Cómo copiar o continuar esta comunidad

1. Hacer un fork o clonar <https://github.com/nexusdigitalsolutionspa-maker/visualnotesia> y conservar la atribución al Grupo 4 y la documentación del proyecto.
2. Mantener la estructura de la guía: `README.md`, `CONTRIBUTING.md`, `docs/`, `recursos/` e `imagenes/`.
3. Elegir responsables para las seis tareas de [Responsabilidades compartidas](#responsabilidades-compartidas) y fijar la primera rotación.
4. Reproducir los cuatro rituales del [calendario](#calendario-de-rituales) durante al menos dos ciclos.
5. Publicar cada cambio en un Issue o Pull Request y consolidarlo en la bitácora.
6. Atribuir el origen del proyecto al Grupo 4 — Universidad Cenfotec y conservar las fuentes del [anexo técnico](#anexo-técnico-ejecutar-visualnotes-ai).

Si el equipo original ya no está disponible, el repositorio y este plan bastan para reiniciar la comunidad: no hay permisos ni documentos que solo existan en una persona.

## Estado de la entrega

- [x] Responsabilidades compartidas con nombres y rotación.
- [x] Próximos rituales con fechas y responsables.
- [x] Recepción de nuevos miembros con un primer aporte mínimo.
- [x] Señales reales de comunidad definidas frente a métricas de vanidad.
- [x] Procedimiento para que otro grupo copie o continúe la comunidad.
- [x] Documentación publicada y enlazada desde el README.

## Pendientes del siguiente ciclo

Estos trabajos no forman parte de lo ya entregado: son el plan de mejora continúa. Se cierran cuando quede una huella visible en el repositorio.

| Pendiente | Responsable | Fecha prevista | Criterio para cerrarlo |
|---|---|---|---|
| [ ] Revisar el plan como persona principiante con IA | Samantha Valentina Matos Gutierrez | 2026-11-25 | Lista de dudas y ajustes registrada en la [bitácora](bitacora.md) |
| [ ] Republicar la landing con el repositorio ya público | Cesar Adrian Villamil Alzamora | 2026-11-25 | Sitio desplegado sin el mensaje "próximamente" |
| [ ] Probar la app con otro grupo y registrar lo comprendido | Josue Antonio Parfait Miranda | 2026-11-28 | Comentario en el [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1) y fila en [retroalimentación](retroalimentacion.md) |
| [ ] Exportar apuntes y mapa a PDF | Alice Alexandra Rojas Vergara | 2026-12-09 | Pull Request revisado y evidencia en la bitácora |
| [ ] Ampliar las pruebas automatizadas en CI | Said Enrique Mendoza Acevedo | 2026-12-09 | `.github/workflows/ci.yml` con más verificaciones |
| [ ] Confirmar la persistencia de la base de datos en producción | Said Enrique Mendoza Acevedo | 2026-12-12 | Resultado documentado en el [anexo técnico](#anexo-técnico-ejecutar-visualnotes-ai) |
| [ ] Dar seguimiento semanal a los comentarios del Issue #1 | Saret Medina | Cada semana | Respuestas y nuevos aportes reflejados en [retroalimentación](retroalimentacion.md) |

## Revisión registrada

La revisión interna del 19 de noviembre comprobó que una persona ajena al equipo podía comprender el propósito con el README y la guía rápida. Las dudas que aparecieron fueron sobre la clave de Gemini y sobre la persistencia de la base de datos; ambas quedaron explicadas en el [anexo técnico](#anexo-técnico-ejecutar-visualnotes-ai). Como ajuste se corrigieron los enlaces del repositorio anterior y se añadió el canal abierto de comentarios en el Issue #1.

## Anexo técnico: ejecutar VisualNotes AI

Esta sección conserva la guía técnica original como respaldo. No depende de este equipo para ejecutarse.

### Requisitos

- Python 3.12 (o 3.11+).
- Git.
- Una clave de API de Google Gemini (plan gratuito): <https://aistudio.google.com/app/apikey>.
- Conexión a Internet para Gemini y las librerías de CDN (Mermaid, marked, Three.js).
- Opcional: Docker y Docker Compose.

### Pasos

```bash
git clone https://github.com/nexusdigitalsolutionspa-maker/visualnotesia.git
cd visualnotesia
python -m venv .venv
```

- **Windows:** `.venv\Scripts\activate`
- **Linux/macOS:** `source .venv/bin/activate`

```bash
pip install -r requirements.txt
cp .env.example .env
```

Editar `.env` con la clave en `GEMINI_API_KEY`. **Nunca** subir `.env` ni escribir la clave en el código. Para iniciar:

```bash
uvicorn app:app --reload
```

Abrir <http://127.0.0.1:8000>. Como alternativa con Docker: `docker compose up --build`.

### Comprobación

Generar un apunte desde texto, imagen o audio y verificar que aparezcan transcripción, apuntes, palabras clave, mapa conceptual, resumen y quiz. Recargar la página y comprobar el apunte en *Mis Apuntes*: si desaparece en un despliegue, falta montar un volumen persistente en `/app/data`.

### Tropiezos documentados

- Clave expuesta en el código: se movió a `.env`; si se expone, rótala en Google AI Studio.
- Evidencia de conceptos fuera del texto ordenado: los fragmentos se construyen desde `transcription` y se emparejan por palabras clave.
- Base de datos reiniciada por despliegue: usar volumen persistente en `/app/data`.
- Navegador con versión vieja: se añadió *cache-busting* (`?v=<versión>`) y `Cache-Control: no-cache`.
- PowerShell en Windows: usar `;` e `if ($?)` en vez de `&&`; para JSON, `curl.exe --data-binary "@archivo.json"`.

## Autoría y fuentes

- **Autoría:** Grupo 4 — Universidad Cenfotec, curso IA y Sistemas.
- **Origen de la experiencia:** desarrollo, despliegue y pruebas de VisualNotes AI, incluidos mapa conceptual, cronología, tablas y endurecimiento de seguridad (clave por variable de entorno, *rate limiting* y cabeceras CSP).
- **Atribución:** el editor del mapa conceptual se adaptó del prototipo del Grupo 4; el crédito se conserva en `static/js/conceptmap.js` y `static/js/diagram.js`.
- **Fuentes y atribuciones:**
  - Google Gemini (`google-genai`) — <https://ai.google.dev/gemini-api/docs>
  - Mermaid.js — <https://mermaid.js.org>
  - marked.js — <https://marked.js.org>
  - Three.js — <https://threejs.org>
- **Reutilización:** se puede copiar, adaptar y ampliar manteniendo la mención de autoría; el historial y la documentación completa están en el repositorio de Nexus.

---

Relacionado: [Mapa de Comunidad](mapa-de-comunidad.md) · [Bitácora](bitacora.md) · [Retroalimentación](retroalimentacion.md) · [Uso de IA](uso-de-ia.md).
