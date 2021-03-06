//Booleanos
/*1. Solicite un dato, analice si se trata de un valor booleano, numérico o cadena de caracteres muestre su valor de verdad*/
function buleanoUno() {
    let dato = prompt("Introduce un dato");
    if (dato == "true" || dato == "false") {
        alert("Es buleano");
    } else if (dato < 0 || dato >= 0) {
        alert("Es numérico");
    } else {
        alert("Es cadena");
    }
}

/*2. Muestre las tablas de verdad de los conectores lógicos: negación !, conjunción &, disyunción |(interseccion de conjuntos), implicación, bicondicional, disyunción exclusiva (el resto de la anterior) y negación de la disyunción exclusiva*/


//Números
/*1. Solicite dos números y muestre su suma*/
function suma() {
    let numero1 = parseInt(prompt("Introduce el primer numero"));
    let numero2 = parseInt(prompt("Introduce el segundo numero"));
    alert(numero1 + numero2);
}

/*2. Solicite dos números y muestre el mayor de ellos*/
function mayor() {
    let numero1 = parseInt(prompt("Introduce el primer numero"));
    let numero2 = parseInt(prompt("Introduce el segundo numero"));
    if (numero1 > numero2) {
        alert(numero1);
    } else if (numero2 > numero1) {
        alert(numero2);
    } else {
        alert("Son iguales");
    }
}

/*3. Solicite un número y lo divida por 2, por 4 y por 8*/
function dividir() {
    let dato = parseInt(prompt("Introduce un numero"));
    alert(dato / 2 + " " + dato / 4 + " " + dato / 8);
}

/*4. Solicite un número e indique si es par o impar*/
function parImpar() {
    let dato = parseInt(prompt("Introduce un numero"));
    if (dato % 2 == 0) {
        alert("Par");
    } else {
        alert("Impar");
    }
}

/*5. Solicite un número y muestre una cuenta atrás*/
function cuentaAtras() {
    let dato = parseInt(prompt("Introduce un numero"));
    for (let i = dato; i > -1; i--) {
        alert(i);
    }
}

/*6. Solicite tres números y muestre el menor de ellos. Realizar el mismo ejercicio para n
números y mostrar el mayor.*/
function numMenor() {
    let dato1 = parseInt(prompt("Introduce el primer valor"));
    let dato2 = parseInt(prompt("Introduce el segundo valor"));
    let dato3 = parseInt(prompt("Introduce el tercer valor"));

    if (dato1 > dato2 && dato1 > dato3) {
        alert(dato1);
    }
    else if (dato2 > dato1 && dato2 > dato3) {
        alert(dato2);
    }
    else {
        alert(dato3);
    }
}

/*7. Solicite tres números y muestre el central, si no hay uno central, debe advertirlo*/
function numeroIntermedio() {
    let datos1 = parseInt(prompt("Introduce el primer valor"));
    let datos2 = parseInt(prompt("Introduce el segundo valor"));
    let datos3 = parseInt(prompt("Introduce el tercer valor"));

    if (datos2 > datos3 && datos2 < datos1 || datos2 > datos1 && datos2 < datos3) {
        alert(datos2);
    }
    else if (datos1 > datos3 && datos1 < datos2 || datos1 > datos2 && datos1 < datos3) {
        alert(datos1);
    }
    else if (datos3 > datos2 && datos3 < datos1 || datos3 > datos1 && datos3 < datos2) {
        alert(datos3);
    }
    else {
        alert("No hay dato intermedio");
    }
}

/*8. Solicite cuatro números y los muestre en orden*/
function ordenarNumeros() {
    let numeros = [];
    for (let o = 0; o < 4; o++) {
        numeros[o] = parseInt(prompt("Introduce el " + o + " valor"));
    }

    alert(numeros.sort);
}

/*9. Solicite números al usuario y calcule la media aritmética de todos ellos. Para terminar de introducir números, el usuario introducirá un número negativo. Realizar el mismo ejercicio para las medias armónica, cuadrática y geométrica*/
function media() {
    let num = 0;
    let contador = 0;
    let media = 0;
    while (num >= 0) {
        num = parseInt(prompt("Introduce un número"));
        if (num >= 0) {
            media = media + num;
            contador++;
        }
    }
    media = media / contador;
    alert(media);
}

/*10. Solicite números enteros al usuario. Para terminar de introducir números, el usuario
introducirá el cero. A continuación se mostrará un sencillo histograma: El número de
positivos y el número de negativos usando asteriscos (uno para cada ocurrencia)*/
function histograma() {
    let num;
    let contador = "";
    let media = "";
    do {
        num = parseInt(prompt("Introduce un número"));
        if (num < 0) {
            contador = contador + "*";
        }
        else {
            media = media + "*";
        }
    } while (num != 0);
    alert("Numeros positivos: " + media + "\n Numeros negativos: " + contador);
}

