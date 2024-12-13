// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

function calcularPago(consumo) {
    return consumo > 130000 ? consumo * 0.85 : consumo;
}


const consumos = [80000, 150000, 200000, 120000]; 

console.log("Consumos y pagos:");
consumos.forEach(consumo => {
    const pago = calcularPago(consumo);
    console.log(`Consumo: $${consumo.toLocaleString('es-CO')}, Pago: $${pago.toLocaleString('es-CO')}`);
});