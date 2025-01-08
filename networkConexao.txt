// Seleciona o canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para a tela
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Define nós e comportamento
const nodes = [];
const numNodes = 150;
const maxDistance = 120;

class Node {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.dx > canvas.width || this.x + this.dx < 0) this.dx = -this.dx;
    if (this.y + this.dy > canvas.height || this.y + this.dy < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
  }
}

function initNodes() {
  nodes.length = 0;
  for (let i = 0; i < numNodes; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const dx = (Math.random() - 0.5) * 1.5;
    const dy = (Math.random() - 0.5) * 1.5;
    nodes.push(new Node(x, y, dx, dy));
  }
}
initNodes();

function connectNodes() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

// Controle de animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  nodes.forEach((node) => {
    node.update();
    node.draw();
  });
  connectNodes();

  requestAnimationFrame(animate);
}

// Inicia a animação
animate();
