/* ============================================================
   NINIS BLOMERUS — PORTFOLIO
   script.js
   ============================================================ */

'use strict';

/* ============================================================
   LANGUAGE DATA
   Alla texter på svenska + engelska
   ============================================================ */
const LANG_DATA = {
  sv: {
    /* Page */
    pageTitle: 'Ninis Blomerus — Mjukvarutestare & Javautvecklare',

    /* Nav */
    navAbout: 'Om mig',
    navSkills: 'Kompetenser',
    navEducation: 'Utbildning',
    navExperience: 'Erfarenhet',
    navProjects: 'Projekt',
    navContact: 'Kontakt',

    /* Hero */
    heroGreeting: 'Hej, jag heter',
    heroBio: 'Nyutexaminerad mjukvarutestare och javautvecklare med ett starkt öga för kvalitet, säkerhet och tillgänglighet.',
    heroCTA: 'Kontakta mig',
    heroScroll: 'Scrolla ned',

    /* About */
    aboutTag: '// om mig',
    aboutTitle: 'Om <span class="accent">mig</span>',
    aboutWindowTitle: 'about.md',
    aboutP1: 'Jag är <strong>Ninis Blomerus</strong> — mjukvarutestare, javautvecklare och fullstack-nörd från Örebro. Jag tar med mig ett genuint öga för detaljer och en djup förståelse för kvalitet in i varje projekt.',
    aboutP2: 'Med bakgrund inom både mjukvarutestning (EC Utbildning, VG på alla kurser) och javautveckling kombinerar jag testdisciplin med fullstack-kodning — jag förstår systemet från båda hållen.',
    aboutP3: 'Just nu gör jag LIA som WordPress Theme Reviewer för WordPress.org, och arbetar parallellt på mitt examensarbete inom AI.',
    aboutFactsTitle: 'facts.json',
    factLocation: 'Örebro, Sverige',
    factRole: 'Mjukvarutestare & Javautvecklare',
    factAvail: 'LIA t.o.m. maj 2026',
    factLangs: 'Svenska (modersmål), Engelska (flytande)',
    factInterests: 'Djur & djurvälfärd · AI & teknik · Tillgänglighet',

    /* Skills */
    skillsTag: '// kompetenser',
    skillsTitle: 'Tekniska <span class="accent">kompetenser</span>',

    /* Education */
    eduTag: '// utbildning',
    eduTitle: 'Min <span class="accent">utbildning</span>',
    eduWindowTitle: 'education.json',
    edu1Title: 'Javautvecklare (Fullstack)',
    edu1Org: 'EC Utbildning, Örebro',
    edu1Date: '2024 — 2026 · Pågående',
    edu1Desc: 'Avancerad fullstack-utbildning med fokus på Java, Spring, REST API:er, databaser och frontend. Starka resultat med VG på majoriteten av kurserna (400 YH-poäng).',
    edu2Title: 'Agil testautomatiserare',
    edu2Org: 'IT-Högskolan Sverige AB',
    edu2Date: '2024 · 60 YH-poäng',
    edu2Desc: 'Fokus på automatiseringsramverk (Selenium, Cucumber), CI/CD-pipelines, DevOps och agila metoder.',
    edu3Title: 'Mjukvarutestare (EQF Nivå 5)',
    edu3Org: 'EC Utbildning, Örebro',
    edu3Date: '2022 — 2024 · 325 YH-poäng',
    edu3Desc: 'Alla kurser avklarade med VG. Täckte testdesign, automation, icke-funktionella tester, agila processer och verklig LIA-praktik.',

    /* Experience */
    expTag: '// erfarenhet',
    expTitle: 'Arbets<span class="accent">erfarenhet</span>',
    expWindowTitle: 'experience.json',
    exp1Title: 'LIA — WordPress Theme Reviewer / Core Contributor',
    exp1Org: 'Webbstart Sverige HB',
    exp1Date: 'Nov 2025 — Nu',
    exp1Desc: 'Utför officiella Theme Reviews för WordPress.org via Trac. Granskar PHP-kod, block-themes (FSE) och React-baserade komponenter. Säkerställer compliance med säkerhetsstandarder, i18n och translation readiness.',
    exp2Title: 'Mjukvarutestare, Copywriter & WCAG',
    exp2Org: 'Webbstart Sverige HB',
    exp2Date: '2021 — 2023',
    exp2Desc: 'QA-testning av webblösningar (funktionell + icke-funktionell), tillgänglighetsanpassningar enligt WCAG 2.1, copyproduktion och samarbete med designers och utvecklare.',
    exp3Title: 'Användartestning & Tillgänglighet',
    exp3Org: 'WCAG Networks AB',
    exp3Date: '2020 — 2023',
    exp3Desc: 'Testade kommunwebbar för tillgänglighetsefterlevnad, dokumenterade användbarhetsproblem och förbättrade inkluderingen i digitalt innehåll.',

    /* Projects */
    projTag: '// projekt',
    projTitle: 'Mina <span class="accent">projekt</span>',
    proj1Title: 'BunnyNews',
    proj1Desc: 'Responsiv nyhetssida byggd med ren HTML, CSS och JavaScript. Demonstrerar dynamisk innehållshantering och modern webbdesign.',
    proj1Link: 'Se live →',
    proj2Title: 'BankID CSV-integration',
    proj2Desc: 'Säkert CSV-importsystem för svenska personnummer med validering, dubblettdetektering och felhantering. LIA-projekt 2025–2026.',
    proj3Title: 'AI Digital Assistent',
    proj3Desc: 'Examensarbete: lokal AI-assistent med Python och Vision-Language Models. Utforskar AI + mjukvaruinteraktion och modern UX.',
    proj4Title: 'Testautomatisering Suite',
    proj4Desc: 'UI-automation med Selenium WebDriver och Cucumber (BDD/Gherkin). Integrerad i GitHub Actions-pipelines med JUnit och Mockito.',
    projGithubText: 'Se fler projekt på min GitHub',

    /* Contact */
    contactTag: '// kontakt',
    contactTitle: 'Kom i <span class="accent">kontakt</span>',
    contactWindowTitle: 'contact.md',
    contactSocialTitle: 'links.json',
    contactCTA: 'Söker du en noggrann och engagerad utvecklare/testare? Hör av dig!',

    /* Footer */
    footerText: '© 2025 Ninis Blomerus · Byggd med passion för kod och kvalitet',
  },

  en: {
    /* Page */
    pageTitle: 'Ninis Blomerus — Software Tester & Java Developer',

    /* Nav */
    navAbout: 'About',
    navSkills: 'Skills',
    navEducation: 'Education',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',

    /* Hero */
    heroGreeting: "Hi, I'm",
    heroBio: 'Newly graduated software tester and Java developer with a strong eye for quality, security and accessibility.',
    heroCTA: 'Contact me',
    heroScroll: 'Scroll down',

    /* About */
    aboutTag: '// about me',
    aboutTitle: 'About <span class="accent">me</span>',
    aboutWindowTitle: 'about.md',
    aboutP1: 'I am <strong>Ninis Blomerus</strong> — software tester, Java developer and fullstack enthusiast from Örebro, Sweden. I bring a genuine eye for detail and a deep understanding of quality to every project.',
    aboutP2: 'With a background in both software testing (EC Utbildning, top grades on all courses) and Java development, I combine test discipline with fullstack coding — understanding the system from both sides.',
    aboutP3: 'I am currently doing my internship (LIA) as a WordPress Theme Reviewer for WordPress.org, while simultaneously working on my thesis project in AI.',
    aboutFactsTitle: 'facts.json',
    factLocation: 'Örebro, Sweden',
    factRole: 'Software Tester & Java Developer',
    factAvail: 'Internship (LIA) until May 2026',
    factLangs: 'Swedish (native), English (fluent)',
    factInterests: 'Animals & animal welfare · AI & tech · Accessibility',

    /* Skills */
    skillsTag: '// skills',
    skillsTitle: 'Technical <span class="accent">skills</span>',

    /* Education */
    eduTag: '// education',
    eduTitle: 'My <span class="accent">education</span>',
    eduWindowTitle: 'education.json',
    edu1Title: 'Java Developer (Fullstack)',
    edu1Org: 'EC Utbildning, Örebro',
    edu1Date: '2024 — 2026 · Ongoing',
    edu1Desc: 'Advanced fullstack program focusing on Java, Spring, REST APIs, databases and frontend. Strong results with Distinction (VG) on the majority of courses (400 YH credits).',
    edu2Title: 'Agile Test Automation',
    edu2Org: 'IT-Högskolan Sverige AB',
    edu2Date: '2024 · 60 YH credits',
    edu2Desc: 'Focus on automation frameworks (Selenium, Cucumber), CI/CD pipelines, DevOps practices and agile methodologies.',
    edu3Title: 'Software Tester (EQF Level 5)',
    edu3Org: 'EC Utbildning, Örebro',
    edu3Date: '2022 — 2024 · 325 YH credits',
    edu3Desc: 'All courses completed with Distinction (VG). Covered test design, automation, non-functional testing, agile processes and real-world internship.',

    /* Experience */
    expTag: '// experience',
    expTitle: 'Work <span class="accent">experience</span>',
    expWindowTitle: 'experience.json',
    exp1Title: 'Internship (LIA) — WordPress Theme Reviewer / Core Contributor',
    exp1Org: 'Webbstart Sverige HB',
    exp1Date: 'Nov 2025 — Present',
    exp1Desc: 'Performing official Theme Reviews for WordPress.org via Trac. Analyzing PHP code, block themes (FSE) and React-based components. Ensuring compliance with security standards, i18n and translation readiness.',
    exp2Title: 'Software Tester, Copywriter & WCAG',
    exp2Org: 'Webbstart Sverige HB',
    exp2Date: '2021 — 2023',
    exp2Desc: 'QA testing of web solutions (functional + non-functional), WCAG 2.1 accessibility improvements, content writing and collaboration with designers and developers.',
    exp3Title: 'User Testing & Accessibility',
    exp3Org: 'WCAG Networks AB',
    exp3Date: '2020 — 2023',
    exp3Desc: 'Tested municipal websites for accessibility compliance, documented usability issues and improved the inclusivity of digital content.',

    /* Projects */
    projTag: '// projects',
    projTitle: 'My <span class="accent">projects</span>',
    proj1Title: 'BunnyNews',
    proj1Desc: 'A responsive news site built with vanilla HTML, CSS and JavaScript. Demonstrates dynamic content management and modern web design.',
    proj1Link: 'View live →',
    proj2Title: 'BankID CSV Integration',
    proj2Desc: 'Secure CSV import system for Swedish personal identity numbers with validation, duplicate detection and error handling. LIA project 2025–2026.',
    proj3Title: 'AI Digital Assistant',
    proj3Desc: 'Thesis project: a local AI assistant built with Python and Vision-Language Models. Exploring AI + software interaction and modern UX.',
    proj4Title: 'Test Automation Suite',
    proj4Desc: 'UI automation with Selenium WebDriver and Cucumber (BDD/Gherkin). Integrated in GitHub Actions pipelines using JUnit and Mockito.',
    projGithubText: 'See more projects on my GitHub',

    /* Contact */
    contactTag: '// contact',
    contactTitle: 'Get in <span class="accent">touch</span>',
    contactWindowTitle: 'contact.md',
    contactSocialTitle: 'links.json',
    contactCTA: 'Looking for a detail-oriented developer/tester? Reach out!',

    /* Footer */
    footerText: '© 2025 Ninis Blomerus · Built with passion for code and quality',
  }
};

