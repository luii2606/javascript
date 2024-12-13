// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.


let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));


if (numero1 > numero2) {
    let resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
} else {
    alert("La operación no es posible, el primer número no es mayor que el segundo.");
}