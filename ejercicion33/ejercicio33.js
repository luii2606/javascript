// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edad_hijo = parseInt(prompt("Ingrese la edad del hijo: "));
let edad_mama = parseInt(prompt("Ingrese la edad de la mamá: "));

const edadMadre = (edad_hijo, edad_mama) => (edad_mama - edad_hijo);
let respuesta = edadMadre(edad_hijo, edad_mama);

alert(`la edad de la madre al mometo de dar a luz fue: ${respuesta}`);

