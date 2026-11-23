/**
 * VisualNotes AI - Diagram Manager (Mermaid.js + Pan/Zoom + Export)
 * Prototipo Grupo 4 - IA y Sistemas
 */

class DiagramManager {
  constructor() {
    this.container = null;
    this.currentCode = "";
    this.currentZoom = 1;
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis"
        },
        securityLevel: "loose"
      });
      this.isInitialized = true;
    }
    this.container = document.getElementById("diagram-canvas");
  }

  async render(code) {
    this.init();
    if (!code) return;
    this.currentCode = code.trim();
    this.resetZoom();

    if (!this.container) return;

    try {
      const renderId = "mermaid-svg-" + Math.floor(Math.random() * 100000);
      const { svg } = await window.mermaid.render(renderId, this.currentCode);
      this.container.innerHTML = svg;

      // Aplicar estilos responsivos al svg generado
      const svgEl = this.container.querySelector("svg");
      if (svgEl) {
        svgEl.style.maxWidth = "100%";
        svgEl.style.height = "auto";
        svgEl.style.display = "block";
        svgEl.style.margin = "0 auto";
      }
    } catch (err) {
      console.error("Error al renderizar Mermaid:", err);
      this.container.innerHTML = `
        <div style="color: #dc2626; text-align: center; padding: 1.5rem; background: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">Sintaxis de diagrama ajustada</p>
          <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 0.75rem;">El mapa generado contenía un carácter inesperado. Puede editarlo en la pestaña 'Editor de Código'.</p>
          <pre style="text-align: left; font-size: 0.75rem; background: #ffffff; padding: 0.5rem; border-radius: 4px; overflow: auto; max-height: 120px;">${this.currentCode}</pre>
        </div>
      `;
    }
  }

  async renderToElement(targetEl, code) {
    this.init();
    if (!targetEl || !code) return;
    try {
      const renderId = "mermaid-svg-" + Math.floor(Math.random() * 1000000);
      const { svg } = await window.mermaid.render(renderId, code.trim());
      targetEl.innerHTML = svg;
      const svgEl = targetEl.querySelector("svg");
      if (svgEl) {
        svgEl.style.maxWidth = "100%";
        svgEl.style.height = "auto";
        svgEl.style.display = "block";
        svgEl.style.margin = "0 auto";
      }
    } catch (e) {
      console.error("Error al renderizar diagrama en elemento:", e);
      targetEl.innerHTML = `<p style="color:#64748b; font-size:0.8rem; text-align:center;">Esquema gráfico conceptual</p>`;
    }
  }

  zoomIn() {
    this.currentZoom = Math.min(this.currentZoom + 0.15, 2.5);
    this.applyZoom();
  }

  zoomOut() {
    this.currentZoom = Math.max(this.currentZoom - 0.15, 0.4);
    this.applyZoom();
  }

  resetZoom() {
    this.currentZoom = 1;
    this.applyZoom();
  }

  applyZoom() {
    if (this.container) {
      this.container.style.transform = `scale(${this.currentZoom})`;
    }
  }

  exportSVG(filename = "mapa_conceptual.svg") {
    const svgEl = this.container ? this.container.querySelector("svg") : null;
    if (!svgEl) {
      alert("No hay ningún diagrama cargado para exportar.");
      return;
    }
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  exportPNG(filename = "mapa_conceptual.png") {
    const svgEl = this.container ? this.container.querySelector("svg") : null;
    if (!svgEl) {
      alert("No hay ningún diagrama cargado para exportar.");
      return;
    }

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const URLObject = window.URL || window.webkitURL || window;
    const blobURL = URLObject.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const bbox = svgEl.getBoundingClientRect();
      const scale = 2; // Alta resolución
      canvas.width = (bbox.width || 800) * scale;
      canvas.height = (bbox.height || 600) * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      URLObject.revokeObjectURL(blobURL);
      const a = document.createElement("a");
      a.download = filename;
      a.href = canvas.toDataURL("image/png");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    image.src = blobURL;
  }
}

const diagram = new DiagramManager();
