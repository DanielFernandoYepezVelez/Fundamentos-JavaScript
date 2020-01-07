/* Declarar Arreglo Unidimensional (STRINGS)*/
const stringAnimals = ['Lorote', 'Loro', 'Lorito'];
console.log(stringAnimals);
console.log('--------------------------------------');

/* Mostrar Valores del arreglo Unidimensional */
const firstAnimal = stringAnimals[0];
console.log(firstAnimal);
console.log('--------------------------------------');

/* Actualizar Contenido Del Arreglo */
stringAnimals[0] = 'Lorote Actualizado';
const updateAnimal = stringAnimals[0];
console.log(updateAnimal);
console.log('--------------------------------------');

/* Declarar Arreglo Unidimensional (NUMBERS)*/
let numbers = [1, 2, 3];
console.log(numbers);
console.log('--------------------------------------');

/* Declarar Arreglo Unidimensional (DIFERENTES TIPOS DE DATOS)*/
let MixArray = [1, 'mascota', true];
console.log(MixArray);
console.log('--------------------------------------');

/* Array De Objetos (¡MUY IMPORTANTE!) 
Es Algo muy común en la programacion
para pedir datos a una BASE DE DATOS
por que dicha DB es lo que me regresa
un array de objetos(Registros)*/
let users = [
    /* Object One */
    {
        name: 'Camilo',
        age: 25
    },
    /* Object Two */
    {
        name: 'Danilo',
        age: 27
    },
    /* Object Three */
    {
        name: 'Fernando',
        age: 32
    }
];
console.log(users);
console.log('--------------------------------------');

/* Array de Objetos Con Diferentes objetos en su interior */
let usersTwo = [
    /* Object One */
    {
        name: 'Camilo',
        age: 25,
        wife: true,
        son: false,
        daugther: true
    },
    /* Object Two */
    {},
    /* Object Three */
    {
        name: 'Fernando',
        age: 32
    }
];
console.log(usersTwo);
console.log('--------------------------------------');

/* Acceder a un ARRAY DE OBJETOS */
console.log(usersTwo[0].name);
console.log(usersTwo[2].name);
console.log('--------------------------------------');

/* Ordenar números con el método .sort() */
const numbersOrder = [1, 3, 56, 78, 99, 33, 4, 5, 6, 7, 8, 9];

/* Arrow Functions */
numbersOrder.sort((x, y) => x - y);
console.log(numbersOrder);
console.log('--------------------------------------');

/* Function Normal */
numbersOrder.sort(function(x, y) {
    return x - y
});
console.log(numbersOrder);
console.log('--------------------------------------');

/* Arrow Functions */
numbersOrder.sort((x, y) => y - x);
console.log(numbersOrder);
console.log('--------------------------------------');

/* Function Normal */
numbersOrder.sort(function(x, y) {
    return y - x
});
console.log(numbersOrder);
console.log('--------------------------------------');

/* Arreglo De Arreglos O Arreglo Bidimensional */
let bidimensionalNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(bidimensionalNumbers);
console.log('--------------------------------------');

/* Accediendo A Un arreglo bidimensional */
console.log(bidimensionalNumbers[0][2]);
console.log(bidimensionalNumbers[1][0]);
console.log(bidimensionalNumbers[2][2]);
console.log('--------------------------------------');

/* Tipo De Dato Del Arreglo */
console.log(typeof bidimensionalNumbers);