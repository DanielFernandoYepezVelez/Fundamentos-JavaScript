/* Accediendo Al DOM */
const textBtn = document.getElementById('txtBtn');

/* Eventos Del Usuario Y Del Sistema */
textBtn.addEventListener('click', cargarTXT);

/* Funcionalidad Para Obtener Texto Del Archivo .txt Con La Ayuda De Fetch API */
function cargarTXT() {
    /* Como estamos trabajando en un archivo local escribimos fetch que es la funcion que va a cargar la fetch-API,
    Debemos utilizar .then() para que funcione fetch() 
    cuando carge fetch .then() va a tener los datos o la respuesta */
    fetch('./datos.txt')
        .then(function(res) {
            /* El proto tiene todos los metodos que le puedo pasar a esa respuesta obtenida por fetch y ejecutada por .then(); */
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(err) {
            console.log(err);
            document.getElementById('resultado').innerHTML = err;
        });
}