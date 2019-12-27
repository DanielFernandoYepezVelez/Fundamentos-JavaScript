let name = 'Daniel Fernando',
    age = 26;

/* Function Sin parametros */
function personaOne() {
    console.log(`${name} has ${age} Years Old`);
}
personaOne();

/* Function Con Parametros */
function personaTwo(name, age) {
    console.log(`${name} has ${age} Years Old`);
}

/* Ejecutando las funcionea */
personaTwo('Rosario', 33);
personaTwo(name, age);
personaTwo('Gildardo', 64);
personaTwo(name, age);

/* Errores que fucnionan en JavaScript Y se DEbent tener muy encuenta */
console.log('\n\n\nERRORES QUE SE DEBEN TENER MUY ENCUENTA CON JAVASCRIPT Y LAS FUNCIONES CON PARAMETROS');
personaTwo(33, 'Rosario');
personaTwo();
personaTwo('Gildardo');
personaTwo(age);