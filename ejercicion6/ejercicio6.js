// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

function asignacion_de_grupos () { 
    let nombre = prompt("Ingrese su nombre:").toLowerCase(); 
    let sexo = prompt("Ingrese su sexo (M/F):").toLowerCase(); 
    let grupo = (sexo === "f" && nombre < "m") || (sexo === "m" && nombre > "n") ? "A" : "B"; 
    console.log(`El grupo al que pertenece es el grupo ${grupo}`);
 }
 asignacion_de_grupos();
    