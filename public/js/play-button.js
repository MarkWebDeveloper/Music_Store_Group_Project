function playButton(){
    playPauseAudioOnClick()
    changeLogoOnClick()
}

let button = document.getElementById('play_pause_button')
let playButtonImg = document.getElementById('play_image')
let pauseButtonImg = document.getElementById('pause_image')
let audio = document.getElemegit ntById('audio')

function changeLogoOnClick() {
    
    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (audio.paused) {
            playButtonImg.style.display = 'block'
            pauseButtonImg.style.display = 'none'
        } else {
            playButtonImg.style.display = 'none'
            pauseButtonImg.style.display = 'block'
        }

    })
}

function playPauseAudioOnClick() {

    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        } 

    })
}

playButton()
