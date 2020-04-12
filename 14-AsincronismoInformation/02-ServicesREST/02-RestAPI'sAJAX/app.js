/* Accediendo Al DOM */
const cargarPost = document.querySelector('#cargar');

/* Eventos Del Usuario Y Del Sistema */
cargarPost.addEventListener('click', cargarAPI);

/* Funcionalidad Para Cargar La API Con AJAX */
function cargarAPI() {
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
}