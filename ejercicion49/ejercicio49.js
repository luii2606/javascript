// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let lado1 = parseFloat(prompt("Ingrese el lado 1"));
let lado2 = parseFloat(prompt("Ingrese el lado 2"));

if (lado1 > 0 && lado2 > 0) {

  let area_rectangulo = lado1 * lado2;
  alert(`el area del rectangulo es: ${area_rectangulo}`);

  
}else {
  alert(`ingrese un número positivo, por favor`);
}