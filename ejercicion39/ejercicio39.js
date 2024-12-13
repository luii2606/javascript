// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

function presupuestos() {
  let m2 = 500000;
  let trabajo_pintura = parseFloat(prompt("Ingrese cuantos m2 desea que pintemos:"));

  let respuesta = trabajo_pintura * m2;

  alert(`el presupuesto final seria de: $${respuesta}`);
}
presupuestos();
