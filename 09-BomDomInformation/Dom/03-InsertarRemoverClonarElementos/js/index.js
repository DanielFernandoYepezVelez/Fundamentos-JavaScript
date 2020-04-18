// INSERTAR, AGREGAR O REEMPLAZAR ELEMENTOS DEBEN SER DESDE EL ELEMENTO PADRE, es decir, se debe indicar el elemento padre como referencia para elegir la posicion del elemento HIJO.

/* PERO UN ELEMENTO HIJO PUEDE SER ELMINADO EN SI MISMO O DIRECTAMENTAMENTE CON LA PALABRA "remove()" O TAMBIEN DEPENDIENDO DE UN ELEMENTO PADRE CON LA PALABRA "removeChild()". */
// ---------------------------------------

/* LA MEJOR PRACTICA ES INSERTAR CON EL FRAGMENT CON EL document.createDocumentFragment() */
// ---------------------------------------

/* NUEVOS MÉTODOS DESDE ECMAScript 6
Mas sencillos de manejar y funcionan exactamente igual que los mencionados en la ejecución del codigo.

parent.before(); Antes de que empiece(Hermano Anterior)
parent.prepend(); despues de que empiece(Primer Hijo)
parent.append(); antes de que termine(ultimo hijo)
parent.after(); despues de que termine(hermano siguiente)

child.replaceWith(NewChild); replazo directo al elemento, si necesidad de un nodo padre. */
// -----------------------------------

/*1. Insertar Elementos en diferentes posiciones */
const list = window.document.getElementById('list');

const elementFour = window.document.createElement('li');
const elementFive = window.document.createElement('li');

elementFour.innerHTML = 'Element Four';
elementFive.innerHTML = 'Element Five';
// list.appendChild(elementFour);
// list.appendChild(elementFive);

/* VALORES DEL METODO INSERTADJACENTELEMENT ALTERNATIVA AL APPENDCHILD */
/* Funciona dentro del id indicado */
list.insertAdjacentElement('afterbegin', elementFour); //Primer Lugar
list.insertAdjacentElement('beforeend', elementFive); //Ultimo Lugar

const title = window.document.createElement('h1');
const otherTitle = window.document.createElement('h2');
title.innerHTML = 'Title of Test';
otherTitle.innerHTML = 'Second Title of Test';

/* Funciona por fuera del id indicado */
list.insertAdjacentElement('beforebegin', otherTitle); //Primer Lugar por Fuera
list.insertAdjacentElement('afterend', title); //Ultimo Lugar por Fuera

/* METODO PARA INSERTAR ELEMENTOS POSICION ESPECIFICA*/
const elementSix = window.document.createElement('li');
elementSix.innerHTML = 'Element Six';
/* primer parametro es el elemento que se va a insertar
y el segundo parametro, es el elemento donde se va a
insertar */
list.insertBefore(elementSix, elementFive);

/* METODO PARA INSERTA UN FRAGMENTO DE CODIGO EN HTML EN EL DOM DESDE JavaScript, AHORRANDO RECURSOS AL NAVEGADOR */
const seleccionarLI = document.querySelectorAll('li');
const h1 = document.querySelector('h1');

h1.setAttribute('id', 'parentFragment');

const fragmento = document.createDocumentFragment();
const liConvertido = Array.from(seleccionarLI);

liConvertido.forEach((element) => {
    const div = document.createElement('div');
    div.textContent = element.textContent;
    fragmento.appendChild(div);
});
h1.appendChild(fragmento);

/* IMPORTANTE!!!!!! */
/* Aqui vemos que el fragmento es el contiene todo el html que se agrego en el div, por ende, cuando el fragmento se agregue a su elemento padre, el dom se va a renderizar en cada iteracion, sino que una sola vez se pega todo el fragmento de codigo HTML, esta es la mejor practica para que el navegador no gaste mas recursos de los necesarios
 */

/*----------------------------------------------------------------------- */

/*2. Borrar contenido de los elementos
(No se recomienda), La del ciclo while con el firstChild es mejor */
// list.innerHTML = '';
/* ----------------------------------------------------------------------- */

/*3. Remover Elementos hijos */
// list.remove(); elimina de forma directa el nodo del DOM.
list.removeChild(elementSix);

/* 4. Remover un elemento por su selector */
const elementNewOne = window.document.createElement('li');
const elementNewTwo = window.document.createElement('li');

elementNewOne.innerHTML = 'Soy un li Nuevo UNO';
elementNewTwo.textContent = 'Soy un li Nuevo DOS';

list.insertAdjacentElement('afterbegin', elementNewOne);
list.insertAdjacentElement('beforeend', elementNewTwo);

/* Remover un elemento por su selector */
seleccionarLI[0].remove();

/* Remover un elemento por su padre, es el elemento hijo que se elimina */
list.removeChild(elementNewTwo);

console.log(seleccionarLI);
/* ----------------------------------------------------------------------- */

/*5. Reemplazar elementos hijos */
/* Primer parametro el elemento que voy a
insertar y el segundo parametro es el
elemento que va hacer reemplazado */
// list.replaceChild(elementSix, elementFour);
/* ----------------------------------------------------------------------- */

/*6. Clonar Elementos */
/* Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos. */
/* Sin Elementos Internos */
console.log('--------------------------');
const listCloneFalse = list.cloneNode(false);
console.log(listCloneFalse);

console.log('Clonando False =>', list.cloneNode(listCloneFalse));
console.log('------------------------');

/* Con elementos Internos */
const listCloneTrue = list.cloneNode(true);
console.log(listCloneTrue);

console.log('Clonando True =>', list.cloneNode(listCloneTrue));
/* ----------------------------------------------------------------------- */