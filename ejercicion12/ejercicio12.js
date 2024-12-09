// 12. Escribir un programa que calcule el área de un rectángulo

function area_rectangulo(){
    
    let base = parseInt(prompt("ingrese la base del rectángulo:"));
    let altura = parseInt(prompt("ingrese la altura del rectángulo:"));

    let area = base * altura;
    alert (`El área del rectangulo es de: ${area}`);
}
area_rectangulo();