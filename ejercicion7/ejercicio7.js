// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

function tipo_impositivo(){
    let renta_anual =parseInt(prompt("¿Cuál es su renta anual?"));

    if (renta_anual > 10000 && renta_anual < 20000){
        alert("Le corresponde el imposito tipo (A) del 5%");

    }else if (renta_anual > 2000 && renta_anual < 35000){
        alert("Le corresponde el imposito tipo (B) del 10%");
    }
    else if (renta_anual > 35000 && renta_anual < 60000){
        alert("Le corresponde el imposito tipo (C) del 20%");
    }
    else if( renta_anual > 60000){
        alert("Le corresponde el imposito tipo (D) del 45%");
    }else{
        alert("no paga ningun tipo de imposito");
    }
    
}
tipo_impositivo();