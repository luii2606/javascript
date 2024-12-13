// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

function Caculo_sueldo() {
  let nombre = prompt("Ingrese su nombre :");
  let horas_de_trabajo = parseInt(prompt("Ingrese las horas de trabajo:"));
  let pago_hora = parseInt(prompt("Ingrese cuánto es el vsalor de una hora de trabajo:"));

  let opera = horas_de_trabajo * pago_hora;

  alert(`el sueldo seria: ${opera}`);
  
}
Caculo_sueldo();