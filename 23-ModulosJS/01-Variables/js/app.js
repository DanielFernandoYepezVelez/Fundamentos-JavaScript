/* Importar Forma #1 */
// import { nombreCliente, apellidoCliente } from './cliente.js';
/* Importar Forma #2 */
// import { ahorroCliente } from './cliente.js';
/* Importar Forma #3 (Cuando quiero importar muchas variables u otros valores)*/
import * as cliente from './cliente.js';

/* El Alias cliente es un symbol */
console.log(cliente);

/* Forma con destructuring */
const { nombreCliente, apellidoCliente, ahorroCliente } = cliente

console.log(nombreCliente);
console.log(apellidoCliente);
console.log(ahorroCliente);

/* Forma Convencional */
console.log(cliente.nombreCliente);
console.log(cliente.apellidoCliente);
console.log(cliente.ahorroCliente);
// console.log(mostrarInformacion(nombreCliente, apellidoCliente, ahorroCliente));