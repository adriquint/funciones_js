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
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
function promedio(numero1,numero2,numero3, numero4, numero5) {
   alert(`Se ingresaron los números: ${numero1}, ${numero2}, ${numero3}, ${numero4} y ${numero5}`);
   console.log(`Se ingresaron los números: ${numero1}, ${numero2}, ${numero3}, ${numero4} y ${numero5}`);
   alert(`El promedio de números ingresados es: ${(numero1+numero2+numero3+numero4+numero5)/5}`);
   console.log(`El promedio de números ingresados es: ${(numero1+numero2+numero3+numero4+numero5)/5}`);
}

promedio (8,4,5,2,3)
promedio (12,-9,0,-23,7)

