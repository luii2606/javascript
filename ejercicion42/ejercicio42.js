// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

let libros = 10000;
let cuadernos = 7550;
let lapiceros = 5550;

let libro_pedido = parseInt(prompt("¿Cuántos libros desea comprar?"));
let cuadernos_pedido = parseInt(prompt("¿Cuántos cuadernos desea comprar?"));
let lapiceros_pedido = parseInt(prompt("¿Cuántos  desea comprar?"));

let respuesta = libros * libro_pedido + cuadernos * cuadernos_pedido + lapiceros * lapiceros_pedido;

alert(`total de la venta: ${respuesta}`);