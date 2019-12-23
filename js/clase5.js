let nombre = 'Daniel Fernando', apellidos = 'Yépez Vélez';

// function imprimirNombre()
// {
//   nombre = nombre.toUpperCase(); //efecto de lado.
//   console.log(nombre);
// }

// No modifica Variable global.
function imprimirNombre(nombre)
{
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombre(nombre);
console.log(nombre);