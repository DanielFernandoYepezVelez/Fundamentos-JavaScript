/* Declaración Object */
let goku = {
    name: 'San Goku',
    wife: 'Milk',
    age: 26,
    son: true
}

/* Object Complete */
console.log(goku);
console.log('tipo de dato: ', typeof goku);
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