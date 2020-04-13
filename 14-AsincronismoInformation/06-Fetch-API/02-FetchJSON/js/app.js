/* Accediendo Al DOM */
const btnJSON = document.getElementById('jsonBtn');

/* Eventos Del Usuario Y Del Sistema */
btnJSON.addEventListener('click', cargarJSON);

/* Funcionalidad Para Obtener Los Datos De Un Archivo JSON Con La Ayuda De Fetch API */
function cargarJSON() {
    fetch('./empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(datos) {
            let objetos = '';
            datos.forEach(function(data) {
                objetos += `<li>${data.nombre} ${data.puesto}</li>`;
            });

            document.getElementById('resultado').innerHTML = objetos;
        })
        .catch(function(err) {
            console.log(err);
            document.getElementById('resultado').innerHTML = err;
        });
}