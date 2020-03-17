// No funciona su invocación
// saludoClient('DANIEL FERNANDO');

const saludoClient = function(name) {
    console.log(`Bienvenido Cliente ${name}`);
}
saludoClient('DANIEL FERNANDO');
console.log('---------------------------------');

// No funciona su invocación
// console.log(suma(1, 2));

const suma = function(a, b) {
    return `La Suma Es ${a + b}`;
}
console.log(suma(12, 23));
console.log(suma(1, 5));
console.log('---------------------------------');