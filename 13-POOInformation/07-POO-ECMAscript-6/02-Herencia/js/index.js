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

/* APLICANDO HERENCIA EN SU MAXIMA EXPRESION */
class Empresa extends Cliente {
    constructor(nombres, apellidos, saldo, telefono, pais) {
        super(nombres, apellidos, saldo);
        this.telefono = telefono;
        this.pais = pais;
    }
}

/* Instanciando Las Clases */
const clienteUno = new Cliente('Daniel Fernando', 'Yepez Velez', 120000);
const empresaUno = new Empresa('Udemy', 'Inc', 1000000, '5475858', 'U.S.A');

console.log(clienteUno);
console.log(empresaUno); //HERENCIA
console.log('------------------------------');

console.log(clienteUno.imprimirSaldo());
console.log(empresaUno.imprimirSaldo()); //HERENCIA
console.log('------------------------------');

console.log(clienteUno.tipoCliente());
console.log(empresaUno.tipoCliente()); //HERENCIA
console.log('------------------------------');

console.log(clienteUno.retirarSaldo(20000));
console.log(empresaUno.retirarSaldo(200000)); //HERENCIA
console.log('------------------------------');

/* EJECUTANDO EL METODO STATIC */
/* Se ejecuta solo con el nombre de la clase, no tienes la necesidad de instanciar la clase para crear un nuevo Objeto */
console.log(Cliente.Bienvenido(clienteUno.nombres, clienteUno.apellidos));
console.log(Empresa.Bienvenido(empresaUno.nombres, empresaUno.apellidos)); //HERENCIA
console.log('------------------------------');

/* NOTA PARA REESCRIBIR LOS METODOS SOLO COPIO Y PEGO PARA QUE SELLAMEN IGUALES Y EN SU INTERIOR ESCRIBO LA NUEVA FUNCIONALIDAD(ESTO ES COMO POLIMORFISMO PERO EN JAVASCRIPT ESO NO EXISTE) */