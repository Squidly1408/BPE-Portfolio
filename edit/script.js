const STORAGE_KEY = "portfolio_editor_state_v3";

const DEFAULT_BPE_FLOWER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 375" id="flower">
  <g transform="rotate(-30, 187.5, 187.5)">
    <g class="rings">
      <circle cx="187.5" cy="187.5" r="60" stroke="#adadad" stroke-width="5" fill="none"></circle>
      <circle cx="187.5" cy="187.5" r="85" stroke="#adadad" stroke-width="5" fill="none"></circle>
      <circle cx="187.5" cy="187.5" r="115" stroke="#adadad" stroke-width="5" fill="none"></circle>
      <circle cx="187.5" cy="187.5" r="145" stroke="#adadad" stroke-width="5" fill="none"></circle>
      <circle cx="187.5" cy="187.5" r="175" stroke="#adadad" stroke-width="5" fill="none"></circle>
    </g>
    <g class="petals">
      <path class="petal1" d="M 235.097656 112.074219 L 192.4375 184.824219 L 276.769531 185.394531 C 314.003906 185.683594 337.441406 145.207031 318.667969 113.078125 C 300.667969 80.507812 253.898438 79.9375 235.097656 112.074219 Z"></path>
      <path class="petal2" d="M 317.304688 264.46875 C 337.25 232.628906 314.488281 190.972656 276.855469 190.792969 C 276.855469 190.792969 192.398438 190.222656 192.398438 190.222656 L 234.132812 263.652344 C 252.367188 295.730469 298.480469 296.207031 317.304688 264.46875 Z"></path>
      <path class="petal3" d="M 229.441406 266.316406 L 187.707031 192.886719 L 144.984375 265.746094 C 125.882812 298.171875 150.027344 339.042969 187.589844 338.195312 C 224.488281 338.261719 247.675781 298.398438 229.441406 266.316406 Z"></path>
      <path class="petal4" d="M 56.511719 261.203125 C 74.160156 294.285156 121.5 295.25 140.433594 262.832031 C 140.433594 262.832031 183.050781 190.15625 183.050781 190.15625 L 98.804688 189.589844 C 61.90625 189.339844 38.4375 229.035156 56.511719 261.203125 Z"></path>
      <path class="petal5" d="M 98.628906 184.191406 L 183.085938 184.761719 L 141.351562 111.332031 C 123.117188 79.25 77.007812 78.777344 58.183594 110.515625 C 38.234375 142.355469 60.996094 184.007812 98.628906 184.191406 Z"></path>
      <path class="petal6" d="M 146.042969 108.664062 L 187.78125 182.09375 L 230.503906 109.238281 C 249.601562 76.808594 225.460938 35.941406 187.898438 36.789062 C 150.996094 36.722656 127.8125 76.582031 146.042969 108.664062 Z"></path>
    </g>
  </g>
