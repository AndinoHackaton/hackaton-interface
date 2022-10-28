
// habilitar  boton por campo llenado
function habilitar (){
    let dato = document.getElementById("cantidad").value;
    let validar=0; 
    if(dato==""){
      validar++;
    }
    if(validar==0){
      document.getElementById("continuar").disabled =false;
    } 
    else{
      document.getElementById("continuar").disabled =true;
    }
    }
    document.getElementById("cantidad").addEventListener("keyup",habilitar);
//habilitar boton por opcion seleccion
function habilitar2 (){
    let select = document.getElementByClass("opcion").value;
    let validar=0; 
    if(select==""){
      validar++;
    }
    if(select==0){
      document.getElementByClass("continuar").disabled =false;
    } 
    else{
      document.getElementByClass("continuar").disabled =true;
    }
    }
    document.getElementByClass("opcion").addEventListener("keyup",habilitar2 );
