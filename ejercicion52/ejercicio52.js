// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

function calcularPagoEmpleado(tipoEmpleado, horasTrabajadas) {
   
    const tarifa = tipoEmpleado === 'planta' ? 20000 : 10000;
    return horasTrabajadas * tarifa;
}

const empleados = [
    { tipo: 'planta', horas: 40 },
    { tipo: 'administrativo', horas: 35 },
    { tipo: 'planta', horas: 20 }
];

empleados.forEach(({ tipo, horas }) => {
    const pago = calcularPagoEmpleado(tipo, horas);
    console.log(`Empleado: ${tipo}, Horas trabajadas: ${horas}, Pago: $${pago.toLocaleString('es-CO')}`);
});