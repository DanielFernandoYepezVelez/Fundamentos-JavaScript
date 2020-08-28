/* Codigo Vida Real(BUENAS PRÁCTICAS) */
/* Los Returns funcionan dentro de funciones o metodos */
function ejecutarReturn() {
    if (false) {
        console.log('La condición se cumple');
        return;
    }

    if (true) {
        console.log('La condición se cumple');
        return;
    }
}
ejecutarReturn();

/* Condición Con Un Valor De Tipo Booleano */
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

/* Condicional Simplificada */
const numeroCon = 2;

if (numeroCon % 2 === 0) console.log(`Condicional Simplificado => ${numeroCon} es par`)
else(console.log(`Condicional Simplificado => ${numeroCon} es impar`));
console.log('------------------------------');

/* Operador Ternario */
const numeroOperador = 3;

(numeroOperador % 2 === 0) ? console.log(`Operador Ternario => ${numeroOperador} es par`): console.log(`Operador Ternario => ${numeroOperador} es impar`);
console.log('---------------------------------');

/* Operador Ternario Con Mas De Una Linea */
(numeroOperador % 2 === 0) ?
(
    console.log(`Operador Ternario Con Dos Lineas => ${numeroOperador} es par`),
    console.log(`Operador Ternario Con Dos Lineas => ${numeroOperador} es par`)
) :
(
    console.log(`Operador Ternario Con Dos Lineas => ${numeroOperador} es impar`),
    console.log(`Operador Ternario Con Dos Lineas => ${numeroOperador} es impar`)
);
console.log('----------------------------------');

/* Operador Ternanrio Anidado(POCO COMÚN) */
const autenticado = true;
const puedePagar = true;

console.log(autenticado ? puedePagar ? 'Esta Autenticado Y Puede Pagar' : 'Esta Autenticado No Puede Pagar' : 'No Estas Autenticado');
console.log('----------------------------------');

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