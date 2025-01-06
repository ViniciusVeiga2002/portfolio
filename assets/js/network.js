const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nodes = [];
const maxNodes = 200; // Limite máximo de nós
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// Cria um nó
function createNode(x, y) {
    return {
        x: x,
        y: y,
        radius: 2 + Math.random() * 3,
        color: 'rgba(255, 255, 255, 0.2)',
        speed: 1 + Math.random() * 2, // Aumenta a velocidade para um efeito mais dinâmico
        direction: Math.random() * Math.PI * 2 // Direção aleatória
    };
}

// Cria nós iniciais
for (let i = 0; i < 150; i++) {
    nodes.push(createNode(Math.random() * canvas.width, Math.random() * canvas.height));
}

// Atualiza a posição dos nós
function updateNodes() {
    nodes.forEach(node => {
        node.x += Math.cos(node.direction) * node.speed;
        node.y += Math.sin(node.direction) * node.speed;

        // Verifica limites da tela
        if (node.x < 0 || node.x > canvas.width) {
            node.direction = Math.PI - node.direction;
        }
        if (node.y < 0 || node.y > canvas.height) {
            node.direction = -node.direction;
        }

        // Atração ao mouse se próximo
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            node.x += dx * 0.015;
            node.y += dy * 0.015;
        }
    });
}

// Desenha os nós e as conexões
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha conexões
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - nodes[i].x;
            const dy = nodes[j].y - nodes[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }

    // Desenha nós
    nodes.forEach(node => {
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Função de animação
function animate() {
    updateNodes();
    draw();
    requestAnimationFrame(animate);
}

// Atualiza a posição do mouse
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Adiciona novos nós ao clicar
window.addEventListener('click', (event) => {
    if (nodes.length < maxNodes) {
        for (let i = 0; i < 4; i++) {
            if (nodes.length < maxNodes) {
                const angle = Math.random() * Math.PI * 2; // Direção aleatória
                const speed = 1 + Math.random() * 2; // Velocidade aleatória
                const x = event.clientX + Math.cos(angle) * 50; // Expelindo para longe do local do clique
                const y = event.clientY + Math.sin(angle) * 50; // Expelindo para longe do local do clique
                const newNode = createNode(x, y);
                newNode.direction = angle; // Define a direção aleatória
                newNode.speed = speed; // Define a velocidade aleatória
                nodes.push(newNode);
            }
        }
    }
});

animate();