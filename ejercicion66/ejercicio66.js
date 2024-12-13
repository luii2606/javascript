// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidadInvertir = parseFloat(prompt("Ingresa la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingresa el interés anual (en %):"));
let numeroAnios = parseInt(prompt("Ingresa el número de años:"));

let interesDecimal = interesAnual / 100;

for (let i = 1; i <= numeroAnios; i++) {
    cantidadInvertir += cantidadInvertir * interesDecimal; 
    alert(`Año ${i}: Capital obtenido: $${cantidadInvertir.toFixed(2)}`);
}
