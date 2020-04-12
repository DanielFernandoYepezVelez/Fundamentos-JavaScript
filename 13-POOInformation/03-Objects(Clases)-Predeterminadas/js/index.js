/* En JAVASCRIPT TODO SON OBJETOS */
/* OBJETOS(CLASES) PREDETERMINADOS O EXISTENTES EN JAVASCRIPT */

/* STRING */
const nombrePrimitivo = 'Pedro';
const nombreObject = new String('Pedro');

console.log('String Primitivo =>', nombrePrimitivo);
console.log('String Objeto =>', nombreObject);

if (nombrePrimitivo == nombreObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

if (nombrePrimitivo === nombreObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}
console.log('--------------------------------------');

/* NUMBERS */
const numeroPrimitivo = 100;
const numeroObject = new Number(100);

console.log('Number Primitivo =>', numeroPrimitivo);
console.log('Number Objeto =>', numeroObject);

if (numeroPrimitivo == numeroObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

if (numeroPrimitivo === numeroObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}
console.log('--------------------------------------');

/* BOOLEANS */
const booleanoPrimitivo = true;
const booleanoObject = new Boolean(true);

console.log('Boolean Primitivo =>', booleanoPrimitivo);
console.log('Boolean Objeto =>', booleanoObject);

if (booleanoPrimitivo == booleanoObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

if (booleanoPrimitivo === booleanoObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}
console.log('--------------------------------------');

/* FUNCIONES */
const funcionPrimitivo = function(a, b) {
    return a + b;
}
const funcionObject = new Function('a', 'b', 'return a + b');

console.log('Function Primitivo =>', funcionPrimitivo(1, 4));
console.log('Function Objeto =>', funcionObject(1, 4));

/* NUNCA VAN A SER IGUALES(SINTAXY POCO USUAL) */
if (funcionPrimitivo == funcionObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

if (funcionPrimitivo === funcionObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}
console.log('--------------------------------------');

/* OBJETOS */
const objetoPrimitivo = {
    nombre: 'Daniel Fernando Yepez Velez'
}
const objetoObject = new Object({
    nombre: 'Daniel Fernando Yepez Velez'
})

console.log('Objeto Primitivo =>', objetoPrimitivo);
console.log('Objeto Object =>', objetoObject);

/* NUNCA VAN A SER IGUALES */
if (objetoPrimitivo == objetoObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}

if (objetoPrimitivo === objetoObject) {
    console.log('Son Iguales');
} else {
    console.log('No Son Iguales');
}
console.log('--------------------------------------');