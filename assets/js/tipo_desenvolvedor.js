// Array com suas habilidades
const habilidades = ["JavaScript", "HTML", "Criativo", "CSS", "React", "Node.js", 
    "TypeScript", "Comunicativo", "DB Relacional", "DB Não Relacional"];

// Seleciona o elemento onde o texto será exibido
const elemento = document.querySelector(".tipo_desenvolvedor");

// Configurações do efeito
const intervaloEscrita = 200; // Tempo para cada caractere (em ms)
const intervaloApagamento = 100; // Tempo para apagar cada caractere (em ms)
const intervaloPiscar = 200; // Tempo para o cursor piscar (em ms)

// Função para adicionar o efeito de escrita
async function escreverTexto(texto) {
  for (let i = 0; i <= texto.length; i++) {
    elemento.textContent = texto.slice(0, i) + "_"; // Escreve caractere por caractere com o cursor
    await esperar(intervaloEscrita);
  }
  elemento.textContent = texto + "_"; // Remove o cursor ao final
  await esperar(intervaloPiscar);
}

// Função para apagar o texto
async function apagarTexto(texto) {
  for (let i = texto.length; i >= 0; i--) {
    elemento.textContent = texto.slice(0, i) + "_";
    await esperar(intervaloApagamento);
  }
  elemento.textContent = "_"; // Deixa o cursor ao final
  await esperar(intervaloPiscar);
}

// Função para aguardar um tempo específico
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Ciclo infinito para alternar entre as habilidades
async function iniciarAnimacao() {
  while (true) {
    for (const habilidade of habilidades) {
      await escreverTexto(habilidade);
      await apagarTexto(habilidade);
    }
  }
}

// Inicia a animação
iniciarAnimacao();
