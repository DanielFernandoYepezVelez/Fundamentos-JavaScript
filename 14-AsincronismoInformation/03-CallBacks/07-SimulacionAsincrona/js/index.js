/* En este ejercicio se simula una peticion a una base de datos y este proceso se considera asincrono, por eso implemento los callbacks para tratar de controlar este proceso, para obtener los registros en diferentes peticiones. */

/* Listado De Paises */
const paises = ['colombia', 'Argentina', 'Venezuela', 'Panama', 'Ecuador'];

/* Lo primeros Paises despues de un segundo */
function mostrarPaises() {
    /* Este Codigo Se Ejecuta Despues De Un Segundo */
    setTimeout(function() {
        let html = '';

        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });

        document.getElementById('app').innerHTML = html;
    }, 1000);
}
mostrarPaises();

/* Agergamos un nuevo pais despues de dos segundos y de la ejecución de los primeros paises, con la ayuda de los callbacks */

function nuevoPais(pais, cb) {
    /* Este Codigo Se Ejecuta Despues De Dos Segundos */
    setTimeout(function() {
        paises.push(pais);
        cb();
    }, 2000);


};
nuevoPais('Alemania', mostrarPaises);