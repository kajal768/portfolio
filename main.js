// ----- HEADER + FOOTER LOAD -----
document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch("header.html").then((res) => res.text()),
    fetch("footer.html").then((res) => res.text()),
  ])
    .then(([headerHtml, footerHtml]) => {
      const headerHolder = document.getElementById("site-header");
      const footerHolder = document.getElementById("site-footer");

      if (headerHolder) headerHolder.innerHTML = headerHtml;
      if (footerHolder) footerHolder.innerHTML = footerHtml;

      // header/footer inject hone ke baad hi common init chale
      initCommon();
      initHome(); // agar home page nahi hoga to ye safely return kar dega
    })
    .catch((err) => {
      console.error("Error loading header/footer:", err);
    });
});

// ----- COMMON HEADER / FOOTER LOGIC -----
function initCommon() {
  const d = window.portfolioData || {};

  // Brand text
  const navBrand = document.getElementById("navBrand");
  if (navBrand) {
    navBrand.innerHTML = "<span></span> " + (d.navBrandText || "Kajal • Web Developer");
  }

  // CTA text
  const navCtaText = document.getElementById("navCtaText");
  if (navCtaText) {
    navCtaText.textContent = d.isOpenToRolesText || "Open to web dev roles";
  }

  // Footer year + name
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const footerName = document.getElementById("footerName");
  if (footerName) {
    footerName.textContent = d.name || "Kajal";
  }

  // CTA click -> Contact page
  const navCta = document.getElementById("navCta");
  if (navCta) {
    navCta.addEventListener("click", function () {
      window.location.href = "contact.html";
    });
  }

  // Hamburger toggle (mobile)
  const toggle = document.getElementById("navMenuToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll(".nav-link").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
      });
    });
  }

  // ---- ACTIVE LINK HIGHLIGHT (CURRENT PAGE) ----
  const allLinks = document.querySelectorAll(".nav-link");
  if (allLinks.length) {
    let currentPage = window.location.pathname.split("/").pop();

    // Agar URL /portfolio/ ya root ho (blank file name), to index.html treat karo
    if (!currentPage) {
      currentPage = "index.html";
    }

    allLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (href === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

// ----- HOME PAGE HERO / CARD -----
function initHome() {
  const d = window.portfolioData || {};

  const heroHeadingEl = document.getElementById("heroHeading");
  if (!heroHeadingEl) {
    // Agar ye element hi nahi mila to ye home page nahi hai, safe exit
    return;
  }

  const topTextEl = document.getElementById("heroTopText");
  if (topTextEl) {
    topTextEl.innerHTML = "PORTFOLIO • <strong>" + (d.title || "Web Developer").toUpperCase() + "</strong>";
  }

  const circleNameEl = document.getElementById("circleName");
  if (circleNameEl) {
    circleNameEl.textContent = (d.name || "Kajal").toUpperCase();
  }

  const nameTaglineEl = document.getElementById("nameTagline");
  if (nameTaglineEl) {
    nameTaglineEl.textContent = d.heroTagline || "Web Developer • PHP • React";
  }

  heroHeadingEl.textContent = "Hey, I’m " + (d.name || "Kajal") + " 👋";

  const heroRoleEl = document.getElementById("heroRole");
  if (heroRoleEl) {
    heroRoleEl.textContent = d.experienceLabel || "Web Developer • 3+ months experience";
  }

  const aboutEl = document.getElementById("heroAbout");
  if (aboutEl) {
    aboutEl.textContent = d.about || "";
  }

  const chipLocation = document.getElementById("chipLocation");
  if (chipLocation) {
    chipLocation.textContent = d.location || "Based in India";
  }

  const chipStatus = document.getElementById("chipStatus");
  if (chipStatus) {
    chipStatus.textContent = d.status || "Currently: Working as Web Developer";
  }

  // Skills pills
  const skillsContainer = document.getElementById("heroSkillsInline");
  if (skillsContainer && Array.isArray(d.heroSkills)) {
    skillsContainer.innerHTML = "";
    d.heroSkills.forEach((skill) => {
      const span = document.createElement("span");
      span.className = "skill-pill";
      span.textContent = skill;
      skillsContainer.appendChild(span);
    });
  }

  // Card click expand/collapse
  const card = document.getElementById("resumeCard");
  if (card) {
    card.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  }
}
// 🔥 READ MORE TOGGLE (MOBILE)
const aboutText = document.getElementById("heroAbout");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", () => {
  aboutText.classList.toggle("expanded");

  if (aboutText.classList.contains("expanded")) {
    readMoreBtn.textContent = "Less";
  } else {
    readMoreBtn.textContent = "More";
  }
});