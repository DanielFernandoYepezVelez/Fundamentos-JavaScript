/* Creando Un WeakSet */
const weakSet = new WeakSet();
console.log(weakSet);
console.log('----------------------\n');

/* Objeto Como Parametro */
const objetoPersona = {
    name: 'Daniel Fernando',
    lastName: 'Yepez Vélez',
    age: 27
}
console.log(objetoPersona);
console.log('----------------------\n');

/* Agregando Un Nuevo WeakSet */
weakSet.add(objetoPersona);
console.log('----------------------\n');

/* Mostrando El WeakSet */
console.log(weakSet);
console.log('----------------------\n');

/* Compronado Si Existe El Elemento En El WeakSet */
const comprobando = weakSet.has(objetoPersona);
console.log(comprobando);
console.log('----------------------\n');

/* ------------------------------------------------------ */
/* Eliminando Un Elemento Del WeakSet */
const weakSetTwo = new WeakSet();

/* Objeto Como Parametro */
const objetoPersonaTwo = {
    name: 'Daniel Fernando',
    lastName: 'Yepez Vélez',
    age: 27
}

/* Agregando Elemento Al WeakSetTwo*/
weakSetTwo.add(objetoPersonaTwo);

/* Eliminación Definitiva */
const eliminando = weakSetTwo.delete(objetoPersonaTwo);
console.log(eliminando);
console.log('----------------------\n');