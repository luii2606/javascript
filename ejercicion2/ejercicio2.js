


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