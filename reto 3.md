**\# Nombre del recurso**

Errores comunes de los principiantes en GitHub.

**\## Para qué sirve**

Esta actividad permite identificar, comprender y corregir los tropiezos más habituales al dar los primeros pasos en GitHub y Git, evitando dolores de cabeza y frustraciones en el aprendizaje.

**Qué podrá hacer una persona y en qué situación le resultará útil.**

1. Reconocer patrones de error comunes (como trabajar en la rama incorrecta, perder cambios o cometer información sensible) y aplicar soluciones rápidas y seguras.
2. Ideal para principiantes que están empezando a usar Git/GitHub por su cuenta o en equipo, y necesitan una guía de "primer auxilios" para salir de enredos comunes sin romper sus proyectos.

**\## Qué necesitás**

Una cuenta de GitHub.

Git instalado en la computadora local.

Una terminal (consola) o interfaz gráfica (como VS Code).

Conocimientos previos:

Haber intentado hacer al menos un git clone, git add, git commit y git push.

Materiales, archivos, herramientas y conocimientos previos. Un repositorio de práctica (puede ser uno creado exclusivamente para probar comandos sin miedo a equivocarse).

**\## Cómo hacerlo**

Revisar el top 4 de errores de principiantes y cómo solucionarlos:

Error 1: Trabajar siempre en la rama main (o master)

El problema: Escribir código directamente en la rama principal sin aislar los cambios.

Cómo solucionarlo: Crea siempre una rama nueva antes de empezar a programar con git checkout -b nombre-de-rama (o git switch -c).

Error 2: Olvidar hacer git add o hacer un commit con todo por accidente

El problema: Subir archivos innecesarios (como carpetas de dependencias o configuraciones locales) o dejar cambios sueltos.

Cómo solucionarlo: Usa git status antes de cada commit para ver qué archivos estás añadiendo. Crea un archivo .gitignore para ignorar carpetas pesadas (ej. node_modules).

Error 3: Hacer git push y recibir un error de "rejected" (Non-fast-forward)

El problema: Intentar subir cambios a GitHub cuando el repositorio remoto tiene actualizaciones que tú no tienes en tu computadora.

Cómo solucionarlo: Descarga primero los cambios de tus compañeros con git pull origin main (o la rama correspondiente), resuelve cualquier diferencia y luego vuelve a intentar el git push.

Error 4: Mensajes de commit poco claros

**Pasos concretos para realizar la actividad.**

1\. Configuración inicial (Para prevenir fugas de datos y conflictos)

• Crea un archivo .gitignore robusto: Antes de hacer tu primer commit, añade este archivo en la raíz para evitar subir archivos ejecutables, carpetas de dependencias (node_modules/, venv/) o archivos del sistema (.DS_Store).

• No subas credenciales: Usa variables de entorno (.env) para tus contraseñas o llaves API, y asegúrate de incluir el archivo .env dentro de tu .gitignore.

• Configura tu identidad: Evita que tus aportes aparezcan como "autor desconocido". Ejecuta en tu terminal:

**2\. Flujo de trabajo diario (Para evitar sobrescribir código)**

- **Trabaja siempre en ramas (branches):** Nunca hagas cambios directamente en la rama principal (main o master). Crea una rama para cada tarea:

3\. Antes de enviar cambios (Doble verificación)

• Revisa el estado de tus archivos: Antes de guardar algo, mira qué archivos has modificado y cuáles están listos para enviarse:

4\. Al publicar en GitHub (Buenas prácticas colaborativas)

• Usa Pull Requests (PR): En lugar de fusionar tu código directamente, sube tu rama y abre un Pull Request en la interfaz de GitHub. Esto permite que tú u otros revisen el código visualmente antes de integrarlo.

• Lee los mensajes de error de la terminal: Si un git push falla, la terminal suele decirte exactamente por qué (por ejemplo, que necesitas hacer un pull primero). No fuerces la subida (git push --force) a menos que estés 100% seguro de lo que haces, ya que puedes borrar el trabajo de otros.

**\## Cómo comprobar que funcionó**

Abre tu repositorio de práctica, simula uno de estos escenarios de manera controlada y aplica el comando de corrección correspondiente para perder el miedo a la consola.

**Resultado esperado y una forma de verificarlo.**

El repositorio de GitHub y el entorno local se mantienen sincronizados, limpios, sin archivos basura y con un historial de commits ordenado y fácil de leer.

Ejecutar el comando git status en la terminal y comprobar que el mensaje sea "nothing to commit, working tree clean".

Entrar a la interfaz web de GitHub y verificar que las ramas y los archivos subidos coincidan exactamente con lo esperado.

**\## Qué aprendimos y qué falta resolver**

Asustarse y querer borrar el repositorio completo de la computadora ante el primer error de Git (cuando casi todo se puede solucionar con comandos de control de versiones).

Recomendaciones:

No tengas miedo de equivocarte: haz tus primeras pruebas en un repositorio de "juguete" donde no importe si rompes algo.

Acostúmbrate a usar git status y git log constantemente para saber siempre en qué estado se encuentra tu proyecto.

**Errores frecuentes, recomendaciones y pruebas pendientes.**

Aprender a usar herramientas avanzadas de rescate como git reset, git stash o cómo lidiar con credenciales y tokens de acceso personal (PAT).

**\## Cómo podés contribuir**

**Una acción pequeña, indicando cómo compartir el aporte.**

Acción pequeña: Anota el error de Git que más te haya costado resolver esta semana y compártelo en el grupo de estudio o canal del equipo con su respectiva solución para ayudar a otros principiantes. ¿Hay algún otro error común que te haya pasado?

**\## Autoría y fuentes.**

Esteban Bejerano

Gemini.