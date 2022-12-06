fechaNacimiento = 1988
fechaNacimientoHermano = 1990

function imprimir(texto){
    document.write(texto)
    document.write("<br>")
}

imprimir(`La diferencia de edad entre mi hermano y yo es de ${fechaNacimientoHermano - fechaNacimiento} años `)