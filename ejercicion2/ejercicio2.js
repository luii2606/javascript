// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
  // pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
  // por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
  // minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.


 function Validar_contrasena (ingresar) {
    ingresar =prompt("ingrese la contraseña");
     let contra = "hola12";
     let valida = /\W/;
    console.log(valida.test(ingresar));

    if (valida.test(ingresar) === false) {
        console.log("se cumple");
        
    }else console.log("ño");
    
        
    
 }
 Validar_contrasena();