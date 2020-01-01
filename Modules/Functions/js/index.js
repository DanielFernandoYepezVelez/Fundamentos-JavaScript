let name = 'Daniel Fernando',
    age = 26;

/* Function Sin parametros */
function personaOne() {
    console.log(`${name} has ${age} Years Old`);
}
personaOne();
console.log('---------------------------------');

/* Function Con Parametros */
function personaTwo(name, age) {
    console.log(`${name} has ${age} Years Old`);
}

/* Ejecutando las funciones Con Parametros */
personaTwo('Rosario', 33);
personaTwo(name, age);
personaTwo('Gildardo', 64);
personaTwo(name, age);
console.log('---------------------------------');

/* Errores que fucnionan en JavaScript Y se DEbent tener muy encuenta */
console.log('ERRORES QUE SE DEBEN TENER MUY ENCUENTA CON JAVASCRIPT Y LAS FUNCIONES CON PARAMETROS');
personaTwo(33, 'Rosario');
personaTwo();
personaTwo('Gildardo');
personaTwo(age);
console.log('---------------------------------');

/* Funciones asignandas a variables */
function addWithResult(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

const result = addWithResult(8, 8);
console.log(result);
console.log('---------------------------------');

/* FUNCIONES CON OBJETOS COMO PARAMETROS */
function printProduct(products) {
    if (products.price > 200) {
        return `El producto ${products.name} tiene un precio de => ` + products.price;
    } else {
        return `El producto ${products.name} tiene un precio de => ` + products.price;
    }
}

const products = [
    { name: 'PS4', price: 250 },
    { name: 'iPhone X', price: 800 },
    { name: 'Laptop', price: 300 },
    { name: 'TV', price: 200 }
];

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(printProduct(element));
}
console.log('---------------------------------');

/* Otro Ejercicio igual */
const users = [
    { name: 'Daniel', age: 26, nationalition: 'Paisa' },
    { name: 'Daniel Fernando', age: 27, nationalition: 'N/A' },
    { name: 'Daniel Fernando Yepez', age: 28, nationalition: 'N/A' }
];

for (let index = 0; index < users.length; index++) {
    console.log(printUsers(users[index]));
}

function printUsers(users) {

    switch (users.age) {
        case 26:
            return `Usuario ${users.name} tiene ${users.age} años, la nacionalidad es ${users.nationalition}`;
            break;

        case 27:
            return `Usuario ${users.name} tiene ${users.age} años, la nacionalidad es ${users.nationalition}`;
            break;

        case 28:
            return `Usuario ${users.name} tiene ${users.age} años, la nacionalidad es ${users.nationalition}`;
            break;

        default:
            return `Usuario No Existe en el sistema`;
            break;
    }
}