</svg>`;

const themeTypes = {
  default: {
    bgMain: "#eef6ff",
    bgSecondary: "#ffffff",
    textMain: "#0f172a",
    textInverse: "#f8fafc",
    linkAccent: "#2563eb",
    fontHeadings: "Inter",
    fontTitles: "Inter",
    fontText: "Inter",
  },
  "software-engineer": {
    bgMain: "#05070a",
    bgSecondary: "#0d1117",
    textMain: "#8fffa9",
    textInverse: "#03110a",
    linkAccent: "#22d3ee",
    fontHeadings: "Share Tech Mono",
    fontTitles: "Share Tech Mono",
    fontText: "JetBrains Mono",
  },
  "game-developer": {
    bgMain: "#170429",
    bgSecondary: "#250842",
    textMain: "#f5e8ff",
    textInverse: "#12041f",
    linkAccent: "#22d3ee",
    fontHeadings: "Press Start 2P",
    fontTitles: "Press Start 2P",
    fontText: "VT323",
  },
  "graphic-designer": {
    bgMain: "#f7f4ff",
    bgSecondary: "#ffffff",
    textMain: "#261c4a",
    textInverse: "#f8f4ff",
    linkAccent: "#8b5cf6",
    fontHeadings: "Space Grotesk",
    fontTitles: "Space Grotesk",
    fontText: "Inter",
  },
  architect: {
    bgMain: "#0d2b52",
    bgSecondary: "#123c6b",
    textMain: "#e7f6ff",
    textInverse: "#0d2b52",
    linkAccent: "#9be7ff",
    fontHeadings: "Montserrat",
    fontTitles: "Montserrat",
    fontText: "Inter",
  },
  "aerospace-engineer": {
    bgMain: "#0b132b",
    bgSecondary: "#1b243f",
    textMain: "#f7fafc",
    textInverse: "#0b132b",
    linkAccent: "#f97316",
    fontHeadings: "Orbitron",
    fontTitles: "Orbitron",
    fontText: "Inter",
  },
  "cybersecurity-analyst": {
    bgMain: "#050505",
    bgSecondary: "#0f0f0f",
    textMain: "#9cff57",
    textInverse: "#050505",
    linkAccent: "#ef4444",
    fontHeadings: "Share Tech Mono",
    fontTitles: "Share Tech Mono",
    fontText: "JetBrains Mono",
  },
  "data-scientist": {
    bgMain: "#f2f5ff",
    bgSecondary: "#ffffff",
    textMain: "#1e2a5a",
    textInverse: "#f8faff",
    linkAccent: "#6366f1",
    fontHeadings: "Manrope",
    fontTitles: "Manrope",
    fontText: "Inter",
  },
  "medical-doctor": {
    bgMain: "#f5fbff",
    bgSecondary: "#ffffff",
    textMain: "#0f2742",
    textInverse: "#ffffff",
    linkAccent: "#0891b2",
    fontHeadings: "Nunito",
    fontTitles: "Nunito",
    fontText: "Inter",
  },
  lawyer: {
    bgMain: "#f8eed8",
    bgSecondary: "#fff9eb",
    textMain: "#4a0f2e",
    textInverse: "#fff7e6",
    linkAccent: "#b8860b",
    fontHeadings: "Merriweather",
    fontTitles: "Merriweather",
    fontText: "Lora",
  },
  journalist: {
    bgMain: "#f8f8f8",
    bgSecondary: "#ffffff",
    textMain: "#111111",
    textInverse: "#ffffff",
    linkAccent: "#c1121f",
    fontHeadings: "Libre Baskerville",
    fontTitles: "Libre Baskerville",
    fontText: "Source Sans 3",
  },
  photographer: {
    bgMain: "#1f1f1f",
    bgSecondary: "#2f2f2f",
    textMain: "#f5f5f5",
    textInverse: "#111111",
    linkAccent: "#d1d5db",
    fontHeadings: "Poppins",
    fontTitles: "Poppins",
    fontText: "Inter",
  },
  chef: {
    bgMain: "#fff6ea",
    bgSecondary: "#fffdf7",
    textMain: "#5a341e",
    textInverse: "#fff8ef",
    linkAccent: "#d97706",
    fontHeadings: "Playfair Display",
    fontTitles: "Playfair Display",
    fontText: "Nunito",
  },
  "environmental-scientist": {
    bgMain: "#edf5e7",
    bgSecondary: "#fbf8ee",
    textMain: "#2f4f2f",
    textInverse: "#f9fff4",
    linkAccent: "#4b7f52",
    fontHeadings: "Cabin",
    fontTitles: "Cabin",
    fontText: "Merriweather",
  },
  "marine-biologist": {
    bgMain: "#04243d",
    bgSecondary: "#0b3b63",
    textMain: "#def7ff",
    textInverse: "#032133",
    linkAccent: "#2dd4bf",
    fontHeadings: "Outfit",
    fontTitles: "Outfit",
    fontText: "Inter",
  },
  "automotive-engineer": {
    bgMain: "#1f2937",
    bgSecondary: "#111827",
    textMain: "#e5e7eb",
    textInverse: "#0f172a",
    linkAccent: "#f97316",
    fontHeadings: "Rajdhani",
    fontTitles: "Rajdhani",
    fontText: "Inter",
  },
  teacher: {
    bgMain: "#0f5132",
    bgSecondary: "#1f6b45",
    textMain: "#ecfdf3",
    textInverse: "#0f3f2b",
    linkAccent: "#f8fafc",
    fontHeadings: "Patrick Hand",
    fontTitles: "Patrick Hand",
    fontText: "Nunito",
  },
  archaeologist: {
    bgMain: "#f5ead7",
    bgSecondary: "#fff4e4",
    textMain: "#5a3e2b",
    textInverse: "#fff7ec",
    linkAccent: "#9a6b3a",
    fontHeadings: "Cinzel",
    fontTitles: "Cinzel",
    fontText: "Lora",
  },
  "music-producer": {
    bgMain: "#0b1020",
    bgSecondary: "#131a2f",
    textMain: "#e5ecff",
    textInverse: "#090f1b",
    linkAccent: "#22c55e",
    fontHeadings: "Sora",
    fontTitles: "Sora",
    fontText: "Inter",
  },
  "film-director": {
    bgMain: "#1a1a1a",
    bgSecondary: "#262626",
    textMain: "#f5f5f5",
    textInverse: "#0f0f0f",
    linkAccent: "#f59e0b",
    fontHeadings: "Bebas Neue",
    fontTitles: "Bebas Neue",
    fontText: "Inter",
  },
  pilot: {
    bgMain: "#0a1f3d",
    bgSecondary: "#133157",
    textMain: "#e6f1ff",
    textInverse: "#071b33",
    linkAccent: "#38bdf8",
    fontHeadings: "Exo 2",
    fontTitles: "Exo 2",
    fontText: "Inter",
  },
  entrepreneur: {
    bgMain: "#f7f9fc",
    bgSecondary: "#ffffff",
    textMain: "#0f172a",
    textInverse: "#f8fafc",
    linkAccent: "#2563eb",
    fontHeadings: "DM Sans",
    fontTitles: "DM Sans",
    fontText: "Inter",
  },
  "construction-engineer": {
    bgMain: "#202a36",
    bgSecondary: "#141c25",
    textMain: "#e2e8f0",
    textInverse: "#0f172a",
    linkAccent: "#f59e0b",
    fontHeadings: "Oswald",
    fontTitles: "Oswald",
    fontText: "Inter",
  },
  astronomer: {
    bgMain: "#090b1a",
    bgSecondary: "#121634",
    textMain: "#e0e7ff",
    textInverse: "#070916",
    linkAccent: "#a78bfa",
    fontHeadings: "Space Grotesk",
    fontTitles: "Space Grotesk",
    fontText: "Inter",
  },
  "robotics-engineer": {
    bgMain: "#0f172a",
    bgSecondary: "#1e293b",
    textMain: "#e2e8f0",
    textInverse: "#0b1220",
    linkAccent: "#06b6d4",
    fontHeadings: "Orbitron",
    fontTitles: "Orbitron",
    fontText: "Inter",
  },
  "fashion-designer": {
    bgMain: "#fff1f6",
    bgSecondary: "#ffffff",
    textMain: "#4a1831",
    textInverse: "#fff7fb",
    linkAccent: "#ec4899",
    fontHeadings: "Cormorant Garamond",
    fontTitles: "Cormorant Garamond",
    fontText: "Inter",
  },
  "detective-investigator": {
    bgMain: "#1c1c1c",
    bgSecondary: "#2a2a2a",
    textMain: "#f1f5f9",
    textInverse: "#0f0f0f",
    linkAccent: "#f43f5e",
    fontHeadings: "Special Elite",
    fontTitles: "Special Elite",
    fontText: "Inter",
  },
  historian: {
    bgMain: "#f4eee2",
    bgSecondary: "#fffaf1",
    textMain: "#3e3022",
    textInverse: "#fff8ee",
    linkAccent: "#8b5e3c",
    fontHeadings: "EB Garamond",
    fontTitles: "EB Garamond",
    fontText: "Lora",
  },
  "ui-ux-designer": {
    bgMain: "#f5f8ff",
    bgSecondary: "#ffffff",
    textMain: "#1f2a44",
    textInverse: "#f7fbff",
    linkAccent: "#3b82f6",
    fontHeadings: "Manrope",
    fontTitles: "Manrope",
    fontText: "Inter",
  },
  "civil-engineer": {
    bgMain: "#f3f7fb",
    bgSecondary: "#ffffff",
    textMain: "#1f3b57",
    textInverse: "#f8fbff",
    linkAccent: "#0ea5e9",
    fontHeadings: "Archivo",
    fontTitles: "Archivo",
    fontText: "Inter",
  },
  "robotics-ai-researcher": {
    bgMain: "#0a1220",
    bgSecondary: "#121b2d",
    textMain: "#dbeafe",
    textInverse: "#050c16",
    linkAccent: "#22d3ee",
    fontHeadings: "Space Grotesk",
    fontTitles: "Space Grotesk",
    fontText: "JetBrains Mono",
  },
};

const themeClassNames = Object.keys(themeTypes).map((type) => `theme-${type}`);

const defaultState = {
  logo: "Mil",
  nav: [
    { label: "About", href: "#about" },
    { label: "Art", href: "#art" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Portfolio",
    subtitle: "Marine Biology • Scientific Illustration • Conservation",
    buttonText: "View Profile",
    buttonHref: "#about",
  },
  about: {
    title: "About Mil",
    text: "Mil is a marine biology student and ocean artist passionate about reef ecosystems, pelagic life, and marine conservation. Her work merges scientific field research with visual storytelling.",
  },
  profile: {
    petalScales: {
      petal1: 125,
      petal2: 125,
      petal3: 125,
      petal4: 125,
      petal5: 125,
      petal6: 125,
    },
    resources: [
      { label: "Autobiography", href: "#" },
      { label: "Senior Project", href: "#" },
      { label: "Video Profile", href: "#" },
      { label: "Future Pathway Plan", href: "#" },
    ],
  },
  galleryTitle: "Gallery",
  gallery: [
    {
      id: `g-${Date.now()}-1`,
      title: "Reef Bioluminescence",
      description: "Illustration exploring plankton light emission patterns.",
      image: "../assets/img/reef_bioluminescence.jpg",
      popupTitle: "Reef Bioluminescence",
      popupText:
        "This illustration highlights how reef organisms and plankton emit light patterns at night.",
      popupImage: "../assets/img/reef_bioluminescence.jpg",
    },
    {
      id: `g-${Date.now()}-2`,
      title: "Tidal Ecosystem Study",
      description: "Mixed media piece inspired by field observations.",
      image: "../assets/img/tital_ecosystem.png",
      popupTitle: "Tidal Ecosystem Study",
      popupText:
        "This mixed media study documents species variation and habitat changes across tidal zones.",
      popupImage: "../assets/img/tital_ecosystem.png",
    },
  ],
  internshipTitle: "Research & Internships",
  internships: [
    {
      id: `i-${Date.now()}-1`,
      title: "Marine Field Internship — Coastal Research Lab",
      description:
        "Conducted reef transects, assisted in specimen cataloguing, and logged ecological data.",
      popupTitle: "Marine Field Internship — Coastal Research Lab",
      popupText:
        "Completed reef transects, supported specimen cataloging, and translated findings into visual summaries.",
      popupImage: "",
    },
  ],
  skillsTitle: "Skills",
  skills: [
    "Marine Ecology",
    "Field Research & Sampling",
    "Data Interpretation",
    "Scientific Illustration",
  ],
  contact: {
    title: "Contact",
    email: "Email: mil@example.com",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "ResearchGate", href: "https://www.researchgate.net/" },
    ],
  },
  theme: {
    styleType: "default",
    bgMain: "#eef6ff",
    bgSecondary: "#ffffff",
    textMain: "#0f172a",
    textInverse: "#f8fafc",
    linkAccent: "#2563eb",
    fontHeadings: "Inter",
    fontTitles: "Inter",
    fontText: "Inter",
  },
};

let state = structuredClone(defaultState);

const byId = (id) => document.getElementById(id);

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state = {
      ...structuredClone(defaultState),
      ...parsed,
      hero: { ...defaultState.hero, ...(parsed.hero || {}) },
      about: { ...defaultState.about, ...(parsed.about || {}) },
      profile: {
        ...defaultState.profile,
        ...(parsed.profile || {}),
        resources:
          parsed.profile?.resources ||
          structuredClone(defaultState.profile.resources),
      },
      contact: {
        ...defaultState.contact,
        ...(parsed.contact || {}),
        links:
          parsed.contact?.links || structuredClone(defaultState.contact.links),
      },
      theme: { ...defaultState.theme, ...(parsed.theme || {}) },
      gallery: Array.isArray(parsed.gallery)
        ? parsed.gallery
        : structuredClone(defaultState.gallery),
      internships: Array.isArray(parsed.internships)
        ? parsed.internships
        : structuredClone(defaultState.internships),
      skills: Array.isArray(parsed.skills)
        ? parsed.skills
        : structuredClone(defaultState.skills),
      nav: Array.isArray(parsed.nav)
        ? parsed.nav
        : structuredClone(defaultState.nav),
    };

    state.profile.petalScales = {
      petal1: parsed.profile?.petalScales?.petal1 ?? 125,
      petal2: parsed.profile?.petalScales?.petal2 ?? 125,
      petal3: parsed.profile?.petalScales?.petal3 ?? 125,
      petal4: parsed.profile?.petalScales?.petal4 ?? 125,
      petal5: parsed.profile?.petalScales?.petal5 ?? 125,
      petal6: parsed.profile?.petalScales?.petal6 ?? 125,
    };

    if (!parsed.theme?.styleType || !themeTypes[state.theme.styleType]) {
      state.theme.styleType = "default";
      applyThemeTypeDefaults("default");
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(defaultState);
  }
}

function applyThemeTypeDefaults(styleType) {
  const themePreset = themeTypes[styleType];
  if (!themePreset) return;

  state.theme.styleType = styleType;
  state.theme.bgMain = themePreset.bgMain;
  state.theme.bgSecondary = themePreset.bgSecondary;
  state.theme.textMain = themePreset.textMain;
  state.theme.textInverse = themePreset.textInverse;
  state.theme.linkAccent = themePreset.linkAccent;
  state.theme.fontHeadings = themePreset.fontHeadings;
  state.theme.fontTitles = themePreset.fontTitles;
  state.theme.fontText = themePreset.fontText;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyGoogleFont(name, linkId, cssVar) {
  const clean = (name || "").trim().replace(/\s+/g, " ");
  if (!clean) {
    document.documentElement.style.removeProperty(cssVar);
    return;
  }
  const href = `https://fonts.googleapis.com/css2?family=${clean.split(" ").join("+")}:wght@400;500;600;700&display=swap`;
  let link = byId(linkId);
  if (!link) {
    link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = href;
  document.documentElement.style.setProperty(cssVar, `"${clean}", sans-serif`);
}

