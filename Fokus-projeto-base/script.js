const html = document.querySelector('html');
const tempoNaTela = document.getElementById('timer')
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarImg = document.querySelector('.app__card-primary-butto-icon');
const img = document.querySelector('.app__image');
const h1 = document.querySelector('h1');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

let tempoDecorridoEmSegundos =  1500;
let intervaloId = null;
const startPauseBt = document.querySelector('#start-pause');

musicaFocoInput.addEventListener('change', () => {
    if(musicaFocoInput.checked){
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => { 
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => { 
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto){
    mostrarTempo()
    botoes.forEach((botao) => {
        botao.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto)
    img.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            h1.innerHTML = `Otimize sua produtividade. <br><strong class='app__title-strong'>Mergulhe no que importa.</strong> `;
            break;
        case 'descanso-curto':
            h1.innerHTML = `Que tal dar uma relaxada?<strong class='app__title-strong'>Faça uma pausa curta.</strong>`;
            break;
        case 'descanso-longo':
            h1.innerHTML = `Hora de voltar a superfície. <br><strong class='app__title-strong'>Faça uma pausa longa.</strong>`;
            default:
                break;
    }
};

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos === 0) {
        zerar()
        const audio = new Audio('./sons/beep.mp3');
        audio.play();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        zerar()
    return
    } 
    intervaloId = setInterval(contagemRegressiva, 1000);
    const audio = new Audio('./sons/play.wav');
    audio.play();
    iniciarOuPausarBt.textContent = 'Pausar';
    iniciarOuPausarImg.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = 'Começar';
    iniciarOuPausarImg.setAttribute('src', './imagens/play.png');
    intervaloId = null;
    const audio = new Audio('./sons/pause.mp3');
    audio.play();
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo();