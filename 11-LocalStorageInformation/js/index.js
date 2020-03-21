/* LOCAL STORAGE */
/* Nos sirve para añadir cierta informacion
en los navegadores de nuestros usuarios 
y aunque se cierre el navegador la informacion
sigue de forma persistente.
LOCAL STORAGE: Solo Recibe Strings
NO OLVIDAR EL CONDICIONAL PARA VER SI EXISTE EN EL LOCAL STORAGE*/

/* el formato es tipo JSON, es decir, toma una llave y un valor */
/* AGREGAR AL LOCAL STORAGE */
localStorage.setItem('nombre', 'Daniel');

/* OBTENER UN VALOR DEL LOCAL STORAGE */
const name = localStorage.getItem('nombre');
console.log(name);

/* REMOVER DEL LOCAL STORAGE */
// localStorage.removeItem('nombre')

/* ELIMINAR TODO LO EXISTENTE EN EL LOCAL STORAGE */
// localStorage.clear();

/* AQUI VAMOS A AGREGAR UN OBJETO JSON AL LOCAL STORAGE*/
localStorageAdd();

function localStorageAdd() {
    let persona = {
            name: 'Daniel Fernando',
            lastName: 'Yepez Velez',
            age: '27 años',
            coords: {
                latitude: 100,
                altura: 1000
            }
        }
        /* Local Storage solo recibe strings, por eso debo aplicar dicha función */
    localStorage.setItem('object', JSON.stringify(persona));
}

/* AQUI VAMOS A OBTENER UN OBJETO JSON DEL LOCAL STORAGE*/
localStorageGET();

function localStorageGET() {
    let object = localStorage.getItem('object');
    console.log(object);

    /* Lo parseo para obtener nuevamente un JSON y poder aplicar sus metodos y propiedades */
    object = JSON.parse(localStorage.getItem('object'));
    console.log(object);
}

/* AQUI VAMOS A ELIMINAR UN OBJETO JSON DEL LOCAL STORAGE*/
/* localStorageREMOVE();

function localStorageREMOVE() {
    let object = localStorage.removeItem('object');
    console.log(object);
} */