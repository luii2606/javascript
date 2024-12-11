// 16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.

let kilometros = 2;
let minutos = 5;

function velocidad() {
  
  let dividir = kilometros / minutos;
  let conver = dividir * (1000 / 60);
  console.log(`El valor en metros/segundos ${conver} m/s`);
}
velocidad();