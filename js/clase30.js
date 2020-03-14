/* Request para Obtener los datos */
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

/* Para hacer el request con jQuery necesito:
1.url.
2.opts.
3.callbacks. */
const opts =  { crossDomain: true };
const onPeopleResponse = persona => console.log(`hola yo soy, ${persona.name}`);

function obtenerNombrePersonaje(id)
{
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, onPeopleResponse);
}

/* Asincronismo, No se en que orden me llegan los datos */
obtenerNombrePersonaje(1);
obtenerNombrePersonaje(2);
obtenerNombrePersonaje(3);
obtenerNombrePersonaje(4);