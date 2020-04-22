/* Creamos un objeto(Clases) SET */
const carrito = new Set();

/* Agregando Valores A la lista de los sets */
carrito.add('Camiseta');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
/* DUPLICADO */
carrito.add('Disco #3');

/* Mostrado El Set */
console.log(carrito);
console.log('Longitud =>', carrito.size);
console.log('---------------------------------------');

/* Creando e inicializando un SET */
const numeros = new Set([1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numeros);
console.log('Longitud =>', numeros.size);
console.log('---------------------------------------');

/* Comprobar que un valor exista dentro del SET */
/* Me retorna un valor booleano */
console.log('Existe =>', carrito.has('Camiseta'));
console.log('NO Existe => ', carrito.has('Guitarra'));
console.log('---------------------------------------');

/* Eliminar un valor de un SET() */
carrito.delete('Disco #3')
console.log('Eliminando Disco #3 =>', carrito);
console.log('---------------------------------------');

/* Los SETS() Se pueden iterar con los forEach */
carrito.forEach(elemento => {
    console.log('Iterador => ', elemento);
});

/* Las llaves y los valores son lo mismo */
carrito.forEach((elemento, index) => {
    console.log(index, elemento);
});
console.log('---------------------------------------');

/* Convertir un set a un Arreglo PURO */
const arregloCarrito = [...carrito];
console.log('Conversión =>', arregloCarrito);
console.log('---------------------------------------');

/* Limpiar un SET() Por completo el segundo SET() creado*/
numeros.clear();
console.log('Limpiando SET => ', numeros);
console.log('---------------------------------------');