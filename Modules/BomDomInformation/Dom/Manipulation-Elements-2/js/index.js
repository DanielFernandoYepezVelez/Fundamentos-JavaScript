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
list.insertAdjacentElement('afterbegin', elementFour);
list.insertAdjacentElement('beforeend', elementFive);

const title = window.document.createElement('h1');
const otherTitle = window.document.createElement('h2');
title.innerHTML = 'Title of Test';
otherTitle.innerHTML = 'Second Title of Test';

/* Funciona por fuera del id indicado */
list.insertAdjacentElement('beforebegin', otherTitle);
list.insertAdjacentElement('afterend', title);

/* METODO PARA INSERTAR ELEMENTOS POSICION ESPECIFICA*/
const elementSix = window.document.createElement('li');
elementSix.innerHTML = 'Element Six';
/* primer parametro es el elemento que se va a insertar
y el segundo parametro, es el elemento donde se va a
insertar */
list.insertBefore(elementSix, elementFive);
/* ----------------------------------------------------------------------- */

/*2. Borrar contenido de los elementos */
// list.innerHTML = '';
/* ----------------------------------------------------------------------- */

/*3. Remover Elementos hijos */
list.removeChild(elementSix);
/* ----------------------------------------------------------------------- */

/*4. Reemplazar elementos hijos */
/* Primer parametro el elemento que voy a
insertar y el segundo parametro es el
elemento que va hacer reemplazado */
list.replaceChild(elementSix, elementFour);
/* ----------------------------------------------------------------------- */

/*5. Clonar Elementos */
/* Sin Elementos Internos */
const listCloneFalse = list.cloneNode(false);
console.log(listCloneFalse);

/* Con elementos Internos */
const listCloneTrue = list.cloneNode(true);
console.log(listCloneTrue);
/* ----------------------------------------------------------------------- */