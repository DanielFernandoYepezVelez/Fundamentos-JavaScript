/* Condición Con Un Valor Booleano */
if (true) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple')
}

if (false) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple')
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Variable */
const cumple = true;
const noCumple = false;

if (cumple) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if (noCumple) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Numero */
if (1) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if (0) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condicion Con Un Valor De Tipo String */
if (" ") {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if ("") {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Objeto */
if ({ name: 'Daniel' }) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if ({}) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Objeto 
Excepción null */
if (null) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Undefined */
let personita; //Esta es una Variable undefined

if (personita) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if (undefined) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Condición Con Un Valor De Tipo Array */
if (['Daniel']) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}

if ([]) {
    console.log('La condición se cumple');
} else {
    console.log('La condición NO se cumple');
}
console.log('------------------------------');

/* Else-if (Condicional Anidado) */
const month = 'April';

if (month === 'January') {
    console.log('Estamos en el mes January');
} else if (month === 'February') {
    console.log('Estamos en el mes February');
} else if (month === 'March') {
    console.log('Estamos en el mes March');
} else if (month === 'April') {
    console.log('Estamos en el mes April');
} else {
    console.log('El mes no se encontró');
}
console.log('------------------------------');