/*11. Solicite la estatura y el peso del usuario y, basándose en el cálculo de su IMC le
informe de su estado nutricional*/
function imc() {
    let estatura = parseFloat(prompt("Introduce tu altura"));
    let peso = parseFloat(prompt("Introduce tu peso"));
    if ((peso / (estatura * estatura)) < 18.5)
        alert("Bajo peso");
    else if ((peso / (estatura * estatura)) < 25 && (peso / (estatura * estatura)) >= 18.5) {
        alert("Peso normal");
    } else if ((peso / (estatura * estatura)) < 29.9 && (peso / (estatura * estatura)) >= 25) {
        alert("Sobrepeso");
    } else {
        alert("Obesidad");
    }
}

/*12. Solicite un número al usuario y muestre la suma de todos los números naturales
desde el 1 hasta el número introducido*/
function sumaTotal() {
    let num = parseInt(prompt("Introduce un número"));
    let sumar = 0;
    for (let i = num; i > 0; i--) {
        sumar = sumar + i;
    }
    alert(sumar);
}

/*13. Solicite dos números al usuario y muestre la suma de todos los números naturales
entre ellos incluyendo ambos*/
function sumaEntreNumeros() {
    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));
    let sumar = 0;
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            sumar = sumar + i;
        }
        alert(sumar);
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sumar = sumar + i;
        }
        alert(sumar);
    }
}

/*14. Solicite una hora del día al usuario entre las 0 y las 11 y un número de horas. Se
mostrará que hora indicará el reloj pasadas ese número de horas*/
function horas() {
    let num = parseInt(prompt("Introduce la hora"));
    let intervalo = parseInt(prompt("Introduce cuántas horas han pasado"));

    num = num + intervalo;
    while (num > 24) {
        num -= 24;
    }
    alert(num);
}

/*15. Solicite un número al usuario y muestre todos sus múltiplos del 0 al 100*/
function multiplos() {
    let num = parseInt(prompt("Introduce un número"));
    for (let i = 0; i < 101; i++) {
        alert(num * i);
    }

}

/*16. Solicite un número y muestre el número de dígitos que lo forman*/
function numeroDigitos() {
    let num = prompt("Introduce un número");
    alert(num.length);

}

/*17. Solicite un número y muestre sus dígitos invertidos*/
function digitosInvertidos() {
    let num = prompt("Introduce un número");
    let aux = "";
    for (let i = num.length; i > 0; i--) {
        aux = aux + num.substring(i, i - 1);
    }
    alert(aux);
}

/*18. Solicite un importe e indique el importe con IVA*/
function conIVA() {
    let num = parseFloat(prompt("Introduce el importe"));
    alert("El precio con IVA es " + (num + num * 0.21));
}

/*19. Solicite un importe con IVA y lo indique sin IVA*/
function sinIVA() {
    let num = parseFloat(prompt("Introduce el importe con iva"));
    alert("El precio sin IVA es " + (num - num * 0.21));
}


