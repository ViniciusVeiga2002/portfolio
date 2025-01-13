document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const icon = menuToggle.querySelector('img');
    const habilidades = document.querySelector('.habilidades');
    const texto = document.querySelector('.habilidadeTexto');
    const languageToggle = document.getElementById('language-toggle');
    const languageFlag = document.getElementById('language-flag');
    const menuItems = document.querySelectorAll('.menu-item');

    const menuTexts = {
        pt: ["INICIO", "SOBRE", "HABILIDADES", "CONTATO"],
        en: ["HOME", "ABOUT", "SKILLS", "CONTACT"]
    };

    let isBrazilian = localStorage.getItem('language') !== 'en';

    const textoPtEg = [
        'Tenho experiência em desenvolvimento fullstack, abrangendo linguagens como PHP, Java, JavaScript (incluindo NodeJS, ReactJS e TypeScript) e Python. Minha expertise inclui o uso de bancos de dados relacionais e não relacionais (SQL Server, MySQL e MongoDB), além de metodologias ágeis como SCRUM e ferramentas de versionamento de código (Git e GitHub).'
        ,'I have experience in fullstack development, covering languages ​​such as PHP, Java, JavaScript (including NodeJS, ReactJS and TypeScript) and Python. My expertise includes the use of relational and non-relational databases (SQL Server, MySQL and MongoDB), as well as agile methodologies such as SCRUM and code versioning tools (Git and GitHub).'
    ]


    if (isBrazilian) {
        habilidades.innerText = 'Habilidades'
        texto.innerText = textoPtEg[0]
        document.querySelector('.comu').innerText = '- Comunicação';
        document.querySelector('.trab').innerText = '- Trabalho em Equipe';
        document.querySelector('.pens').innerText = '- Pensamento Analítico';
        document.querySelector('.adap').innerText = '- Adaptabilidade';
        document.querySelector('.proa').innerText = '- Proatividade';
        document.querySelector('.emp').innerText = '- Empatia';
        document.querySelector('.res').innerText = '- Resolução de Problemas';
        document.querySelector('.ing').innerText = '- Inglês Intermediário';
    } else {
        habilidades.innerText = 'Skills';
        texto.innerText = textoPtEg[1];
        document.querySelector('.comu').innerText = '- Communication';
        document.querySelector('.trab').innerText = '- Teamwork';
        document.querySelector('.pens').innerText = '- Analytical Thinking';
        document.querySelector('.adap').innerText = '- Adaptability';
        document.querySelector('.proa').innerText = '- Proactivity';
        document.querySelector('.emp').innerText = '- Empathy';
        document.querySelector('.res').innerText = '- Problem-Solving';
        document.querySelector('.ing').innerText = '- Intermediate English';
    }

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
            updateMenu('en'); 
            habilidades.innerText = 'Skills';
            texto.innerText = textoPtEg[1];
            document.querySelector('.comu').innerText = '- Communication';
            document.querySelector('.trab').innerText = '- Teamwork';
            document.querySelector('.pens').innerText = '- Analytical Thinking';
            document.querySelector('.adap').innerText = '- Adaptability';
            document.querySelector('.proa').innerText = '- Proactivity';
            document.querySelector('.emp').innerText = '- Empathy';
            document.querySelector('.res').innerText = '- Problem-Solving';
            document.querySelector('.ing').innerText = '- Intermediate English';
            document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: 'en' } }));
            localStorage.setItem('language', 'en');
        } else {
            languageFlag.src = 'imgs/brasil.jpeg';
            languageFlag.alt = 'Bandeira do Brasil';
            updateMenu('pt'); 
            habilidades.innerText = 'Habilidades'
            texto.innerText = textoPtEg[0]
            document.querySelector('.comu').innerText = '- Comunicação';
            document.querySelector('.trab').innerText = '- Trabalho em Equipe';
            document.querySelector('.pens').innerText = '- Pensamento Analítico';
            document.querySelector('.adap').innerText = '- Adaptabilidade';
            document.querySelector('.proa').innerText = '- Proatividade';
            document.querySelector('.emp').innerText = '- Empatia';
            document.querySelector('.res').innerText = '- Resolução de Problemas';
            document.querySelector('.ing').innerText = '- Inglês Intermediário';
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


