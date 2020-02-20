/* Special Operator typeof */
console.log(typeof 4);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof variableUndefinedNoExisteEnElPrograma);
console.log('----------------------------------');

/* Special Operator delete */
const persona = {
    name: 'Daniel Fernando',
    lastName: 'Yepez Velez'
};
console.log(persona);

/* Indico La Propiedad */
delete persona.name;

console.log(persona);
console.log('---------------------------------');

const heroes = ['Ironman', 'Thor', 'Batman'];
console.log(heroes);

/* Indico la posición */
delete heroes[1];

console.log(heroes);
console.log('---------------------------------');