/* ---- Typing animation roles ---- */
const ROLES = {
  sv: ['Mjukvarutestare & QA Engineer', 'Javautvecklare (Fullstack)', 'WordPress-bidragsgivare'],
  en: ['Software Tester & QA Engineer', 'Java Developer (Fullstack)', 'WordPress Contributor']
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = localStorage.getItem('nb-lang') || 'sv';
let roleIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;
let typingTimer = null;

/* ============================================================
   LANGUAGE SWITCH
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nb-lang', lang);

  const t = LANG_DATA[lang];

  /* page title */
  document.title = t.pageTitle;
  document.documentElement.lang = lang;

  /* toggle button label */
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'sv' ? 'EN' : 'SV';

  /* Update every [data-i18n] element */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      /* Some elements allow HTML (titles with <span>); use innerHTML for those */
      if (el.dataset.i18nHtml) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* Reset and restart typing animation with new language */
  clearTimeout(typingTimer);
  charIndex  = 0;
  isDeleting = false;
  const typingEl = document.getElementById('typing-text');
  if (typingEl) typingEl.textContent = '';
  typingTimer = setTimeout(typeRole, 300);
}

function toggleLanguage() {
  setLanguage(currentLang === 'sv' ? 'en' : 'sv');
}

/* ============================================================
   TYPING ANIMATION
   ============================================================ */
function typeRole() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const roles = ROLES[currentLang];
  const current = roles[roleIndex % roles.length];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typingTimer = setTimeout(typeRole, 350);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      typingTimer = setTimeout(typeRole, 2200);
      return;
    }
  }

  typingTimer = setTimeout(typeRole, isDeleting ? 55 : 85);
}

/* ============================================================
   SCROLL REVEAL  (Intersection Observer)
   ============================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
}

/* ============================================================
   NAVBAR  (scroll effect + mobile toggle)
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

function toggleMobileNav() {
  const links  = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');
  if (!links || !burger) return;
  links.classList.toggle('open');
  burger.classList.toggle('open');
}

/* ============================================================
   SMOOTH SCROLL for nav links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      /* Close mobile nav */
      document.querySelector('.nav-links')?.classList.remove('open');
      document.querySelector('.nav-burger')?.classList.remove('open');
      /* Scroll */
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* Apply saved language (also starts typing animation) */
  setLanguage(currentLang);

  /* Observers and listeners */
  initScrollReveal();
  initNavbar();
  initSmoothScroll();
});