function applyTheme() {
  const preview = document.querySelector(".site-preview");
  preview.classList.remove(...themeClassNames);
  preview.classList.add(`theme-${state.theme.styleType}`);

  document.documentElement.style.setProperty(
    "--color-bg-main",
    state.theme.bgMain,
  );
  document.documentElement.style.setProperty(
    "--color-bg-secondary",
    state.theme.bgSecondary,
  );
  document.documentElement.style.setProperty(
    "--color-text-main",
    state.theme.textMain,
  );
  document.documentElement.style.setProperty(
    "--color-text-inverse",
    state.theme.textInverse,
  );
  document.documentElement.style.setProperty(
    "--color-link-accent",
    state.theme.linkAccent,
  );

  applyGoogleFont(
    state.theme.fontHeadings,
    "font-headings-link",
    "--font-headings",
  );
  applyGoogleFont(state.theme.fontTitles, "font-titles-link", "--font-titles");
  applyGoogleFont(state.theme.fontText, "font-text-link", "--font-text");
}

function renderNav() {
  const nav = byId("mainNav");
  nav.innerHTML = "";
  state.nav.forEach((item) => {
    const a = document.createElement("a");
    a.textContent = item.label;
    a.href = item.href || "#";
    nav.appendChild(a);
  });
}

function renderResources() {
  const container = byId("resourceButtons");
  container.innerHTML = "";
  state.profile.resources.forEach((item) => {
    const a = document.createElement("a");
    a.className = "resource-btn";
    a.textContent = item.label;
    a.href = item.href || "#";
    container.appendChild(a);
  });
}

