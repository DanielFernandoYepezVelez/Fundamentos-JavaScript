/* Declarar Un Array Inicial */
const colores = ['Amarillo', 'Azul', 'Rojo'];
console.log('Array Inicial =>', colores);
console.log('-----------------------------------------');

/* Definir la longitud o el numero de elementos internos de un array */
const longitud = colores.length;
console.log('Longitud Array Inicial => ', longitud);
console.log('-----------------------------------------');

/* Devuelve la posición o indice de un elemento existente en un array */
const posicionElemento = colores.indexOf('Rojo');
console.log('Indice Elemento =>', posicionElemento);
console.log('-----------------------------------------');

/* AGREGAR ELEMENTOS AL ARRAY */
/* Agrega un nuevo elemento al array pero en la primera posición */
const primerColor = 'colorPrimero';
const primerElemento = colores.unshift(primerColor);
console.log('Primer Elemento Agregado => ', colores);
console.log('-----------------------------------------');

/* Agrega un nuevo elemento al array pero en la ultima posición */
const nuevoColor = 'colorUltimo';
const ultimoElemento = colores.push(nuevoColor);
console.log('Ultimo Elemento Agregado => ', colores);
console.log('-----------------------------------------');

/* Definición de un segundo Array */
const nuevoArray = ['primerElemento', 'segundoElemento', 'tercerElemento'];
console.log('Nuevo Array =>', nuevoArray);
console.log('-----------------------------------------');

/* ELIMINAR ELEMENTOS AL ARRAY */
/* Eliminar un elemento del array pero en la primera posición */
const primerEliminado = nuevoArray.shift();
console.log('Primer Elemento Borrado =>', nuevoArray);
console.log('-----------------------------------------');

/* Eliminar un elemento del array pero en la ultima posición */
const ultimoEliminado = nuevoArray.pop();
console.log('Ultimo Elemento Borrado =>', nuevoArray);
console.log('-----------------------------------------');

/* Declarar Un Nuevo Array Para La Funcion Splice */
const arraySplice = ['unoElemendo', 'dosElemento', 'tresElemento', 'cuatroElemento'];
console.log(arraySplice);
console.log('-----------------------------------------');

/* Esta funcion me sirve para eliminar y editar(ACTUALIZAR) un elemento interno de un array */
console.log('             SPLICE  ARRAY             ');
/* ELIMINANDO UN ELEMENTO */
const elementoPosicion = 'tresElemento';
const rangoAeliminar = 1;

const indiceElemento = arraySplice.indexOf(elementoPosicion);
console.log('Indice Elemento =>', indiceElemento);

/* Recibe El indice del elemento y en rango de su eliminacion */
const eliminacionTotal = arraySplice.splice(indiceElemento, rangoAeliminar);

console.log('Elemento Del Array Que Se Va A Eliminar => ', eliminacionTotal);
console.log('Nuevo Array =>', arraySplice);

/* EDITANDO UN ELEMENTO */
const cadena = 'UnoActualizadoCorrectamente';

/* Recibe El indice del elemento y en rango de su eliminacion, ademas de su texto a actualizar */
const editandoFinal = arraySplice.splice(0, 1, cadena);

console.log('Elemento Del Array Que Se Va A Editar(Update) =>', editandoFinal);
console.log(arraySplice);
console.log('---------------------------------------');