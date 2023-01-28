let pantalla = document.querySelector('canvas')
let pincel = pantalla.getContext('2d')

pincel.fillStyle = 'grey'
pincel.fillRect(0,0,600,400)

const mostrarAlerta = (evento) => {
    let x = evento.pageX
    let y = evento.pageY


    console.log(evento)
    alert(`hizo click en x=${x} y=${y}`)
}

pantalla.onclick = mostrarAlerta