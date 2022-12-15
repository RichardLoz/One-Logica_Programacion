// TODO: VERSION_1
// let secreto = Math.round(Math.random() * 10);
// let input = document.querySelector("input");
// input.focus();

// const verificar = () => {
//   if (parseInt(input.value) == secreto) {
//     alert("Usted acerto!");
//   } else {
//     alert("Suerte la proxima vez!");
//   }

//   input.value = "";
//   input.focus();
// };

// let button = document.querySelector("button");
// button.onclick = verificar;

// TODO: VERSION_2
// let secretos = [3, 5, 7, 9];
// let input = document.querySelector("input");
// input.focus();

// const verificar = () => {
//   let encontrado = false;
//   for (let posicion = 0; posicion < 4; posicion++) {
//     if (parseInt(input.value) == secretos[posicion]) {
//       alert("Usted acerto!");
//       encontrado = true;
//       break;
//     }
//   }
//   if (encontrado == false) {
//     alert("Suerte la proxima vez!");
//   }

//   input.value = "";
//   input.focus();
// };

// let button = document.querySelector("button");
// button.onclick = verificar;

// TODO: VERSION 3
// const aleatorio = () => {
//   return Math.round(Math.random() * 10);
// };

// const sortearNumeros = (cantidad) => {
//   let secretos = [];
//   let contador = 1;

//   while (contador <= cantidad) {
//     numeroAleatorio = aleatorio();

//     secretos.push(numeroAleatorio);
//     contador++;
//   }
//   return secretos;
// };

// let secretos = sortearNumeros(4);
// console.log(secretos);

// let input = document.querySelector("input");
// input.focus();

// const verificar = () => {
//   let encontrado = false;
//   for (let posicion = 0; posicion < 4; posicion++) {
//     if (parseInt(input.value) == secretos[posicion]) {
//       alert("Usted acerto!");
//       encontrado = true;
//       break;
//     }
//   }
//   if (encontrado == false) {
//     alert("Suerte la proxima vez!");
//   }

//   input.value = "";
//   input.focus();
// };

// let button = document.querySelector("button");
// button.onclick = verificar;

// TODO: VERSION 4 - VALIDACIONES
const aleatorio = () => {
  return Math.round(Math.random() * 10);
};

const sortearNumeros = (cantidad) => {
  let secretos = [];
  let contador = 1;

  while (contador <= cantidad) {
    let numeroAleatorio = aleatorio();
    console.log(numeroAleatorio);
    let encontrado = false;
    if (numeroAleatorio != 0) {
      for (let posicion = 0; posicion < secretos.length; posicion++) {
        if (numeroAleatorio == secretos[posicion]) {
          encontrado = true;
        }
      }
      if (encontrado == false) {
        secretos.push(numeroAleatorio);
        contador++;
      }
    }
  }
  return secretos;
};

let secretos = sortearNumeros(4);
console.log(secretos);

let input = document.querySelector("input");
input.focus();

const verificar = () => {
  let encontrado = false;
  for (let posicion = 0; posicion < 4; posicion++) {
    if (parseInt(input.value) == secretos[posicion]) {
      alert("Usted acerto!");
      encontrado = true;
      break;
    }
  }
  if (encontrado == false) {
    alert("Suerte la proxima vez!");
  }

  input.value = "";
  input.focus();
};

let button = document.querySelector("button");
button.onclick = verificar;

// TODO: EJERCICIO
// Armando tuvo la idea de crear un programa para crear recetas. En él, hay una lista en la que el usuario puede agregar ingredientes. Observemos:

let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let contador = 1;

while (contador <= cantidad) {
  let ingrediente = prompt("Informe el ingrediente " + contador);
  let existe = false;
  for (let posicion = 0; posicion < ingredientes.length; posicion++) {
    if (ingredientes[posicion] == ingrediente) {
      existe = true;
      alert("repetido " + ingrediente);
      break;
    }
  }
  if (existe == false) {
    ingredientes.push(ingrediente);
    contador++;
  }
}
console.log(ingredientes);
