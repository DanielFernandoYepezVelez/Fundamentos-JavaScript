// /* Importar Forma #1 */
import { nombre, ahorro, Cliente } from './cliente.js';

import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, Empresa } from './empresa.js';

let cliente = new Cliente(nombre, ahorro);
console.log(cliente);
console.log(cliente.mostrarInfo());
console.log('-------------------------');

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa);
console.log(empresa.mostrarInfo());
console.log('-------------------------');