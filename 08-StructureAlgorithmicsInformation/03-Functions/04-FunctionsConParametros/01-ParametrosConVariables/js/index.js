let name = 'Daniel Fernando Yepez Vélez';
let age = 55;

/* Function Con Parametros */
function personaTwo(name, age) {
    console.log(`${name} has ${age} Years Old`);
}

/* Ejecutando las funciones Con Parametros */
personaTwo(name, age);
personaTwo(name, age);
console.log('---------------------------------');

/* Errores que fucionan en JavaScript Y se Deben tener muy encuenta */
console.log('ERRORES QUE SE DEBEN TENER MUY ENCUENTA CON JAVASCRIPT Y LAS FUNCIONES CON PARAMETROS');

// Intercambio del orden de los parametros
personaTwo(age, name);
// No pasar parametros
personaTwo();
// Solo pasar el primer parametro
personaTwo(name);
// solo pasar el segundo parametro
personaTwo(age);
console.log('---------------------------------');