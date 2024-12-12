// 21. Escribir un programa que calcule el volumen de un elipsoide
// formula : V = (4/3) * PI * a * b *c

let a = parseInt(prompt("Ingrese el valor de a :"));
let b = parseInt(prompt("Ingrese el valor de b :"));
let c = parseInt(prompt("Ingrese el valor de c :"));

let volumen = (4.0 / 3) * Math.PI * a * b * c;

alert(`el volumen del elipsoide es: ${volumen}`);