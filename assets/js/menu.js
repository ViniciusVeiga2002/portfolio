document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const icon = menuToggle.querySelector('img');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Verifica se o menu está oculto
            if (!menu.classList.contains('active')) {
                menu.classList.add('active');  // Exibe o menu
                icon.src = 'icons/close.svg';  // Altera para o ícone de fechar
            } else {
                menu.classList.remove('active');  // Oculta o menu
                icon.src = 'icons/bars-solid.svg';  // Volta para o ícone de menu
            }
        });
    }
});
