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
let secretos = [3, 5, 7, 9];
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
