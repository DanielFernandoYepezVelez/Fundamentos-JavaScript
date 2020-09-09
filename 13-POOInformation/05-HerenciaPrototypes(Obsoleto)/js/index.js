/* CREANDO UN OBJETO CONSTRUCTOR PADRE*/
function Cliente(nombre, saldo) {
    /* Atributos */
    this.nombre = nombre;
    this.saldo = saldo;
}

/* Creando Prototype Del Objeto Padre */
Cliente.prototype.datos = function() {
    return `Nombre: ${this.nombre} tiene un salario de: ${this.saldo} pesos Colombianos.`;
}

/* APLICANDO HERENCIA EN SU MAXIMA EXPRESION DE LOS ATRIBUTOS DEL OBJETO PADRE */
/* Creando Objeto Hijo */
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

/* APLICANDO HERENCIA EN SU MAXIMA EXPRESION DE LOS PROTOTYPES DEL OBJETO PADRE*/
/* Creando Prototype Del Objeto Hijo Y A Su Vez, Heredando Del Prototype Del Objeto PADRE */
Empresa.prototype = Object.create(Cliente.prototype);

/* Instanciando Los Objetos */
const clienteUno = new Cliente('Daniel Fernando', 1200);
console.log(clienteUno);
console.log(clienteUno.datos());
console.log('-----------------------------------------');

const empresaUno = new Empresa('Udemy', 1110000, '5673939', 'Gold');
console.log(empresaUno);
console.log(empresaUno.datos()); //HERENCIA
console.log('-----------------------------------------');