/*20. Solicite un año e indique si es bisiesto o no*/
function bisiesto() {
    let anio = prompt("Introduce un año");
    if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) {
        alert(anio + " es bisiesto");
    }
    else {
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
function numeroDecimal() {
    let numDecimal = prompt("Introduce un número decimal");

    alert(numDecimal.substring(numDecimal.indexOf(".") + 1, numDecimal.length));

}

/*23. Solicite un número y muestre su parte entera*/
function numeroEntero() {
    let numEntero = prompt("Introduce un número decimal");

    alert(numEntero.substring(0, numEntero.indexOf(".")));

}

/*24. Solicite dos números y calcule su división indicando si ésta es exacta o no*/
function division() {
    let dividendo = parseFloat(prompt("Introduce el dividendo"));
    let divisor = parseFloat(prompt("Introduce el divisor"));

    if (dividendo % divisor == 0)
        alert("Es exacta. Con resultado " + dividendo / divisor);
    else
        alert("Es decimal. Con resultado " + dividendo / divisor);
}

/*25. Solicite una base y un exponente y calcule la potencia*/
function potencia() {
    let base = parseInt(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce el exponente"));
    alert(Math.pow(base, exponente));
}

/*26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima
hasta la ingresada por el usuario*/
function mostrarPotencias() {
    let exponente = parseInt(prompt("Introduce el máximo exponente"));

    for (let i = 0; i <= exponente; i++) {
        alert("La potencia de 2 elevado a " + i + " es " + Math.pow(2, i));
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

    alert((num1 * (num1 - 1)) / num2)

}

/*29. Calcule el número de puntos que suman las fichas del juego del dominó*/
function numeroPuntos() {
    let sumatorio = 0;
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i + 1; j++) {
            sumatorio = sumatorio + j + i;
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
            alert(combinar = "Combinación " + i + " y " + j);
        }
    }

    if (dividendo % divisor == 0)
        alert("Es exacta. Con resultado " + dividendo / divisor);
    else
        alert("Es decimal. Con resultado " + dividendo / divisor);
}

/*25. Solicite una base y un exponente y calcule la potencia*/
function potencia() {
    let base = parseInt(prompt("Introduce la base"));
    let exponente = parseInt(prompt("Introduce el exponente"));
    alert(Math.pow(base, exponente));
}

/*26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima
hasta la ingresada por el usuario*/
function mostrarPotencias() {
    let exponente = parseInt(prompt("Introduce el máximo exponente"));

    for (let i = 0; i <= exponente; i++) {
        alert("La potencia de 2 elevado a " + i + " es " + Math.pow(2, i));
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

    alert((num1 * (num1 - 1)) / num2)

}

/*29. Calcule el número de puntos que suman las fichas del juego del dominó*/
function numeroPuntos() {
    let sumatorio = 0;
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < i + 1; j++) {
            sumatorio = sumatorio + j + i;
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
            alert(combinar = "Combinación " + i + " y " + j);
        }
    }
}

/*31. Solicite un número y muestre el numero de combinaciones que existen para obtener
ese número lanzando dos dados y sumando sus puntuaciones*/
function dadosSuma() {
    let combinar;
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            alert(combinar = "Combinación " + i + " y " + j + ". La suma es " + (i + j));
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
    alert(parseInt(Math.sqrt(numero, 2)));
}

/*34. Solicite un número y muestre todos sus divisores*/
function divisores() {
    let numero = parseInt(prompt("Introduce un numero"));
    let count = numero;
    let resultado = "";

    do {
        count--;

        if (numero % count == 0)
            resultado += count + ", ";


    } while (count != 1);

    alert("Los divisores del numero " + numero + " son " + resultado);
}

/*35. Solicite dos números e indique sus divisores comunes*/
function divisoresComunes() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));

    let count = 0;
    let resultado = "";

    count = (num1 >= num2) ? num2 : num1;

    do {
        count--;

        if (num1 % count == 0 && num2 % count == 0)
            resultado += count + ", ";


    } while (count != 1);

    alert("Los divisores comunes de los numeros " + num1 + " y " + num2 + " son " + resultado);
}

/*36. Juegue al Fizz buzz:
Necesita escribir un programa que imprima los números del 1 al 100 para que:
-Si el número es múltiplo de 3, debe escribir «Fizz» en lugar de ese número.
-Si el número es múltiplo de 5, debe escribir «Buzz» en lugar de ese número.
-Si el número es un múltiplo de 3 y 5, debe imprimir «FizzBuzz» en lugar de ese número.
Intente pensar en una solución para resolver este desafío con la ayuda de bucles y declaraciones condicionales antes de pasar a la solución.*/
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            alert("FizBuzz");
        } else if (i % 3 == 0) {
            alert("Fizz");
        } else if (i % 5 == 0) {
            alert("Buzz");
        } else {
            alert(i);
        }

    }
}

/*37. Solicite un número e indique si es primo o no*/
function primo() {
    let numero = parseInt(prompt("Introduce un número"));
    let primos = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primos = false;
        }
    }
    if (primos)
        alert(numero + " es un número primo");
    else
        alert(numero + " no es un número primo");
}

/*38. Solicite dos números y muestre su máximo común divisor*/
function mcd() {
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));

    let count = 0;
    let resultado = 0;

    count = (num1 >= num2) ? num2 : num1;

    do {
        if (num1 % count == 0 && num2 % count == 0) {
            if (resultado < count)
                resultado = count;
        }
        count--;
    } while (count != 1);

    if (resultado > 1)
        alert("El MCD entre " + num1 + " y " + num2 + " es " + resultado);
    else
        alert("No tienen MCD")
}

/*39. Solicite un número y lo descomponga en factores primos*/
function descomponerPrimos() {
    let numero = parseInt(prompt("Introduce un número"));
    let count = 1;
    let primos = true;
    let descompuesto = [];

    do { //MAL

        for (let i = 1; i < count; i++) {
            for (let j = 2; j < numero; j++) {
                if (numero % j == 0) {
                    primos = false;
                }
            }

            if (primos && numero % i == 0) {
                numero = numero / i;
                descompuesto[count - 1] = i;
            }
        }
        count++;
    } while (numero < count);

    alert(descompuesto)
}

