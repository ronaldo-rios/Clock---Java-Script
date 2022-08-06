let digitalElement = document.querySelector('.digital')
//ponteiros:
let s_element = document.querySelector('.p_s')
let m_element = document.querySelector('.p_m')
let h_element = document.querySelector('.p_h')

// função do relógio digital e manual
function updateClock(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`

    let sDeg = ((360 / 60) * seconds) - 90
    let mDeg = ((360 / 60) * minutes) - 90
    let hDeg = ((360 / 12) * hours) - 90
    s_element.style.transform = `rotate(${sDeg}deg)`
    m_element.style.transform = `rotate(${mDeg}deg)`
    h_element.style.transform = `rotate(${hDeg}deg)`
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


