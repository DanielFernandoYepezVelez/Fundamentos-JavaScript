/* Global Variable */
let count = 0;

function increaseCount() {
    count++;
    return count;
}
console.log(increaseCount());
console.log(increaseCount());
console.log('-----------------------------');

/* Local Variable */
function gretting() {
    let localGretting = 'Hello World';
    return localGretting;
}
console.log(gretting());
console.log(gretting());

/* Imprimir Local Variable (No es Permitido, por el Scope) */
console.log(localGretting);
console.log('-----------------------------');

/* CONCLUSIÓN
Toda las variables que estan declradas
por fuera de una estructura Algoritmica
se pueden utilizar por que tienen un Ambito
Global.
Todas las variables que estan declaradas
en el interior de una estructura Algoritmica
¡NOOOOO! se pueden utilizar por fuera de dicha
estructura Algoritmica.
 */