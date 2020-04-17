/* Declarar Arreglo Unidimensional (STRINGS)*/
const stringAnimals = ['Lorote', 'Loro', 'Lorito'];
console.log(stringAnimals);

/* Mostrar Valores del arreglo Unidimensional De Forma Manual*/
const firstAnimal = stringAnimals[0];
console.log(firstAnimal);

const secondAnimal = stringAnimals[1];
console.log(secondAnimal);

const thirdAnimal = stringAnimals[2];
console.log(thirdAnimal);

/* Actualizar Contenido De Un Arreglo De Forma Manual */
stringAnimals[0] = 'Lorote Actualizado';
const updateAnimal = stringAnimals[0];
console.log(updateAnimal);

console.log(stringAnimals[1] = 'Loro Actualizado');
console.log(stringAnimals[2] = 'Lorito Actualizado');
console.log('--------------------------------------');
console.log('--------------------------------------');

/* Declarar Arreglo Unidimensional (NUMBERS)*/
let numbers = [1, 2, 3];
console.log(numbers);

/* Mostrar Valores del arreglo Unidimensional De Forma Manual*/
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

/* Actualizar Contenido De Un Arreglo De Forma Manual */
console.log('Valor Actualizado', numbers[0] = 11);
console.log('Valor Actualizado', numbers[1] = 12);
console.log('Valor Actualizado', numbers[2] = 13);
console.log('--------------------------------------');
console.log('--------------------------------------');

/* Declarar Arreglo Unidimensional (DIFERENTES TIPOS DE DATOS)*/
let MixArray = [1, 'mascota', true];
console.log(MixArray);

/* Mostrar Valores del arreglo Unidimensional De Forma Manual*/
console.log(MixArray[0]);
console.log(MixArray[1]);
console.log(MixArray[2]);

/* Actualizar Contenido De Un Arreglo De Forma Manual */
console.log('Valor Actualizado', MixArray[0] = 111);
console.log('Valor Actualizado', MixArray[1] = 'Otra Mascota');
console.log('Valor Actualizado', MixArray[2] = false);
console.log('--------------------------------------');
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

/* Acceder a un ARRAY DE OBJETOS */
usuarioPosicionCero = users[0].name;
console.log('Name =>', usuarioPosicionCero);

console.log('Age =>', users[0].age);
console.log('Name =>', users[1].name);
console.log('Age =>', users[1].age);
console.log('Name =>', users[2].name);
console.log('Age =>', users[2].age);

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
    /* Object Two Objeto Vacio*/
    {},
    /* Object Three */
    {
        name: 'Fernando',
        age: 32
    }
];
console.log(usersTwo);

/* Acceder a un ARRAY DE OBJETOS */
console.log('Name =>', usersTwo[0].name);
console.log('Age =>', usersTwo[0].age);
console.log('Wife =>', usersTwo[0].wife);
console.log('Son =>', usersTwo[0].son);
console.log('Daugther =>', usersTwo[0].daugther);

console.log('Array De ObJETO vACIO => ', usersTwo[1]);

console.log('Name => ', usersTwo[2].name);
console.log('Age => ', usersTwo[2].age);

/* Actualizar Un Array De Objetos (Json) */
console.log('Array De ObJETO vACIO ACTUALIZADO => ', usersTwo[1].name = 'Daniel Fernando');
console.log('Array De ObJETO vACIO ACTUALIZADO => ', usersTwo[1].age = 50);

console.log('Name => ', usersTwo[2].name = 'Nuevo Fernando');
console.log('Age => ', usersTwo[2].age = 'Nueva Edad 42');
console.log('--------------------------------------');
console.log('--------------------------------------');