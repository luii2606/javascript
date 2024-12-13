// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

function calcularPrecioConDescuento(precio, descuento) {
  return precio - precio * descuento;
}

function obtenerPrecioProducto(nombre) {
  let precio = parseFloat(prompt(`Ingrese el valor de ${nombre}:`));
  while (isNaN(precio) || precio <= 0) {
    alert("Por favor, ingrese un valor válido para el producto.");
    precio = parseFloat(prompt(`Ingrese el valor de ${nombre}:`));
  }
  return precio;
}

function pago() {
  const productos = [
    { nombre: "Producto 1", descuento: 0.05 },
    { nombre: "Producto 2", descuento: 0.05 },
    { nombre: "Producto 3", descuento: 0.02 },
    { nombre: "Producto 4", descuento: 0.02 },
    { nombre: "Producto 5", descuento: 0.02 },
  ];

  let totalCompra = 0;

  productos.forEach((producto) => {
    const precio = obtenerPrecioProducto(producto.nombre);
    const precioFinal = calcularPrecioConDescuento(precio, producto.descuento);
    totalCompra += precioFinal;
    alert(`El valor a pagar de ${producto.nombre} es: $${precioFinal.toFixed(2)}`);
  });

  alert(`El total de la compra es: $${totalCompra.toFixed(2)}`);
}

pago();
