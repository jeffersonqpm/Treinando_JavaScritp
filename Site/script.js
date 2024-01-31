const botaoPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('audio-capitulo');
let tocando = 0;


function tocarAudio() {

    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarAudio() {

    audio.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');

}

function PlayOrPause() {

    if (tocando === 0) {

        tocarAudio();
        tocando = 1;

    } else {
        pausarAudio();
        tocando = 0;
    }
}


botaoPlayPause.addEventListener('click', PlayOrPause);