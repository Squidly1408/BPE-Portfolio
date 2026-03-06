const SESSION_KEY = "bpe_session";

const welcomeText = document.getElementById("welcomeText");
const signOutButton = document.getElementById("signOut");

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

const session = ensureSession();
if (session) {
  welcomeText.textContent = `Signed in: ${session.name}`;
  signOutButton.addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}
