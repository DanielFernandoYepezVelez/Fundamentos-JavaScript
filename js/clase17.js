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
  altura: 1.72
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
  altura: 1.70
}

let personas = [natalia, andrea, vicky, carlos, santiago];

// Accediendo de forma individual.
console.log(personas[0].altura,
'\n', personas[1]['nombre'],
'\n', personas[2].edad,
'\n', personas[3]['altura'],
'\n', personas[4].nombre);

// Accediendo de forma dinámica.
for(let i = 0; i < personas.length; i++)
{
  let persona = personas[i];
  console.log(`${persona.nombre} tiene ${persona.edad} Años y mide ${persona.altura}mts`);
}