/* SESSION STORAGE */
/* Nos sirve para añadir cierta informacion
en los navegadores de nuestros usuarios como el
localStorage, la diferencia radica en que 
al cerrar el navegador todo lo que exista en el
SessionStorage Desaparece 
SESSION STORAGE: Solo Recibe Strings.
NO OLVIDAR EL CONDICIONAL PARA VER SI EXISTE EN EL SESSION STORAGE*/

/* AGREGAR AL SESSION STORAGE */
/* el formato es tipo JSON, es decir, toma una llave y un valor */
sessionStorage.setItem('apellidos', 'Yepez Velez');

/* OBTENER VALORES DEL SESSION STORAGE */
const lastName = sessionStorage.getItem('apellidos');
console.log(lastName);

/* REMOVER DEL SESSION STORAGE */
// sessionStorage.removeItem('apellidos');

/* ELIMINAR TODO LO DEL SESSION STORAGE */
// sessionStorage.clear();

/* AQUI VAMOS A AGREGAR UN OBJETO JSON AL SESSION STORAGE*/
sessionStorageAdd();

function sessionStorageAdd() {
    let persona = {
            name: 'Daniel Fernando',
            lastName: 'Yepez Velez',
            age: '27 años',
            coords: {
                latitude: 100,
                altura: 1000
            }
        }
        /* Session Storage solo recibe strings, por eso debo aplicar dicha función */
    sessionStorage.setItem('object', JSON.stringify(persona));
}

/* AQUI VAMOS A OBTENER UN OBJETO JSON DEL SESSION STORAGE*/
sessionStorageGET();

function sessionStorageGET() {
    let object = sessionStorage.getItem('object');
    console.log(object);

    /* Lo parseo para obtener nuevamente un JSON y poder aplicar sus metodos y propiedades */
    object = JSON.parse(sessionStorage.getItem('object'));
    console.log(object);

}

/* AQUI VAMOS A ELIMINAR UN OBJETO JSON DEL SESSION STORAGE*/
/* sessionStorageREMOVE();

function sessionStorageREMOVE() {
    let object = sessionStorage.removeItem('object');
    console.log(object);
} */