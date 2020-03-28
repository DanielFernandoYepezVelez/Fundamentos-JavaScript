/* Accediendo al DOM */
const textArea = document.getElementById('tweet');
const formularioCompleto = document.getElementById('formulario');
const contenedorTweets = document.getElementById('lista-tweets');
let renderizarSessionStorage = false;

/* Eventos del usuario o del navegador*/
eventosUsuario();

function eventosUsuario() {
    document.addEventListener('DOMContentLoaded', validarDatosSessionStorage);
    document.addEventListener('submit', escribirTweet);
    contenedorTweets.addEventListener('click', eliminarTweetDOM);
}

/* Funcionalidad Para Solicitar Datos En El Session Storage */
function validarDatosSessionStorage() {
    let tweetsSessionStorage;

    if (sessionStorage.getItem('tweets') === null) {
        tweetsSessionStorage = [];
        renderizarSessionStorage = true;
    } else {
        tweetsSessionStorage = JSON.parse(sessionStorage.getItem('tweets'));

        if (renderizarSessionStorage === false) {
            renderizarDatosSessionStorage(tweetsSessionStorage);
            renderizarSessionStorage = true;
        }
    }

    return tweetsSessionStorage;
}

/* Funcionalidad Renderizar Datos De Session Storage */
function renderizarDatosSessionStorage(contenidoSessionStorage) {
    contenidoSessionStorage.forEach(function(tweet, index) {
        li = document.createElement('li');
        a = document.createElement('a');

        a.classList.add('borrar-tweet');

        li.innerHTML = tweet;
        a.textContent = 'X';

        li.appendChild(a);
        contenedorTweets.appendChild(li);
    });
}

/* Funcionalidad Obtener Valor Tweet */
function escribirTweet(e) {
    e.preventDefault();

    if (textArea.value !== '') {
        agregarTweetSessionStorage(textArea.value);
        textArea.value = '';
    } else {
        console.log('El valor del tweet es un string vacio');
    }
}

/* Funcionalidad Agregar Tweet Local Storage */
function agregarTweetSessionStorage(valorTweet) {
    let arrayTweets = validarDatosSessionStorage();
    arrayTweets.push(valorTweet);

    renderizarDOM(valorTweet);
    sessionStorage.setItem('tweets', JSON.stringify(arrayTweets));
}

/* Funcionalidad Renderizar Al DOM De Forma Directa Valor Del Tweet */
function renderizarDOM(valorTweetDOM) {
    li = document.createElement('li');
    a = document.createElement('a');

    a.classList.add('borrar-tweet');

    li.innerHTML = valorTweetDOM;
    a.textContent = 'X';

    li.appendChild(a);
    contenedorTweets.appendChild(li);
}

/* Funcionalidad Eliminar tweet del DOM de forma directa */
function eliminarTweetDOM(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove();
        eliminarTweetSessionStorage(e.target.parentElement.textContent);
    }
}

/* Funcionalidad Eliminar Tweet Del Session Storage */
function eliminarTweetSessionStorage(textoDOM) {
    let stringDomValido, arraySessionStorage, posicionElementoArray;

    stringDomValido = textoDOM.substr(0, (textoDOM.length - 1));
    arraySessionStorage = validarDatosSessionStorage();
    posicionElementoArray = arraySessionStorage.indexOf(stringDomValido);

    arraySessionStorage.splice(posicionElementoArray, 1);
    sessionStorage.setItem('tweets', JSON.stringify(arraySessionStorage));
}