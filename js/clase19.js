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

/* Modificando el array Original */
// const mapeandoAlturas = (alturaCentimetros) => {
//   alturaCentimetros.altura *= 100;
//   return alturaCentimetros;
// }

/* Sin modificar el array Original */
// const mapeandoAlturas = alturaCentimetros => {
//   return {
//     ...alturaCentimetros,
//     altura: alturaCentimetros.altura * 100
//   }
// }

/* Retornando un nuevo array sin la necesidad de la palabra return */
const mapeandoAlturas = alturaCentimetros => ({
  ...alturaCentimetros,
  altura: alturaCentimetros.altura * 100
})

let personas = [natalia, andrea, vicky, carlos, santiago];
let alturaCentimetros = personas.map(mapeandoAlturas);
console.log(alturaCentimetros);