/* Al Ejecutar este selector se le puede
aplicar los mismos estilos que a los anteriores
Selectores, la diferencia es que este selector me trae
solo el nombre de la clase que tenga un elemento, nodo
o etiqueta de HTML y ademas devuelve todas las clases
que existen con el mismo nombre de la clase 
especificada en todos los elementos, etiquetas o nodos
del DOM. */
const primeraClase = document.getElementsByClassName('primeraClase');
let convertirArray = Array.from(primeraClase);

console.log(primeraClase);
console.log(convertirArray);
console.log('--------------------------');

const segundaClase = document.getElementsByClassName('pruebaClaseUno');
convertirArray = Array.from(segundaClase);

console.log(segundaClase);
console.log(convertirArray);
console.log('--------------------------');

const terceraClase = document.getElementsByClassName('prueba');
convertirArray = Array.from(terceraClase);

console.log(terceraClase);
console.log(convertirArray);
console.log('--------------------------');

const div = document.getElementsByClassName('claseDiv');
convertirArray = Array.from(div);

console.log(div);
console.log(convertirArray);
console.log('--------------------------');