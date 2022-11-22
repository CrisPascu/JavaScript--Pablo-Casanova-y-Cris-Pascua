var APP_DESCRIPTION = "Esta aplicación convierte colores RGB a hexadecimal";
var ENTER_STRING_MESSAGE = "Introduzca los colores RGB separados por comas";
var RESULTING_STRING_MESSAGE = "El color hexadecimal es: ";
var FIRST_MESSAGE = APP_DESCRIPTION + "\n" + ENTER_STRING_MESSAGE;

// función que convierte los valores RGB a hexadecimal

function rgb(r,g,b) {  //pasa los valores recibidos a hexadecimal y los presenta Falla porque no lo pasa bien a hexadecimal
   // let red = parseInt(r, 16);
   // console.log(red);
   // let green = parseInt(g, 16);
   // let blue = parseInt(b, 16);
   if(parseFloat(r) > 255){
      r = 255;
   }else if(parseFloat(r) < 0){
      r = 0;
   }
   let red = Math.round(r).toString(16).toUpperCase();

   if(red.length < 2){
      red = "0" + red;
   }
   console.log(red);

   if(parseFloat(g) > 255){
      g = 255;
   }else if(parseFloat(g) < 0){
      g = 0;
   }
   let green = Math.round(g).toString(16).toUpperCase();
   if(green.length < 2){
      green = "0" + green;
   }
   console.log(green);

   if(parseFloat(b) > 255){
      b = 255;

   }else if(parseFloat(b) < 0){
      b = 0;
   }
   let blue = Math.round(b).toString(16).toUpperCase();
   if(blue.length < 2){
      blue = "0" + blue;
   }
   console.log(blue);

   let alm = "#";
   let resultado = red.concat(green, blue);
   resultado = alm + resultado;
   console.log(resultado);
   return resultado;
  }
  
 
