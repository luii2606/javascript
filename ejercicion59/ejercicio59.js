// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let edad = parseInt(prompt("Ingresa tu edad:"));
let estatura = parseFloat(prompt("Ingresa tu estatura en cm:"));
let peso = parseFloat(prompt("Ingresa tu peso en kg:"));


if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    alert("¡Felicidades! Cumples con los requisitos para ser parte de la selección de baloncesto.");
} else {
    alert("Lo siento, no cumples con los requisitos para ser parte de la selección de baloncesto.");
}
