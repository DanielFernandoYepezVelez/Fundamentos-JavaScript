const hijoEnlace = document.querySelectorAll('.enlace');
console.log(hijoEnlace);
console.log('------------------------');

console.log(hijoEnlace[0]);
console.log('------------------------');

console.log(hijoEnlace[0].parentNode);
console.log('------------------------');

/* Se recomienda Utilizar parentElement
en vez de parentNode */
console.log(hijoEnlace[0].parentElement);
console.log('------------------------');

/* Puedo ir subiendo tan arriba como me lo
permita el DOM, paso lo mismo como con
children que puede ir tan dentro como lo
permita el DOM, pero en este caso es el
contrario. */
// console.log(hijoEnlace[0].parentElement.parentElement.parentElement.parentElement);

/* Tambien puedo combinar parentElement y children */
// console.log(hijoEnlace[0].parentElement.parentElement.parentElement.children[0].textContent = 'Ejemplo');