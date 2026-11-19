/**
 * VisualNotes AI - Mapa conceptual interactivo (grafo SVG editable)
 *
 * Editor de grafo con layout de fuerzas, zoom/pan/pinch, arrastre de nodos,
 * edición (agregar/renombrar/borrar/unir/separar), deshacer/rehacer,
 * panel de evidencia y exportación a PNG.
 *
 * Portado y adaptado del editor SVG del prototipo "VisualNotes v0.3" del Grupo 4
 * (repositorio de referencia: https://github.com/josanto21/VisualNotes).
 */

const CM_NS = "http://www.w3.org/2000/svg";

function cmKey(name) {
  return String(name || "").trim().toLowerCase().replace(/\s+/g, " ");
}

class ConceptMapManager {
  constructor() {
    this.container = null;
    this.options = {};
    this.svg = null;
    this.gV = null;
    this.gE = null;
    this.gN = null;
    this.nodes = [];
    this.edges = [];
    this.view = { k: 1, x: 0, y: 0 };
    this.W = 0;
    this.H = 0;
    this.selected = -1;
    this.linking = false;
    this.alpha = 1;
    this.raf = 0;
    this.reduce = false;
    this.dirty = false;
    this.undoStack = [];
    this.redoStack = [];
    this._ptrs = new Map();
    this._pinchD = 0;
    this._panDist = 0;
    this._built = false;
    this.el = {};
  }

  /* ------------------------------ Montaje ------------------------------ */

  render(container, data, options = {}) {
    this.container = container;
    this.options = options || {};
    if (!this._built) {
      this._build();
      this._built = true;
    }
    this.setData(data);
    return this;
  }

  _build() {
    const c = this.container;
    c.innerHTML = `
      <div class="cm-root">
        <div class="cm-toolbar">
          <span class="cm-toolbar-title" data-cm="title">Mapa conceptual interactivo</span>
          <div class="cm-toolbar-actions">
            <button type="button" class="btn btn-secondary btn-icon-round" data-cm="zin" title="Acercar">+</button>
            <button type="button" class="btn btn-secondary btn-icon-round" data-cm="zout" title="Alejar">&minus;</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="fit">Encajar</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="edit">Editar</button>
            <button type="button" class="btn btn-primary btn-sm" data-cm="save" hidden>Guardar cambios</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="png">PNG</button>
          </div>
        </div>
        <div class="cm-stage">
          <svg class="cm-svg" role="img" aria-label="Mapa conceptual editable">
            <defs>
              <marker id="cm-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z"></path>
              </marker>
            </defs>
            <g data-cm="viewport">
              <g data-cm="edges"></g>
              <g data-cm="nodes"></g>
            </g>
          </svg>
          <p class="cm-hint">Arrastra para moverte, usa la rueda o pinza para hacer zoom. Toca un concepto para ver su evidencia en tus apuntes.</p>
        </div>
        <div class="cm-edit" data-cm="editpanel" hidden>
          <div class="cm-edit-row">
            <input type="text" data-cm="name" maxlength="70" placeholder="Nombre del concepto" aria-label="Nombre del concepto">
            <button type="button" class="btn btn-secondary btn-sm" data-cm="add">Agregar</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="rename">Renombrar</button>
            <button type="button" class="btn btn-secondary btn-sm danger" data-cm="del">Borrar</button>
          </div>
          <div class="cm-edit-row">
            <label class="cm-inline-label" for="cm-link">Unir con</label>
            <select data-cm="link" id="cm-link"></select>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="link-add">Unir</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="link-del">Separar</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="link-tap">Unir tocando otra idea</button>
          </div>
          <div class="cm-edit-row">
            <button type="button" class="btn btn-secondary btn-sm" data-cm="undo" disabled>Deshacer</button>
            <button type="button" class="btn btn-secondary btn-sm" data-cm="redo" disabled>Rehacer</button>
          </div>
        </div>
        <div class="cm-detail" data-cm="detail" aria-live="polite"></div>
        <details class="cm-list">
          <summary>Leer el mapa como una lista</summary>
          <div class="cm-list-body" data-cm="list"></div>
        </details>
      </div>`;

    this.el = {};
    this.container.querySelectorAll("[data-cm]").forEach((el) => {
      this.el[el.getAttribute("data-cm")] = el;
    });

    this.svg = this.container.querySelector(".cm-svg");
    this.gV = this.el.viewport;
    this.gE = this.el.edges;
    this.gN = this.el.nodes;
    this._ptrs = new Map();

    this._bindToolbar();
    this._bindStage();
    this._bindEdit();
  }

