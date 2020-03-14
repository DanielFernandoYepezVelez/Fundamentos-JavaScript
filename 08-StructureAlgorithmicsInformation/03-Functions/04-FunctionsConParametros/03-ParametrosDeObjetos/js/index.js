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

/* Otro Ejercicio igual Pero el orden es diferentes del objeto 
y la funcion */
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