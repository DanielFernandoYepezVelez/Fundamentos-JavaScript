/* Esto estaria dentro de un ciclo, donde a y b son parejas de numeros, es decir, va comparando 1 con 3, 3 con 56, 56 con 78, 78 con 99 y asi sucesivamente Y las diferentes devoluciones de la función permiten saber donde ordenar los numeros, tanto Ascendente como descendente. */

/* De Menor A Mayor
if(a-b < 0) return -1;
if(a-b > 0) return 1;
if(a == b) return 0;

De Mayor A Menor
if(b-a < 0) return -1;
if(b-a > 0) return 1;
if(b == a) return 0;
*/

/* Ordenar números con el método .sort(callback(opcional)) */
const numbersOrder = [1, 3, 56, 78, 99, 33, 4, 5, 6, 7, 8, 9];

/* De Menor A Mayor */
numbersOrder.sort((a, b) => a - b);
console.log(numbersOrder);

/* De Mayor A Menor */
numbersOrder.sort((a, b) => b - a);
console.log(numbersOrder);

/* Ordenar Alfabeticamente */
const ordenarAlfabeticamente = ['z', 'k', 'a', 'y', 'o', 'b', 'c', 'l', 'p', 'q'];

const orden = ordenarAlfabeticamente.sort();
console.log(orden);
console.log('--------------------------------------');

/* ForEach */
numbersOrder.forEach((number, index) => console.log(index, ' <=> ', number));
console.log('--------------------------------------');

/* Find */
const nuevosNumeros = [1, 2, 3, 4, 10, 12, 13];
const numberNew = nuevosNumeros.find(element => element > 10);
console.log('Find() =>', numberNew);

/* FindIndex */
const newIndex = nuevosNumeros.findIndex(number => number > 10);
console.log('FindIndex() =>', newIndex);
console.log('--------------------------------------');

/* Some */
const words = ['HTML', 'CSS3', 'JavaScript'];
console.log(words.some(word => word.length > 2));
console.log('--------------------------------------');

/* Every */
console.log(words.every(word => word.length > 4));
console.log('--------------------------------------');

/* map */
const numbers2 = numbersOrder.map(number => number * 2);
console.log(numbers2);
console.log('--------------------------------------');

/* filter */
const number3 = numbers2.filter(number => {
    return number > 100
});
console.log(number3);
console.log('--------------------------------------');

/* reduce */
/* Tambien Lo hace atraves de pares como .sort() */
/* OJO, puedo iniciar el valor al lado de la función tipo
callback por eso sale la suma del array + el 1000 */
console.log(numbersOrder.reduce((a, b) => {
    return a + b
}, 1000));
console.log('--------------------------------------');