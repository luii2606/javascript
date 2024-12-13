// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.


let tipoMembresia = prompt("Ingresa el tipo de membresía (A, B o C):").toUpperCase();
let montoCompra = parseFloat(prompt("Ingresa el monto de la compra:"));
let descuento = 0;


if (tipoMembresia === "A") {
    descuento = 10; 
} else if (tipoMembresia === "B") {
    descuento = 15; 
} else if (tipoMembresia === "C") {
    descuento = 20; // 
} else {
    alert("Tipo de membresía no válido.");
}

if (descuento > 0) {
    let montoDescuento = (montoCompra * descuento) / 100;
    let montoFinal = montoCompra - montoDescuento;
    alert("El descuento es del " + descuento + "%, el monto final a pagar es: " + montoFinal);
}
