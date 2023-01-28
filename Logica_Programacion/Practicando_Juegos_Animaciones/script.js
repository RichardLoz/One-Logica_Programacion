let pantalla = document.querySelector("canvas")
let pincel = pantalla.getContext("2d")

// TODO: BANDERA DE ITALIA

pincel.fillStyle = 'white' // TODO: PROPIEDAD
pincel.fillRect(0,0,700,450) // TODO: FUNCION

pincel.fillStyle = 'skyblue' // TODO: PROPIEDAD
pincel.fillRect(0,0,700,150) // TODO: FUNCION

pincel.fillStyle = 'skyblue' // TODO: PROPIEDAD
pincel.fillRect(0,300,700,450) // TODO: FUNCION

// TODO: DIBUJO DEL SOL

pincel.fillStyle = 'yellow'
pincel.beginPath()
pincel.arc(350,226,75,0,2*3.14)
pincel.fill()


// TODO: Documentacion ==> https://developer.mozilla.org/es/docs/Web/API/Canvas_API



