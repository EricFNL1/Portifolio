document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.expandable');
  const overlay = document.getElementById('overlay');
  const closeButton = document.createElement('button'); // Criação do botão de fechar uma única vez
  closeButton.textContent = 'Fechar';
  closeButton.classList.add('close-btn');

  images.forEach(image => {
    image.addEventListener('click', function () {
      const expandedImage = document.createElement('img');
      expandedImage.src = this.src;
      expandedImage.alt = this.alt;
      expandedImage.classList.add('expanded-image');

      overlay.innerHTML = ''; // Limpa qualquer conteúdo anterior
      overlay.appendChild(expandedImage); // Adiciona a imagem expandida
      overlay.appendChild(closeButton); // Adiciona o botão de fechar
      overlay.style.display = 'flex'; // Exibe o overlay e centraliza o conteúdo
    });
  });

  // Evento para fechar o overlay ao clicar no botão "Fechar"
  closeButton.addEventListener('click', function () {
    overlay.style.display = 'none';
  });
});

document.querySelector('.leia-mais').addEventListener('click', function() {
const texto = document.querySelector('.texto');
texto.classList.toggle('expandido');

// Muda o texto do link dependendo se o texto está expandido ou não
if (texto.classList.contains('expandido')) {
  this.textContent = 'Leia menos';
} else {
  this.textContent = 'Leia mais';
}
});

var myCarousel = document.querySelector('#carouselExampleDark');
var carousel = new bootstrap.Carousel(myCarousel, {
interval: 2000, // Intervalo em milissegundos (2 segundos)
ride: 'carousel'
});

// desenho canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#007bff';
ctx.fillRect(50, 50, 100, 200);

// texto canvas
ctx.fillStyle = '#000';
ctx.font = '20px Arial';
ctx.fillText('Experiência Profissional', 200, 50);
