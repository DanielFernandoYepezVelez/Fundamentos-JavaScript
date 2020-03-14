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

/* Aqui definimos un array hijo de referencia para definir la longitud 
de la fila del array padre */
const arrayBidimensional = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];
let acSuma = 0;

function showArrayBidimensional(arrayBidimensionalRecibido) {

    for (let i = 0; i < arrayBidimensionalRecibido.length; i++) {

        let arrayHijo = arrayBidimensionalRecibido[i];

        for (let j = 0; j < arrayHijo.length; j++) {
            acSuma += arrayHijo[j];
        }
    }

    return acSuma;
}
console.log(showArrayBidimensional(arrayBidimensional));
console.log('-----------------------------------------');