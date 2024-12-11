// 15. Escribir un programa que calcule la longitud y el área de una circunferencia.


let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));

if (radio <= 0) {
  alert("no válido, vuelve a ingresar un valor positivo")
} else {
  let longitud = 2 * Math.PI * radio;
  let area = Math.PI * Math.pow(radio, 2);
  alert(`- La longitud de la circunferencia es de : ${longitud}\n- El área de la circunferencia es de: ${area} `)
}