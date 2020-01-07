'use strict';

/* Mostrar la ultima letra ingresada por el usuario */
let name = window.prompt('Ingresa El Nombre');

let completeName = name;
let lengthCompleteName = parseInt(`${name.length}`);
let lastLetterCompleteName = `${name.charAt(name.length - 1)}`;

if (name === '' && lengthCompleteName === 0) {
    console.log('Nombre Completo => Nulo');
    console.log('Longitud Del Nombre Completo => ', lengthCompleteName);
    console.log('Resultado => Debe Ingresar El Nombre De Usuario');

} else if (name !== '' && lengthCompleteName > 0 && lastLetterCompleteName === ' ') {
    console.log('Nombre Completo => ', completeName);
    console.log('Longitud Del Nombre Completo => ', lengthCompleteName);
    console.log('Resultado => El ultimo caracter ingresado es un espacio en blanco');

} else {
    console.log('Nombre Completo => ', completeName);
    console.log('Longitud Del Nombre Completo => ', lengthCompleteName);
    console.log('Ultima Letra Ingresa Por El Usuario => ', lastLetterCompleteName);
}