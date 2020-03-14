let natalia = {
  nombre: 'Natalia',
  apellido: 'Perez',
  edad: 22,
  altura: 1.68
}

let andrea = {
  nombre: 'Andrea',
  apellido: 'Lopez',
  edad: 27,
  altura: 1.62
}

let vicky = {
  nombre: 'Vicky',
  apellido: 'Yepez',
  edad: 25,
  altura: 1.80
}

let carlos = {
  nombre: 'Carlos',
  apellido: 'Castro',
  edad: 19,
  altura: 1.80
}

let santiago = {
  nombre: 'Santiago',
  apellido: 'Rosellon',
  edad: 30,
  altura: 1.69
}

//const condicionPersonasAltas = personasAltas => personasAltas.altura >= 1.8;
const condicionPersonasAltas = ({ altura }) => altura >= 1.8;

// const condicionPersonasBajas = personasBajas => personasBajas.altura <= 1.7;
const condicionPersonasBajas = ({ altura }) => altura <= 1.7;

let personas = [natalia, andrea, vicky, carlos, santiago];

// Más prolijo.
let personasAltas = personas.filter(condicionPersonasAltas);
let personasBajas = personas.filter(condicionPersonasBajas);

// Tambien se puede ver asi pero es menos prolijo.
// let personasAltas = personas.filter(function(personasAltas){
//   return personasAltas.altura >= 1.8;
// });

console.log(personasAltas);
console.log(personasBajas);