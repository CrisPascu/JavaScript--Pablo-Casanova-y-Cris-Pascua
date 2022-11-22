const LETRA = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

// función que valida si un dni es correcto
function validarDNI(dni) {
    let parteNum = dni.substring(0, dni.length - 1);
    
    let parteLetra = dni.substring(dni.length - 1, dni.length);
        
    if(comprobarDni(parteNum)){
        let indice = parteNum%23;
        if(parteLetra === LETRA[indice]){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }

}

function comprobarDni(numero){
    
    if(/[0-9]/g.test(numero) && numero.length <= 8){
        return true;
    }else{
        return false;
    }
}

// función que calcula el indice de masa corporal
function calcularIMC(altura, peso, sexo, edad) {

    let imc = calculoIMC(altura, peso);
    console.log(imc);

    if(sexo == "hombre"){
        if (edad === 16) {
            return (imc < 17.7)? imc + " - bajo peso" : (imc >= 17.7 && imc <= 26.8)? imc + " - peso normal" : (imc >= 26.9 && imc <= 31.1)? imc + " - sobrepeso" : imc + " - obesidad";
        }else if(edad === 17){
            return (imc < 18.1)? imc + " - bajo peso" : (imc >= 18.1 && imc <= 25.6)? imc + " - peso normal" : (imc >= 25.7 && imc <= 28.3)? imc + " - sobrepeso" : imc + " - obesidad";
        }else if(edad >= 18){
            
            return (imc < 18.1)? imc + " - bajo peso" : (imc >= 18.1 && imc <= 25.1)? imc + " - peso normal" : (imc >= 25.2 && imc <= 30.1)? imc + " - sobrepeso" : imc + " - obesidad";
        }
        
    }else{
        if (edad === 16) {
            return (imc < 17.7)? imc + " - bajo peso" : (imc >= 17.7 && imc <= 23.9)? imc + " - peso normal" : (imc >= 24 && imc <= 27.8)? imc + " - sobrepeso" : imc + " - obesidad";
        }else if(edad === 17){
            return (imc < 18.2)? imc + " - bajo peso" : (imc >= 18.2 && imc <= 24.6)? imc + " - peso normal" : (imc >= 24.7 && imc <= 28.9)? imc + " - sobrepeso" : imc + " - obesidad";
        }else if(edad >= 18){
            return (imc < 18.0)? imc + " - bajo peso" : (imc >= 18.0 && imc <= 25.7)? imc + " - peso normal" : (imc >= 25.8 && imc <= 28.3)? imc + " - sobrepeso" : imc + " - obesidad";
        }
    }
}


function calculoIMC(altura, peso){
    let imc = altura * altura;
    imc = peso / imc;

    let numEntero = imc.toString().substring(0, 2);
    

console.log(imc - parseInt(numEntero) + " num")

    if(imc - parseInt(numEntero) > 0.000000000000000){
        return imc.toFixed(1);
    }else{
        return imc.toFixed(0);

    }


}

