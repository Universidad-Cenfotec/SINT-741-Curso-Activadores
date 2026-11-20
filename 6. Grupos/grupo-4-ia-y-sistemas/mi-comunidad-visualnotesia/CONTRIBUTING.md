# Contribuir a VisualNotes AI

¡Gracias por querer aportar! Este proyecto es abierto y está pensado para estudiantes.

## Formas de contribuir

- 🐛 Reportar errores (abre un **Issue**).
- ✨ Proponer funciones o mejoras.
- 📝 Mejorar la documentación.
- 🎨 Aportar diseño o experiencia de usuario.
- 💻 Enviar código mediante **Pull Requests**.

## Escalera de participación

| Nivel | Cómo entrar | Cómo avanzar |
|---|---|---|
| 1. Observador | Leer el [README](README.md) y los [recursos](recursos/) | Entender el propósito y probar la aplicación |
| 2. Probador | Ejecutar la app con la [guía rápida](recursos/guia-de-uso-rapida.md) y generar un kit | Contar qué funcionó y qué no en un Issue |
| 3. Colaborador | Abrir un Issue con un error o enviar un PR con un recurso o mejora | Que otro miembro revise y acepte el PR |
| 4. Facilitador | Dar la bienvenida, revisar PRs y coordinar una sesión | Rotar según el [plan de sostenibilidad](docs/plan-de-sostenibilidad.md#responsabilidades-compartidas) |

No hace falta permiso especial ni pasar los niveles en orden: cada nivel tiene una acción mínima y visible en GitHub. Para empezar, comenta en el [Issue #1](https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/issues/1) qué probaste y qué te gustaría mejorar.

## Flujo de trabajo (Git)

1. Haz un **fork** del repositorio.
2. Crea una rama descriptiva:
   ```bash
   git checkout -b feat/mi-mejora
   ```
3. Realiza tus cambios con commits claros:
   ```bash
   git commit -m "feat: agrega exportación a PDF con portada"
   ```
4. Sube la rama y abre un **Pull Request**:
   ```bash
   git push origin feat/mi-mejora
   ```

## Buenas prácticas

- **Nunca** subas secretos (`.env`, claves de API, tokens).
- Sigue el estilo existente del código (Python/FastAPI y JS vanilla).
- Describe claramente qué cambia y por qué en el PR.
- Verifica que el proyecto arranca correctamente antes de enviar.

## Convención de commits (sugerida)

- `feat:` nueva funcionalidad
- `fix:` corrección de errores
- `docs:` documentación
- `style:` formato/diseño
- `refactor:` reorganización de código
- `chore:` tareas varias

## Código de conducta

Sé respetuoso y constructivo. Revisa [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
