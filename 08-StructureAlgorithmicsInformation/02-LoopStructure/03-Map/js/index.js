/* Map lo utilizo para recorrer un array de
objetos */
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitar' },
    { id: 4, producto: 'Disco' }
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});
console.log(nombreProducto);

const nombreProducto2 = carrito.map(element => element.producto);
console.log(nombreProducto2);
console.log('--------------------------------');