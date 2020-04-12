/* Accediendo Al DOM */
const btnCargar = document.getElementById('cargar');
const listado = document.getElementById('listado');

/* Eventos Del Usuario Y Del Sistema */
btnCargar.addEventListener('click', peticionAjax);

/* FORMA NUEVA */

/* Funcionalidad Para Solicitar Datos Por Medio De Ajax */
// function peticionAjax() {

//     /* Aqui Vamos A Identificar Las Partes Que Tiene Una Petición Tipo AJAX */

//     /* 1. Debemos Crear Una Instancia Del Objeto XMLHttpRequest, gracias a este objeto(Clase), vamos a tener todos los metodos para interactuar con AJAX.*/
//     const xhr = new XMLHttpRequest();

//     /* 2. Abrir Una Conexión, Enviar Tipo De Request O Petición que se esta haciendo(GET, POST, PUT, DELETE). luego asignamos la URL, luego un valor booleano para afirmar que es asincrono */
//     xhr.open('GET', './datos.txt', true);

//     /* 3. Una Vez Que Carga La Pagina*/
//     xhr.onload = function() {

//      /* This hace referencia a la instancia del objeto HXMLHttpRequest, y el estatus a la respuesta que nos dio ese peticion(200(Ok), 404(Not Found), 403(prohibido)) */
//         if (this.status === 200) {
//             listado.innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     /* 4. Enviar el request o la peticion Al CLIENTE*/
//     xhr.send();
// }


/* FORMA ANTIGUA */

/* Funcionalidad Para Solicitar Datos Por Medio De Ajax */
function peticionAjax() {

    /* Aqui Vamos A Identificar Las Partes Que Tiene Una Petición Tipo AJAX */

    /* 1. Debemos Crear Una Instancia Del Objeto XMLHttpRequest, gracias a este objeto(Clase), vamos a tener todos los metodos para interactuar con AJAX.*/
    const xhr = new XMLHttpRequest();

    /* 2. Abrir Una Conexión, Enviar Tipo De Request O Petición que se esta haciendo(GET, POST, PUT, DELETE). luego asignamos la URL, luego un valor booleano para afirmar que es asincrono */
    xhr.open('GET', './datos.txt', true);

    /* 3. This hace referencia a la instancia del objeto(Clase) HXMLHttpRequest. */
    /* Ready Status
    0 - No Inicializado
    1 - Conexion Establecida
    2- Recibido
    3- Procesando
    4- Respuesta(datos) lista
    Este metodo pasa por todos los estados, pero nos interesa el ultimo */
    xhr.onreadystatechange = function() {

        console.log(`Estado ${xhr.readyState}`);

        if (this.readyState === 4 && this.status === 200) {
            listado.innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    /* 4. Enviar el request o la peticion Al CLIENTE*/
    xhr.send();
}