// 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.


let presión = parseInt(prompt("Ingresa tu presión :"));

if (presión > 200) {
  
  alert(`Alarma`);

} else {
  alert(`todo bien por aquí`);
}

let temperatura = parseInt(prompt("Ingresa tu temperatura :"));

if (temperatura < 100) {

  alert(`Normal`);

} else {
  alert(`nada bien`);
}