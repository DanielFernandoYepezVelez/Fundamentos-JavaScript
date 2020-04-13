/* Crear Un Objeto Literal */
/* Este Objeto Es La Simulación De Una Clase, Donde Se Encuentran Los Atributos Y Los Metodos del objeto cliente, Aunque existen mejores formas de hacerlo gracias A ECMAScript #6 en adelante. */
const cliente = {
    /* Atributos */
    nombres: 'Daniel Fernando',
    apellidos: 'Yepez Velez',
    saldo: 1200,

    /* Métodos */
    tipoCliente: this.tipoCliente,
    tipoCliente: function() {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

/* No Se puede instanciar o crear objetos por que no tiene el metodo constructor */
/* Atributos */
console.log('Objeto, Simulación Clase =>', cliente);
console.log('Objeto, Simulación Clase =>', cliente.nombres);
console.log('Objeto, Simulación Clase =>', cliente.apellidos);
console.log('Objeto, Simulación Clase =>', cliente.saldo);

/* Métodos O Funciones */
console.log('Objeto, Simulación Clase =>', cliente.tipoCliente());