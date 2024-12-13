// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.


const a = parseFloat(prompt("Ingrese el valor de a:"));
const b = parseFloat(prompt("Ingrese el valor de b:"));
const c = parseFloat(prompt("Ingrese el valor de c:"));


if (a === 0) {
    alert("El valor de 'a' no puede ser 0 en una ecuación cuadrática.");
} else {

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        alert("La ecuación no tiene raíces reales.");
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        alert(`Las raíces son: x1 = ${x1}, x2 = ${x2}`);
    }
}
