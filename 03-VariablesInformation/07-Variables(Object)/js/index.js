'use strict';

/* Variables Y Constantes De Tipo Objeto */
/* Objeto Literal */
var userOne = {
    name: 'Daniel',
    lastName: 'Yepez Velez',
    nationalition: 'Antiqueña',
    age: 27
};

/* Objeto Literal */
const userTwo = {
    name: 'Maria',
    lastName: 'Restrepo Guzman',
    nationalition: 'Antiqueña',
    age: 35
}

/* Objeto Literal */
var userThree = {
    name: 'Cristina',
    lastName: 'Galarzo',
    nationalition: 'Antiqueña',
    age: 21
}

/* Show Console */
console.log('User One =>', typeof userOne);
console.log('User One =>', userOne);
console.log('User Two =>', typeof userTwo);
console.log('User Two =>', userTwo);
console.log('User Three =>', typeof userThree);
console.log('User Three =>', userThree);

/* Show Document */
window.document.writeln('User One => ', userOne, '<br />');
window.document.writeln('User Two => ', userTwo, '<br />');
window.document.writeln('User Three => ', userThree, '<br />');