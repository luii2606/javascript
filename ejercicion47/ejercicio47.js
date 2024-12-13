// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

// Leer tres valores e indicar el mayor, el menor o si son iguales
function compararValores() {
   
    let A = parseFloat(prompt("Introduce el primer número (A):"));
    let B = parseFloat(prompt("Introduce el segundo número (B):"));
    let C = parseFloat(prompt("Introduce el tercer número (C):"));

    
    if (A === B && B === C) {
        console.log("Los tres números son iguales.");
    } else {
        
        let mayor;
        if (A > B && A > C) {
            mayor = A;
        } else if (B > A && B > C) {
            mayor = B;
        } else {
            mayor = C;
        }

       
        let menor;
        if (A < B && A < C) {
            menor = A;
        } else if (B < A && B < C) {
            menor = B;
        } else {
            menor = C;
        }

        
        console.log(`El número mayor es: ${mayor}`);
        console.log(`El número menor es: ${menor}`);
    }
}


compararValores();

