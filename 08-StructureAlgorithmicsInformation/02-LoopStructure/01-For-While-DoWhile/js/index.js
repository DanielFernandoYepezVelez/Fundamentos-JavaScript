/* While */
let contador = 0;

console.log(contador);
console.log('-------------------------------');

while (contador < 5) {
    contador++;
    console.log(contador);
}
console.log('-------------------------------');

const animals = ['mono', 'jabali', 'conejo', 'Serpiente'];
console.log('Longitud =>', animals.length);
console.log('-------------------------------');

let posicion = 0;

while (posicion < animals.length) {
    console.log('Posición => ', posicion, ' <=> ', animals[posicion]);
    posicion++;
}
console.log('-------------------------------');

/* Do While */
posicion = 0;
do {
    posicion++;
    console.log(posicion);
} while (posicion < 5);
console.log('-------------------------------');

/* For */
for (let index = 0; index < 10; index++) {
    console.log(index);
}
console.log('-------------------------------');

const numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
};
console.log('-------------------------------');

/* Agregando valores de un arreglo a otro */
const products = [
    { name: 'PS4', price: 250 },
    { name: 'iPhone X', price: 800 },
    { name: 'Laptop', price: 300 },
    { name: 'TV', price: 200 }
];

const discountProducts = [];

for (let i = 0; i < products.length; i++) {
    // const element = products[i];
    // console.log(element);

    if (products[i].price >= 300) {
        discountProducts.push(products[i]);
    }
}

console.log(discountProducts);
console.log('-------------------------------');