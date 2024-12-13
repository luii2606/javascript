// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.


let saldo = parseFloat(prompt("Ingresa el saldo de tu depósito:"));
let interes = 0;
let interesPagado = 0;


if (saldo < 100000) {
    interes = 3; 
} else {
    interes = 4; 
}


interesPagado = (saldo * interes) / 100;


let saldoFinal = saldo + interesPagado;

alert("El interés anual es del " + interes + "%.\nEl interés pagado es: $" + interesPagado.toFixed(2) + "\nEl saldo final es: $" + saldoFinal.toFixed(2));
