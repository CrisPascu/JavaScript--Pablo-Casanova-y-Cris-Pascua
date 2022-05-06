//Booleanos
/*1. Solicite un dato, analice si se trata de un valor booleano, numérico o cadena de caracteres muestre su valor de verdad*/
function buleanoUno(){
    let dato=prompt("Introduce un dato");
    if (dato == "true" || dato == "false") {
        alert("Es buleano");
    }else if (dato < 0 || dato >= 0) {
        alert("Es numérico");
    }else{
        alert("Es cadena");
    }
}

/*2. Muestre las tablas de verdad de los conectores lógicos: negación !, conjunción &, disyunción |(interseccion de conjuntos), implicación, bicondicional, disyunción exclusiva (el resto de la anterior) y negación de la disyunción exclusiva*/


//Números
/*1. Solicite dos números y muestre su suma*/
function suma(){
    let numero1=parseInt(prompt("Introduce el primer numero"));
    let numero2=parseInt(prompt("Introduce el segundo numero"));
    alert(numero1+numero2);
}

/*2. Solicite dos números y muestre el mayor de ellos*/
function mayor(){
    let numero1=parseInt(prompt("Introduce el primer numero"));
    let numero2=parseInt(prompt("Introduce el segundo numero"));
    if (numero1>numero2) {
        alert(numero1);
    }else if (numero2>numero1){
        alert(numero2);
    }else {
        alert("Son iguales");
    }
}

/*3. Solicite un número y lo divida por 2, por 4 y por 8*/
function dividir(){
    let dato=parseInt(prompt("Introduce un numero"));
    alert(dato/2 + " "+ dato/4 + " "+ dato/8);
}

/*4. Solicite un número e indique si es par o impar*/
function parImpar(){
    let dato=parseInt(prompt("Introduce un numero"));
    if (dato%2==0) {
        alert("Par");
    } else {
        alert("Impar");
    }
}

/*5. Solicite un número y muestre una cuenta atrás*/
function cuentaAtras(){
    let dato=parseInt(prompt("Introduce un numero"));
    for (let i = dato; i > -1; i--) {
        alert(i);
    }
}

/*6. Solicite tres números y muestre el menor de ellos. Realizar el mismo ejercicio para n
números y mostrar el mayor.*/
function numMenor(){
    let dato1=parseInt(prompt("Introduce el primer valor"));
    let dato2=parseInt(prompt("Introduce el segundo valor"));
    let dato3=parseInt(prompt("Introduce el tercer valor"));

    if (dato1>dato2 && dato1>dato3) {
        alert(dato1);
    }
    else if (dato2>dato1 && dato2>dato3){
        alert(dato2);
    }
    else {
        alert(dato3);
    }
}

/*7. Solicite tres números y muestre el central, si no hay uno central, debe advertirlo*/
function numeroIntermedio(){
    let datos1=parseInt(prompt("Introduce el primer valor"));
    let datos2=parseInt(prompt("Introduce el segundo valor"));
    let datos3=parseInt(prompt("Introduce el tercer valor"));

    if (datos2>datos3 && datos2<datos1 || datos2>datos1 && datos2<datos3) {
        alert(datos2);
    }
    else if (datos1>datos3 && datos1<datos2 || datos1>datos2 && datos1<datos3){
        alert(datos1);
    }
    else if (datos3>datos2 && datos3<datos1 || datos3>datos1 && datos3<datos2){
        alert(datos3);
    }
    else {
        alert("No hay dato intermedio");
    }
}

/*8. Solicite cuatro números y los muestre en orden*/ 
function ordenarNumeros(){
    let numeros=[];
    for (let o = 0; o < 4; o++) {
        numeros[o]=parseInt(prompt("Introduce el " + o +" valor"));
    }

    alert(numeros.sort);
}

/*9. Solicite números al usuario y calcule la media aritmética de todos ellos. Para terminar de introducir números, el usuario introducirá un número negativo. Realizar el mismo ejercicio para las medias armónica, cuadrática y geométrica*/
function media(){
    let num=0;
    let contador=0;
    let media=0;
    while (num>=0) { 
        num=parseInt(prompt("Introduce un número"));
        if (num>=0){
            media=media+num;
            contador++; 
        }
    }
    media=media/contador;
    alert(media);
}

