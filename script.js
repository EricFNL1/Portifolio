document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.expandable');
    const overlay = document.getElementById('overlay');
  
    images.forEach(image => {
      image.addEventListener('click', function () {
        const expandedImage = document.createElement('img');
        expandedImage.src = this.src;
        expandedImage.alt = this.alt;
        expandedImage.classList.add('expanded-image');
  
        overlay.innerHTML = ''; // Limpa qualquer conteúdo anterior
        overlay.appendChild(expandedImage);
        overlay.style.display = 'flex'; // Alterado para 'flex' para centralizar a imagem na tela
  
        // Adicionado um evento de clique para fechar a imagem expandida
        overlay.addEventListener('click', function () {
          overlay.style.display = 'none';
        });
      });
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
  

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
var canvas = document.getElementById('meuCanvas');
var ctx = canvas.getContext('2d')

//desenho canvas

ctx.fillStyle = '#007bff';
ctx.fillRect(50, 50, 100, 200);

//texto Canvas
canvas.fillStyle = '#000';
ctx.font = '20px Arial';
ctx.fillText('Experiêcia Profissional', 200, 50);
  