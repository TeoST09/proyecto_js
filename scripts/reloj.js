let reloj = document.getElementById('reloj')

setInterval(() => {
    let myDate = new Date()
    let hours = myDate.getHours()
    let mins = myDate.getMinutes()
    let second = myDate.getSeconds()
    
    if(hours < 10) hours = `0${hours}`
    if(mins < 10) mins = `0${mins}`
    if(second < 10) second = `0${second}`

    reloj.textContent = `${hours}:${mins}:${second}`

}, 1000)