/*10. Solicite números enteros al usuario. Para terminar de introducir números, el usuario
introducirá el cero. A continuación se mostrará un sencillo histograma: El número de
positivos y el número de negativos usando asteriscos (uno para cada ocurrencia)*/
function histograma(){
    let num;
    let contador="";
    let media="";
   do { 
        num=parseInt(prompt("Introduce un número"));
        if (num<0){
            contador=contador+"*"; 
        }
        else {
            media=media+"*";
        }
    } while (num!=0);
    alert("Numeros positivos: "+ media +"\n Numeros negativos: " + contador);
}

/*11. Solicite la estatura y el peso del usuario y, basándose en el cálculo de su IMC le
informe de su estado nutricional*/
function imc(){
    let estatura=parseFloat(prompt("Introduce tu altura"));
    let peso=parseFloat(prompt("Introduce tu peso"));
    if((peso/(estatura*estatura)) < 18.5)
        alert("Bajo peso");
    else if ((peso/(estatura*estatura)) < 25 && (peso/(estatura*estatura)) >= 18.5) {
        alert("Peso normal"); 
    }else if ((peso/(estatura*estatura)) < 29.9 && (peso/(estatura*estatura)) >= 25) {
        alert("Sobrepeso"); 
    }else{
        alert("Obesidad"); 
    }
}

/*12. Solicite un número al usuario y muestre la suma de todos los números naturales
desde el 1 hasta el número introducido*/
function sumaTotal(){
    let num=parseInt(prompt("Introduce un número"));
    let sumar=0;
    for (let i = num; i > 0; i--) {
        sumar=sumar+i;
    }
    alert(sumar);
}

/*13. Solicite dos números al usuario y muestre la suma de todos los números naturales
entre ellos incluyendo ambos*/
function sumaEntreNumeros(){
    let num1=parseInt(prompt("Introduce un número"));
    let num2=parseInt(prompt("Introduce otro número"));
    let sumar=0;
    if(num1>num2){
        for (let i = num1; i >= num2; i--) {
            sumar=sumar+i;
        }
        alert(sumar);
    }
    else{
        for (let i = num1; i <= num2; i++) {
            sumar=sumar+i;
        }
        alert(sumar);
    }
}

/*14. Solicite una hora del día al usuario entre las 0 y las 11 y un número de horas. Se
mostrará que hora indicará el reloj pasadas ese número de horas*/
function horas(){
    let num=parseInt(prompt("Introduce la hora"));
    let intervalo=parseInt(prompt("Introduce cuántas horas han pasado"));

    num=num+intervalo;
    while(num>24){
        num-=24;
    }
    alert(num);
}

/*15. Solicite un número al usuario y muestre todos sus múltiplos del 0 al 100*/
function multiplos(){
    let num=parseInt(prompt("Introduce un número"));
    for (let i = 0; i < 101; i++) {
        alert(num*i);
    }

}

/*16. Solicite un número y muestre el número de dígitos que lo forman*/
function numeroDigitos(){
    let num=prompt("Introduce un número");
    alert(num.length);

}

/*17. Solicite un número y muestre sus dígitos invertidos*/
function digitosInvertidos(){
    let num=prompt("Introduce un número");
    let aux="";
    for (let i = num.length; i > 0; i--) {
        aux=aux+num.substring(i,i-1);
    }
    alert(aux);
}

/*18. Solicite un importe e indique el importe con IVA*/
function conIVA(){
    let num=parseFloat(prompt("Introduce el importe"));
    alert("El precio con IVA es "+ (num+num*0.21));
}

/*19. Solicite un importe con IVA y lo indique sin IVA*/
function sinIVA(){
    let num=parseFloat(prompt("Introduce el importe con iva"));
    alert("El precio sin IVA es "+ (num-num*0.21));
}


/*20. Solicite un año e indique si es bisiesto o no*/
function bisiesto(){
    let anio = prompt("Introduce un año");
    if (((anio % 4 == 0) && (anio % 100 != 0 )) || (anio % 400 == 0)){
        alert( anio + " es bisiesto");
    }
    else{
        alert(anio + " no es bisiesto")
    }
}

