const USERS_KEY = "bpe_users";
const SESSION_KEY = "bpe_session";

const authModal = document.getElementById("authModal");
const authMessage = document.getElementById("authMessage");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");

const openSignIn = document.getElementById("openSignIn");
const heroGetStarted = document.getElementById("heroGetStarted");
const topActions = document.getElementById("topActions");
const heroActions = document.getElementById("heroActions");

const slides = Array.from(document.querySelectorAll(".hero-slide"));
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
let activeSlideIndex = 0;
let slideTimer = null;

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

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function openAuth(mode = "signin") {
  setAuthMode(mode);
  authMessage.textContent = "";
  authModal.classList.remove("hidden");
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuth() {
  authModal.classList.add("hidden");
  authModal.setAttribute("aria-hidden", "true");
}

function setAuthMode(mode) {
  const signIn = mode === "signin";
  signInForm.classList.toggle("hidden", !signIn);
  signUpForm.classList.toggle("hidden", signIn);
  tabSignIn.classList.toggle("active", signIn);
  tabSignUp.classList.toggle("active", !signIn);
}

function bindTopActionEvents() {
  document
    .getElementById("openSignIn")
    ?.addEventListener("click", () => openAuth("signin"));
  document
    .getElementById("openSignUp")
    ?.addEventListener("click", () => openAuth("signup"));
  document
    .getElementById("heroGetStarted")
    ?.addEventListener("click", () => openAuth("signup"));
  document.getElementById("signOut")?.addEventListener("click", () => {
    clearSession();
    renderAuthButtons();
  });
}

function renderAuthButtons() {
  const session = getSession();
  if (!session) {
    topActions.innerHTML =
      '<button class="utility-btn" id="openSignIn">Account</button>';
    heroActions.innerHTML =
      '<button class="cta" id="heroGetStarted">Find out more about the IBPLC</button><a class="cta ghost" href="edit/index.html">Open Editor Demo</a>';
  } else {
    topActions.innerHTML =
      '<a href="dashboard.html">Dashboard</a><a href="settings.html">Settings</a><a href="account.html">Account</a><button class="utility-btn" id="signOut">Sign out</button>';
    heroActions.innerHTML =
      '<a class="cta" href="dashboard.html">Open My Dashboard</a><a class="cta ghost" href="edit/index.html">Open Editor Demo</a>';
  }
  bindTopActionEvents();
}

function setActiveSlide(index) {
  if (!slides.length) return;
  activeSlideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeSlideIndex);
  });
}

function startSlideshow() {
  if (!slides.length) return;
  if (slideTimer) {
    window.clearInterval(slideTimer);
  }
  slideTimer = window.setInterval(() => {
    setActiveSlide(activeSlideIndex + 1);
  }, 5500);
}

openSignIn?.addEventListener("click", () => openAuth("signin"));
heroGetStarted?.addEventListener("click", () => openAuth("signup"));

tabSignIn.addEventListener("click", () => setAuthMode("signin"));
tabSignUp.addEventListener("click", () => setAuthMode("signup"));

document.querySelectorAll("[data-close-auth]").forEach((closeTrigger) => {
  closeTrigger.addEventListener("click", closeAuth);
});

heroPrev?.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex - 1);
  startSlideshow();
});

heroNext?.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex + 1);
  startSlideshow();
});

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("signUpName").value.trim();
  const email = document
    .getElementById("signUpEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("signUpPassword").value;

  if (!name || !email || password.length < 6) {
    authMessage.textContent =
      "Enter valid details (password at least 6 characters).";
    return;
  }

  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    authMessage.textContent = "An account with this email already exists.";
    return;
  }

  users.push({ name, email, password });
  saveUsers(users);
  setSession({ name, email });

  authMessage.textContent = "Account created. Redirecting to dashboard...";
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 600);
});

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document
    .getElementById("signInEmail")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("signInPassword").value;

  const users = getUsers();
  const user = users.find(
    (entry) => entry.email === email && entry.password === password,
  );

  if (!user) {
    authMessage.textContent = "Invalid email or password.";
    return;
  }

  setSession({ name: user.name, email: user.email });
  authMessage.textContent = "Signed in. Redirecting to dashboard...";
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 450);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !authModal.classList.contains("hidden")) {
    closeAuth();
  }
});

setActiveSlide(0);
startSlideshow();
renderAuthButtons();
