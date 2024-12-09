// 13. Escribir un programa que lea 4 números y calcule la media.

function calcular_media (){
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercero número:"));
    let numero4 = parseInt(prompt("Ingrese el cuarto número:"));

    suma = numero1 + numero2 + numero3 + numero4;
    media= suma /4;

    alert (`la media equivale a: ${media}`);
}
calcular_media();