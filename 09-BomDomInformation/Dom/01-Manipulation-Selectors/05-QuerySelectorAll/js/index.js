/* Este selector combina querySelector y
los selectores de className y TagName
por que puede seleccionar cualquier
selector y además puede entregar
mas de uno, estilo array.
Tambien puedo Agregar CSS COMBINADO
DE CLASES, ID, ETIQUETA en un solo
querySelectorAll, tambien funciona en
querySelector */
const primeraEtiqueta = document.querySelectorAll('h1');
let convertirArray = Array.from(primeraEtiqueta);

console.log(primeraEtiqueta);
console.log(convertirArray);
console.log('---------------------------------');

const primeraClase = document.querySelectorAll('.subtitle');
convertirArray = Array.from(primeraClase);

console.log(primeraClase);
console.log(convertirArray);
console.log('---------------------------------');

const primerID = document.querySelectorAll('#gretting');
convertirArray = Array.from(primerID);

console.log(primerID);
console.log(convertirArray);
console.log('---------------------------------');

const primerAtributo = document.querySelectorAll('[class=subtitleDos]');
convertirArray = Array.from(primerID);

console.log(primerAtributo);
console.log(convertirArray);
console.log('---------------------------------');