function renderGallery() {
  const container = byId("galleryContainer");
  container.innerHTML = "";
  state.gallery.forEach((item) => {
    const card = document.createElement("div");
    card.className = "art-card popup-trigger";
    card.dataset.popupType = "gallery";
    card.dataset.popupId = item.id;
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="art-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderInternships() {
  const container = byId("researchContainer");
  container.innerHTML = "";
  state.internships.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card popup-trigger";
    card.dataset.popupType = "internship";
    card.dataset.popupId = item.id;
    card.tabIndex = 0;
    card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    container.appendChild(card);
  });
}

function renderSkills() {
  const container = byId("skillsContainer");
  container.innerHTML = "";
  state.skills.forEach((skill) => {
    const div = document.createElement("div");
    div.textContent = skill;
    container.appendChild(div);
  });
}

function renderContactLinks() {
  const container = byId("contactLinks");
  container.className = "footer-links";
  container.innerHTML = "";
  state.contact.links.forEach((link, idx) => {
    const a = document.createElement("a");
    a.href = link.href || "#";
    a.textContent = link.label;
    container.appendChild(a);
    if (idx < state.contact.links.length - 1) {
      container.appendChild(document.createTextNode(" • "));
    }
  });
}

function renderPreview() {
  byId("logoText").textContent = state.logo;
  byId("heroTitle").textContent = state.hero.title;
  byId("heroSubtitle").textContent = state.hero.subtitle;
  byId("heroButton").textContent = state.hero.buttonText;
  byId("heroButton").href = state.hero.buttonHref || "#";
  byId("aboutTitle").textContent = state.about.title;
  byId("aboutText").textContent = state.about.text;
  const profileVisual = byId("profileVisual");
  profileVisual.innerHTML = DEFAULT_BPE_FLOWER_SVG;
  profileVisual.classList.add("is-svg");
  applyProfileSvgPetalScales();

  byId("galleryTitle").textContent = state.galleryTitle;
  byId("internshipTitle").textContent = state.internshipTitle;
  byId("skillsTitle").textContent = state.skillsTitle;
  byId("contactTitle").textContent = state.contact.title;
  byId("contactEmail").textContent = state.contact.email;

  renderNav();
  renderResources();
  renderGallery();
  renderInternships();
  renderSkills();
  renderContactLinks();
  applyTheme();
}

