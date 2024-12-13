// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.


let numero = parseInt(prompt("Ingresa un número entero positivo:"));

if (numero > 0) {
   
  let cuentaAtras = [];
  
    for (let i = numero; i >= 0; i--) {
        cuentaAtras.push(i);
    }

    alert(cuentaAtras.join(", "));
} else {
    alert("Por favor, ingresa un número entero positivo.");
}
