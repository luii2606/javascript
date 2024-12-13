// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let radio = parseFloat(prom("Ingrese el radio del deposito:"));
let tiempo = parseFloat(prompt("Ingrese el tiempo:"));
let altura = parseFloat(prompt("Ingrese la altura del deposito:"));

let volumen = Math.PI * (radio ^ 2) * (altura);
let conver = tiempo * 60;

let Q = volumen / conver;

alert(`El resultado del caudar es de: ${Q}`);