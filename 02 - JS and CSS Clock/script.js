const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setClock() {
    const date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    secondHand.style.transform = `rotate(${seconds*6+90}deg)`
    minuteHand.style.transform = `rotate(${minutes*6+90}deg)`
    hourHand.style.transform = `rotate(${hours*30+90}deg)`
}

setInterval(setClock, 1000);