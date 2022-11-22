// fichero para manejar los eventos de la aplicación
  const r = document.getElementById("r");
  const g = document.getElementById("g");
  const b = document.getElementById("b");
  const resultado = document.getElementById("resultado");
  const boton = document.getElementById("enviar");

  document.addEventListener("submit", (e)=>{
    e.preventDefault();
    color();
  });

  function color() {

    let hexadecimal =  rgb(r.value, g.value, b.value);

    resultado.innerHTML = "El color en hexadecimal es igual a " + hexadecimal
  }
