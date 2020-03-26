/* Accediendo al DOM */
const textArea = document.getElementById('tweet');
const formularioCompleto = document.getElementById('formulario');
const containerTweets = document.querySelector('#lista-tweets');

/* Eventos que el usuario ejecute en el sistema */
eventosUsuario();

function eventosUsuario() {
    formularioCompleto.addEventListener('submit', escribirTweet);

    document.addEventListener('DOMContentLoaded', solicitarDatosLocalStorage);

    containerTweets.addEventListener('click', eliminarTweet);
}

/* Funcionalidad de escribir tweet y enviarlo al Session Storage */
function escribirTweet(e) {
    e.preventDefault();

    if (textArea.value !== '') {
        sessionStorage.setItem('tweet', textArea.value);
        solicitarDatosLocalStorage();
        textArea.value = '';
    } else {
        console.log('El string no se envia al Session Storage, por que es un String Vacio');
    }
}

/* Funcionalidad Solicitar Datos Al Session Storage y pegarlos en el container del DOM */
function solicitarDatosLocalStorage() {
    if (sessionStorage.getItem('tweet') !== null) {
        li = document.createElement('li');
        a = document.createElement('a');

        a.classList.add('borrar-tweet');

        li.innerHTML = sessionStorage.getItem('tweet');
        a.textContent = 'X';

        li.appendChild(a);
        containerTweets.appendChild(li);

    } else {
        console.log('Session Storage Esta Vacio');
    }
}

/* Eliminar un tweet del Session Storage y del DOM */
function eliminarTweet(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove();

        /* Concateno la X para que queden exactamente iguales los valores */
        if (e.target.parentElement.textContent === (sessionStorage.getItem('tweet') + 'X')) {
            sessionStorage.clear();
        } else {
            console.log('No son iguales');
        }
    }
}