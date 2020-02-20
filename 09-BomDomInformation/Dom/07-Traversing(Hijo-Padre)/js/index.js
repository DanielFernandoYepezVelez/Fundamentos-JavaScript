const hijoEnlace = document.querySelectorAll('.enlace');
console.log(hijoEnlace);
console.log('------------------------');

console.log(hijoEnlace[0]);
console.log(hijoEnlace[1]);
console.log(hijoEnlace[2]);
console.log(hijoEnlace[3]);
console.log(hijoEnlace[4]);
console.log('------------------------');

/* A LOS PADRES PUEDO APLICARLES TODAS LAS
PROPIEDADES QUE YO NECESITE IGUAL QUE EN EL
TRAVERSING DEL PADRE AL HIJO */

/* Aqui Voy desde el hijo en la posición
CERO(0) al elemento o nodo PADRE */
console.log(hijoEnlace[0].parentNode.style.innerHTML = 'SOY PAPA PARENT NODE');
console.log(hijoEnlace[1].parentNode);
console.log(hijoEnlace[2].parentNode);
console.log(hijoEnlace[3].parentNode);
console.log(hijoEnlace[4].parentNode);
console.log('------------------------');

/* Se recomienda Utilizar parentElement
en vez de parentNode */
console.log(hijoEnlace[0].parentElement.style.innerHTML = 'SOY PAPA PARENT ELEMENT');
console.log(hijoEnlace[1].parentElement);
console.log(hijoEnlace[2].parentElement);
console.log(hijoEnlace[3].parentElement);
console.log(hijoEnlace[4].parentElement);
console.log('------------------------');

/* Puedo ir subiendo tan arriba como me lo
permita el DOM, pasa lo mismo como con
children que puede ir tan dentro como lo
permita el DOM, pero en este caso es el contrario. */
// console.log(hijoEnlace[0].parentElement.parentElement.parentElement.parentElement);

/* Tambien puedo combinar parentElement y children */
// console.log(hijoEnlace[0].parentElement.parentElement.parentElement.children[0].textContent = 'Ejemplo');