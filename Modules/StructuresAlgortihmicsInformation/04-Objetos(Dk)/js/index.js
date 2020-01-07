/* Declaración Object */
let goku = {
    name: 'San Goku',
    wife: 'Milk',
    age: 26,
    son: true
}

/* Para Acceder a los mismos
atributos o metodos de un objeto
utilizo la palabra this */
const personaDos = {
    name: 'Daniel Fernando',
    lastName: 'Yepez Vélez',
    profession: 'Development',
    email: 'danipez.02@gmail.com',
    age: 27,
    music: ['Trance', 'Rock', 'Country'],
    nacimiento: function() {
        return new Date().getFullYear() - this.age;
    }
}

/* Object Complete */
console.log(goku);
console.log('tipo de dato: ', typeof goku);
console.log('-----------------------------------------');

/* Object Complete */
personaDos.music.push('NuevoAlternativo');
console.log(personaDos);
console.log(personaDos.nacimiento());
console.log('tipo de dato: ', typeof personaDos);
console.log('-----------------------------------------');

/* Mostrar Object Numbre #1 */
console.log(goku.name);
console.log(goku.wife);
console.log(goku.age);
console.log(goku.son);
console.log('-----------------------------------------');

/* Mostrar Object Number #2 (DESTRUCTURE OBJECT)*/
const { name, wife, age, son } = goku;
console.log(name);
console.log(wife);
console.log(age);
console.log(son);
console.log('-----------------------------------------');

/* Update Properties Object  */
goku.name = 'Kakaroto';
goku.wife = 'Bulma';
goku.age = 40;
goku.son = false;

console.log(goku.name);
console.log(goku.wife);
console.log(goku.age);
console.log(goku.son);
console.log('-----------------------------------------');

/* Add Properties New Object */
goku.IsHuman = false;
goku.IsIntelligent = false;
goku.IsSayayin = true;

console.log(goku.name);
console.log(goku.wife);
console.log(goku.age);
console.log(goku.son);
console.log(goku.IsHuman);
console.log(goku.IsIntelligent);
console.log(goku.IsSayayin);
console.log('-----------------------------------------');

/* Delete properties Object */
delete goku.IsIntelligent;
console.log(goku.name);
console.log(goku.wife);
console.log(goku.age);
console.log(goku.son);
console.log(goku.IsHuman);

if (!goku.IsIntelligent) {
    console.log('No existe La propiedad goku.IsIntelligent')
} else {
    console.log(goku.IsIntelligent);
}

console.log(goku.IsSayayin);
console.log('-----------------------------------------');

/* Objeto que contiene otro objeto u otros objetos como propiedades */
let gohan = {
    name: 'Gohan',
    age: 18
}

let milk = {
    name: 'Milk',
    isTerricola: true,
    husband: goku,
    son: gohan
}

console.log(milk);
console.log('-----------------------------------------');

/* Objeto que contiene otro objeto u otros objetos como propiedades 
Además, se puede agregar un objeto Directamente */
let milk2 = {
    name: 'Milk',
    isTerricola: true,
    husband: goku,
    son: gohan,
    padre: {
        name: 'Ms Satan',
        mother: false,
        brother: false,
        sister: false
    }
}

console.log(milk2);
console.log('-----------------------------------------');

/* Declaracion de objetos vacios, Como los que se 
aplican en nodeJS, para tener encuenta!! */
let objetoVacio = {};
console.log('objetoVacio =>', objetoVacio);
console.log('-----------------------------------------');

/* Agregando Propiedad Al objeto Vacio */
objetoVacio.propiedad = 'Primera Propiedad Del Objeto Vacio';
console.log(objetoVacio);
console.log('-----------------------------------------');