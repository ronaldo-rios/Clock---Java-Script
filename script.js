let digitalElement = document.querySelector('.digital')
//ponteiros:
let s_element = document.querySelector('.p_s')
let m_element = document.querySelector('.m_s')
let h_element = document.querySelector('.h_s')

// função do relógio digital
function updateClock(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`
}

//callback do relógio
setInterval(updateClock, 1000)

//Ficar sempre um zero na frente quando os valores forem menor que 10
function fixZero(time){
    if(time < 10){
        return '0' + time
    }
    else {
        return time
    }
}


