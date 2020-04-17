const arrowFunction = () => {
    console.log('Primer Arrow Function');
    console.log('-------------------');
}
arrowFunction();

const unaLinea = () => console.log('Arrow Function De Una Sola Linea');
unaLinea();
console.log('-------------------');

const arrowSinclg = () => 'Arrow Function Sin Console.log';
console.log(arrowSinclg());
console.log('-------------------');

/* Siempre que se ponen las llaves se debe retornar el valor con la palabra return */
const suma = (numero1, numero2) => {
    if (numero1 === 3) {
        return numero1 + numero2;
    }

    console.log('Esto No se ejecuta si se dispara el primer return, por que al retornar algo, se cancela el flujo de la ejecución');

    return numero2
}
console.log('Suma => ', suma(2, 3));
console.log('-------------------');

/* Guardar Una funcion en una variable */
let resultado = suma(3, 10);
console.log('Suma Desde Una Variable => ', resultado);
console.log('-------------------');

/* RETORNANDO UN OBJETO(Se ponen los parentesis) */
const arrowFunctionObject = () => ({ objeto: 'Arrow Function Renderizando Objeto' });
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