// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

function farmacia() {
  let costo = parseInt(prompt("Ingrese el valo del costo:"));
  let descuento = 0.1 
  let resta = costo * descuento;
  let costo_total_ = costo - resta;

  alert(`El costo final es de: ${costo_total_}`);
}
farmacia();