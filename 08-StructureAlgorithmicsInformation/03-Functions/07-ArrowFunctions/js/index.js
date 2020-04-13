let funcionNormal;
funcionNormal = function() {
    console.log('Función Normal');
    console.log('-------------------');
}
funcionNormal();

let arrowFunction;
arrowFunction = () => {
    console.log('Primer Arrow Function');
    console.log('-------------------');
}
arrowFunction();

let unaLinea;
unaLinea = () => console.log('Arrow Function De Una Sola Linea');
unaLinea();
console.log('-------------------');

let arrowSinclg;
arrowSinclg = () => 'Arrow Function Sin Console.log';
console.log(arrowSinclg());
console.log('-------------------');

/* RETORNANDO UN OBJETO */
let arrowFunctionObject;
arrowFunctionObject = () => ({ objeto: 'Arrow Function Renderizando Objeto' });
console.log(arrowFunctionObject());
console.log('-------------------');

/* CallBack Tipo Arrow Function De Una Sola Linea */
const productos = ['Disco', 'Camisa', 'Guitarra'];

// const letrasProductos = productos.map(function(producto) {
//     return producto.length;
// });
const letrasProductos = productos.map(producto => producto.length);
console.log(letrasProductos);
console.log('-------------------');

/* ForEach De Tipo Arrow Function */
productos.forEach(producto => console.log(producto));
productos.forEach(producto => console.log(producto.length));