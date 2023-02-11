const video = document.querySelector('.viewer')
const buttonPlay = document.querySelector('.toggle')
const volumeSlider = document.querySelector("input[name='volume']")
const playbackRateSlider = document.querySelector("input[name='playbackRate']")
const advanceButtons = document.querySelectorAll('.advance')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
let mouseDown = false

window.addEventListener('mousedown', () => {
    mouseDown = true
})
window.addEventListener('mouseup', () => {
    mouseDown = false
})

window.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.code === 'Enter') {
        toggleVideo()
    }
})
buttonPlay.addEventListener('click', toggleVideo)
video.addEventListener('click', toggleVideo)

progress.addEventListener('mousedown', updateProgress)
progress.addEventListener('mousemove', (e) => {
    if (!mouseDown) return
    updateProgress(e)
})
progress.addEventListener('drag', updateProgress)

function updateProgress(e) {
    let newTime = (e.offsetX * 100) / progress.clientWidth
    video.currentTime = (video.duration * newTime) / 100
    timeupdate()
}

video.addEventListener('timeupdate', timeupdate)

function timeupdate() {
    let progressPercentage = (video.currentTime * 100) / video.duration
    progressBar.style.flexBasis = `${progressPercentage}%`
}

function toggleVideo() {
    video.paused ? video.play() : video.pause()
}

video.addEventListener('pause', () => {
    buttonPlay.textContent = '►'
})
video.addEventListener('play', () => {
    buttonPlay.textContent = '❚❚'
})

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value
})

playbackRateSlider.addEventListener('input', () => {
    video.playbackRate = playbackRateSlider.value
})

advanceButtons.forEach(advance => {
    advance.addEventListener('click', () => {
        let skip = Number(advance.dataset.skip)
        video.currentTime += skip
    })
})