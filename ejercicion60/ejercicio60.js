// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

let cantidadCursos = parseInt(prompt("Ingresa la cantidad de cursos que estás llevando:"));
let pagoTotal = 0;


if (cantidadCursos < 6) {
    pagoTotal = cantidadCursos * 2000000; // $2.000.000 por cada curso
} else {
    pagoTotal = cantidadCursos * 1200000; // $1.200.000 por cada curso
}

alert("El pago total es: $" + pagoTotal.toLocaleString());
