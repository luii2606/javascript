// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

function CalcularEdad() {

  let anio = parseInt(prompt("Ingrese su año de nacimiento:"));
  const anioActual = new Date().getFullYear();
  let edad =  anioActual - anio;

  alert(`Su edad es de ${edad} años`);

}
CalcularEdad();