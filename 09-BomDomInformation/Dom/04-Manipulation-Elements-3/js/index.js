/* ESTO ES TRAVERSING QUE LO TENEMOS ESPECIFICADO MAS ADELANTE */
/* Propiedades de los elementos */
const listOne = window.document.getElementById('listOne');

const titleOne = listOne.previousElementSibling;
console.log(titleOne);
const titleTwo = listOne.nextElementSibling;
console.log(titleTwo);
/* ---------- */

const firstListChild = listOne.firstElementChild;
firstListChild.style.color = 'red';

const lastListChild = listOne.lastElementChild;
lastListChild.style.color = 'blue';
/* --------------- */

const hijosListTwo = listTwo.children;
console.log(hijosListTwo);

for (let index = 0; index < hijosListTwo.length; index++) {
    let elementsListTwo = hijosListTwo[index];
    elementsListTwo.style.color = 'green';
    console.log(elementsListTwo);
}
/* --------------- */