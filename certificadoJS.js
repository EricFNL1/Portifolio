document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.animate-card');

    // Adiciona a classe 'fade-in' aos cards para que a animação seja aplicada ao carregar a página
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-active');
        }, index * 150); // Adiciona um pequeno atraso entre cada card para um efeito escalonado
    });
});
