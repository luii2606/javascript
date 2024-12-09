// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.


 function tributar (){
    let edad= parseInt(prompt("¿Cuántos años tienes?"));
    let ingresos= parseInt(prompt("ingrese sus ingresos mensuales :"));

    if (edad > 16 && ingresos > 1000){
        alert("Debe tributar");
    }else{
        alert("No debe tributar");
    }

 }
 tributar();