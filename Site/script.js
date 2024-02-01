const botaoVoltar = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');
const botoaProximo = document.getElementById('proximo');
const titulo = document.getElementById('capitulo');

const audio = document.getElementById('audio');

const numeroCapitulo = 10;
let capituloAtual = 1;
let tocando = false;

function play() {

    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pause() {

    audio.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function playOrPause() {

    if (tocando === false) {
        play();
        tocando = true;
        console.log("Tocando: " + tocando);

    } else {
        pause();
        tocando = false;
        console.log("Tocando: " + tocando);
    }

}

function proximo() {
    if (capituloAtual === numeroCapitulo) {
        capituloAtual = 1;

    } else {
        capituloAtual = capituloAtual + 1;
    }

    audio.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    play();
    mudarTitulo()
}

function voltar(){

    if(capituloAtual === 1){
        capituloAtual = numeroCapitulo;

    }else{
        capituloAtual= capituloAtual - 1;
    }

    audio.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    play();
    mudarTitulo()
}

function mudarTitulo(){

    titulo.innerText = "Capítulo " + capituloAtual;
    
}




botaoPlayPause.addEventListener('click', playOrPause);
botoaProximo.addEventListener('click', proximo);
botaoVoltar.addEventListener('click', voltar);
