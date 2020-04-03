/* CREANDO UN OBJETO */
function Cliente(nombre, saldo) {
    /* Atributos */
    this.nombre = nombre;
    this.saldo = saldo;

    /* Métodos o Funciones */
    /* this.tipoCliente = function(constructorDelTipoCliente) {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Golden';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    } */
}

/* Creando Prototype Uno*/
Cliente.prototype.tipoCliente = function(prototypeDeClienteYconstructorDelPropioPrototipoCliente) {
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'Golden';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

/* Creando Prototype Dos */
Cliente.prototype.datos = function() {
    return `Nombre: ${this.nombre} tiene un salario de: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

/* Creando Prototype Tres */
Cliente.prototype.retiro = function(retiro) {
    return this.saldo -= retiro
}

/* Instanciando Los Objetos */
const clienteUno = new Cliente('Daniel Fernando', 1200);
const clienteDos = new Cliente('Camilo Franco', 700);
const clienteTres = new Cliente('Andres Felipe', 100);

console.log(clienteUno);
console.log(clienteDos);
console.log(clienteTres);
console.log('-------------------------------------');

console.log('Cliente #1 =>', clienteUno.tipoCliente());
console.log('Cliente #2 =>', clienteDos.tipoCliente());
console.log('Cliente #3 =>', clienteTres.tipoCliente());
console.log('-------------------------------------');


console.log('Cliente #1 =>', clienteUno.datos());
console.log('Cliente #2 =>', clienteDos.datos());
console.log('Cliente #3 =>', clienteTres.datos());
console.log('-------------------------------------');

console.log('Cliente Retiro Dienro #1 =>', clienteUno.retiro(100));
console.log('Cliente Retiro Dienro #2 =>', clienteDos.retiro(200));
console.log('Cliente Retiro Dienro #3 =>', clienteTres.datos());
console.log('-------------------------------------');