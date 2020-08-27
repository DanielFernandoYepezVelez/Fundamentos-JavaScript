/* Congelar un objeto 
Nos sirve para que ninguna propiedad del objeto se modifique */

const producto = {
    nombre: 'Producto Uno',
    precio: 200
}

Object.freeze(producto);
/* No es permitido gracias a el metodo freeze */
producto.precio = 400;
producto.NuevoPrecio = 600;
delete producto.precio;

/* Para saber si un objeto esta congelado o no,
retorna un true o un false */
console.log(Object.isFrozen(producto));

/* ------------------------------------------------------------------ */

/* Sellar un objeto
Es muy similar al anterior(superior), lo unico que cambia
es que permite moficiar las propiedades existentes, pero no
es permitido agregar nuevas o eliminar existentes(propiedades) */

const productoDos = {
    nombre: 'Producto Dos',
    precio: 200
}

Object.seal(productoDos);
/* SI es permitido gracias a el metodo seal */
productoDos.precio = 400;

/* No es permitido gracias a el metodo seal */
productoDos.precioDos = 800;
delete productoDos.precio;

/* Para saber si un objeto esta congelado o no,
retorna un true o un false */
console.log(Object.isSealed(productoDos));
/* ------------------------------------------------------------------ */

/* Unir dos objetos */
const objetoUno = {
    nombre: 'Objeto Uno'
}

const objetoDos = {
    nombre: 'Objeto Dos'
}

const resultado = Object.assign(objetoUno, objetoDos);

/* Esto Tambien Se puede ejecutar con el Spread Operator */
const resultado2 = {...objetoUno, ...objetoDos };

console.log(resultado);
console.log(resultado2);
/* ------------------------------------------------------------------ */

/* Object Keys */
/* Devuelve el nombre de las propiedades(Llaves) definidas en el objeto */
console.log(Object.keys(producto));

/* Object Values */
/* Devuelve el valor del nombre de las propiedades(Llaves) definidas en el objeto */
console.log(Object.values(producto));

/* Object Entries */
/* Devuelve el nombre con su respectivo valor de las propiedades(Llaves) definidas en el objeto */
console.log(Object.entries(producto));