const USERS_KEY = "bpe_users";
const SESSION_KEY = "bpe_session";
const PORTFOLIOS_KEY = "bpe_portfolios";
const EDITOR_STATE_KEY = "portfolio_editor_state_v3";

const welcomeText = document.getElementById("welcomeText");
const signOutButton = document.getElementById("signOut");
const createPortfolioForm = document.getElementById("createPortfolioForm");
const portfolioList = document.getElementById("portfolioList");
const refreshListButton = document.getElementById("refreshList");
const formMessage = document.getElementById("formMessage");

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getPortfolios() {
  const raw = localStorage.getItem(PORTFOLIOS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function savePortfolios(portfolios) {
  localStorage.setItem(PORTFOLIOS_KEY, JSON.stringify(portfolios));
}

function ensureSession() {
  const session = getSession();
  if (!session) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function renderPortfolioList() {
  const session = getSession();
  if (!session) return;

  const allPortfolios = getPortfolios();
  const mine = allPortfolios.filter(
    (portfolio) => portfolio.ownerEmail === session.email,
  );

  if (!mine.length) {
    portfolioList.innerHTML =
      '<div class="empty">No portfolios yet. Create your first official portfolio from the form.</div>';
    return;
  }

  portfolioList.innerHTML = "";
  mine.forEach((portfolio) => {
    const card = document.createElement("article");
    card.className = "portfolio-card";
    card.innerHTML = `
      <h3>${portfolio.name}</h3>
      <p class="portfolio-meta">Theme: ${portfolio.theme} • Cohort: ${portfolio.cohort || "Not set"}</p>
      <p class="portfolio-meta">Created: ${new Date(portfolio.createdAt).toLocaleDateString()}</p>
      <div class="portfolio-actions">
        <button class="btn" data-open-editor="${portfolio.id}">Open Editor</button>
        <button class="btn" data-delete="${portfolio.id}">Delete</button>
      </div>
    `;
    portfolioList.appendChild(card);
  });
}

function applyPortfolioToEditor(portfolio) {
  const raw = localStorage.getItem(EDITOR_STATE_KEY);
  let current = {};
  if (raw) {
    try {
      current = JSON.parse(raw);
    } catch {
      current = {};
    }
  }

  current.logo = portfolio.ownerName || "BPE Student";
  current.hero = current.hero || {};
  current.hero.title = portfolio.name;
  current.hero.subtitle = `${portfolio.cohort || "Big Picture Education Portfolio"} • Official Student Portfolio`;
  current.theme = current.theme || {};
  current.theme.styleType = portfolio.theme;

  localStorage.setItem(EDITOR_STATE_KEY, JSON.stringify(current));
}

function bindListActions() {
  portfolioList.addEventListener("click", (event) => {
    const openButton = event.target.closest("button[data-open-editor]");
    if (openButton) {
      const id = openButton.dataset.openEditor;
      const all = getPortfolios();
      const portfolio = all.find((entry) => entry.id === id);
      if (!portfolio) return;
      applyPortfolioToEditor(portfolio);
      window.location.href = "edit/index.html";
      return;
    }

    const deleteButton = event.target.closest("button[data-delete]");
    if (!deleteButton) return;

    const id = deleteButton.dataset.delete;
    const filtered = getPortfolios().filter((entry) => entry.id !== id);
    savePortfolios(filtered);
    renderPortfolioList();
  });
}

createPortfolioForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const session = getSession();
  if (!session) return;

  const name = document.getElementById("portfolioName").value.trim();
  const theme = document.getElementById("portfolioTheme").value;
  const cohort = document.getElementById("portfolioCohort").value.trim();

  if (!name) {
    formMessage.textContent = "Portfolio name is required.";
    return;
  }

  const newPortfolio = {
    id: `portfolio-${Date.now()}`,
    ownerEmail: session.email,
    ownerName: session.name,
    name,
    theme,
    cohort,
    createdAt: new Date().toISOString(),
  };

  const all = getPortfolios();
  all.unshift(newPortfolio);
  savePortfolios(all);

  formMessage.textContent = "Portfolio created. Open it from your list.";
  createPortfolioForm.reset();
  renderPortfolioList();
});

refreshListButton.addEventListener("click", renderPortfolioList);

signOutButton.addEventListener("click", () => {
  clearSession();
  window.location.href = "index.html";
});

const session = ensureSession();
if (session) {
  welcomeText.textContent = `Signed in: ${session.name}`;
  renderPortfolioList();
  bindListActions();
}
