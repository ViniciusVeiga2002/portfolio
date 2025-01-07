document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const icon = menuToggle.querySelector('img');
    const saudacao = document.getElementById('saudacao');
    const texto = document.getElementById('texto');
    const languageToggle = document.getElementById('language-toggle');
    const languageFlag = document.getElementById('language-flag');
    const menuItems = document.querySelectorAll('.menu-item');
    const sobre = document.getElementById('sobre')

    const menuTexts = {
        pt: ["INICIO", "SOBRE", "HABILIDADES", "CONTATO"],
        en: ["HOME", "ABOUT", "SKILLS", "CONTACT"]
    };

    const textoPtEg  = [
        "Desenvolvedor de softwares, com mais de 2 anos de experiência, onde transformei idéias em soluções digitais eficientes e seguras. Além disso também possuo conhecimento em dados e suas tratativas, transformando o que parece ser invisível em decisões fáceis a serem tomadas, através da análise a apresentação de dashboards. Atualmente, estou cursando Engenharia de Software na faculdade PUCPR - Pontificia Universidade Católica, visando aprofundar ainda mais meus conhecimentos, ter novas redes de contato, e principalmente estar atento a novas técnologias.",
        "I am a software developer, with more than 2 years of experience, where I transformed ideas into efficient and secure digital solutions. In addition, I also have knowledge of data and its processing, transforming what seems to be invisible into easy decisions to be made, through analysis and presentation of dashboards. I am currently studying Software Engineering at PUCPR - Pontificia Universidade Católica, aiming to further deepen my knowledge, have new contact networks, and above all be aware of new technologies."
    ]
    

    let isBrazilian = localStorage.getItem('language') !== 'en'; // Define idioma inicial com base no localStorage


    if (isBrazilian){
        saudacao.innerText = 'Olá, me chamo Vinicius Veiga.'
        texto.innerText = textoPtEg[0]
        sobre.innerText = "Sobre Mim"
    } else {
        saudacao.innerText = 'Hi, my name is Vinicius Veiga.';
        texto.innerText = textoPtEg[1];
        sobre.innerText = "About Me"
    }

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
            updateMenu('en'); // Atualiza os itens do menu para inglês
            saudacao.innerText = 'Hi, my name is Vinicius Veiga.'
            texto.innerText = textoPtEg[1]
            sobre.innerText = "About Me"
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'en' } }));
            localStorage.setItem('language', 'en'); // Salva a escolha no localStorage
        } else {
            languageFlag.src = 'imgs/brasil.jpeg';
            languageFlag.alt = 'Bandeira do Brasil';
            updateMenu('pt'); // Atualiza os itens do menu para português
            saudacao.innerText = 'Olá, me chamo Vinicius Veiga.'
            texto.innerText = textoPtEg[0]
            sobre.innerText = "Sobre Mim"
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
            console.log('chegou');
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


