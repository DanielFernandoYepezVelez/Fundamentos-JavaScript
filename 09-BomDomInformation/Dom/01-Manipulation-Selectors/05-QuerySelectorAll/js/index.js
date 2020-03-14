/* Este selector combina querySelector y
los selectores de className y TagName
por que puede seleccionar cualquier
selector y además puede entregar
mas de uno, estilo array.
Tambien puedo Agregar CSS COMBINADO
DE CLASES, ID, ETIQUETA en un solo
querySelectorAll */
const primeraEtiqueta = document.querySelectorAll('h1');
const convertirArray = Array.from(primeraEtiqueta);

console.log(primeraEtiqueta);
console.log(convertirArray);
console.log('---------------------------------');

const primeraClase = document.querySelectorAll('.subtitle');
console.log(primeraClase);
console.log('---------------------------------');

const primerID = document.querySelectorAll('#gretting');
console.log(primerID);
console.log('---------------------------------');

const primerAtributo = document.querySelectorAll('[class=subtitleDos]');
console.log(primerAtributo);
console.log('---------------------------------');