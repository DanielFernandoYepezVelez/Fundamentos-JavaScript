/* Este selector devuelve todas
las etiquetas que existan en el 
DOM con el nombre que el selector TagName,
especifico y solo acepta nombre de 
etiquetas, además puede aplicar lo
mismo que a los selectores getElementsClassName */
const primeraEtiqueta = document.getElementsByTagName('h1');

/* Lo convierto en un array para poder
aplicar todos los metodos y propiedades
de los arreglos */
let convertirArray = Array.from(primeraEtiqueta);

console.log(primeraEtiqueta);
console.log(convertirArray);
console.log('------------------');

const segundaEtiqueta = document.
getElementsByTagName('h2');
convertirArray = Array.from(segundaEtiqueta);


console.log(segundaEtiqueta);
console.log(convertirArray);
console.log('------------------');

const terceraEtiqueta = document.getElementsByTagName('h3');
convertirArray = Array.from(terceraEtiqueta);

console.log(terceraEtiqueta);
console.log(convertirArray);
console.log('------------------');