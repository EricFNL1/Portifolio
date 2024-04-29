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
  