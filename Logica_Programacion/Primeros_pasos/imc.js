// TODO: CALCULO DEL IMC
const imprimir = (texto) => {
    document.write(texto)

}

const calcularImc = (peso,altura) => {
    return(peso/(altura*altura))
}


let nombre = prompt("Ingrese su nombre")
let pesoInformado = prompt("Ingrese su peso:")
let alturaInformada = prompt("Ingrese su altura:")

imcCalculado = calcularImc(pesoInformado,alturaInformada)
imprimir(`El IMC calculado de ${nombre} es ${imcCalculado}`)

