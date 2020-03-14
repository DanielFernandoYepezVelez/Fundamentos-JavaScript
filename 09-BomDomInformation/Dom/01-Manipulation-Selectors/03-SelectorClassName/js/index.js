/* Al Ejecutar este selector se le puede
aplicar los mismos estilos que a los anteriores,
la diferencia es que este selector me trae
solo selectores de clase y ademas devuelve todas las
clases que existen con el mismo nombre de la clase
especificada. */
const primeraClase = document.getElementsByClassName('primeraClase');
const convertirArray = Array.from(primeraClase);

console.log(primeraClase);
console.log(convertirArray);
console.log('--------------------------');

const segundaClase = document.getElementsByClassName('pruebaClaseUno');
console.log(segundaClase);
console.log('--------------------------');

const terceraClase = document.getElementsByClassName('prueba');
console.log(terceraClase);
console.log('--------------------------');

const div = document.getElementsByClassName('claseDiv');
console.log(div);
console.log('--------------------------');