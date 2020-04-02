/* Variables Globales */
let renderizar = false;

/* Accediendo Al DOM */
const listarCursosCarrito = document.getElementById('carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');

/* Eventos Del Usuario Y El Sistema */
eventosUsuario();

function eventosUsuario() {
    document.addEventListener('DOMContentLoaded', obtenerDatosLocalStorage);
    document.addEventListener('click', seleccionarCursoDOM);
    document.addEventListener('click', eliminarCursoCarritoDOM);
}

/* Funcionalidad Para Obtener Información Del Local Storage */
function obtenerDatosLocalStorage() {
    let cursosLocalStorage;

    if (localStorage.getItem('cursos') === null) {
        cursosLocalStorage = [];
    } else {
        cursosLocalStorage = JSON.parse(localStorage.getItem('cursos'));

        /* Controlo Que Renderice Una Sola Vez */
        if (renderizar === false) {
            renderizarLocalStorage(cursosLocalStorage);
            renderizar = true;
        }
    }

    return cursosLocalStorage;
}

/* Funcionalidad Para renderizar Lo Que Se Encuentre En El Local Storage */
function renderizarLocalStorage(cursosLocalStorage) {
    cursosLocalStorage.forEach((cursoLocalStorage) => {
        let row = document.createElement('tr');
        let traversingHijo = listarCursosCarrito.children[0].children[1];

        /* ¡OJO! Aqui Se Puede Escribir HTML CON SUS RESPECTIVOS ATRIBUTOS */
        row.innerHTML = `
          <td>
            <img src="${cursoLocalStorage.imagen}" width=130/>
          </td>
          <td>
            ${cursoLocalStorage.titulo}
          </td>
          <td>
            ${cursoLocalStorage.precio}
          </td>
          <td>
            <a href="#" class="borrar-curso" data-id="${cursoLocalStorage.id}">X</a>
          </td>
        `;

        traversingHijo.appendChild(row);
    });
}

/* Funcionalidad Para Seleccionar Un Carrito Del DOM */
function seleccionarCursoDOM(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        let cursoDOM = e.target.parentElement.parentElement;
        leerDatosCursoDOM(cursoDOM);
    }
}

/* Funcionalidad Para Leer La Informacion Que Se Va Añadir Al Carrito Del DOM */
function leerDatosCursoDOM(cursoDOM) {
    let imagen = cursoDOM.querySelector('img').src;
    let titulo = cursoDOM.querySelector('h4').textContent;
    let precio = cursoDOM.querySelector('.precio span').textContent;
    let id = cursoDOM.querySelector('a').getAttribute('data-id'); /* Acceso para atributos Personalizados */

    /* LOS DOS SON EQUIVALENTES */
    /* let infoCurso = {
        'id': id,
        'imgUrl': imagen,
        'titulo': titulo,
        'precio': precio
    }
    */
    let infoCurso = {
        id,
        imagen,
        titulo,
        precio
    }

    insertarCursoDOM(infoCurso);
    guardarCursosLocalStorage(infoCurso);
}

/* Funcionalidad Para Insertar El Curso En El Carrito Del DOM */
function insertarCursoDOM(cursoDOM) {
    let row = document.createElement('tr');
    let traversingHijo = listarCursosCarrito.children[0].children[1];

    /* ¡OJO! Aqui Se Puede Escribir HTML CON SUS RESPECTIVOS ATRIBUTOS */
    row.innerHTML = `
      <td>
        <img src="${cursoDOM.imagen}" width=130/>
      </td>
      <td>
        ${cursoDOM.titulo}
      </td>
      <td>
        ${cursoDOM.precio}
      </td>
      <td>
        <a href="#" class="borrar-curso" data-id="${cursoDOM.id}">X</a>
      </td>
    `;

    traversingHijo.appendChild(row);
}

/* Funcionalidad Para Guardar Un Curso En El Local Storage */
function guardarCursosLocalStorage(cursoDOM) {
    let arrayLocalStorage;

    arrayLocalStorage = obtenerDatosLocalStorage();
    arrayLocalStorage.push(cursoDOM);

    /* Me facilita que se agreguen uno Despues del Otro */
    localStorage.setItem('cursos', JSON.stringify(arrayLocalStorage));
}

/* Funcionalidad Para Eliminar Curso Del Carrito En El DOM */
function eliminarCursoCarritoDOM(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        eliminarCursoCarritoLocalStorage(e.target);
        e.target.parentElement.parentElement.remove();

    } else if (e.target.classList.contains('carritoCompleto')) {
        vaciarCarritoCompleto();
    }
}


/* Funcionalidad Para Eliminar Curso Del Carrito En El Local Storage */
function eliminarCursoCarritoLocalStorage(elementoDOM) {
    idDOM = elementoDOM.getAttribute('data-id'); /* Acceso A los Atributos Personalizados */
    arrayLocalStorage = obtenerDatosLocalStorage();

    arrayLocalStorage.forEach(function(curso, index) {
        if (curso.id === idDOM) {
            arrayLocalStorage.splice(index, 1);
            localStorage.setItem('cursos', JSON.stringify(arrayLocalStorage));
        }
    });
}

/* Funcionalidad Para Vaciar Carrito Completo */
function vaciarCarritoCompleto() {
    let traversingHijo = listarCursosCarrito.children[0].children[1];

    /* Forma Lenta(No Recomendada)*/
    // traversingHijo.innerHTML = '';

    /* Forma Rapida(Recomendada) */
    /* Mientras Exista Un Elemento Los Vamos A Estar Removiendo */
    while (traversingHijo.firstChild) {
        traversingHijo.removeChild(traversingHijo.firstChild);
    }

    localStorage.clear();

    /* Para Los Saltos Raros Y Terminar La Ejecucion De La Function */
    /* Para Que no Borre Los Cursos Del Carrito y cierre la ventana
    de forma inmediata, dando un sensacion Muy "ORTODOXA" */
    return false;
}