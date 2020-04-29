export const nombre = 'Daniel Fernando',
    ahorro = 300;

/* Exportar Una Clase */
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInfo() {
        return `Cliente ${this.nombre} ahorro $${this.ahorro}`;
    }
}