/*40. Solicite un número y calcule la suma de sus dígitos*/
function sumaDigitos() {
    let numero = parseInt(prompt("Introduce un número"));
    let suma = 0;

    do {

        suma = parseInt(suma + (numero % 10));
        numero = numero / 10;

    } while (numero > 0);

    alert(suma);
}

/*41. Muestre la tabla de multiplicar*/
function tablaMultiplicar() {
    let numero = parseInt(prompt("Introduce un número"));
    for (let o = 0; o < 11; o++) {
        alert(numero + "x" + o + "=" + (numero * o) + "\n");
    }
}

/*42. Implemente una sencilla calculadora, en la que se solicite el primer operando, un
operador aritmético y el segundo operando para mostrar a continuación el resultado*/
function calculadora() {
    let numero1 = parseInt(prompt("Introduce un número"));
    let operador = prompt("Introduce un operador");
    let numero2 = parseInt(prompt("Introduce un número"));

    switch (operador) {
        case "+":
            alert(numero1 + numero2);
            break;
        case "-":
            alert(numero1 - numero2);
            break;
        case "*":
            alert(numero1 * numero2);
            break;
        case "/":
            alert(numero1 / numero2);
            break;
        default:
            alert("No vale ese operador");
            break;
    }
}

/*43. Solicite números entre 0 y 998 hasta que el usuario introduzca el 999, en ese
momento muestra la suma de todos ellos (menos el 999)*/
function sumarAloLoco() {
    let numero = 0;
    let suma = 0;
    do {
        numero = parseInt(prompt("Introduce un número"));
        suma = suma + numero;
    } while (numero != 999);

    alert(suma - 999);
}

/*44. Solicite un número de segundos y muestre este dato en horas, minutos y segundos*/
function pasoHoras() {
    let segundos = parseInt(prompt("Introduce el tiempo en segundos"));
    let horas = 0;
    let minutos = 0;

    while (segundos > 3600) {
        horas++;
        segundos -= 3600;
    }
    while (segundos > 60) {
        minutos++;
        segundos -= 60;
    }
    alert(horas + ":" + minutos + ":" + segundos);
}

/*45. Solicite tres números al usuario e indique si forman los lados de un triángulo y en
caso afirmativo qué tipo de triángulo*/
function triangulo() {
    let lado1 = parseInt(prompt("Introduce un número"));
    let lado2 = parseInt(prompt("Introduce un número"));
    let lado3 = parseInt(prompt("Introduce un número"));

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 == lado2 && lado2 == lado3)
            alert("Triangulo equilatero");
        else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3)
            alert("Triangulo escaleno");
        else
            alert("Triangulo isosceles");
    } else
        alert("No es un triangulo");
}

/*46. Solicite números al usuario y muestre cuantos números mayores que cero se han
introducido y la suma de todos ellos. Para terminar, el usuario introducirá el cero*/
function sumarPositivos() {
    let numero = 0;
    let suma = 0;
    do {

        numero = parseInt(prompt("Introduce un numero"));
        suma = (numero > 0) ? suma + numero : suma;

    } while (numero != 0);

    alert(suma);
}

/*47. Calcule el número de años que deben transcurrir para que la suma de las edades de
tres hijos de 14, 12 y 9 años sea igual a la edad de su padre que ahora tiene 43
años*/
function edades() {
    let annos = 0;
    let edad = 14 + 12 + 9;

    while (edad <= 43) {
        edad += 3;
        annos++;
    }
    alert(annos);
}

/*48. Solicite las dimensiones de una matriz, y muestre únicamente aquéllas posiciones
cuyas coordenadas sean, ambas, impares*/
function dimensionMatriz() {

    let fila = parseInt(prompt("Introduce numero de filas"));
    let columna = parseInt(prompt("Introduce numero de columnas"));
    let matrix = [fila];// = [fila][columna];

    for (let i = 0; i < fila; i++) {
        matrix[i] = [columna];
        for (let j = 0; j < columna; j++) {
            if (i % 2 != 0 && j % 2 != 0)
                matrix[i][j] = 1;
            else
                matrix[i][j] = 0;
        }

    }


    let mensaje = "";
    for (let i = 0; i < fila; i++) {
        for (let z = 0; z < columna; z++) {
            mensaje += matrix[i][z] + " ";
        }
        mensaje += "\n";
    }
    alert(mensaje);

}

