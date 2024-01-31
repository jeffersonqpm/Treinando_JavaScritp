const botaoPlayPause = document.getElementById('play-pause');
const botaoVoltar = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

const audio = document.getElementById('audio');

let tocando = false;
const numeroCapitulos = 10;
let capituloAtual = 1;

function play(){

    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    tocando = true;

}

function pause(){
    audio.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill')
    tocando = false;
}

function playEPause(){

    if(tocando === false){

        play();
        // tocando = true;

    }else{
        pause();
       // tocando = false;
    }

}

function proximo(){

}


botaoPlayPause.addEventListener('click', playEPause);