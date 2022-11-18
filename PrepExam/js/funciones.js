// References

const fechaInicio = document.getElementById("inicio");
const fechaInicioBoton = document.getElementById("hoyComienzo");
const fechaFin = document.getElementById("fin");
const fechaFinBoton = document.getElementById("hoyFin");
const numDias = document.getElementById("numDias");
const diasHabiles = document.getElementById("diasHabiles");
const contarDias = document.getElementById("contar");
const sumarDias = document.getElementById("sumar");

fechaInicioBoton.addEventListener("click", () => {
    let hoy = new Date();
    let month = hoy.getMonth() + 1;

    fechaInicio.value = hoy.getFullYear() + "-" + month + "-" + hoy.getDate();
});

fechaFinBoton.addEventListener("click", () => {
    let hoy = new Date();
    let month = hoy.getMonth() + 1;

    fechaFin.value = hoy.getFullYear() + "-" + month + "-" + hoy.getDate();
});

sumarDias.addEventListener("click", () =>{
    if(!numDias.value){
        alert("Debes rellenar el campo de 'Numero de dias'");
    }else{
        if(!fechaFin.value && !fechaInicio.value){
            alert("Debes rellenar una de las fechas");
        }else if(fechaFin.value && fechaInicio.value){
            alert("Debes rellenar SOLO una de las fechas");
        }else if(fechaInicio.value){

            let fechaSumada = new Date(fechaSumando(fechaInicio.value, numDias.value));
            let month = fechaSumada.getMonth() + 1;

            console.log("Si la fecha dada varia en " + numDias.value + " dias. La nueva fecha es: " + fechaSumada.getDate()  + "-" + month + "-" + fechaSumada.getFullYear());

        }else{
            let fechaSumada = new Date(fechaSumando(fechaFin.value, numDias.value));
            let month = fechaSumada.getMonth() + 1;

            console.log("Si la fecha dada varia en " + numDias.value + " dias. La nueva fecha es: " + fechaSumada.getDate()  + "-" + month + "-" + fechaSumada.getFullYear());
        }

    }

});

contarDias.addEventListener("click", () =>{
    if(diasHabiles.checked){
        // console.log(fechaFin.value);
        console.log("Entre el " + fechaInicio.value + " y el " + fechaFin.value + ", hay " + diasEntreFechas(diaSemana(fechaInicio.value), diasNaturales(fechaInicio.value , fechaFin.value)) + " dias laborables.");

    }else{

        
        console.log("Entre el " + fechaInicio.value + " y el " + fechaFin.value + ", hay " + diasNaturales(fechaInicio.value , fechaFin.value) + " dias naturales.");
    }

});

function fechaSumando(fecha, dias) {

    let miliSecsDia = 1000*3600*24;
    let fech = new Date(fecha);

    if(dias === 0){
        return fech;
    }else{
        dias = Math.round((fech.getTime() + (dias * miliSecsDia)));
        let newFecha = new Date(dias);
        newFecha = newFecha.toString();
        return newFecha;
    }

}

function diasNaturales(fecInicio, fecFin) {
    let inicio = new Date(fecInicio);
    let fin = new Date(fecFin);

    let numDiasNaturales = fin.getTime() - inicio.getTime();
    numDiasNaturales = (Math.round(numDiasNaturales/(1000*3600*24)));

    //console.log("Hay: " + numDiasNaturales + " dias naturales.");
    return numDiasNaturales;
}

function diaSemana(fecha) {
    let diaSemana = new Date(fecha).getDay();
    //console.log("Dia inicio es: " + diaSemana);
    return diaSemana;
}

function diasEntreFechas(diaSemana, numDias) {
    let habiles = 0;
    // console.log(diaSemana + " " + numDias);
    do{
        if(diaSemana !== 6 && diaSemana !== 0){
            habiles++;
        }
        // console.log("A " + diaSemana + " hay " + habiles + " dias habiles");
        numDias--;
        diaSemana++;

        if(diaSemana === 7)
            diaSemana = 0;
        //console.log(diaSemana);
        //console.log("  ");

        
    }while(numDias!=0);
    // console.log("Hay: " + habiles + " dias habiles.");
    return habiles;
}


