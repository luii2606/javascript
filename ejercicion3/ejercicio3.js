// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su 
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

try {
    
    let dividendo = parseFloat(prompt("Ingrese el dividendo (número a dividir):"));

    
    let divisor = parseFloat(prompt("Ingrese el divisor (número por el cual dividir):"));

    
    if (divisor === 0) {
        throw new Error("No se puede dividir entre cero, ingrese un divisor válido."); //error personalizado
    }

    
    let resultado = dividendo / divisor;

    
    alert(`El resultado de la división es: ${resultado}`);
} catch (error) {
    
    alert(`Error: ${error.message}`);
}