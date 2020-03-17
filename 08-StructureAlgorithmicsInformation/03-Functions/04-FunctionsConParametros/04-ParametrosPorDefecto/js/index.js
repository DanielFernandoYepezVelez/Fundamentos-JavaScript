/* Function Con Parametros */
function personaTwo(name = 'NombrePorDefecto', age = 'EdadPorDefecto') {
    console.log(`${name} has ${age} Years Old`);
}

/* Ejecutando las funciones Con Parametros Por defecto*/
personaTwo();
personaTwo('Daniel');
console.log('---------------------------------');