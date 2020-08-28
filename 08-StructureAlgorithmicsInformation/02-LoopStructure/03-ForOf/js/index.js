/* Itera El Numero de Elementos Que Existan En El Array */
let names = ['Paco', 'Jose', 'Paula', 'Maria'];

/* Se debe asignar un nombre tipo llave, para recorrer el arreglo y obtener el valor de cada posición */
for (let name of names) {
    console.log('Valor Obtenido =>', name);
}
console.log('---------------------------');

/* Estamos utilizando este ciclo dentro de un objeto, pero para una propiedad de tipo array */
const person = {
    name: 'Daniel',
    age: 27,
    sons: ['Laura', 'Martin', 'Rosa', 'Maria']
}

for (const son of person.sons) {
    console.log(`Nombre Objeto Obtenido => ${son}`);
}
console.log('---------------------------');

/* Array De Objetos */
const personas = [{
        name: 'Daniel',
        age: 27,
        sons: ['Laura', 'Martin', 'Rosa', 'Maria']
    },
    {
        name: 'Daniel 2',
        age: 32,
        sons: ['Laura 2', 'Martin 2', 'Rosa 2', 'Maria 2']
    }
]

for (let persona of personas) {
    console.log(persona);
    // console.log(persona.sons);
}
console.log('---------------------------');

for (let persona of personas[0].sons) {
    console.log(persona);
}
console.log('---------------------------');

for (let persona of personas[1].sons) {
    console.log(persona);
}
console.log('---------------------------');