/*49. Solicite al usuario un PIN (número de cuatro dígitos) y le ofrezca tres oportunidades
para introducir el mismo que uno elegido por el desarrollador*/
function pin() {
    let pin = 5467;
    let acierto = false;
    let numVeces = 0;

    do {

        numVeces++;

        if (pin == parseInt(prompt("Introduce cuatro digitos")))
            acierto = true;

    } while (numVeces != 3 && acierto != true);

    if (acierto)
        alert("oleeeeeee");
    else 
        alert("Se han acabado las oportunidades")
}

/*50. Solicite el número de horas que se ha trabajado y el número de horas extra y calcule
la nómina semanal bruta. La hora normal se paga a 10€ y la extra a 15€*/
function nomina() {
    let horas=parseInt(prompt("Introduce las horas trabajadas"));
    let horasExtra = parseInt(prompt("Introduce las horas extra"));

    alert(horas*10 + horasExtra*15);
}

/*51. Solicite la edad de un padre y la de su hijo y muestre el número de años que deben
transcurrir hasta que la edad del padre doble a la del hijo*/
function doblandoEdad() {
    let annos = 0;
    let edadPadre = parseInt(prompt("Introduce la edad del padre"));
    let edadHijo = parseInt(prompt("Introduce la edad del hijo"));

    do{
        edadHijo++;
        edadPadre++;
        annos++;
    }while (edadHijo*2 <= edadPadre);

    alert(annos);
}

/*52. Solicite un número y muestre el triángulo de Pascal de altura igual al número
introducido*/
function pascal() {
    let altura = parseInt(prompt("Introduce la altura del triangulo"));
    let result = "";

    for (let i = 1; i < altura+1; i++) {
        for (let j = 0; j < i; j++) {
            result += "*";
            
        }
         result += "\n";   
    }

    alert(result );
}

/*53. Solicite los coeficientes de una ecuación de primer grado y muestre su solución*/
// ?x = ?
function ecuacionGrado1() {
    let num1 = parseInt(prompt("Introduce el numero que acompaña a la incognita"));
    let num2 = parseInt(prompt("Introduce el numero que no acompaña a la incognita"));

    alert("x = " + num2/num1);
}

/*54. Solicite los coeficientes de una ecuación de segundo grado y muestre su solución*/
function ecuacionGrado2() {
    //x = (-b+-sqrt(bpow2 -4ac))/2a
    let a = parseInt(prompt("Introduce el numero que acompaña a la incognita al cuadrado"));
    let b = parseInt(prompt("Introduce el numero que acompaña a la incognita"));
    let c = parseInt(prompt("Introduce el numero que no acompaña a la incognita"));
    let resutlado1=(-b+(Math.sqrt(Math.pow(b, 2)- 4* a * c, 2)))/2*a;
    let resutlado2=(-b-(Math.sqrt(Math.pow(b, 2)- 4* a * c, 2)))/2*a;

    alert("x = " + resutlado1);
    alert("x = " + resutlado2);

}

/*55. Solicite al usuario las coordenadas del centro y el radio de dos circunferencias e
indique si se cortan o no y en cuantos puntos*/
function circunferencias() {
    let centroX1=parseInt(prompt("Introduce el eje X del centro"));
    let centroY1=parseInt(prompt("Introduce el eje Y del centro"));
    let radio1=parseInt(prompt("Introduce el radio"));
    let centroX2=parseInt(prompt("Introduce el eje X del centro"));
    let centroY2=parseInt(prompt("Introduce el eje Y del centro"));
    let radio2=parseInt(prompt("Introduce el radio"));
    
    let distanciaCentros = Math.sqrt(Math.pow(Math.abs(centroX1-centroX2), 2) + Math.pow(Math.abs(centroY1-centroY2), 2),2);

    if(centroX1==centroX2 && centroY1==centroY2 && radio1 == radio2){
        alert("Se trata de la misma circunferencia");
    }else if(distanciaCentros > radio1+radio2){
        alert("No se cruzan");
    }else if(distanciaCentros < Math.abs(radio1-radio2)){
        alert("No se cruzan");
    }else 
        alert("Se cruzan en dos puntos");

}

/*56. Solicite números al usuario entre el 1 y el 100 hasta que se averigüe el que ha
elegido el desarrollador. Para ayudar al usuario, cada vez que éste introduzca un
número, se le indicará si el número a averiguar es mayor o menor que el número
introducido. Intercambiar los papeles y que sea ahora el usuario el que elije un
número y el programa tratará de adivinarlo*/
function adivinarNumero() {
    let numAdivinar = parseInt(Math.random()*100+1);
    let num = 0;
    let count = 0;

    do {
        num = parseInt(prompt("Adivine el numero"));

        if(numAdivinar > num)
            alert("el número es mayor");
        else if(numAdivinar < num)
            alert("el numero es menor");

        count++;

    } while (numAdivinar != num);

    alert("Lo has averiguado en " + count + " intentos.");
}

