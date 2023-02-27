const timerButtons = [...document.querySelectorAll('.timer__button')]
const timeLeftTxt = document.querySelector('.display__time-left')
const endTimeTxt = document.querySelector('.display__end-time')
let timer
let timeLeft

timerButtons.forEach(button => {
    button.addEventListener('click', () => setTimer(button.dataset.time))
})

function setTimer(timeTotal){
    timeTotal = Number(timeTotal)

    if (timer){
        clearInterval(timer)
    }
    
    timeLeft = timeTotal + 1

    const actualTime = new Date()
    let actualHour = actualTime.getHours()
    let actualMinute = actualTime.getMinutes()

    let secondsEnd = timeTotal + (actualMinute * 60)
    let hourEnd = actualHour + Math.floor(secondsEnd/3600)
    let minuteEnd = Math.floor((secondsEnd%3600)/60)

    hourEnd = hourEnd > 24 ? hourEnd % 24 : hourEnd

    endTimeTxt.innerHTML = `Be back at ${hourEnd}:${String(minuteEnd).padStart(2, 0)}`

    subtractTimer()
    timer = setInterval(subtractTimer, 1000);
}

function subtractTimer(){
    if (timeLeft <= 0){
        timeLeftTxt.style.fontSize = '10rem'
        timeLeftTxt.innerHTML = 'FINISHED!'
    } else {
        timeLeft--
        let hours
        let mins
        let secs
    
        timeLeftTxt.innerHTML = ''
    
        if (timeLeft >= 3600){
            hours = Math.floor(timeLeft/3600)
            timeLeftTxt.innerHTML += `${hours}:`
        }
    
        if (timeLeft >= 60){
            mins = timeLeft % 3600
            secs = mins % 60
            mins = Math.floor(mins/60)
            timeLeftTxt.innerHTML += `${String(mins).padStart(2, 0)}:${String(secs).padStart(2, 0)}`
        } else {
            secs = timeLeft
            timeLeftTxt.innerHTML += `${String(secs).padStart(2, 0)}s`
        }
    }
}

const form = document.querySelector('#custom')
form.addEventListener('submit', e => e.preventDefault())

const inputTimer = document.querySelector(`[name='minutes']`)
inputTimer.addEventListener('change', () => setTimer(inputTimer.value * 60))