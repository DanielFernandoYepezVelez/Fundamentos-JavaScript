'use strcit';

/* Variables Y Constantes De Tipo Array */
const arrayLetters = ['a', 'b', 'c'];
let arrayNumbers = [1, 2, 3.454];
var arrayBooleans = new Array(true, false);

/* Show Console */
console.log('Letters =>', typeof arrayLetters);
console.log('Letters =>', arrayLetters);
console.log('---------------------------------');

console.log('Numbers =>', typeof arrayNumbers);
console.log('Numbers =>', arrayNumbers);
console.log('---------------------------------');

console.log('Booleans =>', typeof arrayBooleans);
console.log('Booleans =>', arrayBooleans);
console.log('---------------------------------');

/* Show Document */
window.document.writeln('Letters => ', typeof arrayLetters, '<br />');
window.document.writeln('Letters => ', arrayLetters, '<br />');
window.document.writeln('----------------------------------<br />');

window.document.writeln('Numbers => ', typeof arrayNumbers, '<br />');
window.document.writeln('Numbers => ', arrayNumbers, '<br />');
window.document.writeln('----------------------------------<br />');

window.document.writeln('Booleans => ', typeof arrayBooleans, '<br />');
window.document.writeln('Booleans => ', arrayBooleans, '<br />');
window.document.writeln('----------------------------------<br />');