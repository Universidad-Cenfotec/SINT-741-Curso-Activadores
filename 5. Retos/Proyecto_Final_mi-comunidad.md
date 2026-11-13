# Proyecto final · Repositorio `mi-comunidad`

**Curso Activadores de Comunidades de Práctica · SINT-741**
**Modalidad** Individual o grupal
**Fecha de entrega** Jueves 19 de noviembre de 2026
**Presentación** 5 minutos por proyecto, más preguntas

## El proyecto

Su propuesta del Reto 1 fue una **primera versión**. Ahora la convertirán en la infraestructura completa de una comunidad de práctica, publicada en un repositorio de GitHub llamado `mi-comunidad` (o `mi-comunidad-nombre-del-proyecto`).

La pregunta que guía el proyecto es **¿qué necesita tener nuestra comunidad para que otras personas puedan sumarse, contribuir y continuarla sin nosotros?**

No necesitan empezar de cero. La mayor parte del trabajo ya está en los retos del curso. El proyecto final consiste en **reunir, mejorar y conectar** esas piezas en un solo repositorio.

## Individual o grupal

Pueden elegir cualquiera de las dos modalidades.

| Modalidad | Cuándo conviene | Qué cambia |
|---|---|---|
| **Individual** | Tienen una comunidad propia (la del Reto 1) en la que pueden hacer la activación. | El repositorio es personal y lo entrega una sola persona. |
| **Grupal** | Quieren continuar el proyecto de su grupo (retos 2, 3 y 5). | Un solo repositorio por grupo. El README indica quiénes participaron y qué rol tuvo cada persona. |

## De los retos al proyecto final

| Lo que ya hicieron | Cómo se usa en el proyecto final |
|---|---|
| Reto 1 · Imaginar el cambio en una comunidad | Punto de partida: dominio, cambio buscado y primera activación |
| Reto 2 · Círculo generador y Mapa de Comunidad | **Entrega 1** · Mapa de Comunidad |
| Reto 3 · Una experiencia que otra persona pueda continuar | **Entrega 2** · Primer recurso reutilizable |
| Reto 4 · Registro del Show & Tell | Bitácora de activación |
| Reto 5 · De exploradores a colaboradores | Recurso adicional o adaptación de otro repositorio |
| Reto 6 · De mi proyecto a nuestra comunidad | Base del repositorio: README, CONTRIBUTING, Issue y Pull Request |
| Semanas 7 y 8 · Observar, evaluar y sostener | **Entrega 3** · Plan de evolución y sostenibilidad |

## Qué debe contener el repositorio

### Estructura mínima

```
mi-comunidad/
├── README.md                     ← propósito y cómo empezar a participar
├── CONTRIBUTING.md               ← escalera de participación y cómo contribuir
├── docs/
│   ├── mapa-de-comunidad.md      ← Entrega 1
│   ├── bitacora.md               ← activaciones, evidencias y ajustes
│   ├── plan-de-sostenibilidad.md ← Entrega 3
│   ├── retroalimentacion.md      ← qué comentarios recibieron y qué cambiaron
│   └── uso-de-ia.md              ← qué hizo la IA y qué decidieron ustedes
├── recursos/                     ← Entrega 2 (al menos 2 recursos)
└── imagenes/                     ← fotos, capturas o bocetos (opcional)
```

Pueden adaptar los nombres, siempre que el README enlace a cada parte.

### Entrega 1 · Mapa de Comunidad

- **Dominio**: qué práctica comparten y qué necesidad real atiende.
- **Intención, función y prueba**: «Queremos crear ___ para que ___ pueda ___».
- **Participantes**: núcleo, activos, periféricos y externos. Para cada grupo, qué buscan y qué aportan.
- **Trayectorias de participación**: cómo pasa alguien de observar a contribuir y luego a facilitar.
- **Rituales y espacios**: qué hacen juntos, con qué frecuencia y dónde.

### Entrega 2 · Recursos reutilizables (conversión de *flow* en *stock*)

- Al menos **dos recursos** en `recursos/`. Pueden ser una guía, una FAQ, una plantilla, un ejemplo, un protocolo, una ficha de fabricación o un prototipo.
- Cada recurso indica **su origen**: qué conversación, error o experiencia lo produjo.
- Cada recurso se puede usar **sin que ustedes estén presentes** para explicarlo.
- Cada recurso está enlazado desde el README.

