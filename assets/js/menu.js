document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const icon = menuToggle.querySelector('img');
    const languageToggle = document.getElementById('language-toggle');
    const languageFlag = document.getElementById('language-flag');
    const desenvolvedor = document.querySelector('.texto_desenvolvedor');
    const menuItems = document.querySelectorAll('.menu-item');

    // Textos do menu em ambos os idiomas
    const menuTexts = {
        pt: ["SOBRE", "HABILIDADES", "ENSINO", "CONTATO"],
        en: ["ABOUT", "SKILLS", "EDUCATION", "CONTACT"]
    };

    let isBrazilian = localStorage.getItem('language') !== 'en'; // Define idioma inicial com base no localStorage

    // Função para atualizar o menu
    function updateMenu(language) {
        const texts = menuTexts[language];
        menuItems.forEach((item, index) => {
            item.textContent = texts[index];
        });
    }

    // Função para definir o idioma
    function setLanguage(language) {
        if (language === 'en') {
            languageFlag.src = 'imgs/eua.png';
            languageFlag.alt = 'Bandeira dos EUA';
            desenvolvedor.innerHTML = 'Developer';
            updateMenu('en'); // Atualiza os itens do menu para inglês
            let elemento = document.querySelector('.tipo_desenvolvedor');
            elemento.textContent = '';
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'en' } }));
            localStorage.setItem('language', 'en'); // Salva a escolha no localStorage
        } else {
            languageFlag.src = 'imgs/brasil.jpeg';
            languageFlag.alt = 'Bandeira do Brasil';
            desenvolvedor.innerHTML = 'Desenvolvedor';
            updateMenu('pt'); // Atualiza os itens do menu para português
            let elemento = document.querySelector('.tipo_desenvolvedorEng');
            elemento.textContent = '';
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'pt' } }));
            localStorage.setItem('language', 'pt'); // Salva a escolha no localStorage
        }
        isBrazilian = language !== 'en';
    }

    // Configuração inicial do idioma ao carregar a página
    setLanguage(isBrazilian ? 'pt' : 'en');

    // Alternar idioma ao clicar no botão
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
});
