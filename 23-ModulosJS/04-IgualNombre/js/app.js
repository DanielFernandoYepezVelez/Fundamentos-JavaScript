/* Importar Forma #1 */
import { nombre, ahorro, mostrarInfo } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInfo as mostrarInformacion } from './empresa.js';

console.log(nombre);
console.log(nombreEmpresa);

console.log('Cliente', ahorro);
console.log('Udemy', ahorroEmpresa);
console.log(categoria);

console.log(mostrarInfo(nombre, ahorro));
console.log(mostrarInformacion(nombreEmpresa, ahorroEmpresa, categoria));
console.log('------------------------------------------------------------------');

/* Importar Forma #2 */
import * as clientes from './cliente.js';
import * as empresas from './empresa.js';

console.log(clientes);
console.log(empresas);

console.log('Cliente', clientes.ahorro);
console.log('Udemy', empresas.ahorro);
console.log(empresas.categoria);

console.log(clientes.mostrarInfo(clientes.nombre, clientes.ahorro));
console.log(empresas.mostrarInfo(empresas.nombreEmpresa, empresas.ahorroEmpresa, empresas.categoria));
console.log('------------------------------------------------------------------');