/*21. Solicite duraciones de tramos de viaje en minutos (hasta que se introduzca un cero o
un valor negativo) y muestre la duración del viaje en horas y minutos*/
function viaje() {
    let mins = 0;
    let total = 0;
    let horas = 0;

    do {

        mins = parseInt(prompt("Introduce minutos"));
        total += mins;
        
    } while (mins != 0);

    while (total > 60) {
        horas++;
        total -= 60;
    }

    alert("El viaje ha durado " + horas + " horas y " + total + " minutos.");
}

/*22. Solicite un número y muestre su parte decimal*/
function numeroDecimal(){
    let numDecimal=prompt("Introduce un número decimal");
    
    alert(numDecimal.substring(numDecimal.indexOf(".")+1,numDecimal.length));
    
}

/*23. Solicite un número y muestre su parte entera*/
function numeroEntero(){
    let numEntero=prompt("Introduce un número decimal");
    
    alert(numEntero.substring(0,numEntero.indexOf(".")));
    
}

/*24. Solicite dos números y calcule su división indicando si ésta es exacta o no*/
function division(){
    let dividendo = parseFloat(prompt("Introduce el dividendo"));
    let divisor = parseFloat(prompt("Introduce el divisor"));

    if(dividendo%divisor == 0)
        alert("Es exacta. Con resultado " + dividendo/divisor);
    else
        alert("Es decimal. Con resultado " + dividendo/divisor);
}

/*25. Solicite una base y un exponente y calcule la potencia*/
function potencia(){
    let base = parseInt(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce el exponente"));
    alert(Math.pow(base, exponente));
}

/*26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima
hasta la ingresada por el usuario*/
function mostrarPotencias(){
    let exponente = parseInt(prompt("Introduce el máximo exponente"));

    for (let i = 0; i <= exponente; i++) {
        alert("La potencia de 2 elevado a " + i + " es " + Math.pow(2,i));
    }
}

/*27. Solicite un número y muestre su factorial*/
function factorial() {
    let num = parseInt(prompt("Introduce un numero"));
    let result = 1;
    
    for (let i = 1; i < num + 1; i++) {
        
        result = result * i;
        
    }
    alert(result);
}

/*28. Solicite dos números y muestre su coeficiente binomial*/
function binomial() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));

    alert((num1 * (num1 - 1))/num2)

}

/*29. Calcule el número de puntos que suman las fichas del juego del dominó*/
function numeroPuntos(){
    let sumatorio=0;
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i+ 1; j++) {
            sumatorio=sumatorio+j+i;
        }
    }
    alert(sumatorio);
}

/*30. Muestre las distintas combinaciones al lanzar dos dados*/
function dados() {
//    let combinaciones = Math.pow(6,2);
    let combinar;
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            alert(combinar="Combinación " + i + " y " + j);
        }
    }

    if(dividendo%divisor == 0)
        alert("Es exacta. Con resultado " + dividendo/divisor);
    else
        alert("Es decimal. Con resultado " + dividendo/divisor);
}

/*25. Solicite una base y un exponente y calcule la potencia*/
function potencia(){
    let base = parseInt(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce el exponente"));
    alert(Math.pow(base, exponente));
}

/*26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima
hasta la ingresada por el usuario*/
function mostrarPotencias(){
    let exponente = parseInt(prompt("Introduce el máximo exponente"));

    for (let i = 0; i <= exponente; i++) {
        alert("La potencia de 2 elevado a " + i + " es " + Math.pow(2,i));
    }
}

/*27. Solicite un número y muestre su factorial*/
function factorial() {
    let num = parseInt(prompt("Introduce un numero"));
    let result = 1;
    
    for (let i = 1; i < num + 1; i++) {
        
        result = result * i;
        
    }
    alert(result);
}

/*28. Solicite dos números y muestre su coeficiente binomial*/
function binomial() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));

    alert((num1 * (num1 - 1))/num2)

}

/*29. Calcule el número de puntos que suman las fichas del juego del dominó*/
function numeroPuntos(){
    let sumatorio=0;
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i+ 1; j++) {
            sumatorio=sumatorio+j+i;
        }
    }
    alert(sumatorio);
}

/*30. Muestre las distintas combinaciones al lanzar dos dados*/
function dados() {
//    let combinaciones = Math.pow(6,2);
    let combinar;
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            alert(combinar="Combinación " + i + " y " + j);
        }
    }
}

