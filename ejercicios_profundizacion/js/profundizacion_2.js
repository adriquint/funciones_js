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

function generarInvitados(){
    cantidad = parseInt(prompt("Ingrese la cantidad de personas que desea invitar (hasta 3)"));
    if(cantidad === 1) {
        return alert(`Su invitado es: ${prompt("Ingrese el nombre de su invitado")}`);
    } else if (cantidad === 2) {
        return alert(`Sus invitados son: ${prompt("Ingrese el nombre del primer invitado")} y ${prompt("Ingrese el nombre de su segundo invitado")}`);
    } else if (cantidad ===3) {
        return alert(`Sus invitados son: ${prompt("Ingrese el nombre del primer invitado")}, ${prompt("Ingrese el nombre de su segundo invitado")} y ${prompt("Ingrese el nombre de su tercer invitado")}`);
    } else if (cantidad===0) {
        alert("Ninguna persona invitada");
    } else {
        alert("Está fuera de la cantidad de invitaciones permitidas");
    }
}

generarInvitados()



/* Primer paso:

let cantidad = 0;
function generarInvitados(){
    cantidad = parseInt(prompt("Ingrese la cantidad de personas que desea invitar (hasta 3)"));
    if(cantidad === 1) {
        prompt("Ingrese el nombre de su invitado");
    } else if (cantidad === 2) {
        prompt("Ingrese el nombre del primer invitado")+(prompt("Ingrese el nombre de su segundo invitado"));
    } else if (cantidad ===3) {
        prompt("Ingrese el nombre del primer invitado")+(prompt("Ingrese el nombre de su segundo invitado"))+(prompt("Ingrese el nombre de su tercer invitado"));
    } else if (cantidad===0) {
        alert("Ninguna persona invitada");
    } else {
        alert("Está fuera del rango permitido");
    }
}
generarInvitados()

*/
