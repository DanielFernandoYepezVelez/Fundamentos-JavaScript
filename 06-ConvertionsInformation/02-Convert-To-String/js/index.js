/* Number Original */
let number = 10;

/* Number a String */
console.log(number, typeof number, typeof String(number), String(number));
console.log('--------------------------------------------');

/* Array A String */
let numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers, typeof String(numbers), String(numbers));
console.log('--------------------------------------------');

/* Objecto A String */
/* Cuando se pasa a string no se muestran los valores */
let names = {
    name1: 'Juan',
    name2: 'Carlos',
    name3: 'Arturo'
}
console.log(names, typeof names, typeof String(names), String(names));
console.log('--------------------------------------------');