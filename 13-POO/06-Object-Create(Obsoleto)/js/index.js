/* OBJECT CREATE */
/* Es Una Nueva Forma De Crear Objetos Especificados */
const Persona = {
    imprimirDatos: function() {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },

    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

/* Asigno Valores Despues De La Instancia */
const mary = Object.create(Persona);
mary.nombre = 'Maira';
mary.saldo = 2000;
mary.retirarSaldo(700);

console.log(mary);
console.log(mary.imprimirDatos());