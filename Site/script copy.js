const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const titulo = document.getElementById('capitulo');

const audio = document.getElementById('audio-capitulo');

let tocando = false;
let capituloAtual = 1;
const numeroCapitulo = 10;

function play() {

    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle')
    tocando = true;
}

function pause() {
    audio.pause();
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle')
    tocando = false;

}

function playOrPause() {

    if (tocando == false) {
        play();
        tocando = true;
    } else {
        pause();
        tocando = false;
    }
}

function proximaFaixa() {

    if (capituloAtual === numeroCapitulo) {
        capituloAtual = 1;

    } else {
        capituloAtual = capituloAtual + 1;
    }

    audio.src = "/Site/books/dom-casmurro/" + capituloAtual + ".mp3";
    play();
    mudarTitulo();
   
}

function voltarFaixa(){

    if(capituloAtual === 1){

        capituloAtual = numeroCapitulo;

    }else{
        capituloAtual--;
    }

    audio.src = "/Site/books/dom-casmurro/" + capituloAtual + ".mp3";
    play();
    mudarTitulo();
   

}

function mudarTitulo(){

    titulo.innerText = "Capítulo " + capituloAtual;
}





botaoPlayPause.addEventListener('click', playOrPause);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
