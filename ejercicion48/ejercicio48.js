// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let area_a_calcular = prompt("¿Qué área deseas calcular, Ingrese (T) O (C)?");



if (area_a_calcular == "T") {

  let base = prompt("Ingresa el valor de la base :");
  let altura = prompt("Ingresa el valor de la altura :");
  let triangulo = base * altura / 2;
  alert(`El área del triangulo es: ${triangulo}`);

} else if (area_a_calcular == "C") {

  let radio = prompt("Ingresa el valor del radio :");
  let Circulo = Math.PI * radio * radio;
  alert(`El área del Circulo es: ${Circulo}`);

} else {
    alert(`Valor inválido`);
}
