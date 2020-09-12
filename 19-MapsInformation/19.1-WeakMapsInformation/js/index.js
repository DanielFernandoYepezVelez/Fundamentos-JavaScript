/* Intanciar La Clase U Objeto WeakMap() */
const weakMap = new WeakMap();
console.log(weakMap);
console.log('-------------------------------');

/* Creando El Producto */
const producto = {
    id: 10
}

const productoTwo = {
    id: 22
}

console.log(producto);
console.log(productoTwo);
console.log('-------------------------------');

/* Agregando Un Elemento AL WeakMap */
weakMap.set(producto, 'Monitor');
weakMap.set(productoTwo, 'Impresora');

console.log(weakMap);
console.log('-------------------------------');

/* Obtener Un Valor Del WeakMap */
console.log(weakMap.get(producto));
console.log('-------------------------------');

/* Comprobando Si Existe El Objeto */
const comprobando = weakMap.has(producto);
const comprobandoTwo = weakMap.has(productoTwo);

console.log(comprobando);
console.log(comprobandoTwo);
console.log('-------------------------------');

/* Eliminando Un Elemento Del WeakSet */
const elimiando = weakMap.delete(productoTwo);
console.log(elimiando);
console.log('-------------------------------');