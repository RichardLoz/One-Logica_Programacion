let tanque = 40;
let distancia_recorrida_gasolina = 480;
let distancia_recorrida_alcohol = 300;
let autonomia_gasolina = distancia_recorrida_gasolina / tanque;
let autonomia_alcohol = distancia_recorrida_alcohol / tanque;

document.write(
  `La autonomia del auto usando gasolina es de ${autonomia_gasolina} km por litro de gasolina <br>`
);

document.write(
  `La autonomia del auto usando alcohol es de ${autonomia_alcohol} km por litro de alcohol`
);
