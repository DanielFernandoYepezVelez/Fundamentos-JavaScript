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