// Podemos utilizar var o let para declarar variables, en este caso utilizaré let porque es el
// estandar mas moderno


//Variable
let numeroComoCadena = "1000"

//Transformacion de un tipo numero a cadena
let numero = Number(numeroComoCadena)

//Sumamos numero para rectificar que está como un tipo numero
document.getElementById("transformacion").textContent = "Cadena como numero: " + (numero + numero);