  _bindToolbar() {
    const e = this.el;
    e.zin.addEventListener("click", () => this.zoomAt(this.W / 2, this.H / 2, 1.25));
    e.zout.addEventListener("click", () => this.zoomAt(this.W / 2, this.H / 2, 0.8));
    e.fit.addEventListener("click", () => this.fit());
    e.edit.addEventListener("click", () => {
      const open = e.editpanel.hidden;
      e.editpanel.hidden = !open;
      e.edit.classList.toggle("active", open);
    });
    e.save.addEventListener("click", () => this.save());
    e.png.addEventListener("click", () => this.downloadPNG());
  }

  _bindStage() {
    this.svg.addEventListener("wheel", (ev) => {
      ev.preventDefault();
      const r = this.svg.getBoundingClientRect();
      this.zoomAt(ev.clientX - r.left, ev.clientY - r.top, Math.exp(-ev.deltaY * 0.0016));
    }, { passive: false });

    this.svg.addEventListener("pointerdown", (ev) => {
      try { this.svg.setPointerCapture(ev.pointerId); } catch (e) {}
      this._ptrs.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
      this._panDist = this._ptrs.size === 1 ? 0 : 99;
      if (this._ptrs.size === 2) this._pinchD = this._dist();
    });

    this.svg.addEventListener("pointermove", (ev) => {
      const p = this._ptrs.get(ev.pointerId);
      if (!p) return;
      const dx = ev.clientX - p.x;
      const dy = ev.clientY - p.y;
      p.x = ev.clientX;
      p.y = ev.clientY;
      if (this._ptrs.size === 1) {
        this._panDist += Math.abs(dx) + Math.abs(dy);
        this.view.x += dx;
        this.view.y += dy;
        this._applyView();
      } else if (this._ptrs.size === 2) {
        const a = Array.from(this._ptrs.values());
        const d = this._dist();
        const r = this.svg.getBoundingClientRect();
        if (this._pinchD) {
          this.zoomAt((a[0].x + a[1].x) / 2 - r.left, (a[0].y + a[1].y) / 2 - r.top, d / this._pinchD);
        }
        this._pinchD = d;
      }
    });

    const end = (ev) => {
      const tap = this._ptrs.size === 1 && this._ptrs.has(ev.pointerId) && this._panDist < 5;
      this._ptrs.delete(ev.pointerId);
      this._pinchD = 0;
      if (tap) {
        if (this.linking) this._stopLink();
        else if (this.selected >= 0) this.clearSelection();
      }
    };
    this.svg.addEventListener("pointerup", end);
    this.svg.addEventListener("pointercancel", end);
  }

