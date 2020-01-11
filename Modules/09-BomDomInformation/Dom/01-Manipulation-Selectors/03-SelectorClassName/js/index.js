/* Al Ejecutar este selector se le puede
aplicar lo mismo que a los anteriores,
la diferencia es que este selector me trae
todas las clases que existen con ese nombre */
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