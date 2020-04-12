/* Crear Función Que Simula Una Clase */ /* Esta forma es mejor que el objeto literal, por que se le pueden pasar parametros que simulan ser el constructor de una clase, pero aqui tambien se esta simulando una clase, la diferencia que ya no es un bjeto literal sino, una función. */

function Cliente(nombres, apellidos, saldo) {
    /* Atributos */
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.saldo = saldo;

    /* Metodos */
    this.tipoCliente = function() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    };
}

/* Instancio o creo los objetos de La clase(Function) Cliente */
const clienteUno = new Cliente('Daniel Fernando', 'Yepez Velez', 1200);
const clienteDos = new Cliente('Daniel Fernando Dos', 'Yepez Velez Dos', 501);

/* OBJETO UNO */
console.log('OBJETO UNO');
console.log(clienteUno);
console.log(clienteUno.nombres);
console.log(clienteUno.apellidos);
console.log(clienteUno.saldo);
console.log(clienteUno.tipoCliente());
console.log('-------------------------------------------------------');

/* OBJETO DOS */
console.log('OBJETO DOS');
console.log(clienteDos);
console.log(clienteDos.nombres);
console.log(clienteDos.apellidos);
console.log(clienteDos.saldo);
console.log(clienteDos.tipoCliente());
console.log('-------------------------------------------------------');