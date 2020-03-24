/* Se le puede hacer lo mismo que el selector
de id, la diferencia es que este selecciona
diferentes selectores aparte del selector de
ID, siempre retorna el PRIMERO si existen varios
del mismo tipo de selector y aplica para todos
los selectores DE CSS*/

/* OBTENER */
/* Obtener Selector de ETIQUETA */
const h1 = document.querySelector('h1');

console.log(h1);
console.log('--------------------------');

/* Obtener Selector de CLASE */
const clase = document.querySelector('.pruebaClase');

console.log(clase);
console.log('--------------------------');

/* Obtener Selector de ID */
const id = document.querySelector('#pruebaID');

console.log(id);
console.log('--------------------------');

/* Obtener Selector de Attribute */
/* SIMEPRE RETORNA EL PRIMERO */
const attribute = document.querySelector('[type=pruebaType]');
const attributeClase = document.querySelector('[class=otraPruebaClase]');
const attributeID = document.querySelector('[id=otraPruebaID]');

console.log(attribute);
console.log(attributeClase);
console.log(attributeID);
console.log('--------------------------');

/* obtener selector CSS combinado */
/* SIEMPRE RETORNA EL PRIMERO */
let cssCombinado = document.querySelector('.claseDiv p');
console.log(cssCombinado);

cssCombinado = document.querySelector('.claseDiv p:first-child');
console.log(cssCombinado);

cssCombinado = document.querySelector('.claseDiv p:nth-child(2)');
console.log(cssCombinado);

cssCombinado = document.querySelector('.claseDiv p:last-child');
console.log(cssCombinado);
console.log('--------------------------');

/* Combinar Dos Selectores (querySelector and 
  getElementsByClassName)*/
const enlaces = document.querySelector('ul').
getElementsByClassName('enlaces');

console.log(enlaces);

const convertirArray = Array.from(enlaces);
console.log(convertirArray);
console.log('--------------------------');