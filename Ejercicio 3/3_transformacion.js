// Podemos utilizar var o let para declarar variables, en este caso utilizaré let porque es el
// estandar mas moderno


//Variable
let numero = 100

//Transformacion de un tipo numero a cadena
let numeroComoCadena = String(numero)

//Concatetamos numeroComoCadena para rectificar que está como un tipo cadena
document.getElementById("transformacion").textContent = "Numero como cadena: " + (numeroComoCadena + numeroComoCadena);