const habilidades = ["JavaScript", "HTML", "Criativo", "CSS", "React", "Node.js", "Git / GitHub",  
    "TypeScript", "Comunicativo", "DB Relacional", "DB Não Relacional"];

const elemento = document.querySelector(".tipo_desenvolvedor");

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
