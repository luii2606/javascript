
// let edad = parseInt(prompt("Ingrese su edad"));

function Validar_edad(edad){

    if (edad >= 18) {
        alert("Eres mayor de edad"); 
    }
    else if (edad >= 0){
        alert("ERROR, ingrese un numero positivo");
    }else{
        alert("Eres menor de edad");
    } 
    
}
Validar_edad(20);

