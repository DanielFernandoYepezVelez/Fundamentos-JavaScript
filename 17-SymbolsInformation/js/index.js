/* Los Symbols No Se Instancian Con El New Y Cada Symbol Es Diferente */
const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('Son Iguales');
} else {
    console.log('Son Diferentes');
}

/* Crear Un Objeto Persona */
let persona = {};

/* Propiedades Del Objeto Persona */
persona.nombre = 'Daniel Fernando';
persona.apellido = 'Yepez Velez';
persona.edad = 27;

console.log(persona);
console.log('----------------------------------------');

/* Symbols Se Conoce Como Propiedades Privadas, por que no se puede acceder a ellas si no es de forma explicita */
/* Creando Las Propiedades Tipo Symbol */
const nombre = Symbol();
const apellido = Symbol();
const edad = Symbol();

/* Creando Lo Valores De La Propiedades Tipo Symbol */
persona[nombre] = 'Daniel Fernando Symbol';
persona[apellido] = 'Yepez Velez Symbol';
persona[edad] = '27 Symbol';

/* Los iteradores No Muestran Las Propiedades Tipo Symbol, Por Que Los Symbols, No Son
Iterables */
for (const i in persona) {
    console.log(`${i}: ${persona[i]}`);
}
console.log('----------------------------------------');

/* Aqui Puedo Acceder a las propiedades tipo symbol del objeto persona */
console.log(persona[nombre]);
console.log(persona[apellido]);
console.log(persona[edad]);
console.log('----------------------------------------');

/* Definir La Descripción De Un Symbol() */
const nombreCliente = Symbol('Nombre Del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(nombreCliente);
console.log(cliente[nombreCliente]);
console.log('----------------------------------------');