function maquina() {
    let numAdivinar =parseInt(prompt("Adivine el numero")); 
    let num = 0;
    let count = 0;
    let valorMaximo = 101;
    let valorMinimo = 1;


    do {
        num = parseInt(Math.random()*(valorMaximo-valorMinimo)+valorMinimo);

        if(numAdivinar > num)
            valorMinimo = num;
        else if(numAdivinar < num)
            valorMaximo = num+1;

        count++;

    } while (numAdivinar != num);

    alert("Lo has averiguado en " + count + " intentos.");
}

/*57. Solicite un número y muestre los dígitos de todos los números desde el 0 hasta el
solicitado en columnas, por ejemplo, para el número 26:
000000000011111111112222222
012345678901234567890123456*/
function digitos(){
    let numero=parseInt(prompt("Introduce un número"));
    let count = 0;
    do {
        if(numero-count<=10){
            for (let i = 0; i < numero-count; i++) {
                alert(i);
                
            }
            count=numero;
        }else{
            for (let i = 0; i < 10; i++) {
                alert(i);
            }
            count+=10;

        }
    } while (count != numero);
}


/*Cadenas de caracteres
1. Solicite el nombre del usuario y le dé las buenas tardes*/
function buenasTarde() {
    let nombre = prompt("Introduce tu nombre");

    alert("Buenas tardes " + nombre);
}

/*2. Muestre los días de la semana (uno por línea)*/
function diasSemana(){
    let dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

    for (let i = 0; i < dias.length; i++) {
        alert(dias[i]);
    }
}

/*3. Solicite un carácter e indique si se trata de una letra, de un número o de otro tipo de
carácter*/
function caracter(){
    let caracter= prompt("Introduce un caracter");
    caracter = caracter.charAt(0);
    if(!isNaN(caracter)){
        alert("Se trata de un numero");
    }else if(caracter.match(/[a-z]/i)){
        alert("Es una letra");
    }else {
        alert("No es letra ni numero");
    }
}

/*4. Solicite dos palabras e indique cuál de las dos es más larga y por cuantos caracteres
lo es*/
function palabraMasLarga() {
    let palabra1 = prompt("Introduce una palabra");
    let palabra2 = prompt("Introduce otra palabra");
    let difSize = 0;
    
    if(palabra1.length > palabra2.length){
        difSize = parseInt(palabra1.length - palabra2.length);
        alert("La primera palabra es más larga. Tiene " + difSize + " caracteres más");
    }else if(palabra1.length < palabra2.length){
        difSize = parseInt(palabra2.length - palabra1.length);
        alert("La segunda palabra es más larga. Tiene " + difSize + " caracteres más");
    }else{
        alert("Ambas palabras tienen los mismos caracteres");
    }
}

/*5. Solicite un número de palabras. A continuación se pedirá al usuario que las
introduzca. Para terminar se mostrará la palabra más corta y la más larga*/
function palabrasVarias() {
    let numPalabras = parseInt(prompt("Introduce cuantas palabras habrá"));
    let palabraCorta ="";
    let palabraLarga ="";
    let palabra = "";

    for (let i = 0; i < numPalabras; i++) {
        
        palabra = prompt("Introduce una palabra");

        if(i==0){
            palabraCorta = palabra;
            palabraLarga = palabra;
        }

        if(palabra.length<palabraCorta.length){
            palabraCorta = palabra;
        }else if(palabra.length > palabraLarga.length){
            palabraLarga=palabra;
        }
        
    }

    alert("La palabra mas larga es " + palabraLarga);
    alert("La palabra mas corta es " + palabraCorta);

}

/*6. Solicite una cadena de caracteres e indique si es un palíndromo o no*/
function palindromo(){
    let palabra = prompt("Introduce una palabra");

    if(palabra.replaceAll(" ","").split('').reverse().join('')==palabra.replaceAll(" ",""))
        alert("Es un palindromo");
    else
        alert("No es un palindromo");
}

/*7. Solicite una cadena de caracteres y elimine los espacios innecesarios,es decir,
elimine todos los espacios al comienzo y al final de la cadena y mantenga un único
espacio entre dos palabras*/
function quitarCaracter() {

    let palabra = prompt("Introduce una cadena de caracteres");

    let porPalabras=palabra.split(" ");
    for (let i = 0; i < porPalabras.length; i++) {
        if(porPalabras[i]==""){
            porPalabras.splice(i,1);
            i=i-1;
        }
    }
    alert(porPalabras.join(" "));
}

