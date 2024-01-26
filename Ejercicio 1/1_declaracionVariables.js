// Podemos utilizar var o let para declarar variables, en este caso utilizaré let porque es el
// estandar mas moderno


//Variables
let numEntero = 20;
let numDecimal = 5.5;

//Suma
document.getElementById("resultadoSuma").textContent = "El resultado de la operación es: " + (numEntero + numDecimal);

//Resta
document.getElementById("resultadoResta").textContent = "El resultado de la operación es: " + (numEntero - numDecimal);

//Multiplicación
document.getElementById("resultadoMult").textContent = "El resultado de la operación es: " + (numEntero * numDecimal);

//División
document.getElementById("resultadoDiv").textContent = "El resultado de la operación es: " + (numEntero / numDecimal);

//Exponente
document.getElementById("resultadoExpon").textContent = "El resultado de la operación es: " + (numEntero ** numDecimal);