/*31. Solicite un número y muestre el numero de combinaciones que existen para obtener
ese número lanzando dos dados y sumando sus puntuaciones*/
function dadosSuma() {
    let combinar;
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            alert(combinar="Combinación " + i + " y " + j + ". La suma es " + (i+j));
        }
    }
}

/*32. Solicite un número en base decimal y lo muestre en binario, octal y hexadecimal*/
function cambioBase() {
    let numero = parseInt(prompt("Introduce un numero en base 10"));
    alert(numero + " en base 2 es " + numero.toString(2));
    alert(numero + " en base 8 es " + numero.toString(8));
    alert(numero + " en base 16 es " + numero.toString(16));

}

/*33. Solicite un número y muestre la parte entera de su raíz cuadrada*/
function raiz() {
    let numero = parseInt(prompt("Introduce un numero"));
    alert(parseInt(Math.sqrt(numero,2)));
}

/*34. Solicite un número y muestre todos sus divisores*/
function divisores() {
    let numero = parseInt(prompt("Introduce un numero"));
    let count = numero;
    let resultado = "";

    do {
        count--;
        
        if(numero%count==0)
            resultado += count + ", "; 
        

    } while (count!=1);

    alert("Los divisores del numero " + numero + " son " + resultado);
}

/*35. Solicite dos números e indique sus divisores comunes*/
function divisoresComunes() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));

    let count = 0;
    let resultado = "";

    count = (num1>=num2) ? num2 : num1;

    do {
        count--;
        
        if(num1%count==0 && num2%count==0)
            resultado += count + ", "; 
        

    } while (count!=1);

    alert("Los divisores comunes de los numeros " + num1 + " y " + num2 + " son " + resultado);
}

/*36. Juegue al Fizz buzz:
Necesita escribir un programa que imprima los números del 1 al 100 para que:
-Si el número es múltiplo de 3, debe escribir «Fizz» en lugar de ese número.
-Si el número es múltiplo de 5, debe escribir «Buzz» en lugar de ese número.
-Si el número es un múltiplo de 3 y 5, debe imprimir «FizzBuzz» en lugar de ese número.
Intente pensar en una solución para resolver este desafío con la ayuda de bucles y declaraciones condicionales antes de pasar a la solución.*/
function fizzBuzz(){
    for (let i = 0; i <= 100; i++) {
        if (i%3 == 0 && i%5 == 0) {
            alert("FizBuzz");
        } else if (i%3 == 0){
            alert("Fizz");
        } else if (i%5 == 0){
            alert("Buzz");
        } else{
            alert(i);
        }
        
    }
}

/*37. Solicite un número e indique si es primo o no*/
function pares(){
    let numero=parseInt(prompt("Introduce un número"));
    if (numero%2==0){
        alert(numero+" es un número par");
    } else {
        alert(numero+" no es un número par")
    }
}

