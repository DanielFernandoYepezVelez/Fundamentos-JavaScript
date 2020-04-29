// /* Importar Forma #1 */
// import { nombre, ahorro, Cliente } from './cliente.js';

// let cliente = new Cliente(nombre, ahorro);
// console.log(cliente);
// console.log(cliente.mostrarInfo());
// console.log('-------------------------');

/* Importar Forma #2 */
import * as clientes from './cliente.js';

let cliente2 = new clientes.Cliente(clientes.nombre, clientes.ahorro);

console.log(cliente2);
console.log(cliente2.mostrarInfo());
console.log('-------------------------');

/* Utilizando Destructuring Para La Clase y las Variables */
const { Cliente, nombre, ahorro } = clientes;

let cliente3 = new Cliente(nombre, ahorro);
console.log(cliente3);
console.log(cliente3.mostrarInfo());
console.log('-------------------------');