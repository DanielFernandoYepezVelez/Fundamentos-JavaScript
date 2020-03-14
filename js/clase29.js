/* Request para Obtener los datos */
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

/* Para hacer el request con jQuery necesito:
1.url.
2.opts.
3.callbacks. */
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts =  { crossDomain: true };
const onPeopleResponse = persona => console.log(`hola yo soy, ${persona.name}`);

$.get(lukeUrl, opts, onPeopleResponse);