/*38. Solicite dos números y muestre su máximo común divisor
39. Solicite un número y lo descomponga en factores primos
40. Solicite un número y calcule la suma de sus dígitos
41. Muestre la tabla de multiplicar
42. Implemente una sencilla calculadora, en la que se solicite el primer operando, un
operador aritmético y el segundo operando para mostrar a continuación el resultado
43. Solicite números entre 0 y 998 hasta que el usuario introduzca el 999, en ese
momento muestra la suma de todos ellos (menos el 999)
44. Solicite un número de segundos y muestre este dato en horas, minutos y segundos
45. Solicite tres números al usuario e indique si forman los lados de un triángulo y en
caso afirmativo qué tipo de triángulo
46. Solicite números al usuario y muestre cuantos números mayores que cero se han
introducido y la suma de todos ellos. Para terminar, el usuario introducirá el cero
47. Calcule el número de años que deben transcurrir para que la suma de las edades de
tres hijos de 14, 12 y 9 años sea igual a la edad de su padre que ahora tiene 43
años
48. Solicite las dimensiones de una matriz, y muestre únicamente aquéllas posiciones
cuyas coordenadas sean, ambas, impares
49. Solicite al usuario un PIN (número de cuatro dígitos) y le ofrezca tres oportunidades
para introducir el mismo que uno elegido por el desarrollador
50. Solicite el número de horas que se ha trabajado y el número de horas extra y calcule
la nómina semanal bruta. La hora normal se paga a 10€ y la extra a 15€
51. Solicite la edad de un padre y la de su hijo y muestre el número de años que deben
transcurrir hasta que la edad del padre doble a la del hijo
52. Solicite un número y muestre el triángulo de Pascal de altura igual al número
introducido
53. Solicite los coeficientes de una ecuación de primer grado y muestre su solución
54. Solicite los coeficientes de una ecuación de segundo grado y muestre su solución
55. Solicite al usuario las coordenadas del centro y el radio de dos circunferencias e
indique si se cortan o no y en cuantos puntos
56. Solicite números al usuario entre el 1 y el 100 hasta que se averigüe el que ha
elegido el desarrollador. Para ayudar al usuario, cada vez que éste introduzca un
número, se le indicará si el número a averiguar es mayor o menor que el número
introducido. Intercambiar los papeles y que sea ahora el usuario el que elije un
número y el programa tratará de adivinarlo
57. Solicite un número y muestre los dígitos de todos los números desde el 0 hasta el
solicitado en columnas, por ejemplo, para el número 26:
000000000011111111112222222
012345678901234567890123456

Cadenas de caracteres
1. Solicite el nombre del usuario y le dé las buenas tardes
2. Muestre los días de la semana (uno por línea)
3. Solicite un carácter e indique si se trata de una letra, de un número o de otro tipo de
carácter
4. Solicite dos palabras e indique cuál de las dos es más larga y por cuantos caracteres
lo es
5. Solicite un número de palabras. A continuación se pedirá al usuario que las
introduzca. Para terminar se mostrará la palabra más corta y la más larga
6. Solicite una cadena de caracteres e indique si es un palíndromo o no
7. Solicite una cadena de caracteres y elimine los espacios innecesarios,es decir,
elimine todos los espacios al comienzo y al final de la cadena y mantenga un único
espacio entre dos palabras
8. Solicite al usuario un número y muestre una pirámide de asteriscos cuya base
contenga un número de asteriscos igual al número introducido por el usuario
9. Solicite un número al usuario y muestre una plantilla similar a la siguiente (para el
número 7)
*
**
***
****
*****
******
*******
10. Solicite un número al usuario y muestre una plantilla similar a la siguiente (para el
número 7). Tener en cuenta los espacios de la izquierda
 1******
 12*****
 123****
 1234***
 12345**
 123456*
 1234567
11. Solicite un número impar usuario y muestre una plantilla similar a la siguiente (para
el número 9)
*
***
*****
*******
*********
*********
*******
*****
***
*
12. Solicite un número al usuario y dibuje un hexágono del lado indicado, por ejemplo
para el número 4:
 ****
 ******
********
**********
********
 ******
 ****
13. Solicite una cadena de caracteres e indique si contiene únicamente mayúsculas,
únicamente minúsculas, únicamente números o únicamente otros caracteres
distintos a los mencionados
14. Solicite al usuario una cadena de caracteres. Si el último carácter de ésta es una
letra, lo considerará un NIF y le indicará al usuario que tipo de NIF es o si éste es
inválido. En caso contrario, si es posible, calculará la letra de control y lo mostrará al
usuario
15. Solicite al usuario una cadena de caracteres e indique si se trata de un pangrama
16. Solicite al usuario dos números y una letra: "i” ó "p” (en mayúsculas o minúsculas).
La página mostrará los números pares (si se pulsó la "p”) ó impares (si se pulsó la
"i”) que hay desde un número al otro de los que introdujo el usuario
17. Solicite una cadena y la codifique letra a letra siguiendo el orden alfabético: A->01,
B->02, C->03, etc.
18. Permita que dos personas jueguen a piedra, papel, tijera. Se solicitará el número de
rondas que un jugador debe ganar para ganar el juego. En cada ronda se mostrará
la puntuación actual
19. Solicite una dirección MAC-48, la valide y si es correcta la convierta en una dirección
IPv6 de enlace local
20. Solicite una cadena y la cifre utilizando el método ROT13
21. Solicite una cadena y la codifique utilizando el método Base64
22. Solicite una cadena y la codifique utilizando el método RLE
23. Solicite una talla de ropa e indique su tamaño según la siguiente tabla
XXL, XL, L Grande
M Mediana
XS, S Pequeña
*/