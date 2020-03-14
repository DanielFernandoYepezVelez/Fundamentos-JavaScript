let nombre = 'Daniel Fernando', apellido = 'Yépez Vélez', nombreCompleto;

nombreCompleto = `${nombre.toUpperCase()} ${apellido.toLowerCase()}`;
console.log(nombreCompleto);

/* Reto Strings */
let usuario = prompt('Señor usuario ingrese el nombre: ');
let ultimaLetra = usuario.charAt(usuario.length - 1);
console.log('Última Letra Nombre Usuario:',ultimaLetra);

/* =================================================== */

let inicioCadena = usuario.substring(3);
console.log(inicioCadena);

let segmentoCadena = usuario.substr(0, 4);
console.log(segmentoCadena);

let posicionCaracter = usuario.charAt(3);
console.log(posicionCaracter);