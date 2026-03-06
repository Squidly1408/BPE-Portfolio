const USERS_KEY = "bpe_users";
const SESSION_KEY = "bpe_session";
const PORTFOLIOS_KEY = "bpe_portfolios";
const SETTINGS_KEY = "bpe_settings";

const welcomeText = document.getElementById("welcomeText");
const signOutButton = document.getElementById("signOut");
const accountForm = document.getElementById("accountForm");
const accountMessage = document.getElementById("accountMessage");
const deleteAccountButton = document.getElementById("deleteAccount");

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

function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

const session = ensureSession();
if (session) {
  welcomeText.textContent = `Signed in: ${session.name}`;

  const users = getUsers();
  const currentUser = users.find((entry) => entry.email === session.email);
  if (currentUser) {
    document.getElementById("accountName").value = currentUser.name;
    document.getElementById("accountEmail").value = currentUser.email;
  }

  accountForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newName = document.getElementById("accountName").value.trim();
    const newEmail = document
      .getElementById("accountEmail")
      .value.trim()
      .toLowerCase();
    const newPassword = document.getElementById("accountPassword").value;

    if (!newName || !newEmail) {
      accountMessage.textContent = "Name and email are required.";
      return;
    }

    const allUsers = getUsers();
    const existing = allUsers.find(
      (entry) => entry.email === newEmail && entry.email !== session.email,
    );
    if (existing) {
      accountMessage.textContent =
        "That email is already in use by another account.";
      return;
    }

    const updatedUsers = allUsers.map((entry) => {
      if (entry.email !== session.email) return entry;
      return {
        ...entry,
        name: newName,
        email: newEmail,
        password: newPassword ? newPassword : entry.password,
      };
    });

    saveUsers(updatedUsers);

    const portfoliosRaw = localStorage.getItem(PORTFOLIOS_KEY);
    if (portfoliosRaw) {
      try {
        const portfolios = JSON.parse(portfoliosRaw);
        const updatedPortfolios = portfolios.map((portfolio) => {
          if (portfolio.ownerEmail !== session.email) return portfolio;
          return {
            ...portfolio,
            ownerEmail: newEmail,
            ownerName: newName,
          };
        });
        localStorage.setItem(PORTFOLIOS_KEY, JSON.stringify(updatedPortfolios));
      } catch {}
    }

    const allSettingsRaw = localStorage.getItem(SETTINGS_KEY);
    if (allSettingsRaw) {
      try {
        const settings = JSON.parse(allSettingsRaw) || {};
        if (settings[session.email]) {
          settings[newEmail] = settings[session.email];
          delete settings[session.email];
          localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        }
      } catch {}
    }

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ name: newName, email: newEmail }),
    );
    welcomeText.textContent = `Signed in: ${newName}`;
    accountMessage.textContent = "Account updated.";
    document.getElementById("accountPassword").value = "";
  });

  deleteAccountButton.addEventListener("click", () => {
    const confirmDelete = window.confirm(
      "Delete account and all associated portfolios? This cannot be undone.",
    );
    if (!confirmDelete) return;

    const users = getUsers().filter((entry) => entry.email !== session.email);
    saveUsers(users);

    const portfoliosRaw = localStorage.getItem(PORTFOLIOS_KEY);
    if (portfoliosRaw) {
      try {
        const portfolios = JSON.parse(portfoliosRaw);
        const updated = portfolios.filter(
          (portfolio) => portfolio.ownerEmail !== session.email,
        );
        localStorage.setItem(PORTFOLIOS_KEY, JSON.stringify(updated));
      } catch {}
    }

    const allSettingsRaw = localStorage.getItem(SETTINGS_KEY);
    if (allSettingsRaw) {
      try {
        const settings = JSON.parse(allSettingsRaw) || {};
        delete settings[session.email];
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch {}
    }

    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });

  signOutButton.addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}
