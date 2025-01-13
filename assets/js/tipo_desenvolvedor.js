let habilidadesPt = [
  "JavaScript", "PHP", "Criativo", "Java", "Python", "React", "Node.js", "Web",
  "Git / GitHub", "TypeScript", "Comunicativo", "DB Relacional", "DB Não Relacional"
];

let habilidadesEn = [
  "JavaScript", "PHP", "Creative", "Java", "Python", "React", "Node.js",
  "Git / GitHub", "TypeScript", "Communicative", "Relational DB", "Non-Relational DB"
];

let habilidades = habilidadesPt; 
let elemento = document.querySelector('.tipo_desenvolvedor');

let anima = true;
let animacaoAtiva = false; 

async function escreverTexto(texto) {
  for (let i = 0; i <= texto.length; i++) {
    if (!anima) return;
    elemento.textContent = texto.slice(0, i) + "_";
    await esperar(150);
  }
  elemento.textContent = texto + "_";
  await esperar(500);
}

async function apagarTexto(texto) {
  for (let i = texto.length; i >= 0; i--) {
    if (!anima) return;
    elemento.textContent = texto.slice(0, i) + "_";
    await esperar(100); 
  }
  elemento.textContent = "_";
  await esperar(300); 
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciarAnimacao() {
  if (animacaoAtiva) return; 
  animacaoAtiva = true; 
  while (anima) {
    for (const habilidade of habilidades) {
      if (!anima) break; 
      await escreverTexto(habilidade);
      await apagarTexto(habilidade);
    }
  }
  animacaoAtiva = false; 
}

document.addEventListener('languageChange', (event) => {
  const language = event.detail.language;

  if (language === 'en') {
    habilidades = habilidadesEn; 
    elemento = document.querySelector('.tipo_desenvolvedorEng');
  } else {
    habilidades = habilidadesPt; 
    elemento = document.querySelector('.tipo_desenvolvedor');
  }

  anima = false;
  setTimeout(() => {
    anima = true;
    iniciarAnimacao(); 
  }, 500); 
});
