import { translations } from '../i18n/translations.js';

function setLanguage(lang) {
    localStorage.setItem('oxyome_lang', lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

const savedLang = localStorage.getItem('oxyome_lang') || 'en';
setLanguage(savedLang);

const toggleBtn = document.getElementById('lang-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const current = localStorage.getItem('oxyome_lang') || 'en';
        setLanguage(current === 'en' ? 'fr' : 'en');
    });
}