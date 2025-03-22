let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header = document.querySelector('header');
let scrollDown = document.querySelector('.scroll-down');

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 200,
    reset: true
});

sr.reveal('.profile-text', { delay: 25, origin: 'top' });
sr.reveal('.profile-img', { delay: 25, origin: 'bottom' });
sr.reveal('.icons', { delay: 50, origin: 'left' });
sr.reveal('.scroll-down', { delay: 25, origin: 'right' });
sr.reveal('.skills-card', { delay: 25, origin: 'top' });
sr.reveal('.projects-card-title', { delay: 25, origin: 'top' });
sr.reveal('.projects-card', { delay: 25, origin: 'top' });
sr.reveal('.contact-container', { delay: 25, origin: 'bottom' });

const translations = {
    "es": {
        "skills": "Habilidades",
        "expertise": "¿Qué puedo aportar?",
        "projects": "Mis proyectos",
        "contact": "Contacto",
        "title": "Productor musical",
        "description": "Soy productor musical especializado en la creación, edición y mezcla de pistas, fusionando creatividad y técnica para lograr un sonido profesional.",
        "download_cv": "Descargar CV",
        "leadership": "Liderazgo",
        "leadership_desc": "Guío equipos, fomentando la motivación, la toma de decisiones efectivas y el logro de objetivos.",
        "ambition": "Ambición",
        "ambition_desc": "Me impulsa el deseo constante de superación, estableciendo metas desafiantes y trabajando para alcanzarlas.",
        "creativity": "Creatividad",
        "creativity_desc": "Aplico un pensamiento innovador y original para generar ideas únicas y resolver desafíos de manera efectiva.",
        "learning": "Capacidad de aprendizaje",
        "learning_desc": "Aprendo con rapidez y curiosidad, adaptándome a nuevos conocimientos y tecnologías.",
        "adaptability": "Adaptabilidad",
        "adaptability_desc": "Me adapto con rapidez y flexibilidad a nuevos desafíos y entornos.",
        "problem_solving": "Resolución de problemas",
        "problem_solving_desc": "Analizo situaciones complejas y encuentro soluciones eficientes y efectivas.",
        "working_preasuse": "Trabajo bajo presión",
        "working_preasuse_desc": "Gestiono el estrés y la presión de manera efectiva, manteniendo un alto rendimiento.",
        "versatility": "Versatilidad",
        "versatility_desc": "Soy versátil y adaptable, capaz de trabajar en diferentes entornos y situaciones.",
        "self-taught": "Autodidacta",
        "self-taught_desc": "He aprendido ha desarrollar mis habilidades de forma autónoma y experimentando por mi cuenta.",
        "fragmentos_doc": "Fragmentos (2023) - Documentación",
        "fragmentos_video": "Fragmentos (2023) - Cortometraje",
        "raices_doc": "Raíces (2024) - Documentación",
        "raices_video": "Raíces (2024) - Cortometraje",
        "contact_title": "Trabajemos juntos",
        "write-me-email": "O escríbeme un correo electrónico a mikelgarciabenitez@gmail.com",
        "send": "Enviar mensaje"
    },
    "en": {
        "skills": "Skills",
        "expertise": "What can I bring?",
        "projects": "My projects",
        "contact": "Contact",
        "title": "Music producer",
        "description": "I am a music producer specialized in creating, editing, and mixing tracks, merging creativity and technique to achieve a professional sound.",
        "download_cv": "Download CV",
        "leadership": "Leadership",
        "leadership_desc": "I guide teams, fostering motivation, effective decision-making, and achieving goals.",
        "ambition": "Ambition",
        "ambition_desc": "I am driven by a constant desire for improvement, setting challenging goals and working to achieve them.",
        "creativity": "Creativity",
        "creativity_desc": "I apply innovative and original thinking to generate unique ideas and effectively solve challenges.",
        "learning": "Learning ability",
        "learning_desc": "I learn quickly and with curiosity, adapting to new knowledge and technologies.",
        "adaptability": "Adaptability",
        "adaptability_desc": "I quickly and flexibly adapt to new challenges and environments.",
        "problem_solving": "Problem-solving",
        "problem_solving_desc": "I analyze complex situations and find efficient and effective solutions.",
        "working_preasuse": "Working under pressure",
        "working_preasuse_desc": "I manage stress and pressure effectively, maintaining a high level of performance.",
        "versatility": "Versatility",
        "versatility_desc": "I am versatile and adaptable, able to work in different environments and situations.",
        "self-taught": "Self-taught",
        "self-taught_desc": "I have learned to develop my skills independently and by experimenting on my own.",
        "fragmentos_doc": "Fragmentos (2023) - Documentation",
        "fragmentos_video": "Fragmentos (2023) - Short film",
        "raices_doc": "Raíces (2024) - Documentation",
        "raices_video": "Raíces (2024) - Short film",
        "contact_title": "Let's work together",
        "write-me-email": "Or write me an email at mikelgarciabenitez@gmail.com",
        "send": "Send message"
    }
};

function updateLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            if (el.tagName === "A" && el.querySelector("i")) {
                el.childNodes[0].textContent = translations[lang][key] + " ";
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    let projectsCardTitle = document.querySelector(".projects-card-title");
    if (projectsCardTitle) {
        projectsCardTitle.style.backgroundImage = lang === "en"
            ? "url('img/cards/my-projects.png')"
            : "url('img/cards/mis-proyectos.png')";
    }
}

// Set default language
let currentLanguage = "en";
updateLanguage(currentLanguage);

let languageToggle = document.getElementById('language-toggle');
let isEnglish = true;

// Change language
languageToggle.onclick = () => {
    isEnglish = !isEnglish;
    languageToggle.style.backgroundImage = isEnglish ? "url('img/flags/en.png')" : "url('img/flags/es.png')";
    document.querySelector('.cv-link').href = isEnglish ? "cv/mikel/CV-EN.pdf" : "cv/mikel/CV-ES.pdf";
    document.querySelector('.projects-card-title').style.backgroundImage = isEnglish ? "url('img/cards/my-projects.png')" : "url('img/cards/mis-proyectos.png')";
    currentLanguage = isEnglish ? "en" : "es";
    updateLanguage(currentLanguage);
};

// Open and close menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Close menu when clicking on a link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    });
});

// Hide header on scroll down
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('hidden');
        scrollDown.classList.add('visible');
    } else {
        header.classList.remove('hidden');
        scrollDown.classList.remove('visible');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });

            history.replaceState(null, null, ' ');
        }
    });
});
