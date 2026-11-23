/**
 * VisualNotes AI - Modo Local (sin inicio de sesión)
 * Prototipo Grupo 4 - IA y Sistemas
 *
 * Por ahora todos los apuntes se guardan localmente en la base SQLite del
 * dispositivo, sin cuentas ni sesiones. El inicio de sesión se añadirá más
 * adelante. Este módulo mantiene la misma interfaz que usaba la autenticación
 * para que la app siga funcionando, pero sin token ni usuario.
 */

class AuthManager {
  constructor() {
    // Limpiar cualquier token/sesión previa para forzar el modo local.
    localStorage.removeItem("vn_token");
    localStorage.removeItem("vn_user");
    this.token = null;
    this.user = null;
  }

  isLoggedIn() {
    return false;
  }

  getToken() {
    return null;
  }

  getUser() {
    return null;
  }

  setSession(token, user) {
    // Deshabilitado: el inicio de sesión se añadirá más adelante.
  }

  logout() {
    this.updateUI();
  }

  async checkCurrentSession() {
    this.updateUI();
  }

  updateUI() {
    const userBadge = document.getElementById("nav-user-badge");
    const loginBtn = document.getElementById("btn-open-login");
    const logoutBtn = document.getElementById("btn-logout");
    if (userBadge) userBadge.style.display = "none";
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
}

const auth = new AuthManager();
