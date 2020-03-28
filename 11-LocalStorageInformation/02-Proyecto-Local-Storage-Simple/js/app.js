/* Accediendo Al DOM (Variables) */
const escribirTweet = document.getElementById('tweet');
const formularioCompleto = document.querySelector('#formulario');
const almacenarTweets = document.querySelector('#lista-tweets');

/* EVENTOS QUE ACCIONE EL USUARIO EN EL SISTEMA */
eventosUsuario();

function eventosUsuario() {
    formularioCompleto.addEventListener('submit', textAreaTweet);

    document.addEventListener('DOMContentLoaded', obtenerTweetInicial);

    almacenarTweets.addEventListener('click', eliminarLocalStorage)
}

/* Obtener El Tweet Del Local Storage Al recargar la pagina */
function obtenerTweetInicial() {
    if (localStorage.getItem('Ultimotweet') !== null) {
        obtenerLocalStorage();
    } else {
        console.log('No tenemos nada en el Local Storage');
    }
}

/* Funcionalidad Escribir Tweet */
function textAreaTweet(e) {
    e.preventDefault();

    if (escribirTweet.value !== '') {
        localStorage.setItem('Ultimotweet', escribirTweet.value);
        obtenerLocalStorage();
        escribirTweet.value = '';

    } else {
        console.log('Es un string Vacio, por eso no se agrega en los TWEETS.');
    }
}

/* Si existe algo en el local Storage Obtenerlo */
function obtenerLocalStorage() {
    li = document.createElement('li');
    a = document.createElement('a');

    a.classList.add('borrar-tweet');

    li.innerHTML = localStorage.getItem('Ultimotweet');
    a.textContent = 'X';

    li.appendChild(a);
    almacenarTweets.appendChild(li);
}

/* Funcionalidad Eliminar Tweet Del Local Storage */
function eliminarLocalStorage(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {

        if ((localStorage.getItem('Ultimotweet') + 'X') === e.target.parentElement.textContent) {
            localStorage.clear();
        }

        e.target.parentElement.remove();
    }
}