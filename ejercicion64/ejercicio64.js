// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let numero = parseInt(prompt("Ingresa un número entero positivo:"));
let impares = [];

if (numero > 0) {
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i); // Agregar los números impares al array
        }
  }
  
    alert(impares.join(", "));
} else {
    alert("Por favor, ingresa un número entero positivo.");
}
