let natalia = {
  nombre: 'Natalia',
  apellido: 'Perez',
  edad: 22,
  altura: 1.68,
  cantidadLibros: 19
}

let andrea = {
  nombre: 'Andrea',
  apellido: 'Lopez',
  edad: 27,
  altura: 1.62,
  cantidadLibros: 22
}

let vicky = {
  nombre: 'Vicky',
  apellido: 'Yepez',
  edad: 25,
  altura: 1.80,
  cantidadLibros: 20
}

let carlos = {
  nombre: 'Carlos',
  apellido: 'Castro',
  edad: 19,
  altura: 1.80,
  cantidadLibros: 13
}

let santiago = {
  nombre: 'Santiago',
  apellido: 'Rosellon',
  edad: 30,
  altura: 1.69,
  cantidadLibros: 17
}

/* Normal SIN DESTRUCTURAR OBJETO*/
// const contarLibros = (acumulador, personasLibros) => {
//   return acumulador + personasLibros.cantidadLibros;
// }

/* Mas prolijo */
const contarLibros = (acumulador, { cantidadLibros }) => 
  acumulador + cantidadLibros;

let personas = [natalia, andrea, vicky, carlos, santiago];
let cantidadLibros = personas.reduce(contarLibros, 0);
console.log('Cantidad Libros:',cantidadLibros);

/* let acum = 0;
for(let i = 0; i < personas.length; i++)
{
  acum += personas[i].cantidadLibros;
}
console.log('Cantidad Libros:', acum); */