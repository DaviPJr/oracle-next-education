const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    
  tecla.addEventListener('click', () => {
    const som = new Audio(`./sounds/${tecla.dataset.tecla}.wav`);
    som.play();
  })

  tecla.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        tecla.classList.add('ativa');
        if (event.code === 'Space') {
            event.preventDefault(); 
          }
    }
    const som = new Audio(`./sounds/${tecla.dataset.tecla}.wav`);
    som.play();
  })

  tecla.addEventListener('keyup', () => {
    tecla.classList.remove('ativa');
  })

});



