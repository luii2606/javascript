// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a = parseInt(prompt("Ingrese le valor de a:"));
let b = parseInt(prompt("Ingrese le valor de b:"));
let c = parseInt(prompt("Ingrese le valor de c:"));

let expresion = (a + 7 * c) / (b + 2 - a) + 2 * b;
alert(`El valor de la expresión es de ${expresion}`);