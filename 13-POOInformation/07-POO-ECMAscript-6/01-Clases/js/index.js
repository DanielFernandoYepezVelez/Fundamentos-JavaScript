class Cliente {
    constructor(nombres, apellidos, saldo) {
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

const clienteUno = new Cliente('Daniel Fernando', 'Yepez Velez', 120000);

console.log(clienteUno);
console.log('------------------------------');

console.log(clienteUno.imprimirSaldo());
console.log('------------------------------');

console.log(clienteUno.tipoCliente());
console.log('------------------------------');

console.log(clienteUno.retirarSaldo(20000));
console.log('------------------------------');

/* EJECUTANDO EL METODO STATIC */
/* Se ejecuta solo con el nombre de la clase, no tienes la necesidad de instanciar la clase para crear un nuevo Objeto */
console.log(Cliente.Bienvenido(clienteUno.nombres, clienteUno.apellidos));
console.log('------------------------------');