/*8. Solicite al usuario un número y muestre una pirámide de asteriscos cuya base 
contenga un número de asteriscos igual al número introducido por el usuario*/
function piramide() {
    let tamanio = parseInt(prompt("Introduce el tamanio de la piramide"));
    let espacio = tamanio - 1;

    for (let i = 1; i < tamanio +1; i++) {
        for (let j = 0; j < espacio; j++) {
            
            document.write("-");
            
        }

        for (let j = 0; j < i; j++) {
            document.write("*" + " ");
            
        }
        espacio--;
        document.write("</br>");
    }


}

/*8b. Solicite al usuario un número y muestre una pirámide de asteriscos cuya parte alta 
contenga un número de asteriscos igual al número introducido por el usuario*/
function piramideInvertida() {
    let tamanio = parseInt(prompt("Introduce el tamanio de la piramide"));
    let espacio = 0;
    let discount = tamanio;

    for (let i = 0; i < tamanio ; i++) {
        for (let j = 0; j < espacio; j++) {
            
            document.write("-");
            
        }

        for (let j = discount; j > 0 ; j--) {
            document.write("*" + " ");
            
        }
        espacio++;
        discount--;
        document.write("</br>");
    }


}

/*9. Solicite un número al usuario y muestre una plantilla similar a la siguiente (para el 
número 7)
*
**
***
****
*****
******
*******                */
function piramideIzquierda() {
    let asterisco = "*";
    let altura = parseInt(prompt("Introduce la altura de la piramide"));
    
    for (let i = 1; i < altura + 1; i++) {
        for (let j = 0; j < i; j++) {
            document.write(asterisco + " ");
        }
        document.writeln("</br>");
        
    }
}

/*10. Solicite un número al usuario y muestre una plantilla similar a la siguiente (para el 
número 7). Tener en cuenta los espacios de la izquierda
 1******
 12*****
 123****
 1234***
 12345**
 123456*
 1234567        */
 function plantilla() {
    let asterisco = "*";
    let altura = parseInt(prompt("Introduce la altura de la piramide"));
    let count=1;
    
    for (let i = 1; i < altura + 1; i++) {

        for (let j = 0; j < i; j++) {
            document.write(count);
            count++;
            
        }
        count = 1;

        for (let j = 0; j < altura - i; j++) {
            document.write(asterisco);
        }
        document.writeln("</br>");
        
    }
 }

/*11. Solicite un número impar usuario y muestre una plantilla similar a la siguiente (para 
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
*      */
function piramideNoSangria() {
    let tamanio = parseInt(prompt("Introduce el tamanio de la piramide(numero impar)"));
    let bajada = tamanio;

    if(tamanio%2== 0)
        document.write("El numero introducido no es un numero impar");
    else{
        for (let i = 1; i < tamanio * 2; i++) {
            if(i <=tamanio){
                for (let j = 1; j < i+1; j++) {
                    
                    document.write("*" + " ");
                }
                document.write("</br>");
            }else{
                for (let j = bajada; j > 1; j--) {
                    
                    document.write("*" + " ");
                }
                document.write("</br>");
                bajada--;

            }
            
        }
    }
}
/*12. Solicite un número al usuario y dibuje un hexágono del lado indicado, por ejemplo
para el número 4:
 ****
 ******
********
**********
********
 ******
 *****/
/*13. Solicite una cadena de caracteres e indique si contiene únicamente mayúsculas, 
únicamente minúsculas, únicamente números o únicamente otros caracteres 
distintos a los mencionados*/
function queSon() {
    let cadena = prompt("Introduce una cadena");

    if(cadena.match(/[a-z]/)){
        document.write("Se trata de minusculas");
    
    }else if(cadena.match(/[A-Z]/)){
        document.write("Se trata de mayusculas");
        
    }else if(cadena.match(/[0-9]/)){
        document.write("Se trata de numeros");
       
    }else{
        document.write("Se trata de otra cosa");
    }
}

