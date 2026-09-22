<div align="center">
  <img src="img/logo-cenfotec.png" alt="Fundacion CENFOTEC" height="60">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="img/logo-senacyt.png" alt="SENACYT" height="52">
</div>

---

# Guia para estudiantes: como subir tus trabajos

**SINT-741 — Curso Activadores** · Universidad Cenfotec

---

## Que necesitas antes de empezar

- Una cuenta en **GitHub** — creala gratis en https://github.com/signup
- Avisarle al profesor tu usuario de GitHub para que cree tu carpeta
- El enlace del repositorio del curso: https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores

> **El profesor crea tu carpeta dentro de `5. Estudiantes/` con tu nombre. Tu solo subes tus trabajos ahi adentro.**

---

## Como funciona en 3 palabras

| Termino | Que significa |
|---------|---------------|
| **Fork** | Una copia del repositorio del curso en tu propia cuenta. Se hace una sola vez. |
| **Commit** | Guardar un cambio con un mensaje que explica que hiciste. |
| **Pull Request** | Avisar al profesor que subiste algo para que lo pueda ver y aceptar. |

---

## PASO 1 — Crea tu Fork (solo la primera vez)

Entra al repositorio del curso y haz clic en el boton **Fork** arriba a la derecha.

![Paso 1a](img/screenshot-1790097334387-0.jpg)

*El boton Fork esta arriba a la derecha, junto a Watch y Star.*

Se abre una pantalla de confirmacion. Deja todo como esta y haz clic en **Create fork**.

![Paso 1b](img/screenshot-1790097357276-1.jpg)

*Deja el nombre como esta y haz clic en Create fork.*

En segundos GitHub te lleva a **tu propia copia** del repositorio. Lo notas porque arriba aparece tu usuario antes del nombre del repo.

> **Esto se hace UNA SOLA VEZ.** Para las siguientes entregas, tu fork ya existe — ve directo al Paso 2.

---

## PASO 2 — Entra a tu carpeta

Dentro de tu fork, navega a **5. Estudiantes** y abre la subcarpeta **con tu nombre**.

Esa es tu carpeta. Solo sube archivos ahi adentro. No toques las carpetas de tus companeros.

---

## PASO 3 — Sube tus archivos

Estando dentro de tu carpeta, haz clic en **Add file** y luego en **Upload files**.

![Paso 3a](img/screenshot-1790097382372-2.jpg)

*Haz clic en Add file y elige Upload files.*

Arrastra tus archivos a la zona punteada, o haz clic en **choose your files**.

![Paso 3b](img/screenshot-1790097398803-3.jpg)

*Arrastra tus archivos aqui o buscalos con choose your files.*

---

## PASO 4 — Guarda y crea el Pull Request

Baja hasta **Commit changes** al final de la pagina y haz esto en orden:

**1.** Escribe que estas entregando. Ejemplo: `Entrega laboratorio 1 - Tu Nombre`

**2.** Selecciona **Create a new branch for this commit and start a pull request**

**3.** Haz clic en **Propose changes**

![Paso 4](img/screenshot-1790097448182-4.jpg)

*Elige siempre la segunda opcion y haz clic en Propose changes.*

> **Importante:** Si dejas la primera opcion marcada, el cambio queda solo en tu copia y el profesor no lo ve.

---

## PASO 5 — Confirma el Pull Request

GitHub te lleva a la pantalla de comparacion. Verifica que la flecha vaya **desde tu fork hacia el repositorio del curso, rama main**.

Escribe un titulo claro y haz clic en **Create pull request**.

![Paso 5](img/screenshot-1790097459893-5.jpg)

*Verifica origen y destino, luego haz clic en Create pull request.*

**Listo.** Tu entrega quedo registrada con fecha y hora. El profesor recibe una notificacion automatica.

---

## Que pasa despues

El profesor revisa tu Pull Request y puede:

- **Aceptarlo** — tus archivos quedan en el repositorio. Entrega completada.
- **Dejarte comentarios** — corrige tus archivos y vuelve a subirlos. El PR se actualiza solo.

---

## Para tu siguiente entrega

Antes de subir un trabajo nuevo, sincroniza tu fork:

1. Entra a tu fork en GitHub
2. Si aparece un aviso de desactualizado, haz clic en **Sync fork** > **Update branch**
3. Luego repite desde el **Paso 2**

---

## Reglas

| Regla | Detalle |
|-------|---------|
| Donde subes | Solo dentro de tu subcarpeta en `5. Estudiantes/`. Nunca en las de otros. |
| Nombres | Minuscula y guiones: `lab-01-informe.pdf` |
| Un PR por entrega | No mezcles dos trabajos en el mismo PR. |
| Mensajes | Escribe siempre que entregas: `Entrega lab-01 - Tu Nombre`. |
| No subir | Contrasenas, tokens, archivos generados automaticamente. |

> **Este repositorio es publico.** Revisa bien tus archivos antes de entregar.

---

## Algo salio mal?

| Problema | Solucion |
|----------|----------|
| No veo el boton Fork | Inicia sesion en GitHub. |
| Subi el archivo pero el profesor no lo ve | Falta el Pull Request (Paso 5). |
| "This branch is out-of-date" | Haz clic en **Sync fork** > **Update branch**. |
| Me equivoque de carpeta | Abre el archivo en tu fork, clic en el lapiz, cambia la ruta. |
| Subi algo que no debia | Avisale al profesor ANTES de crear el PR. |

---

## Opcion avanzada: Git desde tu computadora

```bash
# Configuracion inicial (una sola vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
git clone https://github.com/TU-USUARIO/SINT-741-Curso-Activadores.git
cd SINT-741-Curso-Activadores
git remote add upstream https://github.com/Universidad-Cenfotec/SINT-741-Curso-Activadores.git

# Cada entrega
git checkout main
git pull upstream main
git checkout -b entrega-lab-01
git add .
git commit -m "Entrega lab-01 - Tu Nombre"
git push origin entrega-lab-01
```

Luego entra a tu fork en GitHub y haz clic en **Compare & pull request**.

---

<div align="center">
  <sub>SINT-741 Curso Activadores · Universidad Cenfotec · Financiado por SENACYT</sub>
</div>
