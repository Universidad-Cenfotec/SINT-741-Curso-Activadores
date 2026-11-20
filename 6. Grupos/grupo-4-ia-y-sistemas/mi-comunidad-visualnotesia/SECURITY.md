# Política de seguridad

## Manejo de secretos

- La **API key de Gemini** se lee únicamente de la variable de entorno `GEMINI_API_KEY`.
- **Nunca** escribas claves, tokens o contraseñas en el código ni en archivos versionados.
- El archivo `.env` está incluido en `.gitignore`. No lo subas al repositorio.
- Si una clave se expuso por error, **revócala y genera una nueva** inmediatamente.

## Reportar una vulnerabilidad

Por favor **no** abras un Issue público para vulnerabilidades sensibles.

En su lugar, contacta de forma privada al equipo:

- Usa la función **“Report a vulnerability”** de GitHub: <https://github.com/nexusdigitalsolutionspa-maker/visualnotesia/security/advisories/new> (pestaña *Security* → *Advisories*).
- Si no tienes acceso a esa función, deja un comentario privado tagging al equipo en el repositorio; no publiques detalles del fallo en un Issue abierto.

Incluye, si es posible:

- Descripción del problema y su impacto.
- Pasos para reproducirlo.
- Versión/entorno afectado.
- Cualquier sugerencia de mitigación.

Nos comprometemos a responder lo antes posible y a mantenerte informado del avance.

## Alcance

Este proyecto es un prototipo académico. Aun así, agradecemos los reportes responsables que ayuden a mantener segura la plataforma y a proteger la clave de IA del servidor.
