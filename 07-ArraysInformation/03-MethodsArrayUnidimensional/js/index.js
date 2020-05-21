/* Declarar Un Array Inicial */
const colores = ['Amarillo', 'Azul', 'Rojo', 'Rojo'];
console.log('Array Inicial =>', colores);
console.log('-----------------------------------------');

/* Definir la longitud o el numero de elementos internos de un array */
const longitud = colores.length;
console.log('Longitud Array Inicial => ', longitud);
console.log('-----------------------------------------');

/* Devuelve un valor booleano al detectar si es un arreglo o solo es una variable o constante */
const booleanArray = Array.isArray(colores);
console.log('Confirmando Si Es Un Array => ', booleanArray);
console.log('-----------------------------------------');

/* BUSCAR EN UN ARRAY */
/* Devuelve la PRIMERA posición del indice de un elemento existente en un array, si no lo encuentra devuelve un -1 */
const posicionElemento = colores.indexOf('Rojo');
console.log('Indice Elemento Primer Posición =>', posicionElemento);
console.log('-----------------------------------------');

/* Devuelve la ULTIMA posición o indice de un elemento existente en un array, si no lo encuentra devuelve un -1 */
const ultimaPosicionElemento = colores.lastIndexOf('Rojo');
console.log('Indice Elemento Ultima Posición =>', ultimaPosicionElemento);
console.log('-----------------------------------------');

/* AGREGAR ELEMENTOS AL ARRAY */
/* Agrega un nuevo elemento al array pero en la primera posición */
const primerColor = 'colorPrimero';
const primerElemento = colores.unshift(primerColor);
console.log('Primer Elemento Agregado => ', colores);
/* IMPORTANTE, Yo puedo obtener la nueva longitud del arreglo en una variable o constante */
console.log('Nueva Longitud Array Inicial => ', colores.length);
console.log('-----------------------------------------');

/* Agrega un nuevo elemento al array pero en la ultima posición */
const nuevoColor = 'colorUltimo';
const ultimoElemento = colores.push(nuevoColor);
console.log('Ultimo Elemento Agregado => ', colores);
/* IMPORTANTE, Yo puedo obtener la nueva longitud del arreglo en una variable o constante */
console.log('Nueva Longitud Array Inicial => ', colores.length);
console.log('-----------------------------------------');

/* Definición de un segundo Array Para Eliminar Elementos */
const nuevoArray = ['primerElemento', 'segundoElemento', 'tercerElemento'];
console.log('Nuevo Array =>', nuevoArray);
console.log('-----------------------------------------');

/* ELIMINAR ELEMENTOS AL ARRAY */
/* Eliminar un elemento del array pero en la primera posición */
const primerEliminado = nuevoArray.shift();
console.log('Primer Elemento Borrado =>', nuevoArray);
/* IMPORTANTE, yo puedo guardar el elemento eliminado de un array en una variable o constante */
console.log('Guardando El Primer Elemento Eliminado =>', primerEliminado);
console.log('-----------------------------------------');

/* Eliminar un elemento del array pero en la ultima posición */
const ultimoEliminado = nuevoArray.pop();
console.log('Ultimo Elemento Borrado =>', nuevoArray);
/* IMPORTANTE, yo puedo guardar el elemento eliminado de un array en una variable o constante */
console.log('Guardando El Ultimo Elemento Eliminado =>', ultimoEliminado);
console.log('-----------------------------------------');

/* Esta funcion me sirve para eliminar y editar(ACTUALIZAR) un elemento existente de un array */
console.log('             SPLICE  ARRAY             ');
/* Declarar Un Nuevo Array Para La Funcion Splice */
const arraySplice = ['unoElemendo', 'dosElemento', 'tresElemento', 'cuatroElemento'];
console.log(arraySplice);

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
// arraySplice.splice(3); Elimina desde la posicion 3 hasta el final, cuando recibe un solo argumento.
console.log('---------------------------------------');


/* Invierte el orden de los elementos existentes en el array */
const invertir = colores.reverse();
console.log('Invertir Elementos => ', invertir);
console.log('---------------------------------------');

/* Devuleve un string con el separador que indequemos como parametro, por defecto son comas. Destacar que el parametro debe ser en formato string tambien*/
const separador = colores.join('|')
console.log('String Separador => ', separador);
console.log('---------------------------------------');

/* Concatena Arrays diferentes o strings puros devolviendo un string de todos esos valores juntos*/
const numeros = [1, 2, 3, 4, 5];
const concatenarArrays = colores.concat(numeros).concat('String Puro').join(' | ');
console.log('Concatenando Dos Arrays Diferentes => ', concatenarArrays);
console.log('---------------------------------------');

/* Slice(a,b) Extrae los elementos de un array desde el indice a hasta el indice b. Si no existe b lo hace desde el indice a hasta el final, si no existe ni a ni b hace una copia del original. La ultima posicion no esta incluida en la extracción del array */
const primerColorcito = colores.indexOf('Rojo');
const ultimoColorcito = colores.lastIndexOf('Azul');

const extraer = colores.slice(0, 2);
const extraerColores = colores.slice(primerColorcito, ultimoColorcito);
const extraerCopia = colores.slice();

console.log('Extraer Con Indice Indicado => ', extraer);
console.log('Extraer COLORES Con Indice Indicado => ', extraerColores);
console.log('Extraer Copia Completa => ', extraerCopia);
console.log('---------------------------------------');