### Entrega 3 · Plan de evolución y sostenibilidad

- **Responsabilidades compartidas**: quién facilita, documenta y da la bienvenida, y cada cuánto rota cada tarea.
- **Próximos rituales**: calendario de las siguientes actividades.
- **Cómo recibir a nuevos miembros**: los primeros pasos de quien llega.
- **Señales reales de comunidad**: qué observarán, por ejemplo recurrencia, ayuda entre pares, facilitación distribuida y reutilización de recursos. Distingan esas señales de las métricas de vanidad.
- **Cómo podría otra persona o grupo copiar o continuar la comunidad.**

### Bitácora de activación

Al menos **una activación ejecutada o ensayada**, con:

- fecha, persona anfitriona y participantes;
- dos interacciones concretas entre participantes;
- la comparación entre lo que esperaban (hipótesis) y lo que pasó;
- el ajuste que harán en la siguiente activación.

**Registren solo lo que ocurrió.** Si una actividad no se pudo realizar, anótenlo y expliquen qué harán. Una bitácora honesta vale más que una inventada.

### Retroalimentación y uso de IA

- `docs/retroalimentacion.md`: una tabla con quién comentó, qué dijo, qué ajustaron y dónde se ve el cambio. Incluyan los comentarios recibidos en los retos anteriores.
- `docs/uso-de-ia.md`: distingan las ideas propias, las sugerencias de la IA y las decisiones que tomaron después de revisarlas.

## Lista de verificación antes de entregar

- [ ] El repositorio es **público**, o la docente tiene acceso.
- [ ] El README explica el propósito y cómo empezar a participar en pocos pasos.
- [ ] El README enlaza a las tres entregas, la bitácora y los recursos.
- [ ] Hay un `CONTRIBUTING.md` con una escalera de participación.
- [ ] Hay al menos dos recursos reutilizables, con su origen.
- [ ] Hay al menos una activación registrada con evidencias reales.
- [ ] El plan de sostenibilidad no depende de una sola persona.
- [ ] Hay al menos **un Issue abierto** que invite a contribuir.
- [ ] Están documentados el uso de IA y la retroalimentación incorporada.
- [ ] No hay contraseñas, datos personales ni fotografías sin autorización.

## Cómo entregar

1. Publiquen su repositorio `mi-comunidad` en su cuenta de GitHub.
2. Registren el enlace en el repositorio del curso mediante un Pull Request:
   - **Individual**: agreguen el enlace en el README de su carpeta, `4. Estudiantes/su-usuario/README.md`.
   - **Grupal**: agreguen una fila «Proyecto final» en la tabla de entregas del README de su grupo, en `6. Grupos/`. Lo sube **una sola persona**.
3. Usen como mensaje del Pull Request `Proyecto final - su-usuario` o `Proyecto final - Grupo N`.

Ejemplo de referencia dentro del curso: [`mi-comunidad-modubot`](../4.%20Estudiantes/pablo-hdz/mi-comunidad-modubot/).

## Presentación (5 minutos)

1. ¿Qué comunidad activaron y qué necesidad atiende?
2. ¿Qué ocurrió en la activación y qué cambiaron después?
3. ¿Qué recurso creen que otra persona podría reutilizar?
4. ¿Cómo seguirá la comunidad sin ustedes?

## Evaluación

Se evaluará con la [rúbrica del proyecto integrador](../2.%20Documentos/rubrica_proyecto_cenfotec.md). Cada criterio se califica de 1 a 10 y la nota final es el promedio.

| # | Criterio | Dónde lo buscaremos |
|---|---|---|
| 1 | Diseño del dominio y las trayectorias de participación | Mapa de Comunidad, README |
| 2 | Simplicidad y modularidad de la infraestructura | Estructura del repositorio |
| 3 | Transparencia y documentación | README, CONTRIBUTING, recursos |
| 4 | Experimentación y aprovechamiento de recursos | Bitácora, recursos, uso de IA |
| 5 | Diseño para la evolución y la continuidad | Plan de sostenibilidad |
| 6 | Acatamiento de la retroalimentación | Registro de retroalimentación |

**Un proyecto sencillo, honesto y bien documentado vale más que uno ambicioso a medias.**
