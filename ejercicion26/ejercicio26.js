// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

let temperatura_celcius = parseFloat(prompt(`Ingrese la temperatura de grados celcius:`));

let temperatura_fahrenheit = (temperatura_celcius * 9 / 5) + 32;

alert(`${temperatura_celcius} grados celcius son quivalentes a ${temperatura_fahrenheit} grados fahrenheit`);