function petalLevelFromScale(value) {
  return Math.max(1, Math.min(5, Math.round((value - 50) / 25) + 1));
}

function applyProfileSvgPetalScales() {
  const svg = byId("profileVisual")?.querySelector("svg");
  for (let index = 1; index <= 6; index += 1) {
    const key = `petal${index}`;
    const scaleValue = Number(state.profile.petalScales?.[key] ?? 125);
    const levelLabel = byId(`${key}Value`);
    if (levelLabel) {
      levelLabel.textContent = String(petalLevelFromScale(scaleValue));
    }
    if (!svg) {
      continue;
    }
    const petal = svg.querySelector(`.${key}`);
    if (!petal) {
      continue;
    }
    const scale = scaleValue / 100;
    petal.style.transform = `scale(${scale * 0.8})`;
  }
}

function setInputValues() {
  byId("inputLogo").value = state.logo;
  byId("inputHeroTitle").value = state.hero.title;
  byId("inputHeroSubtitle").value = state.hero.subtitle;
  byId("inputHeroButtonText").value = state.hero.buttonText;
  byId("inputHeroButtonHref").value = state.hero.buttonHref;
  byId("inputAboutTitle").value = state.about.title;
  byId("inputAboutText").value = state.about.text;

  for (let index = 1; index <= 6; index += 1) {
    const key = `petal${index}`;
    const value = Number(state.profile.petalScales?.[key] ?? 125);
    byId(`${key}Scale`).value = String(value);
    byId(`${key}Value`).textContent = String(petalLevelFromScale(value));
  }
  byId("inputGallerySectionTitle").value = state.galleryTitle;
  byId("inputInternshipSectionTitle").value = state.internshipTitle;
  byId("inputSkillsSectionTitle").value = state.skillsTitle;
  byId("inputContactTitle").value = state.contact.title;
  byId("inputContactEmail").value = state.contact.email;

  byId("colorBgMain").value = state.theme.bgMain;
  byId("colorBgSecondary").value = state.theme.bgSecondary;
  byId("colorTextMain").value = state.theme.textMain;
  byId("colorTextInverse").value = state.theme.textInverse;
  byId("colorLinkAccent").value = state.theme.linkAccent;
  byId("themeType").value = state.theme.styleType;
  byId("fontHeadings").value = state.theme.fontHeadings;
  byId("fontTitles").value = state.theme.fontTitles;
  byId("fontText").value = state.theme.fontText;

  renderNavEditor();
  renderResourceEditor();
  renderGalleryEditor();
  renderInternshipEditor();
  renderSkillEditor();
  renderContactLinksEditor();
}

