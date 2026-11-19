# 🐾 RescU RefugioDigital

**RescU RefugioDigital** es una plataforma colaborativa y solidaria diseñada para conectar a refugios o asociaciones de rescate animal con personas interesadas en adoptar o ayudar a animales vulnerables en la calle.

---

##  Objetivo del Proyecto

Facilitar y acelerar el proceso de adopción de mascotas, además de proveer una herramienta rápida con **mapa en tiempo real** para que cualquier ciudadano pueda reportar un animal en situación de calle para su posterior rescate.

---

##  Estado Actual del Proyecto

Actualmente el proyecto cuenta con un **prototipo funcional** con interfaces responsivas (Web en HTML/JS y versión inicial en Flutter).

###  Funcionalidades Implementadas (Prototipo Frontend)
- [x] **Autenticación con Roles:** Selección entre cuenta de *Persona Normal* u *Organización/Refugio*.
- [x] **Página Principal / Feed:** Exploración de mascotas en adopción con filtros por especie (perros, gatos, otros).
- [x] **Módulo de Rescate Callejero:** Captura de fotos y marcado de coordenadas geográficas en tiempo real mediante un mapa interactivo.
- [x] **Tienda Solidaria:** Catálogo de productos para apoyar financieramente a los refugios.
- [x] **Barra de Navegación Inferior (Scroll Bar / Dock):** Navegación persistente y fluida tras iniciar sesión.
- [x] **Gestión de Organización:** Panel para publicar y listar mascotas en adopción.

###  Lo que falta por construir o pulir (Pendiente de verificación / desarrollo)
- [ ] Conexión a un **backend real** (Firebase, Supabase o Node.js/PostgreSQL) para persistir datos.
- [ ] Verificación de autenticación de seguridad (Login real con correo y contraseña).
- [ ] Guardado real de imágenes en almacenamiento en la nube (AWS S3, Cloudinary o Firebase Storage).
- [ ] Inclusión de base de datos inicial con **refugios y organizaciones reales**.
- [ ] Pulido de UI/UX y soporte para notificaciones push en móviles.

---

##  ¿Cómo probar el proyecto?

### Opción 1: Probar en el Navegador Web (HTML/JS)
1. Abre el archivo `index.html` directamente en tu navegador (haciendo doble clic).
2. O ejecuta un servidor local como **Live Server** en Visual Studio Code.

### Opción 2: Versión Flutter (Móvil)
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/RescU-RefugioDigital.git
   ```
2. Entra al directorio e instala las dependencias:
   ```bash
   cd RescU-RefugioDigital
   flutter pub get
   ```
3. Ejecuta la aplicación:
   ```bash
   flutter run
   ```

---

#  Guía de Contribución - RescU RefugioDigital

¡Gracias por tu interés en colaborar con **RescU RefugioDigital**! No necesitas ser un programador experto para ayudar a los animales; existen muchas maneras de sumarte al proyecto.

---

##  Formas en las que puedes colaborar

### 1.  Reportar Fallos o Errores (Bugs)
Si al usar la app encuentras un botón que no funciona, una pantalla descuadrada o un error en la carga del mapa:
- Abre una **Issue** en GitHub.
- Describe qué estabas haciendo cuando ocurrió el error.
- Si es posible, adjunta una captura de pantalla.

### 2.  Proponer Nuevas Ideas o Mejoras de Diseño (UI/UX)
¿Tienes una idea para hacer la app más intuitiva o bonita?
- Puedes proponer sugerencias de paletas de colores, íconos o flujos de adopción más sencillos abriendo una **Issue de Propuesta**.

### 3.  Agregar Información de Refugios Reales
Para que la app sea útil en el mundo real, necesitamos datos de refugios, rescatistas independientes y ONGs reales.
- Puedes ayudarnos enviando un listado con: *Nombre del refugio, ciudad/ubicación, contacto (teléfono/correo) y redes sociales*.

### 4.  Difundir y Compartir
- Ayúdanos compartiendo el repositorio o la app con amigos, rescatistas y comunidades de amantes de las mascotas para hacer crecer la red.

