// fichero para manejar los eventos de la aplicación
  
const valorR = document.getElementById("valorR");
const valorG = document.getElementById("valorG");
const valorB = document.getElementById("valorB");
const boton = document.getElementById("enviar");

boton.onclick = function  validar(r,g,b){ //cuando se pulsa el votón asigna los valores del formulario y llama a la función
    r = parseInt(valorR.value);
    g = parseInt(valorG.value);
    b = parseInt(valorB.value);
    document.write(rgb(r,g,b));
};