function renderNavEditor() {
  const wrapper = byId("navEditor");
  wrapper.innerHTML = "";
  state.nav.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "link-edit-row";
    row.innerHTML = `
      <label>Label</label>
      <input data-nav-index="${index}" data-field="label" type="text" value="${item.label}">
      <label>Link</label>
      <input data-nav-index="${index}" data-field="href" type="text" value="${item.href}">
    `;
    wrapper.appendChild(row);
  });
}

function renderResourceEditor() {
  const wrapper = byId("resourceEditor");
  wrapper.innerHTML = "";
  state.profile.resources.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "resource-edit-row";
    row.innerHTML = `
      <label>Button ${index + 1} Text</label>
      <input data-resource-index="${index}" data-field="label" type="text" value="${item.label}">
      <label>Button ${index + 1} Link</label>
      <input data-resource-index="${index}" data-field="href" type="text" value="${item.href}">
    `;
    wrapper.appendChild(row);
  });
}

function ensureSelection(selectId, items) {
  const select = byId(selectId);
  if (!items.length) {
    select.innerHTML = "";
    return null;
  }
  if (!items.some((item) => item.id === select.value)) {
    select.value = items[0].id;
  }
  return select.value;
}

function renderGalleryEditor() {
  const select = byId("selectGallery");
  const previousValue = select.value;
  select.innerHTML = state.gallery
    .map((item) => `<option value="${item.id}">${item.title}</option>`)
    .join("");
  if (
    previousValue &&
    state.gallery.some((item) => item.id === previousValue)
  ) {
    select.value = previousValue;
  }
  const selectedId = ensureSelection("selectGallery", state.gallery);
  const item = state.gallery.find((entry) => entry.id === selectedId);
  if (!item) return;

  byId("inputGalleryTitle").value = item.title;
  byId("inputGalleryDescription").value = item.description;
  byId("inputGalleryImage").value = item.image;
  byId("inputGalleryPopupTitle").value = item.popupTitle;
  byId("inputGalleryPopupText").value = item.popupText;
  byId("inputGalleryPopupImage").value = item.popupImage;
}

function renderInternshipEditor() {
  const select = byId("selectInternship");
  const previousValue = select.value;
  select.innerHTML = state.internships
    .map((item) => `<option value="${item.id}">${item.title}</option>`)
    .join("");
  if (
    previousValue &&
    state.internships.some((item) => item.id === previousValue)
  ) {
    select.value = previousValue;
  }
  const selectedId = ensureSelection("selectInternship", state.internships);
  const item = state.internships.find((entry) => entry.id === selectedId);
  if (!item) return;

  byId("inputInternshipTitle").value = item.title;
  byId("inputInternshipDescription").value = item.description;
  byId("inputInternshipPopupTitle").value = item.popupTitle;
  byId("inputInternshipPopupText").value = item.popupText;
  byId("inputInternshipPopupImage").value = item.popupImage || "";
}

function renderSkillEditor() {
  const select = byId("selectSkill");
  const previousValue = select.value;
  select.innerHTML = state.skills
    .map((skill, index) => `<option value="${index}">${skill}</option>`)
    .join("");
  if (previousValue !== "" && Number(previousValue) < state.skills.length) {
    select.value = previousValue;
  }
  if (select.value === "" && state.skills.length > 0) {
    select.value = "0";
  }
  const selectedIndex = Number(select.value || 0);
  byId("inputSkillText").value = state.skills[selectedIndex] || "";
}

function renderContactLinksEditor() {
  const wrapper = byId("contactLinksEditor");
  wrapper.innerHTML = "";
  state.contact.links.forEach((link, index) => {
    const row = document.createElement("div");
    row.className = "link-edit-row";
    row.innerHTML = `
      <label>Link ${index + 1} Label</label>
      <input data-contact-index="${index}" data-field="label" type="text" value="${link.label}">
      <label>Link ${index + 1} URL</label>
      <input data-contact-index="${index}" data-field="href" type="text" value="${link.href}">
      <button type="button" data-remove-contact="${index}">Remove Link</button>
    `;
    wrapper.appendChild(row);
  });
}

