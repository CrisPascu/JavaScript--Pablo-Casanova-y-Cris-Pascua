const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const IMC = document.getElementById("imc");


altura.addEventListener("input", ()=>{
    let imc = altura.value * altura.value;
    imc = peso.value / imc;


    imc= imc.toFixed(1);

    IMC.innerHTML = "El valor del IMC = " + imc;
});

peso.addEventListener("input", ()=>{
    let imc = altura.value * altura.value;
    imc = peso.value / imc;


    imc= imc.toFixed(1);

    IMC.innerHTML = "El valor del IMC = " + imc;
});
