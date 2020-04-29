import { Cliente } from './cliente.js';

export const nombreEmpresa = 'Udemy';
export const ahorro = 200000000;
export const categoria = 'Aprendizaje';

/* Utilizar la clase del cliente */

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInfo = () => {
        return `Empresa ${this.nombre} Ahorro $${this.ahorro} Y Su Categoria Es ${this.categoria}`;
    }
}