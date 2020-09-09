class Cliente {
    /* #propiedad Privada */

    constructor(nombres, apellidos, saldo) {
        /* this.#propiedadPrivada */
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola: ${this.nombres} ${this.apellidos}, Tu saldo es de ${this.saldo}.`;
    }

    tipoCliente() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = '´Platinum';
        } else {
            tipo = 'Común';
        }

        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }

    /* METODO STATIC */
    static Bienvenido(nombres, apellidos) {
        return `Bienvenido => ${nombres} ${apellidos}`;
    }
}

/* Instanciando Las Clases */
const clienteUno = new Cliente('Daniel Fernando', 'Yepez Velez', 120000);