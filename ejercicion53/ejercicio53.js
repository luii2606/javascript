// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

const productos = [10000, 20000, 15000, 30000, 5000]; // Precios de los productos
const subtotal = productos.reduce((acc, precio) => acc + precio, 0);
const iva = subtotal * 0.19; 
const total = subtotal + iva;

console.log(`Subtotal: $${subtotal}`);
console.log(`IVA: $${iva}`);
console.log(`Total: $${total}`);