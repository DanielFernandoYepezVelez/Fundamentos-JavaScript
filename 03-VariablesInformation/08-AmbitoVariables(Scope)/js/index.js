/* Global Variable */
let count = 0;

function increaseCount() {
    count++;
    return count;
}
console.log('Variable Count Global =>', increaseCount());
console.log('Variable Count Global =>', increaseCount());
console.log('-----------------------------');

/* Local Variable */
function gretting() {
    let localGretting = 'Hello World';
    return localGretting;
}
console.log('Variable Gretting Local =>', gretting());
console.log('Variable Gretting Local =>', gretting());
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');

/* Imprimir Local Variable 
(No es Permitido, por el Scope) */
// console.log('Error Intencional Scope =>', localGretting);

// -----------------------------------
/* OTRA DEFINICIÓN MUY IMPORTANTE:
EL PROBLEMA DE USAR VAR ES QUE NO EXISTE
LIMITE PARA SU SCOPE EN NINGUN BLOQUE
DE CÓDIGO, POR ENDE LA VARIABLE SIEMPRE
SE ESTA REESCRIBIENDO DE FORMA NO CONTROLADA
PERO CON LET SI EXISTE DICHO LIMITE */
var a = 'a';
let b = 'b';
const c = 'c';

console.log('Globales Iniciales: ', a, b, c);
console.log('-----------------------------');

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
/* La a no es global solo pertenece
al ciclo, por que es local, pero
como el var no aplica el scope
entonces la variable global inicial
se va a ver modificada */
for (var a = 0; a < 5; a++) {
    const element = [a];
    console.log(element);
}
console.log('-----------');

/* La b no es global solo pertenece
al ciclo, por que es local */
for (let b = 0; b < 5; b++) {
    const element = [b];
    console.log(element);
}
console.log('-----------------------------');

/* Scope Global */
/* Aqui podemos ver que las variables
globales inciales que se declararon con
las palabras let y const conservan su
valor inicial, gracias a su scope
pero pasa lo contrario con la
declaracion con la palabra var */
console.log('GLOBALES: ' + a, b, c);