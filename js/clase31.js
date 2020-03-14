/* Request para Obtener los datos */
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts =  { crossDomain: true };

function obtenerNombrePersonaje(id, segundoCallBack)
{
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url, opts, function(persona){
    console.log(`hola yo soy, ${persona.name}`);

    if(segundoCallBack)
    {
      segundoCallBack();
    }
  });
}

/* No se pone asi por que se esta ejecutando inmediatamente, es más
se ejecuta primero el id 2, que el id 1. */
// obtenerNombrePersonaje(1, obtenerNombrePersonaje(2))

/* Infierno de los callbacks 
garantizan el orden de la llegada de los datos
del servidor */
obtenerNombrePersonaje(1, function(){
  obtenerNombrePersonaje(2, function(){
    obtenerNombrePersonaje(3, function(){
      obtenerNombrePersonaje(4, function(){
        obtenerNombrePersonaje(5, function(){
          obtenerNombrePersonaje(6, function(){
            obtenerNombrePersonaje(7)
          })
        })
      });
    });
  });
});