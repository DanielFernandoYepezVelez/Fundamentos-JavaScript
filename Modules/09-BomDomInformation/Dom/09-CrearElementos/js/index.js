const enlace = document.createElement('a');

/* Agregamos Una Clase */
enlace.className = 'enlace';

/* Agregamos Un Id */
enlace.id = 'nuevo-id';

/* Establecemos un Attributo */
enlace.setAttribute('href', '#');

/* Agregando Texto */
// enlace.textContent = 'Agregando Un Nuevo Enlace';
// enlace.innerText = 'Agregando Un Nuevo Enlace';
enlace.innerHTML = 'Agregando Un Nuevo Enlace';

/* Agregando Al HTML */
document.querySelector('#principal').appendChild(enlace);

console.log(enlace);