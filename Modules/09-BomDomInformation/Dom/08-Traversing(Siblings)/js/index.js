/* Recordar que los espacios en blanco
se retornan como text */
const enlaces = document.querySelectorAll('.enlace');

/* ATRAS */
console.log(enlaces);
console.log('----------------------------');

console.log(enlaces[3])
console.log('----------------------------');

console.log(enlaces[3].previousSibling)
console.log('----------------------------');

/* Que estan al mismo nivel, primo-hermano */
console.log(enlaces[3].previousElementSibling);
console.log('----------------------------');

console.log(enlaces[3].previousElementSibling.previousElementSibling);
console.log('----------------------------');

/* ADELANTE */
console.log(enlaces);
console.log('----------------------------');

console.log(enlaces[0])
console.log('----------------------------');

console.log(enlaces[0].nextSibling);
console.log('----------------------------');

/* Que estan al mismo nivel, primo-hermano */
console.log(enlaces[0].nextElementSibling);
console.log('----------------------------');

console.log(enlaces[0].nextElementSibling.nextElementSibling);
console.log('----------------------------');

/* Puede Combinar los avances de los nodos
tanto hacia arriba y hacia abajo */
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children);
console.log('----------------------------');

console.log(enlaces[0].nextElementSibling.nextElementSibling.children);
console.log('----------------------------');