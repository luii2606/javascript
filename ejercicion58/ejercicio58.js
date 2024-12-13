// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.


let mes = prompt("Ingresa el nombre del mes (en minúsculas o mayúsculas):").toLowerCase();
let signoZodiacal = "";

if (mes === "enero") {
    signoZodiacal = "Capricornio o Acuario";
} else if (mes === "febrero") {
    signoZodiacal = "Acuario o Piscis";
} else if (mes === "marzo") {
    signoZodiacal = "Piscis o Aries";
} else if (mes === "abril") {
    signoZodiacal = "Aries o Tauro";
} else if (mes === "mayo") {
    signoZodiacal = "Tauro o Géminis";
} else if (mes === "junio") {
    signoZodiacal = "Géminis o Cáncer";
} else if (mes === "julio") {
    signoZodiacal = "Cáncer o Leo";
} else if (mes === "agosto") {
    signoZodiacal = "Leo o Virgo";
} else if (mes === "septiembre") {
    signoZodiacal = "Virgo o Libra";
} else if (mes === "octubre") {
    signoZodiacal = "Libra o Escorpio";
} else if (mes === "noviembre") {
    signoZodiacal = "Escorpio o Sagitario";
} else if (mes === "diciembre") {
    signoZodiacal = "Sagitario o Capricornio";
} else {
    signoZodiacal = "Mes no válido. Por favor ingresa un mes correcto.";
}

alert("El signo zodiacal correspondiente es: " + signoZodiacal);