/*14. Solicite al usuario una cadena de caracteres. Si el último carácter de ésta es una 
letra, lo considerará un NIF y le indicará al usuario que tipo de NIF es o si éste es 
inválido. En caso contrario, si es posible, calculará la letra de control y lo mostrará al 
usuario*/
function dni() {
    let cadena = prompt("Introduce una cadena de caracteres");
    let letra = cadena.substring(cadena.length - 1 , cadena.length);
    let num = cadena.substring(0, cadena.length - 1);
    let letr = 'TRWAGMYFPDXBNJZSQVHLCKET';

    num = num%23;

    letr = letr.charAt(num);
    //              /^[0-9]{8}[A-Z]{1}$/

    if(cadena.match(/^\d{8}[A-Z]$/)){
        document.write("Tiene formato de dni" + "</br>");


        if (letra == letr) {
            document.write("Es un dni valido");
            
        } else {
            document.write("No es un dni valido");
            
        }

    }else{
        document.write("No tiene formato de dni");
    }

}

/*15. Solicite al usuario una cadena de caracteres e indique si se trata de un pangrama*/

/*16. Solicite al usuario dos números y una letra: "i” ó "p” (en mayúsculas o minúsculas). 
La página mostrará los números pares (si se pulsó la "p”) ó impares (si se pulsó la 
"i”) que hay desde un número al otro de los que introdujo el usuario*/
function paresImpares() {
    let num1 = parseInt(prompt("Introduce un valor"));
    let num2 = parseInt(prompt("Introduce un segundo valor"));

    let letra = prompt(`Escribe "p" para hallar los pares o "i" para los impares`);

    //let tipo = (num1%2==0 && num2%2==0)? 1 : (num1%2!=0 && num2%2==0)? 2 :(num1%2==0 && num2%2!=0)? 3 : 4;

    let aux = 0;

    if(num1 > num2){
        if (letra == "p" || letra == "P") {
            if(num2%2==0){
                aux = num2;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num1);
            }else{
                aux = num2 + 1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num1);
            }
        } else {
            if(num2%2==0){
                aux = num2 +1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num1);
            }else{
                aux = num2 ;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num1);
            }
        }

    }else{
        if (letra == "i" || letra == "I") {
            if(num1%2!=0){
                aux = num1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num2);
            }else{
                aux = num2 + 1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num2);
            }
        } else {
            if(num1%2==0){
                aux = num1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num2);
            }else{
                aux = num1 + 1;
                do {
                    document.write(aux + " ");
                    aux += 2;
                } while (aux<=num2);
            }
        }
    }

}
/*17. Solicite una cadena y la codifique letra a letra siguiendo el orden alfabético: A->01,
B->02, C->03, etc.*/

/*18. Permita que dos personas jueguen a piedra, papel, tijera. Se solicitará el número de 
rondas que un jugador debe ganar para ganar el juego. En cada ronda se mostrará 
la puntuación actual*/
function piedraPapelTijera() {
    let rondas = parseInt(prompt("Introduce numero de rondas"));
    let count = 0;
    let pc = 0;
    let humano = 0;
    let ganador = false;

    let jugadaPc = 0;
    let jugadaHumano = 0;

    do {

        do {

            jugadaHumano = parseInt(prompt("1 es piedra, 2 es papel y 3 es tijera"));
            jugadaPc = parseInt(Math.random()*3+1);

            if (jugadaHumano == 3 && jugadaPc == 2 || jugadaHumano == 1 && jugadaPc == 3 || jugadaHumano == 2 && jugadaPc == 1){
                humano++;
                ganador = true;
                alert("Gana humano");
            }else if (jugadaPc == 3 && jugadaHumano == 2 || jugadaPc == 1 && jugadaHumano == 3 || jugadaPc == 2 && jugadaHumano == 1){
                pc++;
                ganador = true;
                alert("Gana PC");

            }else{
                alert("Empate");

            }
            
        } while (ganador!=true);

        ganador = false;
        count++;
        mostrarPuntuacion(pc, humano, rondas, count);
        
    } while (count != rondas);
}

function mostrarPuntuacion(pc, humano, rondas, count) {
    
    if(rondas == count)
        alert("--- FINAL SCORE ---"+ "\nPC: " + pc + "\nHumano: " + humano);
    else
        alert("--- SCORE ---" + "\nPC: " + pc + "\nHumano: " + humano);


}
/*19. Solicite una dirección MAC-48, la valide y si es correcta la convierta en una dirección
IPv6 de enlace local
20. Solicite una cadena y la cifre utilizando el método ROT13
21. Solicite una cadena y la codifique utilizando el método Base64
22. Solicite una cadena y la codifique utilizando el método RLE
23. Solicite una talla de ropa e indique su tamaño según la siguiente tabla
XXL, XL, L Grande
M Mediana
XS, S Pequeña
*/
function tallaje() {
    let talla = prompt("Introduce tu talla de ropa");

    let opcion = (talla == "XS" || talla == "S") ? "Pequenia" : (talla == "M") ? "Mediana" : "Grande";

    alert(opcion);
}