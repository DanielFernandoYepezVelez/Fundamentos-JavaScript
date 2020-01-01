/* Funcion que me de el cuadrado de un numero */
function cuadrado(number) {
    const result = Math.pow(number, 2);
    // const result = number * number;
    return result;
}
console.log(cuadrado(8));
console.log('------------------------------');

/* Suma Total De Un Arreglo Numerico */
const numbers = [1, 2, 3, 10, 20, 20];
let acNumbers = 0;

function sumaAcumulador(arrayNumbers) {
    for (let index = 0; index < arrayNumbers.length; index++) {
        acNumbers += arrayNumbers[index];
    }
    return acNumbers;
}
console.log(sumaAcumulador(numbers));
console.log('------------------------------');

/* Suma Total De Un Arreglo Numerico Mixto */
const numbersMix = ["5", "4", 5, 6, 7];
let acNumbersMix = 0;

function sumaNumbersMix(ArrayNumbersMix) {
    for (let i = 0; i < ArrayNumbersMix.length; i++) {
        acNumbersMix += Number(ArrayNumbersMix[i]);
    }
    return acNumbersMix;
}
console.log(sumaNumbersMix(numbersMix));
console.log('------------------------------');

/* Sumar Solo Numeros Positivos De un Array */
const newNumbers = ['2', '3', '4', -5, -12];
let acNewNumber = 0;

function positiveNumbers(arrayNewNumbers) {
    for (let index = 0; index < arrayNewNumbers.length; index++) {
        if (arrayNewNumbers[index] >= 0) {
            acNewNumber += Number(arrayNewNumbers[index]);
        }
    }
    return acNewNumber
}
console.log(positiveNumbers(newNumbers));
console.log('------------------------------');

/* Cuantas Veces Se Repite Una Palabra En Un Array */
const words = [
    'perro',
    'gato',
    'leon',
    'perro',
    'gato',
    'leon',
    'perro'
];

function howManyWord(arrayWords, word) {
    let countWord = 0;

    for (let index = 0; index < arrayWords.length; index++) {
        if (arrayWords[index] === word) {
            countWord++;
        }
    }
    return countWord;
}
console.log(howManyWord(words, 'perro'));
console.log(howManyWord(words, 'gato'));
console.log('------------------------------');

/* Remover Espacios De Una Cadena De Texto 
Concatenando El Texto o String */
const helloWorld = 'H  E  L  L  O  W  O  R  L  D!';

function spaceAndMayus(stringVariable) {
    let concatenarCadena = '';

    for (let i = 0; i < stringVariable.length; i++) {
        if (stringVariable[i] !== ' ') {
            concatenarCadena += stringVariable[i];
        }
    }
    return concatenarCadena.toLowerCase();
}

console.log(spaceAndMayus(helloWorld));
console.log('------------------------------');

/* Hace lo mismo que el de arriba
solo que en menos lineas de codigo */
function spaceAndMayusTwo(arrayVariableString) {
    let resultTwo = arrayVariableString.split(' ');
    resultTwo = resultTwo.join('');
    return resultTwo.toLowerCase();
}
console.log(spaceAndMayusTwo(helloWorld));
console.log('------------------------------');

/* Hace lo mismo que el de arriba
solo que en una sola linea de codigo */
function spaceAndMayusThree(arrayVariableStringTwo) {
    return arrayVariableStringTwo.split('').join('').toLowerCase();
}
console.log(spaceAndMayusThree(helloWorld));
console.log('------------------------------');

/* Invertir el contenido o valores de un Arreglo */
const arregloNumerico = [1, 2, 3, 4, 5];

function reverArray(arrayNumerico) {
    for (let index = arrayNumerico.length - 1; index >= 0; index--) {
        console.log(arrayNumerico[index]);
    }
}
reverArray(arregloNumerico);
console.log('------------------------------');

/* Invertir el contenido o valores de un Arreglo */
const arregloVocales = ['a', 'e', 'i', 'o', 'u'];

function revesArrayTwo(arrayVocales) {
    let arregloInvertivo = [];

    for (let index = (arrayVocales.length - 1); index >= 0; index--) {
        arregloInvertivo.push(arrayVocales[index]);
    }

    return arregloInvertivo;
}
console.log(revesArrayTwo(arregloVocales));
console.log('------------------------------');

/* Invertir el contenido o valores de un Arreglo 
A través De Una Function reverse() */
function reverArrayThree(arrayVocales) {
    return arrayVocales.reverse();
}
console.log(reverArrayThree(arregloNumerico));
console.log('------------------------------');