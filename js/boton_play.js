function toggleEvent() {
    var audio = document.getElementById("myAudio");
    var playPauseBtn = document.getElementById("playPauseBtn");

    if (audio.paused) {
        audio.play();
        playPauseBtn.src = "icons/circle-pause-regular.svg"; // Cambia la imagen a pausa cuando se está reproduciendo
    } else {
        audio.pause();
        playPauseBtn.src = "icons/circle-play-regular.svg"; // Cambia la imagen a reproducción cuando se está pausado
    }
}