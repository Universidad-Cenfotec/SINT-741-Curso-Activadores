/**
 * VisualNotes AI - Main Application Controller
 * Navegación modular por submenús, previsualización de Markdown enriquecida y guías visuales gráficas
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicialización de módulos
  auth.checkCurrentSession();
  setupSubnavNavigation();
  setupInputTabs();
  setupFileDropzones();
  setupLiveAudioRecording();
  setupFormSubmission();
  setupDiagramControls();
  setupMarkdownViewModes();
  setupNotesLibrary();
  setupSoundToggle();
  setupPdfAndTranscriptionActions();

  // Cargar lista inicial de apuntes desde SQLite
  loadNotesList();

  // Soporte de enlaces profundos (?view=...&load=latest) para demos y capturas
  handleDeepLink();

  // Re-encajar los diagramas al cambiar el tamaño u orientación de la ventana.
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const vg = document.getElementById("view-visual-guides");
      if (vg && vg.classList.contains("active") && currentVisualResources.length) {
        renderVisualGuides(currentVisualResources);
      }
      const cm = document.getElementById("view-concept-map");
      if (cm && cm.classList.contains("active") && window.conceptMap) {
        window.conceptMap.resize();
      }
    }, 250);
  });
});

async function handleDeepLink() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("load") === "latest") {
    try {
      const res = await fetch("/api/notes");
      if (res.ok) {
        const data = await res.json();
        const notes = data.notes || [];
        if (notes.length > 0) {
          loadNoteIntoViewer(notes[0]);
        }
      }
    } catch (e) {
      // silencioso
    }
  }

  const view = params.get("view");
  if (view && window.navigateToView) {
    window.navigateToView(view);
  }
}


// Estado global del apunte actualmente cargado (para exportaciones)
let currentStudyData = null;
// Últimos datos generados, para re-renderizar diagramas al mostrar su vista.
let currentVisualResources = [];
let currentMermaidCode = "";
let currentMapData = null;
let currentMapSources = [];
let currentNoteId = null;


// ========================================================
// NOTIFICACIONES TOAST CON ICONOS PROFESIONALES
// ========================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-msg toast-${type}`;

  const iconSvg = type === "success" 
    ? `<svg class="svg-icon" style="color:#059669;" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg class="svg-icon" style="color:#dc2626;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ========================================================
// NAVEGACIÓN MODULAR POR SUBMENÚS (VISTAS LIMPIAS)
// ========================================================
function setupSubnavNavigation() {
  const subnavItems = document.querySelectorAll(".subnav-item");
  const brandBtn = document.getElementById("brand-logo-btn");

  const activateView = (viewKey) => {
    sounds.playClick();

    subnavItems.forEach((btn) => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`.subnav-item[data-view="${viewKey}"]`);
    if (activeBtn) {
      activeBtn.classList.add("active");
      try {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } catch (e) {}
    }

    document.querySelectorAll(".view-panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    const activePanel = document.getElementById(`view-${viewKey}`);
    if (activePanel) {
      activePanel.classList.add("active");
    }

    // Re-renderizar los diagramas cuando su vista se vuelve visible.
    // Evita esquemas en blanco si se generaron mientras el panel estaba oculto.
    if (viewKey === "visual-guides" && currentVisualResources.length) {
      renderVisualGuides(currentVisualResources);
    }
    if (viewKey === "concept-map") {
      renderConceptMapView();
    }

    if (viewKey === "library") {
      loadNotesList();
    }
  };

  subnavItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      activateView(view);
    });
  });

  if (brandBtn) {
    brandBtn.addEventListener("click", () => {
      activateView("create");
    });
  }

  // Exponer para cambio programático
  window.navigateToView = activateView;
}

// ========================================================
// PESTAÑAS DE MODO DE ENTRADA (TEXTO / AUDIO / IMAGEN)
// ========================================================
let currentInputType = "text";

function setupInputTabs() {
  const segmentBtns = document.querySelectorAll(".segment-btn[data-type]");
  segmentBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sounds.playClick();
      segmentBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentInputType = btn.getAttribute("data-type");

      document.querySelectorAll(".input-panel-section").forEach((p) => {
        p.style.display = "none";
      });

      const target = document.getElementById(`panel-${currentInputType}`);
      if (target) {
        target.style.display = "block";
      }
    });
  });
}

// ========================================================
// DROPZONES Y SELECCIÓN DE ARCHIVOS
// ========================================================
let selectedAudioFile = null;
let selectedImageFile = null;

function setupFileDropzones() {
  // Imagen (pizarra / apuntes de cuaderno)
  const imageDrop = document.getElementById("image-dropzone");
  const imageInput = document.getElementById("image-file-input");
  const imagePreview = document.getElementById("image-file-preview");
  const imageName = document.getElementById("image-file-name");
  const btnRemoveImage = document.getElementById("btn-remove-image");

  if (imageDrop && imageInput) {
    imageDrop.addEventListener("click", () => {
      sounds.playClick();
      imageInput.click();
    });

    imageInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        selectedImageFile = e.target.files[0];
        imageName.textContent = selectedImageFile.name;
        imagePreview.classList.add("active");
        sounds.playClick();
      }
    });

    if (btnRemoveImage) {
      btnRemoveImage.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedImageFile = null;
        imageInput.value = "";
        imagePreview.classList.remove("active");
        sounds.playDelete();
      });
    }
  }

  // Audio (grabaciones o archivos de voz)
  const audioDrop = document.getElementById("audio-dropzone");
  const audioFileInput = document.getElementById("audio-file-input");
  const audioFilePreview = document.getElementById("audio-file-preview");
  const audioFileName = document.getElementById("audio-file-name");
  const btnRemoveAudio = document.getElementById("btn-remove-audio");

  if (audioDrop && audioFileInput) {
    audioDrop.addEventListener("click", () => {
      sounds.playClick();
      audioFileInput.click();
    });

    audioFileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        selectedAudioFile = e.target.files[0];
        audioFileName.textContent = selectedAudioFile.name;
        audioFilePreview.classList.add("active");
        sounds.playClick();
      }
    });

    if (btnRemoveAudio) {
      btnRemoveAudio.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedAudioFile = null;
        audioFileInput.value = "";
        audioFilePreview.classList.remove("active");
        sounds.playDelete();
      });
    }
  }
}

// ========================================================
// GRABADORA EN VIVO DE AUDIO
// ========================================================
let liveRecordedBlob = null;

function setupLiveAudioRecording() {
  const btnToggleRecord = document.getElementById("btn-toggle-record");
  const recordTimer = document.getElementById("record-timer");
  const audioPlayer = document.getElementById("recorded-audio-player");
  const recordStatus = document.getElementById("record-status-label");

  if (!btnToggleRecord) return;

  btnToggleRecord.addEventListener("click", async () => {
    if (!recorder.isRecording) {
      try {
        await recorder.start((timeString) => {
          if (recordTimer) recordTimer.textContent = timeString;
        });
        btnToggleRecord.classList.add("btn-danger");
        btnToggleRecord.innerHTML = `
          <svg class="svg-icon" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
          Detener Grabación
        `;
        if (recordStatus) recordStatus.textContent = "Grabando audio de clase en vivo...";
      } catch (err) {
        alert("No se pudo acceder al micrófono. Por favor verifique los permisos del navegador.");
      }
    } else {
      liveRecordedBlob = await recorder.stop();
      btnToggleRecord.classList.remove("btn-danger");
      btnToggleRecord.innerHTML = `
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
        Iniciar Grabación
      `;
      if (recordStatus) recordStatus.textContent = "Grabación lista para procesar.";

      if (liveRecordedBlob && audioPlayer) {
        audioPlayer.src = URL.createObjectURL(liveRecordedBlob);
        audioPlayer.style.display = "block";
      }
    }
  });
}

// ========================================================
// PROCESAMIENTO CON GEMINI AI
// ========================================================
function setupFormSubmission() {
  const btnGenerate = document.getElementById("btn-generate-map");
  const loadingOverlay = document.getElementById("loading-overlay");
  const loadingStatusText = document.getElementById("loading-status-text");

  if (!btnGenerate) return;

  btnGenerate.addEventListener("click", async () => {
    sounds.playClick();

    const selectedModel = document.getElementById("model-select").value;
    const textDirect = document.getElementById("text-content-input").value.trim();
    const contextNotes = document.getElementById("context-notes-input").value.trim();

    const formData = new FormData();
    formData.append("input_type", currentInputType);
    formData.append("model", selectedModel);

    const token = auth.getToken();
    if (token) {
      formData.append("token", token);
    }

    if (currentInputType === "text") {
      if (!textDirect) {
        showToast("Por favor ingresa texto o notas de la clase para continuar.", "error");
        return;
      }
      formData.append("text_content", textDirect);
    } else if (currentInputType === "audio") {
      if (liveRecordedBlob) {
        formData.append("file", liveRecordedBlob, "grabacion_clase.webm");
      } else if (selectedAudioFile) {
        formData.append("file", selectedAudioFile);
      } else {
        showToast("Debes grabar un audio o seleccionar un archivo de audio.", "error");
        return;
      }
      if (contextNotes) formData.append("text_content", contextNotes);
    } else if (currentInputType === "image") {
      if (!selectedImageFile) {
        showToast("Debes subir una imagen de pizarra o apunte de cuaderno.", "error");
        return;
      }
      formData.append("file", selectedImageFile);
      if (contextNotes) formData.append("text_content", contextNotes);
    }

    // Activar loader con textos rotativos
    if (loadingOverlay) loadingOverlay.classList.add("active");
    btnGenerate.disabled = true;

    const statusSteps = [
      "Extrayendo entidades y conceptos clave con Gemini...",
      "Construyendo grafo jerárquico del Mapa Conceptual...",
      "Generando esquemas gráficos y modelos mentales visuales...",
      "Redactando apunte estructurado en formato Markdown (.md)...",
      "Compilando preguntas de autoevaluación y recursos en video..."
    ];
    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex = (stepIndex + 1) % statusSteps.length;
      if (loadingStatusText) loadingStatusText.textContent = statusSteps[stepIndex];
    }, 2000);

    try {
      const response = await fetch("/api/process", {
        method: "POST",
        body: formData
      });

      clearInterval(interval);
      if (loadingOverlay) loadingOverlay.classList.remove("active");
      btnGenerate.disabled = false;

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Error en el servidor al procesar el apunte.");
      }

      const result = await response.json();
      const aiData = result.data;

      // Sonido de éxito
      sounds.playSuccess();
      showToast("¡Apunte procesado con éxito!");

      // Poblar todas las vistas
      populateResultsUI(aiData, result.note);

      // Redirigir automáticamente a la vista de Mapa Conceptual
      window.navigateToView("concept-map");

    } catch (err) {
      clearInterval(interval);
      if (loadingOverlay) loadingOverlay.classList.remove("active");
      btnGenerate.disabled = false;
      showToast(err.message, "error");
    }
  });
}

// ========================================================
// POBLAR TODAS LAS VISTAS MODULARES CON DATOS DE IA
// ========================================================
function populateResultsUI(aiData, savedNote) {
  const title = aiData.title || "Apunte Universitario";
  const subject = aiData.subject || "General";
  const model = aiData.used_model || "Gemini AI";

  // Guardar estado global para exportaciones
  currentStudyData = aiData;
  currentMermaidCode = aiData.mermaid_code || "";
  currentNoteId = savedNote && savedNote.id ? savedNote.id : null;

  // Mapa conceptual estructurado (grafo editable) si la IA lo entregó
  if (Array.isArray(aiData.concepts) && aiData.concepts.length) {
    currentMapData = { concepts: aiData.concepts, relations: aiData.relations || [] };
  } else if (savedNote && savedNote.map_data && Array.isArray(savedNote.map_data.concepts) && savedNote.map_data.concepts.length) {
    currentMapData = savedNote.map_data;
  } else {
    currentMapData = null;
  }

  // Fragmentos numerados del texto para vincular la evidencia de cada concepto.
  // Se prefiere el texto original (transcripción) porque la evidencia suele ser literal.
  currentMapSources = splitIntoFragments(
    (aiData.transcription || "").trim() || (aiData.clean_text || aiData.cleanText || "")
  );

  // Actualizar indicador superior
  const indicator = document.getElementById("current-note-indicator");
  const topTitle = document.getElementById("top-active-note-title");
  const topSubject = document.getElementById("top-active-note-subject");
  if (indicator && topTitle && topSubject) {
    topTitle.textContent = title;
    topSubject.textContent = subject;
    indicator.style.display = "inline-flex";
  }

  // 1. Vista de Mapa Conceptual
  const titleEl = document.getElementById("current-note-title");
  const subjectBadge = document.getElementById("current-note-subject");
  const modelBadge = document.getElementById("current-note-model");

  if (titleEl) titleEl.textContent = title;
  if (subjectBadge) subjectBadge.textContent = subject;
  if (modelBadge) modelBadge.textContent = `Modelo: ${model}`;

  if (aiData.mermaid_code) {
    const codeEditor = document.getElementById("mermaid-code-editor");
    if (codeEditor) codeEditor.value = aiData.mermaid_code;
  }

  // Renderiza el mapa interactivo (o el diagrama Mermaid como respaldo)
  renderConceptMapView();

  // 2. Vista de Guías Visuales y Esquemas Gráficos
  renderVisualGuides(aiData.visual_resources || []);

  // 3. Vista de Documento Markdown (.md)
  renderMarkdownDocument(aiData.markdown_doc || "");

  // 4. Vista de Resumen y Quiz
  const summaryEl = document.getElementById("res-summary-text");
  if (summaryEl) summaryEl.textContent = aiData.summary || "Sin resumen disponible.";

  const keyPointsList = document.getElementById("res-key-points-list");
  if (keyPointsList) {
    keyPointsList.innerHTML = "";
    const points = aiData.key_points || [];
    points.forEach((pt) => {
      const li = document.createElement("li");
      li.className = "point-chip";
      li.innerHTML = `<strong>•</strong> ${pt}`;
      keyPointsList.appendChild(li);
    });
  }

  const quizContainer = document.getElementById("res-quiz-container");
  if (quizContainer) {
    quizContainer.innerHTML = "";
    const quizList = aiData.quiz || [];
    quizList.forEach((q, idx) => {
      const div = document.createElement("div");
      div.className = "quiz-card-item";
      div.innerHTML = `
        <div class="quiz-question-title">${idx + 1}. ${q.question}</div>
        <button class="btn btn-secondary btn-sm toggle-answer-btn" style="padding:0.35rem 0.85rem; font-size:0.8rem;">
          Ver respuesta
        </button>
        <div class="quiz-answer-box">${q.answer}</div>
      `;
      const toggleBtn = div.querySelector(".toggle-answer-btn");
      const ans = div.querySelector(".quiz-answer-box");
      toggleBtn.addEventListener("click", () => {
        sounds.playClick();
        if (ans.style.display === "block") {
          ans.style.display = "none";
          toggleBtn.textContent = "Ver respuesta";
        } else {
          ans.style.display = "block";
          toggleBtn.textContent = "Ocultar respuesta";
        }
      });
      quizContainer.appendChild(div);
    });
  }

  // 4b. Cronología y tablas comparativas
  renderTimeline(aiData.events || (savedNote && savedNote.map_data && savedNote.map_data.events) || []);
  renderComparisonTables(aiData.tables || (savedNote && savedNote.map_data && savedNote.map_data.tables) || []);

  // 5. Vista de Transcripción, Descripción, Palabras Clave y Apuntes
  const descEl = document.getElementById("res-audio-description");
  if (descEl) {
    descEl.textContent = aiData.audio_description || aiData.description || "Sin descripción disponible.";
  }

  const keywordsContainer = document.getElementById("res-keywords-container");
  if (keywordsContainer) {
    keywordsContainer.innerHTML = "";
    const keywords = aiData.keywords || [];
    if (keywords.length === 0) {
      keywordsContainer.innerHTML = `<span class="keyword-chip" style="color: var(--text-muted);">Sin palabras clave aún.</span>`;
    } else {
      keywords.forEach((kw) => {
        const chip = document.createElement("span");
        chip.className = "keyword-chip";
        chip.textContent = kw;
        keywordsContainer.appendChild(chip);
      });
    }
  }

  const notesContainer = document.getElementById("res-notes-container");
  if (notesContainer) {
    const notes = aiData.notes || aiData.notes_text || "";
    if (notes && window.marked) {
      try {
        notesContainer.innerHTML = window.marked.parse(notes);
      } catch (e) {
        notesContainer.innerHTML = `<pre style="white-space:pre-wrap;">${notes}</pre>`;
      }
    } else {
      notesContainer.innerHTML = `<p class="summary-paragraph" style="color: var(--text-muted);">Sin apuntes estructurados disponibles.</p>`;
    }
  }

  const cleanTextEl = document.getElementById("res-clean-text");
  if (cleanTextEl) {
    cleanTextEl.innerHTML = formatPlainText(
      aiData.clean_text || aiData.cleanText || "",
      "Sin contenido ordenado disponible."
    );
  }

  const transcriptionEl = document.getElementById("res-transcription-text");
  if (transcriptionEl) {
    transcriptionEl.innerHTML = formatPlainText(
      aiData.transcription || "",
      "Sin transcripción disponible para este material."
    );
  }

  // 6. Vista de Videos y Enlaces Web
  renderWebResources(aiData.study_links || {});
}

// Convierte texto plano en párrafos HTML seguros, conservando saltos de línea
function formatPlainText(text, emptyMessage) {
  if (!text || !text.trim()) {
    return `<p class="summary-paragraph" style="color: var(--text-muted);">${emptyMessage}</p>`;
  }
  const safe = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const paragraphs = safe
    .split(/\n{2,}/)
    .map((block) => {
      const content = block.trim().replace(/\n/g, "<br>");
      return content ? `<p class="summary-paragraph">${content}</p>` : "";
    })
    .join("");
  return paragraphs;
}

// ========================================================
// RENDERIZADO DE GUÍAS VISUALES CON DIAGRAMAS MERMAID
// ========================================================
function renderVisualGuides(visualList) {
  const container = document.getElementById("visual-guides-container");
  if (!container) return;

  if (visualList.length === 0) {
    visualList = [
      {
        title: "Flujo de Operación y Procesamiento",
        category: "Diagrama Operativo",
        description: "Representación secuencial paso a paso de los datos y transformaciones del tema.",
        diagram_code: "flowchart LR\n  A[\"Entrada Inicial\"] --> B[\"Algoritmo / Proceso\"] --> C[\"Resultado / Salida\"]",
        steps: [
          { step: 1, title: "Recepción", detail: "Entrada de parámetros y condiciones del problema." },
          { step: 2, title: "Procesamiento", detail: "Cálculo y transformaciones según las reglas teóricas." },
          { step: 3, title: "Salida", detail: "Estado alcanzado y verificación de resultados." }
        ]
      }
    ];
  }

  currentVisualResources = visualList;

  container.innerHTML = "";

  visualList.forEach((guide, idx) => {
    const card = document.createElement("div");
    card.className = "visual-guide-card";

    const diagramId = `visual-diagram-frame-${idx}`;

    let stepsHtml = "";
    if (guide.steps && guide.steps.length > 0) {
      stepsHtml = `<div class="visual-steps-timeline">` + guide.steps.map(s => `
        <div class="visual-step-row">
          <div class="step-num-badge">${s.step}</div>
          <div>
            <div class="step-content-title">${s.title}</div>
            <div class="step-content-detail">${s.detail}</div>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    card.innerHTML = `
      <div>
        <div class="guide-badge-row">
          <span class="pill-badge pill-primary">${guide.category || "Guía Visual"}</span>
        </div>
        <h4 class="guide-title" style="margin-top:0.4rem;">${guide.title}</h4>
        <p class="guide-desc">${guide.description}</p>
      </div>

      <!-- Lienzo para diagrama gráfico rendered -->
      <div class="visual-diagram-frame" id="${diagramId}">
        <span style="font-size:0.8rem; color:#94a3b8;">Cargando esquema gráfico...</span>
      </div>

      ${stepsHtml}
    `;

    container.appendChild(card);

    // Renderizar el diagrama Mermaid dentro del marco
    const frameEl = document.getElementById(diagramId);
    if (frameEl && guide.diagram_code) {
      diagram.renderToElement(frameEl, guide.diagram_code);
    } else if (frameEl) {
      frameEl.innerHTML = `
        <div style="text-align:center; padding:1rem; color:var(--text-muted); font-size:0.85rem;">
          <svg class="svg-icon" style="width:36px; height:36px; color:#cbd5e1; margin-bottom:0.4rem;" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/></svg>
          <div>Esquema conceptual activo</div>
        </div>
      `;
    }
  });
}

// ========================================================
// RENDERIZADO RICO DE DOCUMENTO MARKDOWN (.MD)
// ========================================================
function renderMarkdownDocument(rawMarkdown) {
  const renderedView = document.getElementById("markdown-rendered-view");
  const sourceView = document.getElementById("markdown-doc-viewer");

  if (sourceView) {
    sourceView.value = rawMarkdown;
  }

  if (renderedView && window.marked) {
    try {
      renderedView.innerHTML = window.marked.parse(rawMarkdown);
    } catch (e) {
      renderedView.innerHTML = `<pre style="white-space:pre-wrap;">${rawMarkdown}</pre>`;
    }
  }
}

function setupMarkdownViewModes() {
  const btnPreview = document.getElementById("btn-md-preview-mode");
  const btnSource = document.getElementById("btn-md-source-mode");
  const renderedContainer = document.getElementById("markdown-rendered-view");
  const sourceContainer = document.getElementById("markdown-source-view");

  if (btnPreview && btnSource) {
    btnPreview.addEventListener("click", () => {
      sounds.playClick();
      btnPreview.classList.add("active");
      btnSource.classList.remove("active");
      if (renderedContainer) renderedContainer.style.display = "block";
      if (sourceContainer) sourceContainer.style.display = "none";
    });

    btnSource.addEventListener("click", () => {
      sounds.playClick();
      btnSource.classList.add("active");
      btnPreview.classList.remove("active");
      if (renderedContainer) renderedContainer.style.display = "none";
      if (sourceContainer) sourceContainer.style.display = "block";
    });
  }

  // Copiar Markdown
  const btnCopy = document.getElementById("btn-copy-markdown");
  const sourceView = document.getElementById("markdown-doc-viewer");

  if (btnCopy && sourceView) {
    btnCopy.addEventListener("click", async () => {
      sounds.playClick();
      if (!sourceView.value) {
        showToast("No hay documento Markdown disponible.", "error");
        return;
      }
      try {
        await navigator.clipboard.writeText(sourceView.value);
        showToast("Documento Markdown copiado al portapapeles.");
      } catch (e) {
        sourceView.select();
        document.execCommand("copy");
        showToast("Documento Markdown copiado al portapapeles.");
      }
    });
  }

  // Descargar Markdown
  const btnDownload = document.getElementById("btn-download-markdown");
  if (btnDownload && sourceView) {
    btnDownload.addEventListener("click", () => {
      sounds.playClick();
      if (!sourceView.value) {
        showToast("No hay documento Markdown para descargar.", "error");
        return;
      }
      const titleEl = document.getElementById("current-note-title");
      const rawTitle = titleEl ? titleEl.textContent : "apunte_estudio";
      const filename = rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 35) + ".md";

      const blob = new Blob([sourceView.value], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Archivo "${filename}" descargado con éxito.`);
    });
  }
}

// ========================================================
// EXPORTACIÓN A PDF Y COPIADO DE TRANSCRIPCIÓN
// ========================================================
function setupPdfAndTranscriptionActions() {
  const btnExportPdf = document.getElementById("btn-export-pdf");
  if (btnExportPdf) {
    btnExportPdf.addEventListener("click", () => {
      sounds.playClick();
      exportNoteToPdf();
    });
  }

  const btnCopyTranscription = document.getElementById("btn-copy-transcription");
  if (btnCopyTranscription) {
    btnCopyTranscription.addEventListener("click", async () => {
      sounds.playClick();
      const source = currentStudyData ? currentStudyData.transcription : "";
      if (!source || !source.trim()) {
        showToast("No hay transcripción disponible para copiar.", "error");
        return;
      }
      try {
        await navigator.clipboard.writeText(source);
        showToast("Transcripción copiada al portapapeles.");
      } catch (e) {
        showToast("No se pudo copiar la transcripción.", "error");
      }
    });
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function textToHtmlBlocks(text) {
  if (!text || !text.trim()) return "";
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${escapeHtml(block).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function buildPrintableHtml(data) {
  const title = escapeHtml(data.title || "Apunte de Estudio");
  const subject = escapeHtml(data.subject || "General");
  const description = textToHtmlBlocks(data.audio_description || data.description || "");
  const summary = textToHtmlBlocks(data.summary || "");
  const keywords = Array.isArray(data.keywords) ? data.keywords : [];
  const notesHtml = (data.notes || data.notes_text)
    ? (window.marked ? window.marked.parse(data.notes || data.notes_text) : textToHtmlBlocks(data.notes))
    : "";
  const cleanText = textToHtmlBlocks(data.clean_text || data.cleanText || "");
  const transcription = textToHtmlBlocks(data.transcription || "");

  const keyPoints = (data.key_points || [])
    .map((pt) => `<li>${escapeHtml(pt)}</li>`)
    .join("");

  const quiz = (data.quiz || [])
    .map((q, i) => `<div class="q-item"><strong>${i + 1}. ${escapeHtml(q.question)}</strong><p class="q-answer">${escapeHtml(q.answer)}</p></div>`)
    .join("");

  // Diagrama Mermaid renderizado (SVG) desde el lienzo actual
  let diagramSvg = "";
  const svgEl = document.querySelector("#diagram-canvas svg");
  if (svgEl) {
    diagramSvg = new XMLSerializer().serializeToString(svgEl);
  } else if (data.mermaid_code) {
    diagramSvg = `<pre class="mermaid-fallback">${escapeHtml(data.mermaid_code)}</pre>`;
  }

  const keywordsHtml = keywords.length
    ? `<ul class="kw-list">${keywords.map((k) => `<li>${escapeHtml(k)}</li>`).join("")}</ul>`
    : "<p><em>Sin palabras clave.</em></p>";

  const links = data.study_links || {};
  const linkList = (arr, labelKey) => (arr || [])
    .map((item) => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a> — <em>${escapeHtml(item[labelKey] || "")}</em></li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", Arial, sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 32px 40px; }
  h1 { font-size: 26px; color: #0f172a; border-bottom: 3px solid #6366f1; padding-bottom: 8px; margin-bottom: 4px; }
  h2 { font-size: 19px; color: #4338ca; margin-top: 28px; border-left: 4px solid #6366f1; padding-left: 10px; }
  h3 { font-size: 15px; color: #334155; margin-top: 18px; }
  .meta { color: #64748b; font-size: 13px; margin-bottom: 16px; }
  p { margin: 6px 0; font-size: 13.5px; }
  ul, ol { margin: 6px 0 6px 22px; font-size: 13.5px; }
  li { margin-bottom: 4px; }
  .kw-list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
  .kw-list li { background: #eef2ff; color: #4338ca; border-radius: 999px; padding: 3px 12px; font-size: 12.5px; font-weight: 600; }
  .q-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 14px; margin-bottom: 10px; }
  .q-answer { color: #475569; }
  .diagram { text-align: center; margin-top: 10px; }
  .diagram svg { max-width: 100%; height: auto; }
  .mermaid-fallback { background: #f1f5f9; padding: 10px; border-radius: 6px; font-size: 12px; }
  footer { margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 10px; font-size: 11.5px; color: #94a3b8; text-align: center; }
  @media print { body { padding: 0; } h2 { page-break-after: avoid; } .q-item { page-break-inside: avoid; } }
</style>
</head>
<body>
  <h1>${title}</h1>
  <div class="meta">Materia: ${subject} &nbsp;|&nbsp; Generado con VisualNotes AI</div>

  <h2>Descripción del Material</h2>
  ${description || "<p><em>No disponible.</em></p>"}

  <h2>Resumen Ejecutivo</h2>
  ${summary || "<p><em>No disponible.</em></p>"}

  <h2>Palabras Clave</h2>
  ${keywordsHtml}

  <h2>Apuntes Estructurados</h2>
  ${notesHtml || "<p><em>No disponibles.</em></p>"}

  <h2>Contenido Ordenado y Limpio</h2>
  ${cleanText || "<p><em>No disponible.</em></p>"}

  <h2>Transcripción Completa</h2>
  ${transcription || "<p><em>No disponible.</em></p>"}

  <h2>Mapa Conceptual</h2>
  <div class="diagram">${diagramSvg || "<p><em>Sin mapa.</em></p>"}</div>

  <h2>Conceptos Fundamentales</h2>
  ${keyPoints ? `<ul>${keyPoints}</ul>` : "<p><em>No disponibles.</em></p>"}

  <h2>Autoevaluación</h2>
  ${quiz || "<p><em>Sin preguntas.</em></p>"}

  <h2>Recursos y Enlaces</h2>
  <h3>Videos</h3><ul>${linkList(links.youtube, "channel") || "<li><em>Sin videos.</em></li>"}</ul>
  <h3>Sitios Web</h3><ul>${linkList(links.websites, "site") || "<li><em>Sin sitios.</em></li>"}</ul>
  ${links.blogs && links.blogs.length ? `<h3>Blogs</h3><ul>${linkList(links.blogs, "source")}</ul>` : ""}

  <footer>Documento generado por VisualNotes AI — listo para estudiar.</footer>
</body>
</html>`;
}

function exportNoteToPdf() {
  if (!currentStudyData) {
    showToast("Primero genera o abre un apunte para exportar a PDF.", "error");
    return;
  }

  const html = buildPrintableHtml(currentStudyData);
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("Permite las ventanas emergentes para exportar a PDF.", "error");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();

  // Esperar a que el contenido y los estilos carguen antes de imprimir
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 400);
  };
}

// ========================================================
// RENDERIZADO DE VIDEOS Y ENLACES WEB
// ========================================================
function renderWebResources(studyLinks) {
  const ytContainer = document.getElementById("res-youtube-links");
  const webContainer = document.getElementById("res-website-links");
  const blogContainer = document.getElementById("res-blog-links");

  if (ytContainer) {
    ytContainer.innerHTML = "";
    const list = studyLinks.youtube || [];
    if (list.length === 0) {
      ytContainer.innerHTML = `<p style="color:#64748b; font-size:0.85rem;">No se encontraron videos sobre este tema.</p>`;
    } else {
      list.forEach((item) => {
        const card = document.createElement("div");
        card.className = "resource-link-card";
        card.innerHTML = `
          <div>
            <span class="pill-badge" style="background:#fee2e2; color:#b91c1c; margin-bottom:0.5rem;">${item.channel || "YouTube"}</span>
            <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.35rem; color:var(--text-primary);">${item.title}</h5>
            <p style="font-size:0.825rem; color:var(--text-muted); line-height:1.45; margin-bottom:1rem;">${item.description}</p>
          </div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="border-color:#fca5a5; color:#b91c1c; width:100%;">
            <svg class="svg-icon" style="color:#dc2626;" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Ver Video en YouTube
          </a>
        `;
        ytContainer.appendChild(card);
      });
    }
  }

  if (webContainer) {
    webContainer.innerHTML = "";
    const list = studyLinks.websites || [];
    if (list.length === 0) {
      webContainer.innerHTML = `<p style="color:#64748b; font-size:0.85rem;">No hay referencias web disponibles.</p>`;
    } else {
      list.forEach((item) => {
        const card = document.createElement("div");
        card.className = "resource-link-card";
        card.innerHTML = `
          <div>
            <span class="pill-badge" style="background:#e0f2fe; color:#0369a1; margin-bottom:0.5rem;">${item.site || "Web"}</span>
            <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.35rem; color:var(--text-primary);">${item.title}</h5>
            <p style="font-size:0.825rem; color:var(--text-muted); line-height:1.45; margin-bottom:1rem;">${item.description}</p>
          </div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width:100%;">
            <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
            Abrir Referencia
          </a>
        `;
        webContainer.appendChild(card);
      });
    }
  }

  if (blogContainer) {
    blogContainer.innerHTML = "";
    const list = studyLinks.blogs || [];
    if (list.length === 0) {
      blogContainer.innerHTML = `<p style="color:#64748b; font-size:0.85rem;">No hay blogs adicionales para este tema.</p>`;
    } else {
      list.forEach((item) => {
        const card = document.createElement("div");
        card.className = "resource-link-card";
        card.innerHTML = `
          <div>
            <span class="pill-badge" style="background:#f3e8ff; color:#7e22ce; margin-bottom:0.5rem;">${item.source || "Blog"}</span>
            <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.35rem; color:var(--text-primary);">${item.title}</h5>
            <p style="font-size:0.825rem; color:var(--text-muted); line-height:1.45; margin-bottom:1rem;">${item.description}</p>
          </div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width:100%;">
            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Leer Artículo
          </a>
        `;
        blogContainer.appendChild(card);
      });
    }
  }
}

// ========================================================
// MAPA CONCEPTUAL INTERACTIVO (grafo editable + persistencia)
// ========================================================
function renderConceptMapView() {
  const intRoot = document.getElementById("interactive-map-root");
  const viewport = document.getElementById("diagram-viewport");
  const drawer = document.getElementById("editor-slide-drawer");
  const mermaidBtns = document.getElementById("mermaid-buttons-group");

  const hasGraph =
    currentMapData &&
    Array.isArray(currentMapData.concepts) &&
    currentMapData.concepts.length > 0 &&
    window.conceptMap;

  if (hasGraph) {
    if (intRoot) intRoot.style.display = "block";
    if (viewport) viewport.style.display = "none";
    if (drawer) drawer.style.display = "none";
    if (mermaidBtns) mermaidBtns.style.display = "none";

    window.conceptMap.render(intRoot, currentMapData, {
      toast: showToast,
      onSave: saveConceptMap,
      onLocate: locateEvidenceInNotes,
      getSources: () => currentMapSources
    });
    requestAnimationFrame(() => window.conceptMap.resize());
  } else {
    if (intRoot) intRoot.style.display = "none";
    if (viewport) viewport.style.display = "";
    if (mermaidBtns) mermaidBtns.style.display = "";
    if (currentMermaidCode) diagram.render(currentMermaidCode);
  }
}

async function saveConceptMap(data) {
  if (!currentNoteId) {
    showToast("Genera o carga un apunte para guardar el mapa.", "error");
    return;
  }
  try {
    const res = await fetch(`/api/notes/${currentNoteId}/map`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("No se pudo guardar el mapa.");
    const json = await res.json();
    if (json.map_data) currentMapData = json.map_data;
    if (currentStudyData) {
      currentStudyData.concepts = currentMapData.concepts;
      currentStudyData.relations = currentMapData.relations;
    }
    window.conceptMap.markSaved();
    showToast("Mapa conceptual guardado.");
  } catch (e) {
    showToast(e.message || "No se pudo guardar el mapa.", "error");
  }
}

// Divide el texto en fragmentos numerados (unidad de evidencia del mapa).
function splitIntoFragments(text) {
  const out = [];
  if (!text || !text.trim()) return out;
  text.split(/\n+/).forEach((block) => {
    const clean = block.trim();
    if (!clean) return;
    clean.split(/(?<=[.!?…])\s+/).forEach((part) => {
      const t = part.trim();
      if (t) out.push({ index: out.length + 1, text: t });
    });
  });
  return out;
}

// Resalta la evidencia de un concepto en el texto original del apunte.
// Adoptado del enlace "Localizar en el texto" del prototipo del Grupo 4.
function locateEvidenceInNotes(evidence) {
  const data = currentStudyData || {};
  const cleanText = data.clean_text || data.cleanText || "";
  const transcription = data.transcription || "";
  const needle = String(evidence || "").trim();

  if (!cleanText.trim() && !transcription.trim()) {
    showToast("No hay texto original disponible para este apunte.", "error");
    return;
  }

  const cleanEl = document.getElementById("res-clean-text");
  const transcriptionEl = document.getElementById("res-transcription-text");

  if (cleanEl && cleanText) {
    cleanEl.innerHTML = renderCleanTextHighlighted(
      cleanText,
      "Sin contenido ordenado disponible.",
      needle
    );
  }
  if (transcriptionEl && transcription) {
    transcriptionEl.innerHTML = renderCleanTextHighlighted(
      transcription,
      "Sin transcripción disponible para este material.",
      needle
    );
  }

  window.navigateToView("transcription");

  const mark = document.querySelector("#res-clean-text .evidence-mark, #res-transcription-text .evidence-mark");
  if (mark) {
    mark.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Fragmento resaltado en tus apuntes.");
  } else {
    showToast("Mostrando tus apuntes. No se halló el fragmento exacto.", "error");
  }
}

function renderCleanTextHighlighted(text, emptyMessage, needle) {
  if (!text || !text.trim()) return formatPlainText(text, emptyMessage);
  const safe = escapeHtml(text);
  let marked = safe;
  if (needle && needle.trim()) {
    const n = String(needle).trim();
    const candidates = [n, n.slice(0, 60), n.slice(0, 40), n.slice(0, 25)].filter(
      (c) => c.trim().length >= 8
    );
    const lower = text.toLowerCase();
    for (const c of candidates) {
      const idx = lower.indexOf(c.toLowerCase());
      if (idx >= 0) {
        const escIdx = escapeHtml(text.slice(0, idx)).length;
        const escLen = escapeHtml(text.slice(idx, idx + c.length)).length;
        marked =
          safe.slice(0, escIdx) +
          '<mark class="evidence-mark">' +
          safe.slice(escIdx, escIdx + escLen) +
          "</mark>" +
          safe.slice(escIdx + escLen);
        break;
      }
    }
  }
  return marked
    .split(/\n{2,}/)
    .map((block) => {
      const content = block.trim().replace(/\n/g, "<br>");
      return content ? `<p class="summary-paragraph">${content}</p>` : "";
    })
    .join("");
}

// ========================================================
// CONTROLES DEL LIENZO DE MAPA CONCEPTUAL
// ========================================================
function setupDiagramControls() {
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnZoomReset = document.getElementById("btn-zoom-reset");
  const btnExportSvg = document.getElementById("btn-export-svg");
  const btnExportPng = document.getElementById("btn-export-png");
  const btnToggleDrawer = document.getElementById("btn-toggle-editor-panel");
  const btnUpdateMermaid = document.getElementById("btn-update-mermaid");
  const codeEditor = document.getElementById("mermaid-code-editor");
  const drawer = document.getElementById("editor-slide-drawer");

  if (btnZoomIn) btnZoomIn.addEventListener("click", () => { sounds.playClick(); diagram.zoomIn(); });
  if (btnZoomOut) btnZoomOut.addEventListener("click", () => { sounds.playClick(); diagram.zoomOut(); });
  if (btnZoomReset) btnZoomReset.addEventListener("click", () => { sounds.playClick(); diagram.resetZoom(); });

  if (btnExportSvg) {
    btnExportSvg.addEventListener("click", () => {
      sounds.playClick();
      diagram.exportSVG();
      showToast("Diagrama vectorial SVG descargado.");
    });
  }

  if (btnExportPng) {
    btnExportPng.addEventListener("click", () => {
      sounds.playClick();
      diagram.exportPNG();
      showToast("Imagen de alta resolución PNG descargada.");
    });
  }

  if (btnToggleDrawer && drawer) {
    btnToggleDrawer.addEventListener("click", () => {
      sounds.playClick();
      drawer.style.display = drawer.style.display === "none" ? "block" : "none";
    });
  }

  if (btnUpdateMermaid && codeEditor) {
    btnUpdateMermaid.addEventListener("click", () => {
      sounds.playClick();
      diagram.render(codeEditor.value);
      showToast("Mapa conceptual actualizado.");
    });
  }
}

// ========================================================
// BIBLIOTECA DE APUNTES GUARDADOS
// ========================================================
async function loadNotesList() {
  const container = document.getElementById("notes-library-grid");
  if (!container) return;

  const searchInput = document.getElementById("library-search-input");
  const typeFilter = document.getElementById("library-type-filter");

  const q = searchInput ? encodeURIComponent(searchInput.value.trim()) : "";
  const filterType = typeFilter ? typeFilter.value : "all";
  const token = auth.getToken();

  let url = `/api/notes?search=${q}&input_type=${filterType}`;
  if (token) url += `&token=${encodeURIComponent(token)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();
    const notes = data.notes || [];

    if (notes.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1; padding: 4rem 1.5rem;">
          <svg class="empty-state-icon" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <div class="empty-state-title">No hay apuntes registrados aún</div>
          <div class="empty-state-desc">Comienza creando tu primer mapa conceptual desde la pestaña "Crear Apunte".</div>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    notes.forEach((note) => {
      const card = document.createElement("div");
      card.className = "library-note-card";

      const typeBadgeIcon = note.input_type === "audio" 
        ? `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/></svg> Audio`
        : note.input_type === "image"
        ? `<svg class="svg-icon" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/></svg> Imagen`
        : `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg> Texto`;

      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span class="pill-badge pill-primary">${note.subject || "General"}</span>
            <span style="font-size:0.775rem; color:#64748b; display:inline-flex; align-items:center; gap:0.35rem;">
              ${typeBadgeIcon}
            </span>
          </div>
          <h4 style="font-size:1.1rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-primary);">${note.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">${note.summary || "Sin resumen disponible."}</p>
        </div>
        <div style="border-top:1px solid var(--border-subtle); padding-top:0.85rem; display:flex; justify-content:space-between; align-items:center; font-size:0.775rem; color:var(--text-faint);">
          <span>${note.created_at}</span>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn btn-secondary btn-icon-round btn-load-note" title="Abrir y Estudiar">
              <svg class="svg-icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="btn btn-danger btn-icon-round btn-delete-note" title="Eliminar apunte">
              <svg class="svg-icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>
      `;

      card.querySelector(".btn-load-note").addEventListener("click", (e) => {
        e.stopPropagation();
        sounds.playClick();
        loadNoteIntoViewer(note);
      });

      card.addEventListener("click", () => {
        sounds.playClick();
        loadNoteIntoViewer(note);
      });

      card.querySelector(".btn-delete-note").addEventListener("click", async (e) => {
        e.stopPropagation();
        if (confirm(`¿Deseas eliminar el apunte "${note.title}"?`)) {
          sounds.playDelete();
          await deleteNote(note.id);
        }
      });

      container.appendChild(card);
    });

  } catch (e) {
    console.error("Error al cargar notas:", e);
  }
}

function renderTimeline(events) {
  const wrap = document.getElementById("res-timeline-wrap");
  const list = document.getElementById("res-timeline-list");
  if (!wrap || !list) return;

  const items = Array.isArray(events) ? events.filter((e) => e && (e.text || e.date)) : [];
  if (!items.length) {
    wrap.style.display = "none";
    list.innerHTML = "";
    return;
  }

  list.innerHTML = "";
  items.forEach((ev) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    const date = document.createElement("span");
    date.className = "timeline-date";
    date.textContent = ev.date ? ev.date : "•";
    const text = document.createElement("span");
    text.className = "timeline-text";
    text.textContent = ev.text || "";
    li.appendChild(date);
    li.appendChild(text);
    list.appendChild(li);
  });
  wrap.style.display = "block";
}

function renderComparisonTables(tables) {
  const wrap = document.getElementById("res-tables-wrap");
  const container = document.getElementById("res-tables-container");
  if (!wrap || !container) return;

  const list = Array.isArray(tables) ? tables.filter((t) => t && Array.isArray(t.headers) && Array.isArray(t.rows)) : [];
  if (!list.length) {
    wrap.style.display = "none";
    container.innerHTML = "";
    return;
  }

  container.innerHTML = "";
  list.forEach((table) => {
    const block = document.createElement("div");
    block.className = "table-block";

    const heading = document.createElement("h4");
    heading.className = "table-block-title";
    heading.textContent = table.title || "Comparación";
    block.appendChild(heading);

    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    const el = document.createElement("table");
    el.className = "comparison-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    table.headers.forEach((h) => {
      const th = document.createElement("th");
      th.textContent = h;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    el.appendChild(thead);

    const tbody = document.createElement("tbody");
    table.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    el.appendChild(tbody);

    wrapper.appendChild(el);
    block.appendChild(wrapper);
    container.appendChild(block);
  });
  wrap.style.display = "block";
}

function loadNoteIntoViewer(note) {
  populateResultsUI({
    title: note.title,
    subject: note.subject,
    summary: note.summary,
    audio_description: note.audio_description || "",
    transcription: note.transcription || "",
    clean_text: note.clean_text || "",
    notes: note.notes_text || "",
    keywords: note.keywords || [],
    mermaid_code: note.mermaid_code,
    key_points: note.key_points,
    quiz: note.quiz,
    visual_resources: note.visual_resources || [],
    study_links: note.study_links || {},
    markdown_doc: note.markdown_doc || "",
    events: (note.map_data && note.map_data.events) || [],
    tables: (note.map_data && note.map_data.tables) || [],
    used_model: "Base de Datos SQLite"
  }, note);

  window.navigateToView("concept-map");
  showToast(`Apunte "${note.title}" cargado.`);
}

async function deleteNote(noteId) {
  try {
    const res = await fetch(`/api/notes/${noteId}`, { method: "DELETE" });
    if (res.ok) {
      showToast("Apunte eliminado con éxito.");
      loadNotesList();
    }
  } catch (e) {
    showToast("Error al eliminar apunte.", "error");
  }
}

function setupNotesLibrary() {
  const searchInput = document.getElementById("library-search-input");
  const typeFilter = document.getElementById("library-type-filter");

  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener("input", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => loadNotesList(), 250);
    });
  }

  if (typeFilter) {
    typeFilter.addEventListener("change", () => {
      sounds.playClick();
      loadNotesList();
    });
  }
}

// ========================================================
// CONTROL DE SONIDO
// ========================================================
function setupSoundToggle() {
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  const soundIconContainer = document.getElementById("sound-icon-container");

  const updateIcon = (enabled) => {
    if (!soundIconContainer) return;
    if (enabled) {
      soundIconContainer.innerHTML = `
        <svg class="svg-icon" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      `;
      btnToggleSound.title = "Sonidos activados (click para silenciar)";
    } else {
      soundIconContainer.innerHTML = `
        <svg class="svg-icon" style="color:#94a3b8;" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/>
          <line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
      `;
      btnToggleSound.title = "Sonidos silenciados (click para activar)";
    }
  };

  updateIcon(sounds.enabled);

  if (btnToggleSound) {
    btnToggleSound.addEventListener("click", () => {
      const state = sounds.toggle();
      updateIcon(state);
      showToast(state ? "Sonidos de interfaz activados." : "Sonidos silenciados.");
    });
  }
}
