
# Errores comunes de los principiantes en GitHub

**Grupo 5 — Activación Comunitaria**

**Autor original:** Esteban Bejerano (Esteban2026-source).

**Origen:** Reto 3 — Una experiencia que otra persona pueda continuar.

## 1. ¿Para qué sirve este recurso?

Esta guía busca ayudar a las personas que están comenzando a utilizar Git y GitHub a identificar, comprender y solucionar algunos de los errores más frecuentes.

Su propósito es facilitar la colaboración dentro de nuestra comunidad y evitar que las dificultades técnicas se conviertan en una barrera para participar.

## 2. ¿Qué necesitas?

- Una cuenta de GitHub.
- Git instalado en tu computadora.
- Una terminal o un editor como Visual Studio Code.
- Un repositorio de práctica.
- Conocimientos básicos de git clone, git add, git commit y git push.

Se recomienda realizar las primeras pruebas en un repositorio de práctica para evitar afectar el trabajo de otras personas.

## 3. Errores comunes y cómo solucionarlos

### Error 1: Trabajar directamente en la rama principal

**Problema:** Realizar cambios directamente en la rama main o master puede generar conflictos y afectar el trabajo de otros colaboradores.

**Solución:** Crear una rama independiente antes de comenzar a trabajar.

```bash
git switch -c nombre-de-rama
```

También puedes utilizar:

```bash
git checkout -b nombre-de-rama
```

De esta manera, podrás trabajar en tus cambios sin modificar directamente la rama principal.

### Error 2: Olvidar git add o agregar archivos innecesarios

**Problema:** Algunos cambios pueden quedar fuera del commit o pueden incluirse archivos que no deberían publicarse.

**Solución:** Revisar el estado del repositorio antes de guardar los cambios.

```bash
git status
```

Agregar únicamente los archivos necesarios:

```bash
git add nombre-del-archivo
```

También se recomienda utilizar un archivo .gitignore para excluir archivos y carpetas innecesarias.

Ejemplo:

```gitignore
node_modules/
venv/
.env
.DS_Store
```

Nunca publiques contraseñas, claves de acceso o información confidencial.

### Error 3: Recibir un error al ejecutar git push

**Problema:** GitHub puede rechazar una actualización cuando existen cambios en la rama remota que todavía no están en tu computadora.

**Solución:** Revisar el estado de tu repositorio y descargar los cambios de la rama correspondiente antes de volver a intentar la publicación.

Por ejemplo, si estás trabajando en una rama llamada mi-aporte que ya existe en GitHub:

```bash
git status
git pull origin mi-aporte
```

Si aparecen conflictos, deberás resolverlos antes de continuar.

Después, puedes volver a intentar:

```bash
git push origin mi-aporte
```

Evita utilizar git push --force sin comprender sus consecuencias, ya que podrías sobrescribir el trabajo de otras personas.

### Error 4: Escribir mensajes de commit poco claros

**Problema:** Utilizar mensajes como "cambios", "arreglo" o "actualización" dificulta comprender qué se modificó.

**Solución:** Escribir mensajes breves y descriptivos.

Ejemplos:

```bash
git commit -m "Corrige enlaces de la guía"
git commit -m "Agrega instrucciones de bienvenida"
git commit -m "Actualiza el mapa de comunidad"
```

Esto facilita que otros colaboradores comprendan el historial del proyecto.

## 4. Buenas prácticas para trabajar en equipo

Antes de comenzar a trabajar, verifica que estés en la rama correcta.

```bash
git branch
```

Revisa los archivos modificados antes de realizar un commit.

```bash
git status
```

Configura tu identidad para que tus aportes queden registrados correctamente.

```bash
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

Puedes utilizar el correo privado noreply proporcionado por GitHub si no deseas publicar tu correo personal.

Utiliza Pull Requests para presentar tus cambios y permitir que otras personas los revisen antes de incorporarlos a la rama principal.

## 5. Ejercicio práctico

Para aplicar lo aprendido, realiza la siguiente actividad:

1. Crea un repositorio de práctica en GitHub con un README.
2. Clona el repositorio en tu computadora.
3. Crea una nueva rama llamada mi-primer-aporte.
4. Modifica el archivo README.md.
5. Revisa los cambios utilizando git status.
6. Agrega el archivo modificado.
7. Realiza un commit con un mensaje descriptivo.
8. Publica tu rama en GitHub.
9. Crea un Pull Request.

Puedes utilizar los siguientes comandos después de clonar el repositorio y entrar en su carpeta:

```bash
git switch -c mi-primer-aporte
```

Edita y guarda el archivo README.md antes de continuar.

```bash
git status
git add README.md
git commit -m "Agrega mi primer aporte"
git push -u origin mi-primer-aporte
```

Finalmente, entra al repositorio desde GitHub y crea el Pull Request hacia la rama principal.

## 6. ¿Cómo comprobar que funcionó?

Al finalizar la actividad, verifica que:

- [ ] Creaste una rama independiente.
- [ ] Los cambios aparecen en GitHub.
- [ ] El commit tiene un mensaje descriptivo.
- [ ] No publicaste archivos innecesarios ni información confidencial.
- [ ] El Pull Request muestra los cambios realizados.

También puedes ejecutar:

```bash
git status
```

Si no quedan cambios locales pendientes, debería aparecer un mensaje similar a:

```text
nothing to commit, working tree clean
```

## 7. Aprendizajes y recomendaciones

Equivocarse al utilizar Git y GitHub forma parte del proceso de aprendizaje.

No es necesario eliminar todo el repositorio cuando aparece un error. Antes de realizar cambios importantes, revisa el mensaje de error y utiliza comandos como git status y git log para comprender el estado del proyecto.

Recomendamos practicar en repositorios de prueba y solicitar ayuda cuando sea necesario.

## 8. ¿Cómo puedes contribuir a este recurso?

Si encuentras un error frecuente que no aparece en esta guía, puedes compartirlo con nuestra comunidad.

Incluye la siguiente información:

- Nombre o descripción del error.
- Situación en la que ocurrió.
- Solución que utilizaste.
- Resultado obtenido.

Puedes compartir tu aporte mediante una Issue o proponer una modificación de este documento mediante un Pull Request.

Consulta nuestra [Guía de contribución](../CONTRIBUTING.md) para conocer cómo participar.

## 9. Autoría y origen

Este recurso surge del Reto 3 del curso de Activadores de Comunidades de Práctica, a partir de la identificación de dificultades frecuentes al comenzar a utilizar Git y GitHub.

- **Autor original:** Esteban Bejerano.
- **Usuario de GitHub:** Esteban2026-source.
- **Grupo:** Grupo 5 — Activación Comunitaria.
- **Apoyo de IA mencionado en el documento original:** Gemini.
- **Adaptación para el proyecto final:** organización, ampliación de ejemplos e instrucciones con apoyo de ChatGPT, pendiente de revisión por el grupo.

---

**Grupo 5 — Activación Comunitaria**

