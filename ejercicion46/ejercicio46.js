// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.


function encontrarMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}


let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let numero3 = parseFloat(prompt("Introduce el tercer número:"));

let mayor = encontrarMayor(numero1, numero2, numero3);
console.log(`El número mayor es: ${mayor}`);


