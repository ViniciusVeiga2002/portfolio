let habilidadesPt = [
  "JavaScript", "PHP", "Criativo", "Java", "Python", "React", "Node.js", "Web",
  "Git / GitHub", "TypeScript", "Comunicativo", "DB Relacional", "DB Não Relacional"
];

let habilidadesEn = [
  "JavaScript", "PHP", "Creative", "Java", "Python", "React", "Node.js",
  "Git / GitHub", "TypeScript", "Communicative", "Relational DB", "Non-Relational DB"
];

let habilidades = habilidadesPt; // Define o array inicial
let elemento = document.querySelector('.tipo_desenvolvedor');

// Variável de controle da animação
let anima = true;

async function escreverTexto(texto) {
  for (let i = 0; i <= texto.length; i++) {
    if (!anima) return;
    elemento.textContent = texto.slice(0, i) + "_";
    await esperar(150); // Escrever com intervalo menor para mais fluidez
  }
  elemento.textContent = texto + "_";
  await esperar(500); // Pausa no final de cada palavra
}

async function apagarTexto(texto) {
  for (let i = texto.length; i >= 0; i--) {
    if (!anima) return;
    elemento.textContent = texto.slice(0, i) + "_";
    await esperar(100); // Intervalo menor para apagar mais rapidamente
  }
  elemento.textContent = "_";
  await esperar(300); // Pausa antes de começar a escrever de novo
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciarAnimacao() {
  while (anima) {
    for (const habilidade of habilidades) {
      await escreverTexto(habilidade);
      await apagarTexto(habilidade);
    }
  }
}

iniciarAnimacao();

// Função para alternar o idioma
document.addEventListener('languageChange', (event) => {
  const language = event.detail.language;

  // Muda o idioma sem reiniciar a animação abruptamente
  if (language === 'en') {
    habilidades = habilidadesEn; // Troca para inglês
    elemento = document.querySelector('.tipo_desenvolvedorEng');
  } else {
    habilidades = habilidadesPt; // Volta para português
    elemento = document.querySelector('.tipo_desenvolvedor');
  }

  // Para a animação atual e reinicia com o novo idioma
  anima = false;
  setTimeout(() => {
    anima = true;
    iniciarAnimacao();
  }, 300); // Tempo para garantir que a animação será reiniciada de forma fluida
});

