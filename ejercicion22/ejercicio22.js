// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%
let valor = 355;

let tiempo = parseInt(prompt("Tiempo transcurrido en minutos :"));

let multi = tiempo * valor;
let iva = multi * 0.20;
let costo_total = multi + iva; 

alert(`El pago de la llamada telefonica fue de: ${costo_total}`);

