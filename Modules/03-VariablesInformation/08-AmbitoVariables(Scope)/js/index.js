/* Global Variable */
let count = 0;

function increaseCount() {
    count++;
    return count;
}
console.log('Variable Global =>', increaseCount());
console.log('Variable Global =>', increaseCount());
console.log('-----------------------------');

/* Local Variable */
function gretting() {
    let localGretting = 'Hello World';
    return localGretting;
}
console.log('Variable Global =>', gretting());
console.log('Variable Global =>', gretting());
console.log('-----------------------------');

/* Imprimir Local Variable 
(No es Permitido, por el Scope) */
// console.log('Error Intencional Scope =>', localGretting);

/* OTRA DEFINICIÓN MUY IMPORTANTE:
EL PROBLEMA DE USAR VAR ES QUE NO EXISTE
LIMITE PARA SU SCOPE EN NINGUN BLOQUE
DE CÓDIGO, POR ENDE LA VARIABLE SIEMPRE
SE ESTA REESCRIBIENDO DE FORMA NO CONTROLADA
PERO CON LET SI EXISTE DICHO LIMITE */
var a = 'a';
let b = 'b';
const c = 'c';

/* Scope de la FUNCIÓN */
function functionScope() {
    var a = 'Afuncion';
    let b = 'Bfuncion';
    const c = 'Cfuncion';
    console.log('FUNCIÓN: ' + a, b, c);
}
functionScope();
console.log('-----------------------------');

/* Scope Bloque {} */
if (true) {
    var a = 'ABloque';
    let b = 'BBloque';
    const c = 'CBloque';
    console.log('FUNCIÓN: ' + a, b, c);
}
console.log('-----------------------------');

/* Scope Loop */
for (var a = 0; a < 5; a++) {
    const element = [a];
    console.log(element);
}

for (let b = 0; b < 5; b++) {
    const element = [b];
    console.log(element);
}
console.log('-----------------------------');

/* Scope Global */
console.log('GLOBALES: ' + a, b, c);