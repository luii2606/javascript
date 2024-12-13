// 35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

function calcularDineroInicial() {
  
  const precioLlaveHexagonal = 11500;
  const cantidadLlaves = 5;

  const precioBomba = 1168000;
  const cantidadBombas = 1;

  const precioCajaPernos = 87000;
  const cantidadCajasPernos = 3;

  const dineroSobrante = 91000;

  
  const totalLlaves = precioLlaveHexagonal * cantidadLlaves;
  const totalBombas = precioBomba * cantidadBombas;
  const totalCajasPernos = precioCajaPernos * cantidadCajasPernos;

  const costoTotal = totalLlaves + totalBombas + totalCajasPernos;


  const dineroInicial = costoTotal + dineroSobrante;


  alert(`El costo total de las llaves hexagonales es: $${totalLlaves}`);
  alert(`El costo total de las bombas es: $${totalBombas}`);
  alert(`El costo total de las cajas de pernos es: $${totalCajasPernos}`);
  alert(`El costo total de los productos es: $${costoTotal}`);
  alert(`El dinero inicial que tenía el jefe de obra es: $${dineroInicial}`);
}

calcularDineroInicial();