function openPopup(type, id) {
  const source = type === "gallery" ? state.gallery : state.internships;
  const item = source.find((entry) => entry.id === id);
  if (!item) return;

  byId("modal-title").textContent = item.popupTitle || item.title;
  byId("modal-text").textContent = item.popupText || item.description;

  const image = item.popupImage || item.image;
  const modalImage = byId("modal-image");
  if (image) {
    modalImage.src = image;
    modalImage.classList.remove("hidden");
  } else {
    modalImage.classList.add("hidden");
    modalImage.removeAttribute("src");
  }

  byId("detail-modal").classList.remove("hidden");
  byId("detail-modal").setAttribute("aria-hidden", "false");
}

function closePopup() {
  byId("detail-modal").classList.add("hidden");
  byId("detail-modal").setAttribute("aria-hidden", "true");
}

function bindImageUpload(inputId, onLoad) {
  byId(inputId).addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onLoad(String(reader.result));
      saveState();
      renderPreview();
      setInputValues();
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  });
}

function bindCoreInputs() {
  const bind = (id, handler) => {
    byId(id).addEventListener("input", (event) => {
      handler(event.target.value);
      renderPreview();
      saveState();
    });
  };

  bind("inputLogo", (value) => {
    state.logo = value;
  });
  bind("inputHeroTitle", (value) => {
    state.hero.title = value;
  });
  bind("inputHeroSubtitle", (value) => {
    state.hero.subtitle = value;
  });
  bind("inputHeroButtonText", (value) => {
    state.hero.buttonText = value;
  });
  bind("inputHeroButtonHref", (value) => {
    state.hero.buttonHref = value;
  });
  bind("inputAboutTitle", (value) => {
    state.about.title = value;
  });
  bind("inputAboutText", (value) => {
    state.about.text = value;
  });

  byId("resetProfileSvg").addEventListener("click", () => {
    state.profile.petalScales = {
      petal1: 125,
      petal2: 125,
      petal3: 125,
      petal4: 125,
      petal5: 125,
      petal6: 125,
    };
    renderPreview();
    setInputValues();
    saveState();
  });

  for (let index = 1; index <= 6; index += 1) {
    const key = `petal${index}`;
    byId(`${key}Scale`).addEventListener("input", (event) => {
      state.profile.petalScales[key] = Number(event.target.value);
      applyProfileSvgPetalScales();
      byId(`${key}Value`).textContent = String(
        petalLevelFromScale(Number(event.target.value)),
      );
      saveState();
    });
  }
  bind("inputGallerySectionTitle", (value) => {
    state.galleryTitle = value;
  });
  bind("inputInternshipSectionTitle", (value) => {
    state.internshipTitle = value;
  });
  bind("inputSkillsSectionTitle", (value) => {
    state.skillsTitle = value;
  });
  bind("inputContactTitle", (value) => {
    state.contact.title = value;
  });
  bind("inputContactEmail", (value) => {
    state.contact.email = value;
  });

  bind("colorBgMain", (value) => {
    state.theme.bgMain = value;
  });
  bind("colorBgSecondary", (value) => {
    state.theme.bgSecondary = value;
  });
  bind("colorTextMain", (value) => {
    state.theme.textMain = value;
  });
  bind("colorTextInverse", (value) => {
    state.theme.textInverse = value;
  });
  bind("colorLinkAccent", (value) => {
    state.theme.linkAccent = value;
  });
  bind("fontHeadings", (value) => {
    state.theme.fontHeadings = value;
  });
  bind("fontTitles", (value) => {
    state.theme.fontTitles = value;
  });
  bind("fontText", (value) => {
    state.theme.fontText = value;
  });

  byId("themeType").addEventListener("change", (event) => {
    const styleType = event.target.value;
    applyThemeTypeDefaults(styleType);
    renderPreview();
    setInputValues();
    saveState();
  });
}

