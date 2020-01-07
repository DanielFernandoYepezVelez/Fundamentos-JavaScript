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

/* Imprimir Local Variable (No es Permitido, por el Scope) */
console.log('Error Intencional Scope =>', localGretting);