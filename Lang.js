const translations = {
  fr: {
    accueil: "Accueil",
    services: "Services",
    oeuvres: "Nos Oeuvres",
    contact: "Contact",
    bienvenue: "BIENVENUE À ISDEKY GRAFIQA",
    slogan: "Depuis Kyondo, on crée pour le monde.",
    btnReserver: "Réserver un Shooting",
    btnContact: "Nous Contacter",
    adresse: "Kyondo, Goma, RDC"
  },
  en: {
    accueil: "Home",
    services: "Services",
    oeuvres: "Our Work",
    contact: "Contact",
    bienvenue: "WELCOME TO ISDEKY GRAFIQA",
    slogan: "From Kyondo, we create for the world.",
    btnReserver: "Book a Shoot",
    btnContact: "Contact Us",
    adresse: "Kyondo, Goma, DRC"
  }
};

let lang = localStorage.getItem('lang') || 'fr';

function switchLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', lang);
  applyLang();
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  const btn = document.getElementById('lang-btn');
  if(btn) btn.textContent = lang === 'fr' ? 'FR / EN' : 'EN / FR';
}

document.addEventListener('DOMContentLoaded', applyLang);
fr: {
  bienvenue: "BIENVENUE À",
  slogan: "Depuis Kyondo, on crée pour le monde.",
  voir: "Voir Nos Œuvres →",
  trouver: "Où nous trouver? par ici",
  // + ton menu déjà
  accueil: "Accueil",
  apropos: "À propos/Equipes"
},
en: {
  bienvenue: "WELCOME TO",
  slogan: "From Kyondo, we create for the world.",
  voir: "See Our Work →",
  trouver: "Where to find us? click here",
  accueil: "Home",
  apropos: "About/Team"
}