function setupEditors() {
  byId("navEditor").addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.navIndex);
    const field = target.dataset.field;
    if (Number.isNaN(index) || !field) return;
    state.nav[index][field] = target.value;
    renderPreview();
    saveState();
  });

  byId("resourceEditor").addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.resourceIndex);
    const field = target.dataset.field;
    if (Number.isNaN(index) || !field) return;
    state.profile.resources[index][field] = target.value;
    renderPreview();
    saveState();
  });

  byId("contactLinksEditor").addEventListener("input", (event) => {
    const target = event.target;
    const index = Number(target.dataset.contactIndex);
    const field = target.dataset.field;
    if (Number.isNaN(index) || !field) return;
    state.contact.links[index][field] = target.value;
    renderPreview();
    saveState();
  });

  byId("contactLinksEditor").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-remove-contact]");
    if (!button) return;
    const index = Number(button.dataset.removeContact);
    state.contact.links.splice(index, 1);
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("selectGallery").addEventListener("change", renderGalleryEditor);
  [
    ["inputGalleryTitle", "title"],
    ["inputGalleryDescription", "description"],
    ["inputGalleryImage", "image"],
    ["inputGalleryPopupTitle", "popupTitle"],
    ["inputGalleryPopupText", "popupText"],
    ["inputGalleryPopupImage", "popupImage"],
  ].forEach(([id, field]) => {
    byId(id).addEventListener("input", (event) => {
      const selected = state.gallery.find(
        (item) => item.id === byId("selectGallery").value,
      );
      if (!selected) return;
      selected[field] = event.target.value;
      renderPreview();
      saveState();
    });
  });

  byId("addGalleryItem").addEventListener("click", () => {
    const id = `g-${Date.now()}`;
    state.gallery.push({
      id,
      title: "New Gallery Item",
      description: "New gallery description.",
      image: "../assets/img/open_ocean.jpg",
      popupTitle: "New Gallery Item",
      popupText: "Popup details here.",
      popupImage: "../assets/img/open_ocean.jpg",
    });
    renderPreview();
    setInputValues();
    byId("selectGallery").value = id;
    renderGalleryEditor();
    saveState();
  });

  byId("removeGalleryItem").addEventListener("click", () => {
    const selectedId = byId("selectGallery").value;
    state.gallery = state.gallery.filter((item) => item.id !== selectedId);
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("selectInternship").addEventListener("change", renderInternshipEditor);
  [
    ["inputInternshipTitle", "title"],
    ["inputInternshipDescription", "description"],
    ["inputInternshipPopupTitle", "popupTitle"],
    ["inputInternshipPopupText", "popupText"],
    ["inputInternshipPopupImage", "popupImage"],
  ].forEach(([id, field]) => {
    byId(id).addEventListener("input", (event) => {
      const selected = state.internships.find(
        (item) => item.id === byId("selectInternship").value,
      );
      if (!selected) return;
      selected[field] = event.target.value;
      renderPreview();
      saveState();
    });
  });

  byId("addInternship").addEventListener("click", () => {
    const id = `i-${Date.now()}`;
    state.internships.push({
      id,
      title: "New Internship",
      description: "New internship summary.",
      popupTitle: "New Internship",
      popupText: "Popup details for internship.",
      popupImage: "",
    });
    renderPreview();
    setInputValues();
    byId("selectInternship").value = id;
    renderInternshipEditor();
    saveState();
  });

  byId("removeInternship").addEventListener("click", () => {
    const selectedId = byId("selectInternship").value;
    state.internships = state.internships.filter(
      (item) => item.id !== selectedId,
    );
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("selectSkill").addEventListener("change", renderSkillEditor);
  byId("inputSkillText").addEventListener("input", (event) => {
    const index = Number(byId("selectSkill").value);
    if (Number.isNaN(index)) return;
    state.skills[index] = event.target.value;
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("addSkill").addEventListener("click", () => {
    state.skills.push("New Skill");
    renderPreview();
    setInputValues();
    byId("selectSkill").value = String(state.skills.length - 1);
    renderSkillEditor();
    saveState();
  });

  byId("removeSkill").addEventListener("click", () => {
    const index = Number(byId("selectSkill").value);
    if (Number.isNaN(index)) return;
    state.skills.splice(index, 1);
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("addContactLink").addEventListener("click", () => {
    state.contact.links.push({ label: "New Link", href: "#" });
    renderPreview();
    setInputValues();
    saveState();
  });

  byId("saveAll").addEventListener("click", saveState);
  byId("resetAll").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(defaultState);
    renderPreview();
    setInputValues();
  });
}

function setupPopupInteractions() {
  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest(".popup-trigger");
    if (trigger) {
      openPopup(trigger.dataset.popupType, trigger.dataset.popupId);
      return;
    }

    if (event.target.closest("[data-close-modal]")) {
      closePopup();
    }
  });

  document.body.addEventListener("keydown", (event) => {
    const trigger = event.target.closest(".popup-trigger");
    if (trigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openPopup(trigger.dataset.popupType, trigger.dataset.popupId);
    }

    if (event.key === "Escape") {
      closePopup();
    }
  });
}

bindImageUpload("uploadGalleryImage", (dataUrl) => {
  const selected = state.gallery.find(
    (item) => item.id === byId("selectGallery").value,
  );
  if (!selected) return;
  selected.image = dataUrl;
  selected.popupImage = dataUrl;
});

bindImageUpload("uploadInternshipPopupImage", (dataUrl) => {
  const selected = state.internships.find(
    (item) => item.id === byId("selectInternship").value,
  );
  if (!selected) return;
  selected.popupImage = dataUrl;
});

loadState();
renderPreview();
setInputValues();
bindCoreInputs();
setupEditors();
setupPopupInteractions();
