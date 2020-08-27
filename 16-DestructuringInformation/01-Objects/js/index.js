const persona = {
    nombre: "Daniel Fernando",
    apellidos: "Yepez Velez",
    tipo: "Gold"
}

/* Accediendo Al Objeto De Forma Normal */
const nombre = persona.nombre;
const apellidos = persona.apellidos;
const tipo = persona.tipo;
console.log(`Forma Normal => ${nombre}`);
console.log(`Forma Normal => ${apellidos}`);
console.log(`Forma Normal => ${tipo}`);

/* Accediendo Al Objeto De Forma Poco Conocida */
console.log(`Forma POCO CONOCIDA, PERO IMPORTANTE => ${persona['nombre']}`);
console.log(`Forma POCO CONOCIDA, PERO IMPORTANTE => ${persona['apellidos']}`);
console.log(`Forma POCO CONOCIDA, PERO IMPORTANTE => ${persona['tipo']}`);

/* Accediendo Al Objeto Con Destructuring */
/* Cambio El Nombre De Las Constantes Para Que No Me Presente Conflicto, Pero El Valor
De Dichas Constantes Es El Mismo Del Objeto Literal Persona */
const { nombreCliente = nombre, apellidosCliente = apellidos, tipoCliente = tipo } = persona;
console.log(`Forma Destructurada => ${nombreCliente}`);
console.log(`Forma Destructurada => ${apellidosCliente}`);
console.log(`Forma Destructurada => ${tipoCliente}`);
console.log('---------------------------------------------');

/* OTRO EJEMPLO Accediendo Al Objeto Con Destructuring */
const cliente = {
    Nombre: 'Daniel Fernando Cliente',
    Apellidos: 'Yepez Velez Cliente',
    Tipo: 'Gold Cliente'
}

const { Nombre, Apellidos, Tipo } = cliente;
console.log(`Forma Destructurada => ${Nombre}`);
console.log(`Forma Destructurada => ${Apellidos}`);
console.log(`Forma Destructurada => ${Tipo}`);
console.log('----------------------------------');

/* Al Aplicar Destructuring Yo Puedo Asignar Valores Por Defecto Como En Los Parametros De Un Función */
const objectDefault = {
    uno: 'uno',
}

const { uno, dos = 'dos', tres = 3, cuatro = 4 } = objectDefault;
console.log('Destructurando Valores Por Defecto =>', uno);
console.log('Destructurando Valores Por Defecto =>', dos);
console.log('Destructurando Valores Por Defecto =>', tres);
console.log('Destructurando Valores Por Defecto =>', cuatro);
console.log('----------------------------------');

/* Accediendo A Objetos Anidados Con Destructuring */
const objetoUno = {
    name: "Daniel Fernando Uno",
    lastName: "Yepez Velez Uno",
    objetoUnoIntro: {
        introName: 'Daniel Fernando Intro',
        introLastName: "Yepez Velez Intro"
    },
    objetoDosIntro: {
        otherName: 'Daniel Fernando Dos',
        otherLastName: "Yepez Velez Dos"
    }
}
console.log(objetoUno);

const { name, objetoUnoIntro: { introName }, objetoDosIntro: { otherName } } = objetoUno;
const { lastName, objetoUnoIntro: { introLastName }, objetoDosIntro: { otherLastName } } = objetoUno

console.log('Destructuring Objeto Anidado => ', name);
console.log('Destructuring Objeto Anidado => ', introName);
console.log('Destructuring Objeto Anidado => ', otherName);
console.log('Destructuring Objeto Anidado => ', lastName);
console.log('Destructuring Objeto Anidado => ', introLastName);
console.log('Destructuring Objeto Anidado => ', otherLastName);
console.log('---------------------------------------------------');