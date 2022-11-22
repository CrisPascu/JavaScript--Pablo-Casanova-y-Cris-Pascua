

// función que valida si un dni es correcto
function validarDNI(dni) {
    let numero = 0;
    let resto = 0;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = "";
    // console.log((/[a-z]$/i).test("12345678A")); 
    if (/[a-z]$/i.test(dni)){//comprueba que tenga una letra
        numero = parseInt(dni);
         if(/^[\d]{1,8}$/.test(numero)){ //comprueba el tamaño de los números
            resto = numero%23;
            letra = letras.substring(resto, resto+1);
            console.log(letra);
            if(dni.substring(dni.length-1, dni.length) == letra){ //comprueba que la letra es la correcta
                return true;

            }else {
            return false;
            }
         } else {
            return false;
         }
    } else{
        return false;

    }
};

// función que calcula el indice de masa corporal
function calcularIMC(altura, peso, sexo, edad) {
    let icm = (peso / Math.pow(altura, 2));
    let mensaje = ";"
    icm = icm.toPrecision(3);
    console.log(icm)

    switch (sexo) {
        case "hombre": //si es un hombre divide por edad y hace las comprobaciones
            if(edad === 16){
                if(icm < 17.7){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 17.7 && icm <= 26.8){
                    mensaje = icm + " - peso normal"; //no me lo coge bien
                }else if(icm >= 26.9 && icm <= 31.1){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            } else if (edad  === 17){
                if(icm<18.1){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 18.1 && icm <= 25.6){
                    mensaje = icm + " - peso normal";
                }else if(icm >= 25.7 && icm <= 28.3){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            }else if (edad  >= 18){
                if(icm<18.1){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 18.1 && icm <= 25.1){
                    mensaje = icm + " - peso normal";
                }else if(icm >= 25.2 && icm <= 30.1){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            }
            console.log(mensaje);
            return mensaje;
            break;
        case "mujer": //si es un mujer divide por edad y hace las comprobaciones
            if(edad === 16){
                if(icm<17.7){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 17.7 && icm <= 23.9){
                    mensaje = icm + " - peso normal"; //no me lo coge bien
                }else if(icm >= 24 && icm <= 27.8){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            }else if (edad  === 17){
                if(icm<18.2){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 18.2 && icm <= 24.6){
                    mensaje = icm + " - peso normal";
                }else if(icm >= 24.7 && icm <= 28.9){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            }else if (edad  >= 18){
                if(icm<18.0){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 18.0 && icm <= 25.7){
                    mensaje = icm + " - peso normal";
                }else if(icm >= 25.8 && icm <= 28.3){
                    mensaje = icm + " - sobrepeso";
                } else{
                    mensaje = icm + " - obesidad";
                }
            }
            console.log(mensaje);
            return mensaje;
            break;
    
        default:
            break;
    }
}



