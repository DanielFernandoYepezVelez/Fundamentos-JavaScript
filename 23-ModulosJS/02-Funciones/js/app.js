/* Importar Forma #1 */
// import { nombreCliente, apellidoCliente, mostrarInformacion } from './cliente.js';
/* Importar Forma #2 */
// import { mostrarInformacion } from './cliente.js';
/* Importar Forma #3 (Cuando quiero importar muchas variables u otros valores)*/
import * as cliente from './cliente.js';

/* El Alias cliente es un symbol */
console.log(cliente);

/* Forma con destructuring */
const { nombreCliente, apellidoCliente, ahorroCliente, aliasCliente, mostrarInformacion, mostrarAlias } = cliente;
console.log(nombreCliente);
console.log(apellidoCliente);
console.log(ahorroCliente);
console.log(aliasCliente);

/* Función Con Destructuring */
console.log(mostrarInformacion(nombreCliente, apellidoCliente, ahorroCliente));

console.log(mostrarAlias());
console.log('------------------------------------------');

/* Forma Convencional */
console.log(cliente.nombreCliente);
console.log(cliente.apellidoCliente);
console.log(cliente.ahorroCliente);
console.log(cliente.aliasCliente);

/* Función Forma Convencional */
console.log(cliente.mostrarInformacion(cliente.nombreCliente, cliente.apellidoCliente, cliente.ahorroCliente));

console.log(cliente.mostrarAlias());
console.log('------------------------------------------');