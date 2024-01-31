const botaoPlayPause = document.getElementById('play-pause');

audioCapitulo = document.getElementById('audio-capitulo');


function tocarFaixa(){

    audioCapitulo.play();


}

botaoPlayPause.addEventListener('click', tocarFaixa);