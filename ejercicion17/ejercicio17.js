// 17. Escribir un programa que calcule el volumen de una esfera.


let radio = parseFloat(prompt("Ingresa el radio de la esfera:"));


if (radio > 0) {

    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    
    alert(`El volumen de la esfera es: ${volumen}`);
} else {
    alert(" Inngresa un número positivo.");
}
