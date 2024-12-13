// 45. Determinar si un número es positivo y menor que 100.

let numero = parseInt(prompt("Ingrese un número positivo : "))

if (numero >= 1 && numero < 100 ) {
  alert(`El número ${numero} es menor a 100 y es positivo`);
  
} else {
  alert(`El número ${numero} es negativo, Ingresa un numero positivo`);
}