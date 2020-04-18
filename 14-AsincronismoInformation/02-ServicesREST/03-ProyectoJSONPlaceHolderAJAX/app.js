/* Accediendo Al DOM */
const cargarPost = document.querySelector('#cargar');
const fragment = document.createDocumentFragment();

/* Eventos Del Usuario Y Del Sistema */
cargarPost.addEventListener('click', cargarAPI);

/* Funcionalidad Para Cargar La API Con AJAX */
/* function cargarAPI() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let contenido = ''
            response.forEach(function(post) {
                contenido += `
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                `;
            })

            document.getElementById('listado').innerHTML = contenido;
        }
    };

    xhr.send();
} */

/* FORMA MUCHOS MAS MODERNA DE HACER UNA PETICION AJAX Y QUE FUNCIONE EN NAVEGADORES VIEJOS */
function cargarAPI() {
    let xhr;

    /* Debo preguntarle al navegador primero => 'XMLHttpRequest' in window se debe esperar como respuesta un true */

    /* Si esto es true si soporta ajax, sino debemos hacer que ese navegador viejo lo soporte de la siguiente manera =>*/
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    /* Aqui le decimos que debe hacer con los datos en el cliente */
    /* El evento load se dispara cuando ya toda la informacion del servidor ha llegado al objeto XMLHttpRequest y asi sabemos que la peticion asincrona a terminado. */
    xhr.addEventListener('load', (data) => {

        /* Como Evaluo La Informacion Del Objeto XMLHttpRequest */
        // console.log(data);
        // console.log(data.target);
        // console.log(data.target.response);
        // console.log(data.target.responseText);
        const responseArray = JSON.parse(data.target.responseText);
        let contentData = '';
        // console.log(responseArray);

        responseArray.forEach((user) => {
            contentData += `
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.username}</li>
            `;
        });

        document.getElementById('listado').innerHTML = contentData;
    });

    xhr.send();
}