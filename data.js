// data.js
window.portfolioData = {
  name: "Kajal",
  title: "Web Developer",
  heroTagline: "Web Developer • PHP • React",
  experienceLabel: "Web Developer • 3+ months experience",
  heroTopText: "PORTFOLIO • WEB DEVELOPER",
  location: "Based in: India",
  status: "Currently: Working as Web Developer",
  about:
    "I’m a Web Developer with over 3 months of hands-on experience, currently working in a web development role. I work with HTML, CSS, JavaScript, PHP, SQL, React and modern PHP frameworks like CodeIgniter and Laravel to build clean, functional and responsive web applications.",

  heroSkills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "SQL / MySQL",
    "React",
    "JSON",
    "CodeIgniter",
    "Laravel"
  ],

  isOpenToRolesText: "Open to web dev roles",
  // profilePhoto: "your-photo.jpg", // 👉 yahan apni photo file ka naam daalna
  navBrandText: "KAJAL • WEB DEVELOPER",

  projectsSub:
    "A few web projects and UI experiments built using HTML, CSS, JavaScript, PHP and frameworks like React, CodeIgniter and Laravel.",
  skillsSub:
    "Technologies I’m working with right now as a web developer.",
  contactSub:
    "Open to web developer roles, internships and freelance projects.",

  // ✅ FIXED CONTACT DETAILS
  contact: {
    email: "Kajal097856kumari@gmail.com",
    github: {
      label: "github.com/kajal768",
      url: "https://github.com/kajal768"
    },
    // ✅ live portfolio link: abhi local contact page (baad me live domain laga dena)
    portfolio: {
      label: "live portfolio link",
      url: "contact.html"
    },
    statusText: "Open to relevant web development opportunities"
  },

  projects: [
    {
      title: "Interactive Landing Page",
      tag: "Responsive UI • Animations",
      desc:
        "A modern landing page with smooth hero animation, clean sections and mobile-friendly layout.",
      tech: "HTML • CSS • JS",
      meta: "View soon →",
      url: "projects.html" // ✅ placeholder # ki jagah internal page
    },
    {
      title: "Auth UI & Dashboard",
      tag: "PHP • CodeIgniter / Laravel",
      desc:
        "Login / register screens and basic dashboard layouts using PHP frameworks and reusable components.",
      tech: "PHP • CI / Laravel",
      meta: "View soon →",
      url: "projects.html"
    },
    {
      title: "React UI Experiments",
      tag: "React • JSON APIs",
      desc:
        "Small React components that consume JSON data and focus on clean, state-driven UI.",
      tech: "React • JS • JSON",
      meta: "View soon →",
      url: "projects.html"
    }
  ],

  skillsGroups: [
    {
      title: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Layouts",
        "PHP",
        "SQL / MySQL",
        "JSON"
      ],
      note:
        "Strong fundamentals in building full web pages, handling forms, layouts and basic data flow between frontend and backend."
    },
    {
      title: "Frameworks & Tools",
      items: [
        "React",
        "CodeIgniter",
        "Laravel",
        "Basic API Integration",
        "Version control (Git – learning)"
      ],
      note:
        "Currently focusing on improving framework-based development and building real-world projects with React, CodeIgniter and Laravel."
    }
  ],

  certificatesSub:
    "Some of the certifications and achievements that support my web development journey.",

  certificates: [
    {
      title: "Front-End Web Development",
      issuer: "XYZ Academy",
      year: "2024",
      summary: "Learned HTML, CSS, JavaScript and responsive UI fundamentals.",
      link: "certificates.html" // ✅ placeholder # ki jagah internal page
    },
    {
      title: "PHP & MySQL for Web Apps",
      issuer: "ABC Institute",
      year: "2025",
      summary: "Built basic CRUD apps, login systems and form handling using PHP & MySQL.",
      link: "certificates.html"
    },
    {
      title: "React Basics & Components",
      issuer: "Online Bootcamp",
      year: "2025",
      summary: "Covered JSX, components, props, state and simple API integration.",
      link: "certificates.html"
    }
  ]
};
