// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let km = parseFloat(prompt("Ingrese el valor de los kilometros:"));
let Hora = parseInt(prompt("Ingrese el valor del tiempo:"));

let operacion = km / Hora;
let conversion = operacion * (100 / 60)

alert(`El resultado es de: ${conversion} M/s`)