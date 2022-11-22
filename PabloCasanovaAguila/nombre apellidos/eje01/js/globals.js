var APP_DESCRIPTION = "Esta aplicación convierte colores RGB a hexadecimal";
var ENTER_STRING_MESSAGE = "Introduzca los colores RGB separados por comas";
var RESULTING_STRING_MESSAGE = "El color hexadecimal es: ";
var FIRST_MESSAGE = APP_DESCRIPTION + "\n" + ENTER_STRING_MESSAGE;

// función que convierte los valores RGB a hexadecimal

function rgb(r,g,b) {

   let hexadecimal = "#";

   r = Math.round(r);
   if(r > 255){
      r = 255;
   }else if(r < 0){
      r = 0;
   }

   g = Math.round(g);
   if(g > 255){
      g = 255;
   }else if(g < 0){
      g = 0;
   }

   b = Math.round(b);
   if(b > 255){
      b = 255;
   }else if(b < 0){
      b = 0;
   }

   r = r.toString(16);
   g = g.toString(16);
   b = b.toString(16);

   console.log(r + "red" + g + "gree" + b + "blue")



   let numDigitsR = r.toString().length;

   if(numDigitsR == 1){
      r = r.toString();
      console.log(typeof(r) + "tipo r")
      r = "0"+r;
      console.log(r + "rrrrrrrr")

   }

   let numDigitsG = g.toString().length;

   if(numDigitsG == 1){
      g = g.toString();
      g = "0"+g;

   }

   let numDigitsB = b.toString().length;

   if(numDigitsB == 1){
      b = b.toString();
      b = "0"+b;

   }


   hexadecimal += r + g+ b;

   return hexadecimal.toUpperCase();
}

