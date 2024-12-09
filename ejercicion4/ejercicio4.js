// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.


 function numeropar () {
    let numero= parseFloat(prompt("Ingrese un número entero:"));

    if (Number.isInteger (numero)){

        if (numero % 2 === 0) {
            console.log(`El número ${numero} es par`);
        } else{
            console.log(`El número ${numero} es impar`);
        }

    }else{
        console.log("ingrese un número entero")
    }

    
 }
 
 numeropar();