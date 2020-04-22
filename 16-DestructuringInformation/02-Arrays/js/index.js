const ciudades = ['Medellin', 'Nueva York', 'Los Angeles', 'Boston'];

console.log(ciudades);
/* Accediendo a un arreglo de forma normal */
/* MANUAL */
console.log('Obtenida Manual =>', ciudades[0]);
console.log('-----------------------------------------');

/* ITERABLE */
ciudades.forEach((ciudad) => {
    console.log('Obtenida Iterable =>', ciudad);
});
console.log('-----------------------------------------');

/* Accediendo a un arreglo de con destructuring */
const [PrimeraCiudad, SegundaCiudad, TerceraCiudad, CuartaCiudad] = ciudades;

console.log('Obtenido Destructuring =>', PrimeraCiudad);
console.log('Obtenido Destructuring =>', SegundaCiudad);
console.log('Obtenido Destructuring =>', TerceraCiudad);
console.log('Obtenido Destructuring =>', CuartaCiudad);
console.log('-----------------------------------------');

/* Accediendo a un arreglo de con destructuring en cualquier posición del array*/
/* Debo Poner , para que el entienda que posición es la que quiero en especifico */
const [, , , UltimaCiudad] = ciudades;

console.log('Obtenida Ultima Destructuring => ', UltimaCiudad);
console.log('-----------------------------------------');

/* Con destructuring tambien puedo pasar valores por defecto como en 
los parametros de una función y en el destructuring de un objeto */
const [, , , , finalCiudad = 'Miami Final'] = ciudades;
console.log('Default Destructuring =>', finalCiudad);
console.log('-----------------------------------------');

/* Accediendo con destructuring a un array con un objeto interno,
para acceder al valor final del objeto si se debe utilizar el (.) */
const newCiudades = ['Cochabanba', 'Lima', 'Santiago', {
    pais: 'Rusia',
    capital: 'Moscu'
}];

const [, , , ciudad] = newCiudades;

console.log(newCiudades);
console.log(ciudad);
console.log(ciudad.pais);
console.log(ciudad.capital);
console.log('----------------------------------------');

/* EJEMPLO AVANZADO */
const cliente = {
    tipo: 'Premium',
    saldo: 3000,
    datos: {
        nombre: 'Daniel Fernando',
        apellidos: 'Yepez Velez',
        residencia: {
            ciudad: 'Medellin'
        }
    },
    movimientos: ['12-03-2010', '12-03-2012', '12-03-2016']
}
console.log('Ojeto Completo =>', cliente);

/* Accediendo a los hijos directos del objeto padre que seria cliente, con destructuring */
const { tipo, saldo, datos, movimientos } = cliente;
console.log('Primera Capa Destructurada =>', tipo);
console.log('Primera Capa Destructurada =>', saldo);
console.log('Primera Capa Destructurada =>', datos);
console.log('Primera Capa Destructurada =>', movimientos);

/* Accediendo al hijo directo datos del objeto padre que seria cliente, pero al mismo tiempo datos es padre y lo hago con destructuring para un objeto */
const { datos: { nombre, apellidos, residencia } } = cliente;
console.log('Segunda Capa Destructurada =>', nombre);
console.log('Segunda Capa Destructurada =>', apellidos);
console.log('Segunda Capa Destructurada =>', residencia);

/* Accediendo con destructuring al array y en sus diferentes posiciòn que es hijo directo del objeto padre cliente */
const { movimientos: [primeraPosicion] } = cliente;
const { movimientos: [, segundaPosicion] } = cliente;
const { movimientos: [, , ultimaPosicion] } = cliente;
console.log('Array Destructuring => ', primeraPosicion);
console.log('Array Destructuring => ', segundaPosicion);
console.log('Array Destructuring => ', ultimaPosicion);