  _bindEdit() {
    const e = this.el;
    e.add.addEventListener("click", () => this._addConcept());
    e.rename.addEventListener("click", () => this._renameConcept());
    e.del.addEventListener("click", () => this._deleteConcept());
    e["link-add"].addEventListener("click", () => this._linkSelect());
    e["link-del"].addEventListener("click", () => this._unlinkSelect());
    e["link-tap"].addEventListener("click", () => this._toggleTapLink());
    e.undo.addEventListener("click", () => this.undo());
    e.redo.addEventListener("click", () => this.redo());
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && this.linking) this._stopLink();
    });
  }

  /* ------------------------------ Datos ------------------------------ */

  setData(data) {
    data = data || {};
    const concepts = Array.isArray(data.concepts) ? data.concepts : [];
    const relations = Array.isArray(data.relations) ? data.relations : [];

    this.nodes = concepts.map((c, i) => {
      const tier = Math.max(0, Math.min(2, (Number(c.importance) || 1) - 1));
      const label = String(c.label || c.id || `Concepto ${i + 1}`);
      return {
        id: String(c.id || `c${i + 1}`),
        label,
        key: cmKey(label),
        tier,
        description: c.description || "",
        evidence: c.evidence || "",
        manual: false,
        w: label.length * 7.2 + 28,
        h: tier === 0 ? 38 : 32,
        x: 0, y: 0, vx: 0, vy: 0, fixed: false
      };
    });

    const indexById = new Map(this.nodes.map((n, i) => [n.id, i]));
    this.edges = [];
    const seen = new Set();
    relations.forEach((r) => {
      const a = indexById.get(String(r.from));
      const b = indexById.get(String(r.to));
      if (a === undefined || b === undefined || a === b) return;
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (seen.has(key)) return;
      seen.add(key);
      this.edges.push({ a, b, w: 1, label: r.label || "", manual: false });
    });

    this.undoStack = [];
    this.redoStack = [];
    this.dirty = false;
    this._syncDirty();
    this._updateHistoryButtons();

    this.gE.textContent = "";
    this.gN.textContent = "";
    this.selected = -1;
    this.linking = false;

    this._measure();
    this.view = { k: 1, x: 0, y: 0 };
    this._applyView();

    const hasNodes = this.nodes.length > 0;
    this.el.title.textContent = data.title || "Mapa conceptual interactivo";
    this.el.edit.hidden = !hasNodes;
    this.el.editpanel.hidden = true;
    this.svg.style.display = hasNodes ? "block" : "none";

    this.nodes.forEach((n, i) => {
      if (Number.isFinite(n.px) && Number.isFinite(n.py)) {
        n.x = n.px; n.y = n.py;
      } else {
        const ang = i * 2.4;
        const rad = i === 0 ? 0 : 60 + i * 16;
        n.x = this.W / 2 + Math.cos(ang) * rad * 1.4;
        n.y = this.H / 2 + Math.sin(ang) * rad;
      }
      n.vx = 0; n.vy = 0;
    });

    this.edges.forEach((e) => this._addEdgeEl(e));
    this.nodes.forEach((n) => this._addNodeEl(n));

    if (hasNodes) {
      this.alpha = 1;
      if (this.reduce) { for (let k = 0; k < 320; k++) this._tick(); this._draw(); }
      else this._loop();
      this._select(0);
    }
    this._renderList();
  }

  getData() {
    return {
      concepts: this.nodes.map((n) => ({
        id: n.id,
        label: n.label,
        description: n.description || "",
        importance: n.tier + 1,
        evidence: n.evidence || ""
      })),
      relations: this.edges.map((e) => ({
        from: this.nodes[e.a].id,
        to: this.nodes[e.b].id,
        label: e.label || ""
      }))
    };
  }

  isDirty() { return this.dirty; }

  _syncDirty() {
    if (this.el.save) this.el.save.hidden = !this.dirty;
  }

  _markDirty() {
    this.dirty = true;
    this._syncDirty();
  }

  /* ------------------------------ Layout ------------------------------ */

  _measure() {
    const rect = this.svg.getBoundingClientRect();
    this.W = Math.max(320, Math.round(rect.width || this.container.clientWidth || 800));
    this.H = Math.max(320, Math.round(rect.height || 440));
    this._applyView();
    this.reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  resize() {
    if (!this._built || !this.svg) return;
    this._measure();
    this.fit();
  }

  _applyView() {
    if (!this.gV) return;
    this.gV.setAttribute(
      "transform",
      `translate(${this.view.x.toFixed(1)},${this.view.y.toFixed(1)}) scale(${this.view.k.toFixed(3)})`
    );
  }

  zoomAt(cx, cy, f) {
    const k = Math.max(0.3, Math.min(3, this.view.k * f));
    f = k / this.view.k;
    this.view.x = cx - (cx - this.view.x) * f;
    this.view.y = cy - (cy - this.view.y) * f;
    this.view.k = k;
    this._applyView();
  }

  fit() {
    if (!this.nodes.length) { this.view = { k: 1, x: 0, y: 0 }; this._applyView(); return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    this.nodes.forEach((n) => {
      x0 = Math.min(x0, n.x - n.w / 2); x1 = Math.max(x1, n.x + n.w / 2);
      y0 = Math.min(y0, n.y - n.h / 2); y1 = Math.max(y1, n.y + n.h / 2);
    });
    const bw = Math.max(1, x1 - x0);
    const bh = Math.max(1, y1 - y0);
    const k = Math.max(0.3, Math.min(2, (this.W - 48) / bw, (this.H - 48) / bh));
    this.view.k = k;
    this.view.x = (this.W - bw * k) / 2 - x0 * k;
    this.view.y = (this.H - bh * k) / 2 - y0 * k;
    this._applyView();
  }

  _dist() {
    const a = Array.from(this._ptrs.values());
    return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
  }

  /* ------------------------------ Render ------------------------------ */

  _el(tag, attrs) {
    const e = document.createElementNS(CM_NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  _addEdgeEl(e) {
    e.el = this._el("g", { class: "cm-edge-wrapper" + (e.manual ? " manual" : "") });
    e.line = this._el("line", {
      class: "cm-edge",
      "stroke-width": (1 + Math.min(e.w || 1, 4) * 0.9).toFixed(1)
    });
    e.el.appendChild(e.line);
    if (e.label) {
      e.labelEl = this._el("text", { class: "cm-edge-label", "text-anchor": "middle" });
      e.labelEl.textContent = e.label;
      e.el.appendChild(e.labelEl);
    }
    this.gE.appendChild(e.el);
  }

  _addNodeEl(n) {
    const g = this._el("g", {
      class: `cm-node t${n.tier}${n.manual ? " manual" : ""}`,
      tabindex: "0",
      role: "button",
      "aria-label": `Concepto ${n.label}`
    });
    g.appendChild(this._el("rect", { x: -n.w / 2, y: -n.h / 2, width: n.w, height: n.h, rx: n.h / 2 }));
    const t = this._el("text", {});
    t.textContent = n.label;
    g.appendChild(t);
    g.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); this._activate(n); }
    });
    this._drag(g, n);
    n.el = g;
    this.gN.appendChild(g);
  }

  _tick() {
    const cx = this.W / 2;
    const cy = this.H / 2;
    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const b = this.nodes[j];
        const dx = b.x - a.x;
        const dy = (b.y - a.y) * 1.25;
        const d2 = dx * dx + dy * dy + 0.5;
        const d = Math.sqrt(d2);
        const f = 5200 / d2 * this.alpha;
        const fx = dx / d * f;
        const fy = dy / d * f;
        if (!a.fixed) { a.vx -= fx; a.vy -= fy; }
        if (!b.fixed) { b.vx += fx; b.vy += fy; }
      }
    }
    this.edges.forEach((e) => {
      const p = this.nodes[e.a];
      const q = this.nodes[e.b];
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const f = (d - 150) * 0.025 * this.alpha;
      const fx = dx / d * f;
      const fy = dy / d * f;
      if (!p.fixed) { p.vx += fx; p.vy += fy; }
      if (!q.fixed) { q.vx -= fx; q.vy -= fy; }
    });
    this.nodes.forEach((n, k) => {
      if (n.fixed) return;
      const g = k === 0 ? 0.06 : 0.006;
      n.vx += (cx - n.x) * g * this.alpha;
      n.vy += (cy - n.y) * g * this.alpha;
      n.vx *= 0.78;
      n.vy *= 0.78;
      n.x += n.vx;
      n.y += n.vy;
    });
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < this.nodes.length; i++) {
        for (let j = i + 1; j < this.nodes.length; j++) {
          const a = this.nodes[i];
          const b = this.nodes[j];
          const ddx = b.x - a.x;
          const ddy = b.y - a.y;
          const ox = (a.w + b.w) / 2 + 12 - Math.abs(ddx);
          const oy = (a.h + b.h) / 2 + 10 - Math.abs(ddy);
          if (ox > 0 && oy > 0) {
            if (ox < oy) {
              const s = ddx >= 0 ? 1 : -1;
              if (!a.fixed) a.x -= s * ox / 2;
              if (!b.fixed) b.x += s * ox / 2;
            } else {
              const s = ddy >= 0 ? 1 : -1;
              if (!a.fixed) a.y -= s * oy / 2;
              if (!b.fixed) b.y += s * oy / 2;
            }
          }
        }
      }
    }
    this.nodes.forEach((n) => {
      if (n.fixed) return;
      n.x = Math.max(n.w / 2 + 6, Math.min(this.W - n.w / 2 - 6, n.x));
      n.y = Math.max(n.h / 2 + 6, Math.min(this.H - n.h / 2 - 6, n.y));
    });
    this.alpha *= 0.988;
  }

  _draw() {
    this.edges.forEach((e) => {
      const p = this.nodes[e.a];
      const q = this.nodes[e.b];
      e.line.setAttribute("x1", p.x); e.line.setAttribute("y1", p.y);
      e.line.setAttribute("x2", q.x); e.line.setAttribute("y2", q.y);
      if (e.labelEl) {
        e.labelEl.setAttribute("x", (p.x + q.x) / 2);
        e.labelEl.setAttribute("y", (p.y + q.y) / 2 - 4);
      }
    });
    this.nodes.forEach((n) => {
      n.el.setAttribute("transform", `translate(${n.x.toFixed(1)},${n.y.toFixed(1)})`);
    });
  }

  _loop() {
    this.raf = requestAnimationFrame(() => {
      this._tick();
      this._draw();
      if (this.alpha > 0.02) this._loop();
    });
  }

  _reheat(a) {
    cancelAnimationFrame(this.raf);
    this.alpha = Math.max(this.alpha, a || 0.3);
    if (this.reduce) { for (let k = 0; k < 200; k++) this._tick(); this._draw(); }
    else this._loop();
  }

  _drag(g, n) {
    g.addEventListener("pointerdown", (ev) => {
      ev.stopPropagation();
      try { g.setPointerCapture(ev.pointerId); } catch (e) {}
      const before = this._snapshot();
      n.fixed = true;
      let moved = false;
      const move = (e2) => {
        const p = this._toLocal(e2);
        n.x = p.x; n.y = p.y; moved = true; this._reheat(0.35);
      };
      const up = () => {
        g.removeEventListener("pointermove", move);
        g.removeEventListener("pointerup", up);
        g.removeEventListener("pointercancel", up);
        n.fixed = false;
        if (moved) {
          this.undoStack.push(before);
          if (this.undoStack.length > 40) this.undoStack.shift();
          this.redoStack = [];
          this._markDirty();
          this._updateHistoryButtons();
        } else {
          this._activate(n);
        }
      };
      g.addEventListener("pointermove", move);
      g.addEventListener("pointerup", up);
      g.addEventListener("pointercancel", up);
    });
  }

  _toLocal(ev) {
    const p = this.svg.createSVGPoint();
    p.x = ev.clientX; p.y = ev.clientY;
    return p.matrixTransform(this.gV.getScreenCTM().inverse());
  }

  /* ------------------------------ Selección ------------------------------ */

  _neighbors(i) {
    const s = new Set();
    this.edges.forEach((e) => { if (e.a === i) s.add(e.b); else if (e.b === i) s.add(e.a); });
    return s;
  }

  _edgeBetween(a, b) {
    return this.edges.find((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a)) || null;
  }

  _activate(n) {
    const i = this.nodes.indexOf(n);
    if (this.linking && this.selected >= 0) this._finishLink(i);
    else this._select(i);
  }

  _select(i) {
    if (i < 0 || i >= this.nodes.length) return;
    this._stopLink();
    this.selected = i;
    const nb = this._neighbors(i);
    this.nodes.forEach((n, k) => {
      n.el.classList.toggle("sel", k === i);
      n.el.classList.toggle("dim", k !== i && !nb.has(k));
    });
    this.edges.forEach((e) => e.el.classList.toggle("dim", !(e.a === i || e.b === i)));

    const n = this.nodes[i];
    const lk = this.el.link;
    lk.textContent = "";
    this.nodes.forEach((m, k) => {
      if (k === i) return;
      const o = document.createElement("option");
      o.value = k; o.textContent = m.label;
      lk.appendChild(o);
    });
    this.el.rename.disabled = false;
    this.el.del.disabled = false;
    this.el["link-add"].disabled = false;
    this.el["link-del"].disabled = false;
    this.el["link-tap"].disabled = false;
    this.el.name.value = n.label;

    this._showDetail(n, nb);
  }

  clearSelection() {
    this._stopLink();
    this.selected = -1;
    this.nodes.forEach((n) => n.el.classList.remove("sel", "dim"));
    this.edges.forEach((e) => e.el.classList.remove("dim"));
    this.el.link.textContent = "";
    this.el.rename.disabled = true;
    this.el.del.disabled = true;
    this.el["link-add"].disabled = true;
    this.el["link-del"].disabled = true;
    this.el["link-tap"].disabled = true;
    this.el.detail.textContent = "";
    const p = document.createElement("p");
    p.className = "cm-hint";
    p.textContent = "Toca un concepto para ver en qué parte de tus apuntes aparece.";
    this.el.detail.appendChild(p);
  }

  _showDetail(n, nb) {
    const d = this.el.detail;
    d.textContent = "";
    const h = document.createElement("h3");
    h.textContent = n.label;
    d.appendChild(h);

    if (nb && nb.size) {
      const chips = document.createElement("div");
      chips.className = "cm-chips";
      Array.from(nb).forEach((k) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "cm-chip";
        b.textContent = this.nodes[k].label;
        b.addEventListener("click", () => this._select(k));
        chips.appendChild(b);
      });
      d.appendChild(chips);
    }
    if (n.description) {
      const p = document.createElement("p");
      p.className = "cm-desc";
      p.textContent = n.description;
      d.appendChild(p);
    }
    if (n.evidence) {
      const q = document.createElement("blockquote");
      q.className = "cm-evidence";
      q.textContent = n.evidence;
      d.appendChild(q);
    }

    const fragments = this._matchFragments(n);
    if (fragments.length && typeof this.options.onLocate === "function") {
      const label = document.createElement("span");
      label.className = "cm-frag-label";
      label.textContent = "Se menciona en:";
      d.appendChild(label);
      const wrap = document.createElement("div");
      wrap.className = "cm-chips";
      fragments.forEach((s) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "cm-chip cm-frag";
        b.textContent = "Fragmento " + s.index;
        b.title = s.text.slice(0, 160);
        b.addEventListener("click", () => this.options.onLocate(s.text, n));
        wrap.appendChild(b);
      });
      d.appendChild(wrap);
    } else if (n.evidence && typeof this.options.onLocate === "function") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cm-chip";
      btn.textContent = "Ver en mis apuntes";
      btn.addEventListener("click", () => this.options.onLocate(n.evidence, n));
      d.appendChild(btn);
    }
  }

  _matchFragments(n) {
    if (typeof this.options.getSources !== "function") return [];
    const sources = this.options.getSources();
    if (!Array.isArray(sources) || !sources.length) return [];

    const probe = this._norm(n.evidence || "");
    if (probe.length >= 10) {
      const exact = sources.filter((s) => this._norm(s.text).indexOf(probe.slice(0, 28)) >= 0);
      if (exact.length) return exact.slice(0, 4);
    }

    const stop = new Set(
      "de la el los las un una y o que en con por para su sus al del se es son como mas pero no si porque esta entre cuando muy sin sobre tambien hasta hay donde desde todo nos durante todos uno les ni contra otros ese eso ante ellos esto mi antes algunos unos otro otras otra tanto esa estos mucho quienes nada muchos cual poco ella estar estas algunas algo nosotros mis tu te ti tus ellas ser fue eran sido estan estaba puede pueden cada tipo forma manera hacen hace tener tiene".split(/\s+/)
    );
    const tokens = (text) =>
      this._norm(text)
        .split(/[^a-z0-9]+/)
        .filter((w) => w.length >= 4 && !stop.has(w));
    const base = new Set(tokens((n.evidence || "") + " " + (n.label || "")));
    if (base.size < 2) return [];
    const scored = sources
      .map((s) => {
        const st = new Set(tokens(s.text));
        let hit = 0;
        base.forEach((w) => {
          if (st.has(w)) hit++;
        });
        return { s, ratio: hit / base.size, hit };
      })
      .filter((x) => x.hit >= 2 && x.ratio >= 0.55)
      .sort((a, b) => b.ratio - a.ratio);
    return scored.slice(0, 3).map((x) => x.s);
  }

  _norm(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  /* ------------------------------ Edición ------------------------------ */

  _snapshot() {
    return JSON.stringify({
      nodes: this.nodes.map((n) => ({
        id: n.id, label: n.label, tier: n.tier, w: n.w, x: n.x, y: n.y,
        manual: n.manual, description: n.description, evidence: n.evidence
      })),
      edges: this.edges.map((e) => ({ a: e.a, b: e.b, label: e.label, manual: e.manual }))
    });
  }

  _restore(snap) {
    const data = JSON.parse(snap);
    this.nodes = data.nodes.map((n) => ({
      id: n.id, label: n.label, key: cmKey(n.label), tier: n.tier, w: n.w,
      h: n.tier === 0 ? 38 : 32, x: n.x, y: n.y, vx: 0, vy: 0, fixed: false,
      manual: !!n.manual, description: n.description || "", evidence: n.evidence || ""
    }));
    this.edges = data.edges.map((e) => ({ a: e.a, b: e.b, w: 1, label: e.label || "", manual: !!e.manual }));
    this.gE.textContent = "";
    this.gN.textContent = "";
    this.edges.forEach((e) => this._addEdgeEl(e));
    this.nodes.forEach((n) => this._addNodeEl(n));
    this._draw();
    this._renderList();
    this.clearSelection();
    this._markDirty();
  }

  _updateHistoryButtons() {
    if (this.el.undo) this.el.undo.disabled = this.undoStack.length === 0;
    if (this.el.redo) this.el.redo.disabled = this.redoStack.length === 0;
  }

  undo() {
    if (!this.undoStack.length) return;
    this.redoStack.push(this._snapshot());
    this._restore(this.undoStack.pop());
    this._updateHistoryButtons();
  }

  redo() {
    if (!this.redoStack.length) return;
    this.undoStack.push(this._snapshot());
    this._restore(this.redoStack.pop());
    this._updateHistoryButtons();
  }

  _pushHistory(before) {
    this.undoStack.push(before);
    if (this.undoStack.length > 40) this.undoStack.shift();
    this.redoStack = [];
    this._updateHistoryButtons();
  }

  _toast(msg) {
    if (typeof this.options.toast === "function") this.options.toast(msg);
  }

  _duplicate(name, except) {
    return this.nodes.some((n, i) => i !== except && n.label.toLowerCase() === name.toLowerCase());
  }

  _addConcept() {
    const name = this.el.name.value.trim();
    if (!name) { this._toast("Escribe el nombre del concepto."); this.el.name.focus(); return; }
    if (this._duplicate(name, -1)) { this._toast("Ya existe un concepto con ese nombre."); return; }
    if (this.nodes.length >= 60) { this._toast("El mapa admite hasta 60 conceptos."); return; }
    this._pushHistory(this._snapshot());
    const p = this.selected >= 0 ? this.nodes[this.selected] : null;
    const node = {
      id: `m${Date.now().toString(36)}`, label: name, key: cmKey(name), tier: 2,
      description: "", evidence: "", manual: true,
      w: name.length * 7.2 + 28, h: 32, x: 0, y: 0, vx: 0, vy: 0, fixed: false
    };
    node.x = p ? p.x + (Math.random() * 160 - 80) : this.W / 2;
    node.y = p ? p.y + (Math.random() > 0.5 ? 90 : -90) : this.H / 2;
    this.nodes.push(node);
    this._addNodeEl(node);
    if (p) {
      const e = { a: this.selected, b: this.nodes.length - 1, w: 1, label: "", manual: true };
      this.edges.push(e);
      this._addEdgeEl(e);
    }
    this.el.name.value = "";
    this._draw();
    this._reheat(0.4);
    this._select(this.nodes.length - 1);
    this._renderList();
    this._markDirty();
  }

  _renameConcept() {
    if (this.selected < 0) return;
    const name = this.el.name.value.trim();
    if (!name) { this._toast("Escribe el nuevo nombre."); return; }
    if (this._duplicate(name, this.selected)) { this._toast("Ya existe un concepto con ese nombre."); return; }
    this._pushHistory(this._snapshot());
    const n = this.nodes[this.selected];
    n.label = name;
    n.key = cmKey(name);
    n.w = name.length * 7.2 + 28;
    const r = n.el.querySelector("rect");
    r.setAttribute("x", -n.w / 2);
    r.setAttribute("width", n.w);
    n.el.querySelector("text").textContent = name;
    n.el.setAttribute("aria-label", `Concepto ${name}`);
    this.el.name.value = "";
    this._draw();
    this._reheat(0.3);
    this._select(this.selected);
    this._renderList();
    this._markDirty();
  }

  _deleteConcept() {
    if (this.selected < 0) return;
    this._pushHistory(this._snapshot());
    const idx = this.selected;
    this._stopLink();
    this.edges = this.edges.filter((e) => e.a !== idx && e.b !== idx);
    this.edges.forEach((e) => {
      if (e.a > idx) e.a--;
      if (e.b > idx) e.b--;
    });
    this.nodes.splice(idx, 1);
    this.gE.textContent = "";
    this.gN.textContent = "";
    this.edges.forEach((e) => this._addEdgeEl(e));
    this.nodes.forEach((n) => this._addNodeEl(n));
    this._draw();
    this._reheat(0.3);
    this.clearSelection();
    this._renderList();
    this._markDirty();
    this._updateHistoryButtons();
  }

  _linkSelect() {
    if (this.selected < 0) return;
    const t = parseInt(this.el.link.value, 10);
    if (isNaN(t)) return;
    if (this._edgeBetween(this.selected, t)) { this._toast("Ya están conectados."); return; }
    this._pushHistory(this._snapshot());
    const e = { a: this.selected, b: t, w: 1, label: "", manual: true };
    this.edges.push(e);
    this._addEdgeEl(e);
    this._draw();
    this._reheat(0.3);
    this._select(this.selected);
    this._renderList();
    this._markDirty();
  }

  _unlinkSelect() {
    if (this.selected < 0) return;
    const t = parseInt(this.el.link.value, 10);
    if (isNaN(t)) return;
    const e = this._edgeBetween(this.selected, t);
    if (!e) { this._toast("Esos conceptos no están conectados."); return; }
    this._pushHistory(this._snapshot());
    if (e.el) e.el.remove();
    this.edges.splice(this.edges.indexOf(e), 1);
    this._reheat(0.3);
    this._select(this.selected);
    this._renderList();
    this._markDirty();
  }

  _toggleTapLink() {
    if (this.selected < 0) return;
    if (this.linking) this._stopLink();
    else this._startLink();
  }

  _startLink() {
    this.linking = true;
    if (this.nodes[this.selected]) this.nodes[this.selected].el.classList.add("linking");
    this.el["link-tap"].textContent = "Cancelar conexión";
    this._toast("Toca el concepto destino para unirlos.");
  }

  _stopLink() {
    this.linking = false;
    if (this.selected >= 0 && this.nodes[this.selected]) this.nodes[this.selected].el.classList.remove("linking");
    if (this.el["link-tap"]) this.el["link-tap"].textContent = "Unir tocando otra idea";
  }

  _finishLink(t) {
    const s = this.selected;
    this._stopLink();
    if (t === s) return;
    if (this._edgeBetween(s, t)) { this._toast("Ya están conectados."); return; }
    this._pushHistory(this._snapshot());
    const e = { a: s, b: t, w: 1, label: "", manual: true };
    this.edges.push(e);
    this._addEdgeEl(e);
    this._draw();
    this._reheat(0.3);
    this._select(s);
    this._renderList();
    this._markDirty();
  }

  /* ------------------------------ Lista ------------------------------ */

  _renderList() {
    const target = this.el.list;
    if (!target) return;
    target.textContent = "";
    const ul = document.createElement("ul");
    this.nodes.forEach((n, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cm-list-btn";
      b.textContent = n.label;
      b.addEventListener("click", () => { this._select(i); this.fit(); });
      li.appendChild(b);
      ul.appendChild(li);
    });
    target.appendChild(ul);
    if (this.edges.length) {
      const rel = document.createElement("ul");
      this.edges.forEach((e) => {
        const li = document.createElement("li");
        li.textContent = `${this.nodes[e.a].label} → ${this.nodes[e.b].label}${e.label ? ": " + e.label : ""}`;
        rel.appendChild(li);
      });
      target.appendChild(rel);
    }
  }

  /* ------------------------------ Export ------------------------------ */

  async renderPNG() {
    if (!this.nodes.length) return null;
    const pad = 40, sc = 2;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    this.nodes.forEach((n) => {
      x0 = Math.min(x0, n.x - n.w / 2); x1 = Math.max(x1, n.x + n.w / 2);
      y0 = Math.min(y0, n.y - n.h / 2); y1 = Math.max(y1, n.y + n.h / 2);
    });
    const cw = (x1 - x0) + pad * 2;
    const ch = (y1 - y0) + pad * 2;

    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(cw * sc);
    canvas.height = Math.ceil(ch * sc);
    const ctx = canvas.getContext("2d");
    ctx.scale(sc, sc);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cw, ch);
    ctx.translate(pad - x0, pad - y0);

    ctx.lineWidth = 1.4;
    ctx.strokeStyle = "#94a3b8";
    this.edges.forEach((e) => {
      const p = this.nodes[e.a];
      const q = this.nodes[e.b];
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.stroke();
    });

    const colors = ["#4f46e5", "#0ea5e9", "#64748b"];
    this.nodes.forEach((n) => {
      ctx.beginPath();
      ctx.moveTo(-n.w / 2 + n.h / 2, -n.h / 2);
      ctx.arcTo(n.w / 2, -n.h / 2, n.w / 2, n.h / 2, n.h / 2);
      ctx.arcTo(n.w / 2, n.h / 2, -n.w / 2, n.h / 2, n.h / 2);
      ctx.arcTo(-n.w / 2, n.h / 2, -n.w / 2, -n.h / 2, n.h / 2);
      ctx.arcTo(-n.w / 2, -n.h / 2, n.w / 2, -n.h / 2, n.h / 2);
      ctx.closePath();
      ctx.save();
      ctx.translate(n.x, n.y);
      ctx.fillStyle = colors[n.tier] || colors[2];
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 14px 'Segoe UI', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(n.label, 0, 1);
      ctx.restore();
    });

    ctx.font = "12px 'Segoe UI', system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("VisualNotes AI", pad - x0 + 4, y1 + pad - 10);

    return canvas;
  }

  async downloadPNG(filename = "mapa-conceptual.png") {
    const canvas = await this.renderPNG();
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = filename;
    a.href = canvas.toDataURL("image/png");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /* ------------------------------ API externa ------------------------------ */

  save() {
    if (typeof this.options.onSave !== "function") return;
    this.options.onSave(this.getData());
    this.dirty = false;
    this._syncDirty();
  }

  markSaved() {
    this.dirty = false;
    this._syncDirty();
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    if (this.container) this.container.innerHTML = "";
    this._built = false;
    this.nodes = [];
    this.edges = [];
  }
}

window.ConceptMapManager = ConceptMapManager;
window.conceptMap = new ConceptMapManager();
