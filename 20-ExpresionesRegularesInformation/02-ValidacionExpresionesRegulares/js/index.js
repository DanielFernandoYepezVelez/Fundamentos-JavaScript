const text = document.getElementById('text').textContent;

/* g e i son banderas y su significado esta en las notas de expresiones regulares */
const regEx = /lorem/gi;
const regEx2 = new RegExp('lorem', 'gi');
// const regEx3 = new RegExp('/lorem/', 'gi');

/* Este metodo me sirve para testear las expresiones regulares y saber donde se hace un match */
console.log(regEx.test(text));
console.log(regEx2.test(text));
// console.log(regEx3.test(text));

/* ----------------------------------------- */
console.log('--------------------------');
let valor, expReg;

/* Se busca un patron y son los caracteres numericos del 0 al 9 */
// expReg = /[0123456789]/;
expReg = /[0-9]/;
valor = 1992;
console.log(expReg.test(valor));

/* Buscar una fecha 20-10-2020*/
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2020';
console.log(expReg.test(valor));

/* Ver una Hora 10:30*/
expReg = /\d\d:\d\d/;
valor = '10:30';
console.log(expReg.test(valor));

expReg = /\d\d:\d\d \D\D/;
valor = '10:30 AM';
console.log(expReg.test(valor));

/* Sintaxis con llaves para fechas*/
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2020';
valor = '1-1-2020';
// valor = '1-100-2020'; False
// valor = '1-100-203'; False
console.log(expReg.test(valor));

/* Aqui Buscamos que existan cuatro o mas digitos, ademas solo numeros. */
// expReg = /\d\d\d\d/;
expReg = /\d+/; // Pasar Digitos infinitos
valor = 29292930393030330330303;
console.log(expReg.test(valor));

/* Solo digitos numericos */
expReg = /([0-9])\w+/;
valor = 929229292929229911928474754839;
console.log(expReg.test(valor));

/* Negar Una (^) Expresion Regular */
expReg = /[^0-9]/;
valor = 1992;
console.log(expReg.test(valor));

/* ----------------------------------------- */
console.log('---------------------------');
/* Se busca un patron y son los caracteres numericos y letras, pero no espacios en blanco */
expReg = /\w+/;
valor = 'MensajePrueba 1234';
valor = 122333;
// valor = ' '; False
console.log(expReg.test(valor));

/* Texto que sea solo en mayusculas */
expReg = /([A-Z])\w+/;
valor = 'HOLA MUNDO';
console.log(expReg.test(valor));

/* Texto que sea solo en minusculas */
expReg = /([a-z])\w+/;
valor = 'hola mundo';
console.log(expReg.test(valor));