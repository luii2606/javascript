// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

let altura = parseInt(prompt("Ingresa un número entero para la altura del triángulo:"));

if (altura > 0) {
    
    for (let i = 1; i <= altura; i++) {
        console.log("*".repeat(i)); 
    }
} else {
    alert("Por favor, ingresa un número entero positivo.");
}
