const habilidadesPt = [
  "JavaScript", "HTML", "Criativo", "CSS", "React", "Node.js", "Web",
  "Git / GitHub", "TypeScript", "Comunicativo", "DB Relacional", "DB Não Relacional"
];

const habilidadesEn = [
  "JavaScript", "HTML", "Creative", "CSS", "React", "Node.js",
  "Git / GitHub", "TypeScript", "Communicative", "Relational DB", "Non-Relational DB"
];

let habilidades = habilidadesPt; // Define o array inicial
let elemento = document.querySelector('.tipo_desenvolvedor');

// Função para alternar o array e a classe do elemento
document.addEventListener('languageChange', (event) => {
  const language = event.detail.language;

  if (language === 'en') {
      habilidades = habilidadesEn; // Troca para o array em inglês
      elemento = document.querySelector('.tipo_desenvolvedorEng'); // Altera o elemento para o inglês
  } else {
      habilidades = habilidadesPt; // Volta para o array em português
      elemento = document.querySelector('.tipo_desenvolvedor'); // Altera o elemento para o português
  }
});

// Funções de animação
const intervaloEscrita = 200; 
const intervaloApagamento = 100; 
const intervaloPiscar = 200;

async function escreverTexto(texto) {
  for (let i = 0; i <= texto.length; i++) {
      elemento.textContent = texto.slice(0, i) + "_";
      await esperar(intervaloEscrita);
  }
  elemento.textContent = texto + "_";
  await esperar(intervaloPiscar);
}

async function apagarTexto(texto) {
  for (let i = texto.length; i >= 0; i--) {
      elemento.textContent = texto.slice(0, i) + "_";
      await esperar(intervaloApagamento);
  }
  elemento.textContent = "_";
  await esperar(intervaloPiscar);
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciarAnimacao() {
  while (true) {
      for (const habilidade of habilidades) {
          await escreverTexto(habilidade);
          await apagarTexto(habilidade);
      }
  }
}

iniciarAnimacao();
