const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const dniF = document.getElementById("dni");
const sexoF = document.getElementsByName("sexo");
const fechaF = document.getElementById("edad");
const pesoF = document.getElementById("peso");
const alturaF = document.getElementById("altura");
const boton = document.getElementById("enviar");

function validarNombre() {
    // console.log(/^[a-z]{2,20}$/i.test(nombre.value));
    if(/^[a-z]{2,20}$/i.test(nombre.value)){
        return true;
    } else{
        return false;
    }
}
function validarApellido() {
    // console.log(/^[a-z]{2,20}$/i.test(apellidos.value));
    if(/^[a-z]{2,20}$/i.test(apellidos.value)){
        return true;
    } else{
        return false;
    }
}

function validarDNI(dni) {
    let numero = 0;
    let resto = 0;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = "";
    console.log((/[a-z]$/i).test("12345678A"));
    if (/[a-z]$/i.test(dni)){
        numero = parseInt(dni);
         if(/^[\d]{1,8}$/.test(numero)){
            resto = numero%23;
            letra = letras.substring(resto, resto+1);
            console.log(letra);
            if(dni.substring(dni.length-1, dni.length) == letra){
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

function validarSexo() {
    console.log(sexoF.value);
    if(sexoF.value == "Masculino" || sexoF.value == "Femenino"){
        return true;
    } else{
        return false;
    }
}

function validarPeso() {
    console.log(pesoF.value >= 15 && pesoF.value <= 600 );
    if(parseFloat(pesoF.value) >= 15 && parseFloat(pesoF.value <= 600)){
        return true;
    } else{
        return false;
    }
}

function validarAltura() {
    // console.log(parseFloat(alturaF.value) >= 0.5 && parseFloat(alturaF.value <= 2.5) );

    if(parseFloat(alturaF.value) >= 0.5 && parseFloat(alturaF.value <= 2.5)){
        return true;
    } else{
        return false;
    }
} 

function calcularIMC(altura, peso, sexo, edad) {
    altura = parseFloat(alturaF.value);
    altura = parseFloat(pesoF.value);
    altura = alturaF.value;
    altura = parseInt(fechaF.value);
    let icm = (peso / Math.pow(altura, 2));
    let mensaje = ";"
    icm = icm.toPrecision(3);
    console.log(icm)

    switch (sexo) {
        case "hombre":
            if(edad === 16){
                if(icm < 17.7){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 17.7 && icm <= 26.8){
                    mensaje = icm + " - peso normal";
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
            }else if (edad  <= 18){
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
        case "mujer":
            if(edad === 16){
                if(icm<17.7){
                    mensaje = icm + " - bajo peso";
                } else if(icm >= 17.7 && icm <= 23.9){
                    mensaje = icm + " - peso normal";
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
            }else if (edad  <= 18){
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
            document.getElementById("resultado").innerHTML = mensaje;
            return mensaje;
            break;
    
        default:
            break;
    }
}

nombre.addEventListener("blur", validarNombre);
apellidos.addEventListener("blur", validarApellido);
dniF.addEventListener("blur", validarDNI);
// sexoF.addEventListener("focus", validarSexo);
pesoF.addEventListener("blur", validarPeso);
alturaF.addEventListener("blur", validarAltura);
alturaF.addEventListener("blur", calcularIMC);

boton.onclick = function validar() {
    document.getElementsByTagName("form").preventDefault();
    if(validarNombre && validarApellido && validarDNI && validarSexo && validarPeso && validarAltura){
        document.getElementById("resultado").innerHTML = "Todo correcto <br>" + calcularIMC(alturaF, pesoF, sexoF, fechaF);

    } else{
        document.getElementById("resultado").innerHTML = "Comprueba los campos";
    }
  }

