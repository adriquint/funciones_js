"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function promedio(numero1, numero2) {             //Opcion1 sólo valores
    console.log((numero1+numero2)/2);
    // En esta función debe determinar el promedio
    // de los dos números ingresados por parámetro 
    // Deberá calcular el promedio
    // y luego imprimir dicho valor en consola
}

promedio(10, 5);
promedio(-8,14);


//Opción2 con template string:

function promedio2(numeroA,numeroB) {
    console.log(`El promedio de ${numeroA} y ${numeroB} es: ${(numeroA+numeroB)/2}`);
}

promedio2(10, 5);
promedio2(16,4);