// 11. Escribir un programa que sume, resta, multiplique y divida dos números.



function operaciones(){
    let opera = prompt("¿Qué operación desea realizar?\n- suma\n- resta\n- multiplicación\n- división")
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    
    
  
    if (opera == "suma") {
        let suma = numero1 + numero2;
        alert(suma);
    }
    else if(opera == "resta"){
        let resta = numero1 - numero2;
        alert(resta);
    }
    else if(opera == "multiplicacion"){
        let multiplicacion = numero1 *numero2;
        alert(multiplicacion);
    }
     else if(opera == "division"){
        if(numero2 == 0){
            alert("no se puede divir entre 0");
        }
        else{
            let division = numero1 / numero2;
            alert(division);
        }
    } 
    
}
operaciones();