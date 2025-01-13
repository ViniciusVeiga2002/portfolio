document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const icon = menuToggle.querySelector('img');
    const languageToggle = document.getElementById('language-toggle');
    const languageFlag = document.getElementById('language-flag');
    const desenvolvedor = document.querySelector('.texto_desenvolvedor');
    const menuItems = document.querySelectorAll('.menu-item');

    const menuTexts = {
        pt: ["INICIO", "SOBRE", "HABILIDADES"],
        en: ["HOME", "ABOUT", "SKILLS"]
    };

    let isBrazilian = localStorage.getItem('language') !== 'en';

    function updateMenu(language) {
        const texts = menuTexts[language];
        menuItems.forEach((item, index) => {
            item.textContent = texts[index];
        });
    }

    function setLanguage(language) {
        if (language === 'en') {
            languageFlag.src = 'imgs/eua.png';
            languageFlag.alt = 'Bandeira dos EUA';
            desenvolvedor.innerHTML = 'Developer';
            updateMenu('en'); 
            let elemento = document.querySelector('.tipo_desenvolvedor');
            elemento.textContent = '';
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'en' } }));
            localStorage.setItem('language', 'en'); 
        } else {
            languageFlag.src = 'imgs/brasil.jpeg';
            languageFlag.alt = 'Bandeira do Brasil';
            desenvolvedor.innerHTML = 'Desenvolvedor';
            updateMenu('pt'); 
            let elemento = document.querySelector('.tipo_desenvolvedorEng');
            elemento.textContent = '';
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'pt' } }));
            localStorage.setItem('language', 'pt'); 
        }
        isBrazilian = language !== 'en';
    }

    setLanguage(isBrazilian ? 'pt' : 'en');

    languageToggle.addEventListener('click', function () {
        setLanguage(isBrazilian ? 'en' : 'pt');
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active');
                icon.src = 'icons/close.svg';
            } else {
                menu.classList.remove('active');
                icon.src = 'icons/bars-solid.svg';
            }
        });
    }
    
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            const pages = ["index.html", "sobre.html", "habilidades.html", "contato.html"];
            const selectedPage = pages[index];
            window.location.href = `${selectedPage}?lang=${isBrazilian ? 'pt' : 'en'}`;
        });
    });
});


