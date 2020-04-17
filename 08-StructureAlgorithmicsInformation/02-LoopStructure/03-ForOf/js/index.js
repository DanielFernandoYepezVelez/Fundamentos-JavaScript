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