//Constantes
const gravedadTierra = 9.81
const gravedadLuna = 1.62
const gravedadMarte = 3.72 
const gravedadMercurio = 3.70


// Funciones para realizar las operaciones

//Funcion Tierra
function operacion_Tierra() {
  // Obtener referencia al elemento
    var alerta = document.getElementById("alertaTierra"); 

    let masa = document.getElementById("campoMasaTierra").value;
    let respuesta = masa * gravedadTierra

    if (respuesta) {
      alerta.style.display = "block"; // Mostrar el elemento
      document.getElementById("respuesta1").textContent = respuesta+" Newtons";

    } else {
      alerta.style.display = "none"; // Ocultar el elemento
    }
}

//Funcion Luna
function operacion_Luna() {
  // Obtener referencia al elemento
    var alerta = document.getElementById("alertaLuna"); 

    let masa = document.getElementById("campoMasaLuna").value;
    let respuesta = masa * gravedadLuna

    if (respuesta) {
      alerta.style.display = "block"; // Mostrar el elemento
      document.getElementById("respuesta2").textContent = respuesta+" Newtons";

    } else {
      alerta.style.display = "none"; // Ocultar el elemento
    }
}


//Funcion Marte
function operacion_Marte() {
  // Obtener referencia al elemento
    var alerta = document.getElementById("alertaMarte"); 

    let masa = document.getElementById("campoMasaMarte").value;
    let respuesta = masa * gravedadMarte

    if (respuesta) {
      alerta.style.display = "block"; // Mostrar el elemento
      document.getElementById("respuesta3").textContent = respuesta+" Newtons";

    } else {
      alerta.style.display = "none"; // Ocultar el elemento
    }
}


//Funcion Mercurio
function operacion_Mercurio() {
  // Obtener referencia al elemento
    var alerta = document.getElementById("alertaMercurio"); 

    let masa = document.getElementById("campoMasaMercurio").value;
    let respuesta = masa * gravedadMercurio

    if (respuesta) {
      alerta.style.display = "block"; // Mostrar el elemento
      document.getElementById("respuesta4").textContent = respuesta+" Newtons";

    } else {
      alerta.style.display = "none"; // Ocultar el elemento
    }
}
