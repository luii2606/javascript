// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

// Solicitar la cantidad de alumnos
let n = parseInt(prompt("Ingresa la cantidad de alumnos:"));

// Inicializar variables para las notas, conteos y estadísticas
let notaAlta = -1;
let notaBaja = 101;
let maximos = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;

for (let i = 1; i <= n; i++) {
    let nota = parseInt(prompt(`Ingresa la nota del alumno ${i} (entre 1 y 100):`));

    // Verificar que la nota esté dentro del rango válido
    if (nota < 1 || nota > 100) {
        alert("La nota debe estar entre 1 y 100. Intenta de nuevo.");
        i--; // Decrementar para repetir el ingreso de la nota
        continue;
    }

    if (nota > notaAlta) {
        notaAlta = nota;
    }
    if (nota < notaBaja) {
        notaBaja = nota;
    }

    if (nota === 100) {
        maximos++;
    } else if (nota >= 90) {
        a++;
    } else if (nota >= 80) {
        b++;
    } else if (nota >= 70) {
        c++;
    } else if (nota >= 60) {
        d++;
    }
}

alert(`Nota más alta: ${notaAlta}`);
alert(`Nota más baja: ${notaBaja}`);
alert(`Cantidad de alumnos con nota 100: ${maximos}`);
alert(`Cantidad de alumnos con calificación "a" (>= 90): ${a}`);
alert(`Cantidad de alumnos con calificación "b" (>= 80 y < 90): ${b}`);
alert(`Cantidad de alumnos con calificación "c" (>= 70 y < 80): ${c}`);
alert(`Cantidad de alumnos con calificación "d" (>= 60 y < 70): ${d}`);
