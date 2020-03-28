/* Accediendo al DOM (Variables) */
let writteTweet = document.getElementById('tweet');
const form = document.querySelector('#formulario');
const listTweets = document.getElementById('lista-tweets');
/* ----------------------------------------------- */

/* Acciones del usuario en el sistema (EVENTOS)*/
eventListeners();

function eventListeners() {
    /* Envia El formulario */
    form.addEventListener('submit', escribirTweet);

    /* Carga el contenido en el local Storage Para El DOM */
    /* Cuando todo el documento html a finalizado de cargar ahi entra este evento y carga informcion, que en este caso es del localstorage  */
    document.addEventListener('DOMContentLoaded', pedirLosDatosDelLocalStorage);

    /* Al Dar click Eliminar un tweet*/
    listTweets.addEventListener('click', borrarTweet);
}
/* ----------------------------------------------- */

/* Functions */
/* Escribir tweet en el input */
function escribirTweet(e) {
    e.preventDefault();

    /* Guardar En El LocalStorage */
    if (writteTweet.value !== '') {
        agregarTweetLocalStorage(writteTweet.value);
        agregarTweetAlDom(writteTweet.value);
        writteTweet.value = '';
    } else {
        console.log('Tweet es un string vacio, entonces no se va agregar al local Storage');
    }
}
/* ----------------------------------------------- */

/* Agregar Los Tweets Al DOM */
function agregarTweetAlDom(tweet) {
    const li = document.createElement('li');
    const botonBorrar = document.createElement('a');

    botonBorrar.classList.add('borrar-tweet');

    li.innerHTML = tweet;
    botonBorrar.innerHTML = 'X';

    li.appendChild(botonBorrar);
    listTweets.appendChild(li);

}

/* Agregar Los Tweets Al Local Storage */
function agregarTweetLocalStorage(tweet) {
    let tweetsArray;
    tweetsArray = observarTweetsLocalStorage();

    /* Agrego Metodo A dicho Arreglo retornado,
    y estos valores los pone al final */
    tweetsArray.push(tweet);

    /* Convertir el arreglo retornado en una cadena de string para almacenar en el local Storage */
    localStorage.setItem('tweets', JSON.stringify(tweetsArray));

    return tweetsArray;
}
/* ----------------------------------------------- */

/* Primero Debo obtener lo que tengo en el local Storage,
si existe algo alli y retorna un arreglo. */
function observarTweetsLocalStorage() {
    let tweets;

    /* Ojo Reviso Lo que exista en el localStorage */
    if (localStorage.getItem('tweets') === null) {
        /* Si no tengo nada en el LOCAL STORAGE creo un array Vacio */
        tweets = [];

    } else {
        /* Obtengo los tweets del local Storage que estan guardados en un string con un formato tipo array y
        lo convierto en un arreglo con el .PARSE para poder ejecutar los metodos de los arreglos. */
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    /* Retorno Un Arreglo Vacio o LLeno*/
    return tweets;
}
/* ----------------------------------------------- */

/* Renderizando los datos del local Storage,
en la pantalla */
function pedirLosDatosDelLocalStorage() {
    let tweets;

    /* Aqui obtengo los tweets o un arreglo vacio */
    tweets = observarTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        const li = document.createElement('li');
        const botonBorrar = document.createElement('a');

        botonBorrar.classList.add('borrar-tweet');

        li.innerHTML = tweet;
        botonBorrar.innerHTML = 'X';

        li.appendChild(botonBorrar);
        listTweets.appendChild(li);
    });
}
/* ----------------------------------------------- */

/* Eliminar tweet del local Storage */
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        // console.log(e.target.parentElement.textContent); //Vamos a utilizar un metodo de los strings para eliminar la X.
        borrarLocalStorage(e.target.parentElement.textContent);
    }
}

/* Eliminar tweet del local Storage */
function borrarLocalStorage(contenidoTweetDom) {
    let tweets, borrarTweet;

    /* Elimina La X del tweet por que es un string */
    borrarTweet = contenidoTweetDom.substr(0, (contenidoTweetDom.length - 1));

    tweets = observarTweetsLocalStorage();

    /* Recorrer los tweets con la indicación de su respectivo indice */
    tweets.forEach(function(tweet, index) {
        if (tweet === borrarTweet) {
            tweets.splice(index, 1); //Toma la posicion del arreglo que vamos a eleminar y hasta donde quieres llegar
        }
    });

    /* Establecer el nuevo local Storage y pasar el arreglo a un string*/
    localStorage.setItem('tweets', JSON.stringify(tweets));
    // console.log(tweets);
}