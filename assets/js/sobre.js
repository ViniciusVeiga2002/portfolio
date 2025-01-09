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

    const dataAtual = new Date();
    const dataNascimento = new Date('2002-01-08');

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = dataNascimento.getMonth();
    const diaAtual = dataAtual.getDate();
    const diaNascimento = dataNascimento.getDate();

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual > diaNascimento)) {
        idade--;
    }

    const textoPtEg = [
        `Desenvolvedor de Software com ${idade} anos e mais de 3 anos de experiência, dedicado a transformar ideias em soluções digitais eficientes e seguras. Além de expertise em desenvolvimento de aplicações, possuo experiência em análise de dados e visualização, convertendo informações complexas em insights claros por meio de dashboards interativos e informativos. Atualmente, estou cursando Engenharia de Software na PUCPR (Pontifícia Universidade Católica do Paraná), com previsão de conclusão em 2027. Este curso me permite expandir meu conhecimento técnico, construir uma rede de contatos qualificada e acompanhar de perto as mais recentes inovações tecnológicas.`,
        `Software Developer, ${idade} years old, with over 3 years of experience, dedicated to turning ideas into efficient and secure digital solutions. In addition to expertise in application development, I have experience in data analysis and visualization, transforming complex information into clear insights through interactive and informative dashboards. I am currently pursuing a Software Engineering degree at PUCPR (Pontifical Catholic University of Paraná), with an expected graduation in 2027. This program allows me to expand my technical knowledge, build a strong professional network, and stay updated on the latest technological innovations.`
    ]


    let isBrazilian = localStorage.getItem('language') !== 'en';


    if (isBrazilian) {
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


