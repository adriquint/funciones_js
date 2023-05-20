/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/

let cantidad = 0;
let invitado1 = "";
let invitado2 = "";
let invitado3 = "";


function generarInvitados(){
    if(cantidad = 1) {
        invitado1 = prompt("Ingrese el nombre de su invitado");
        alert(`Su invitado es ${invitado1}`)
        return invitado1;       
    } else if (cantidad=2) {
        invitado1 = prompt("Ingrese el nombre de un invitado");
        invitado2 = prompt("Ingrese el nombre del segundo invitado");
        return `${invitado1} y ${invitado2}`;
    } else if (cantidad=3) {
        let invitado1 = prompt("Ingrese el nombre de un invitado");
        let invitado2 = prompt("Ingrese el nombre del segundo invitado");
        let invitado3 = prompt("Ingrese el nombre del tercer invitado");
        return `${invitado1}, ${invitado2} y ${invitado3}`;
    }        
}

parseInt(prompt(`Ingrese la cantidad de invitados (1, 2 o 3):`));

let invitados = generarInvitados();
alert(`Sus invitados son: ${invitados}`)