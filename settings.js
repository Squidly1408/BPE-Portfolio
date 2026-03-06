const USERS_KEY = "bpe_users";
const SESSION_KEY = "bpe_session";
const SETTINGS_KEY = "bpe_settings";

const welcomeText = document.getElementById("welcomeText");
const signOutButton = document.getElementById("signOut");
const settingsForm = document.getElementById("settingsForm");
const settingsMessage = document.getElementById("settingsMessage");
const settingsSummary = document.getElementById("settingsSummary");

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function ensureSession() {
  const session = getSession();
  if (!session) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

function getAllSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

function saveAllSettings(value) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(value));
}

function getMySettings(email) {
  const all = getAllSettings();
  return all[email] || {
    campusName: "",
    defaultTheme: "default",
    defaultCohort: "",
    autoOpenEditor: false,
    showPublicBadge: true
  };
}

function renderSummary(settings) {
  settingsSummary.innerHTML = `
    <article class="portfolio-card"><h3>Campus</h3><p class="portfolio-meta">${settings.campusName || "Not set"}</p></article>
    <article class="portfolio-card"><h3>Default Theme</h3><p class="portfolio-meta">${settings.defaultTheme}</p></article>
    <article class="portfolio-card"><h3>Default Cohort</h3><p class="portfolio-meta">${settings.defaultCohort || "Not set"}</p></article>
    <article class="portfolio-card"><h3>Auto Open Editor</h3><p class="portfolio-meta">${settings.autoOpenEditor ? "Enabled" : "Disabled"}</p></article>
    <article class="portfolio-card"><h3>Official Badge Default</h3><p class="portfolio-meta">${settings.showPublicBadge ? "Enabled" : "Disabled"}</p></article>
  `;
}

const session = ensureSession();
if (session) {
  welcomeText.textContent = `Signed in: ${session.name}`;
  const settings = getMySettings(session.email);

  document.getElementById("campusName").value = settings.campusName;
  document.getElementById("defaultTheme").value = settings.defaultTheme;
  document.getElementById("defaultCohort").value = settings.defaultCohort;
  document.getElementById("autoOpenEditor").checked = settings.autoOpenEditor;
  document.getElementById("showPublicBadge").checked = settings.showPublicBadge;

  renderSummary(settings);

  settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const updated = {
      campusName: document.getElementById("campusName").value.trim(),
      defaultTheme: document.getElementById("defaultTheme").value,
      defaultCohort: document.getElementById("defaultCohort").value.trim(),
      autoOpenEditor: document.getElementById("autoOpenEditor").checked,
      showPublicBadge: document.getElementById("showPublicBadge").checked
    };

    const all = getAllSettings();
    all[session.email] = updated;
    saveAllSettings(all);

    settingsMessage.textContent = "Settings saved.";
    renderSummary(updated);
  });

  signOutButton.addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}
