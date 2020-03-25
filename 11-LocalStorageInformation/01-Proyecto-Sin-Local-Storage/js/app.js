/* Accediendo Al DOM (Variables) */
const escribirTweet = document.getElementById('tweet');
const formularioCompleto = document.querySelector('#formulario');
const almacenarTweets = document.querySelector('#lista-tweets');

/* EVENTOS QUE ACCIONE EL USUARIO EN EL SISTEMA */
eventosUsuario();

function eventosUsuario() {
    formularioCompleto.addEventListener('submit', agregarTweet);
    almacenarTweets.addEventListener('click', eliminarTweet);
}

/* Funcionalidad de agregar tweet */
function agregarTweet(e) {
    e.preventDefault();

    if (escribirTweet.value !== '') {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.innerHTML = escribirTweet.value;
        a.innerText = 'X';

        a.classList.add('borrar-tweet');

        li.appendChild(a);
        almacenarTweets.appendChild(li);
        escribirTweet.value = '';

    } else {
        console.log('Es un string Vacio, por eso no se agrega en los TWEETS.');
    }
}

/* Funcionalidad Eliminar Tweet */
function eliminarTweet(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove();
        console.log('Tweet Eliminado Correctamente');
    }
}