"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

let invitado1 = "";
let invitado2 = "";
let invitado3 = "";

function generarInvitados() {
    invitado1 = prompt("Ingrese el nombre de un invitado");
    invitado2 = prompt("Ingrese el nombre de otro invitado");
    invitado3 = prompt("Ingrese el nombre de otro invitado");
    console.log(`Sus invitados son ${invitado1}, ${invitado2} y ${invitado3}`);
}

generarInvitados();