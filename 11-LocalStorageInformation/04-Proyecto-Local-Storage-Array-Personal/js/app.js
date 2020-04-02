/* Accediendo Al DOM */
const textArea = document.querySelector('#tweet');
const formularioCompleto = document.getElementById('formulario');
const containerTweets = document.querySelector('#lista-tweets');

/* me ayuda a controlar el render del local Storage */
let renderLocalStorage = false;

/* Eventos que realice el usuario */
eventosUsuario();

function eventosUsuario() {
    document.addEventListener('DOMContentLoaded', validarDatosLocalStorage);
    formularioCompleto.addEventListener('submit', valorTweet);
    containerTweets.addEventListener('click', borrarTweet);
}

/* Verificar Que Datos Existen En El Local Storage */
function validarDatosLocalStorage() {
    let tweetsLocalStorage;

    if (localStorage.getItem('tweets') === null) {
        tweetsLocalStorage = [];
        renderLocalStorage = true;
    } else {
        tweetsLocalStorage = JSON.parse(localStorage.getItem('tweets'));
        if (renderLocalStorage === false) {
            renderizarLocalStorage(tweetsLocalStorage);
            renderLocalStorage = true;
        }
    }
    return tweetsLocalStorage;
}

/* Si existe informacion en Local Storage Renderizarla,
sino crear un array vacio para almacenar la información */
function renderizarLocalStorage(contenidoLocalStorage) {
    contenidoLocalStorage.forEach(function(tweets, index) {
        li = document.createElement('li');
        a = document.createElement('a');

        a.classList.add('borrar-tweet');

        li.innerHTML = `${tweets}`;
        a.innerText = 'X';

        li.appendChild(a);
        containerTweets.appendChild(li);
    })
}

/* Tomar el valor del tweet que se ingresa en el input */
function valorTweet(e) {
    e.preventDefault();

    if (textArea.value !== '') {
        agregarTweetLocalStorage(textArea.value);
        textArea.value = '';
    } else {
        console.log('No se crea el tweet por que es un string vacio');
    }
}

/* Agregar Tweet en el local Storage directamente */
function agregarTweetLocalStorage(tweet) {
    let arrayTweets = validarDatosLocalStorage();
    arrayTweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(arrayTweets));
    renderizarDOM();
}

/* Funcionalidad Para renderizar desde el input al DOM */
function renderizarDOM() {
    li = document.createElement('li');
    a = document.createElement('a');

    a.classList.add('borrar-tweet');

    li.innerHTML = textArea.value;
    a.innerText = 'X';

    li.appendChild(a);
    containerTweets.appendChild(li);
}

/* Funcionalidad Para Eliminar Del Local Storage Y Del DOM */
/* Eliminar tweet del DOM */
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarElementoLocalStorage(e.target.parentElement.textContent);
    }
}

/* Eliminar tweet del Local Storage */
function borrarElementoLocalStorage(elementoDOM) {
    /* Eliminar la X del nombre del tweet en el DOM */
    /* Aplico los metodos de los string y segmento la cadena */
    let arrayStringDOM = elementoDOM.substr(0, (elementoDOM.length - 1));

    /* Obtengo el string del local storage y lo parseo a un array */
    let arregloLocalStorage = validarDatosLocalStorage();

    /* Selecciono la posicion o indice del elemento que voy a eliminar */
    let posicionLocalStorage = arregloLocalStorage.indexOf(arrayStringDOM);

    /* Elimino el elemento del array obtenido del local Storage */
    arregloLocalStorage.splice(posicionLocalStorage, 1);

    /* asigno el nuevo array en el local storage y lo convierto en un string */
    localStorage.setItem('tweets', JSON.stringify(arregloLocalStorage));
}