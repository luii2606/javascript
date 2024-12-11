// 19. Escribir un programa que calcule el área y el volumen de un cilindro

function calcularCilindro(radio, altura) {
    let area = 2 * Math.PI * radio * (radio + altura); 
    let volumen = Math.PI * Math.pow(radio, 2) * altura; 
    return { area, volumen };
}


let radio = 5; 
let altura = 10; 

const { area, volumen } = calcularCilindro(radio, altura);

console.log(`El área del cilindro es: ${area} `);
console.log(`El volumen del cilindro es: ${volumen}`);