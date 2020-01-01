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

/* Condicional Swicht */
const weekDay = 7;

switch (weekDay) {
    case 1:
        console.log('Hoy es LUNES');
        break;

    case 2:
        console.log('Hoy es MARTES');
        break;

    case 3:
        console.log('Hoy es MIERCOLES');
        break;

    case 4:
        console.log('Hoy es JUEVES');
        break;

    case 5:
        console.log('Hoy es VIERNES');
        break;

    default:
        console.log('TODAY IS WEEKEND');
        break;
}
console.log('------------------------------');

/* Otra Forma De Utilizar Los CASOS */

const colorFondoMes = 'April';

switch (colorFondoMes) {
    case 'January':
    case 'February':
        console.log('Fondo WHITE');
        break;

    case 'March':
    case 'April':
        console.log('Fondo RED');
        break;

    default:
        console.log('No Tenemos Color De Fondo');
        break;
}
console.log('------------------------------');