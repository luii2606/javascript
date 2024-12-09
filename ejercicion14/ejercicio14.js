// 14. Escribir un programa que calcule el área de un triángulo.

let base = parseInt(prompt("Ingrese la base del triangulo:"));
let altura = parseInt(prompt("Ingrese la altura del triangulo:"));

const  areaTriangulo = (base, altura) => (base * altura) / 2 ;

let respuesta = areaTriangulo(base, altura)

alert(respuesta)

