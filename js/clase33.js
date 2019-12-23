/* Request para Obtener los datos */
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts =  { crossDomain: true };

/* Aplicando un pequeño Refactor a esta función */
// function obtenerNombrePersonaje(id, segundoCallBack)
// {
//   const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
//   $.get(url, opts, segundoCallBack).fail(function () {
//     console.log(`Sucedio un error no se pudo obtener el persona ${id}`);
//   });
// }

/* Lo mismo de arriba mas prolijo */
function obtenerNombrePersonaje(id, segundoCallBack)
{
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $
  .get(url, opts, segundoCallBack)
  .fail(() => {
    console.log(`Sucedio un error no se pudo obtener el persona ${id}`);
  });
}

/* En las proximas clase se va a solucionar de mejor manera*/
obtenerNombrePersonaje(1, function(personaje) {
    console.log(`hola yo soy, ${personaje.name}`);

  obtenerNombrePersonaje(2, function(personaje) {
    console.log(`hola yo soy, ${personaje.name}`);

    obtenerNombrePersonaje(3, function(personaje) {
      console.log(`hola yo soy, ${personaje.name}`);

      obtenerNombrePersonaje(4, function(personaje) {
        console.log(`hola yo soy, ${personaje.name}`);

        obtenerNombrePersonaje(5, function(personaje) {
          console.log(`hola yo soy, ${personaje.name}`);

          obtenerNombrePersonaje(6, function(personaje) {
            console.log(`hola yo soy, ${personaje.name}`);

            obtenerNombrePersonaje(7, function(personaje) {
              console.log(`hola yo soy, ${personaje.name}`);
            });
          });
        });
      });
    });
  });
});