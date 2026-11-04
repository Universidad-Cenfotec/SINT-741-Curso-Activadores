# Plan de sostenibilidad

**Objetivo:** que ModuBot siga creciendo aunque el equipo original deje de participar.

## 1. Nada depende de una sola persona

- **Fuentes editables abiertas:** OpenSCAD (gratuito) y STEP para la carcasa y las vigas, KiCad (gratuito) para la electrónica, y Fusion 360 (`.f3z`) para la estructura. Exportar la estructura a **STEP** es prioridad, para no depender de una licencia de Autodesk.
- **Medidas en un solo lugar:** el [estándar de acople](estandar-de-acople.md) y las variables del `.scad`.
- **Decisiones por escrito:** todo cambio pasa por un issue o un pull request, así la razón queda registrada, sin depender de conversaciones de WhatsApp.
- **Al menos 2 personas con permisos de mantenedor** en todo momento.

## 2. Cómo entra y crece una persona nueva

Las trayectorias están en el [mapa de comunidad](mapa-de-comunidad.md). Para que ese camino funcione:

- Siempre hay al menos 3 issues etiquetados **"buen primer aporte"** (por ejemplo: medir la placa, imprimir la tapa, mejorar una instrucción).
- Quien hace su segundo aporte aceptado puede pedir el rol de **Bienvenida** o de **Curador/a**.

## 3. Rotación de roles

| Momento | Qué se hace |
|---|---|
| Cada versión (aprox. cada 2 meses) | Se revisa la tabla de responsables del mapa de comunidad. Quien quiere dejar un rol lo pasa a alguien que ya contribuyó |
| Al dejar un rol | Checklist de traspaso: issues abiertos asignados, accesos transferidos, nota en la bitácora |
| Si un rol queda vacío 1 mes | Se anuncia en un issue fijado y en el taller siguiente |

## 4. Ritmo de la comunidad

- **Versiones con número** (v0.4, v0.5…) y una nota en la bitácora: qué cambió, qué se probó y qué falta.
- **Un taller o encuentro por versión**, donde se imprime, se prueba y se trae la retroalimentación al repositorio.
- **Indicadores** que se revisan en cada versión:
  - personas distintas que abrieron issues o pull requests;
  - módulos aprobados;
  - medidas pasadas de [EST] a [VERIF];
  - grupos que usaron ModuBot sin ayuda del equipo original.

## 5. Adaptar y bifurcar está permitido

La licencia CC BY-SA 4.0 permite que cualquier grupo haga su propia versión (*fork*), por ejemplo para otra placa. Pedimos que, si el cambio puede servir a todos, se proponga de vuelta como pull request.

## 6. Próximos pasos concretos

1. Medir la IdeaBoard real y validar la carcasa (responsable: *[completar]*).
2. Exportar la estructura de Fusion a STEP y STL (responsable: *[completar]*).
3. Diseñar el primer módulo: el soporte para el sensor ultrasónico HC-SR04 (responsable: *[completar]*).
4. Publicar un código de ejemplo para la IdeaBoard que mueva el robot (responsable: *[completar]*).
5. Probar el cableado de la [guía de conexión](../hardware/electronica/) y confirmar qué sensor ultrasónico usar (responsable: *[completar]*).
