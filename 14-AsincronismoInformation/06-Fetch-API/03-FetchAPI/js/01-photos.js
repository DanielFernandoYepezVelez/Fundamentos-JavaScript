/* Accediendo Al DOM */
const btnAPI = document.getElementById('apiBTN1');

/* Eventos Del Usuario Y Del Sistema */
btnAPI.addEventListener('click', cargarAPI);

/* Funcionalidad Para Obtener Datos Desde Una API Con Fetch API */
function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(imagenes) {
            console.log(imagenes);
            let arrayImagen = '';

            imagenes.forEach(function(imagen) {
                arrayImagen +=
                    `<li>
                        ${imagen.author} 
                        <a href="${imagen.post_url}" target=_blank>
                            Ver Imagen
                        </a>
                    </li>`;
            });

            document.getElementById('resultado').innerHTML = arrayImagen;
        })
        .catch(function(err) {
            console.log(err);
        });
}