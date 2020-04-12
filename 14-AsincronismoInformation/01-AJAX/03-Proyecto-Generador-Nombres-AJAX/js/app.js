/* EL CODIGO FUNCIONA CORRECTAMENTE PERO EL ACCESO A LA API DE NOMBRES ESTA PROHIBO ACTUALMENTE */
/* Accediendo Al DOM */
const formulario = document.querySelector('#generar-nombre');

/* Eventos Del Sistema Y Del Usuario */
formulario.addEventListener('submit', cargarNombres);

/* Funcionalidad Para Obtener Los Nombres De La REST-API */
function cargarNombres(e) {
    e.preventDefault();

    /* Leer Datos Del Formulario */
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero');
    const valorCantidad = cantidad.value;

    /* Construir La Url */
    let url = '';
    url += 'https://uinames.com/api/?';

    /* Se Validan Los Datos Del Formulario Para Construir La Url */
    if (origenSeleccionado !== '') {
        url += `origen=${origenSeleccionado}&`;
    }

    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    if (cantidad !== '') {
        url += `amount=${valorCantidad}&`;
    }

    /* Se Inicia AJAX Para Obtener Información De La API En Mi Proyecto */
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);

            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';

            /* Generar Cada Nombre */
            nombres.forEach(function(nombre) {
                htmlNombres = `<li>${nombre.name}`;
            });

            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    xhr.send();
}