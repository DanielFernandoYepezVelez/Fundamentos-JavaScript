const text = document.getElementById('text').textContent;

/* g e i son banderas y su significado esta en las notas de expresiones regulares */
const regEx = /lorem/gi;
const regEx2 = new RegExp('lorem', 'gi');
const regEx3 = new RegExp('/lorem/', 'gi');

/* Este metodo me sirve para testear las expresiones regulares y saber donde se hace un match */
console.log(regEx.test(text));
console.log(regEx2.test(text));
console.log(regEx3.test(text));