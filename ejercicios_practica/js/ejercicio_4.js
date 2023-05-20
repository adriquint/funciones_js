"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatenar en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invitados" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada

let invitado1 = "";
let invitado2 = "";
let invitado3 = "";

function generarInvitados() {
    invitado1 = prompt("Ingrese el nombre de un invitado");
    invitado2 = prompt("Ingrese el nombre de otro invitado");
    invitado3 = prompt("Ingrese el nombre de otro invitado");
    return (`${invitado1}, ${invitado2} y ${invitado3}`);
}

let invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)