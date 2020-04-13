/* A veces los registros no vienen al tiempo, si no que llegan de forma secuencial con la ayuda de los callbacks */

/* Listado De Paises */
const paises = ['colombia', 'Argentina', 'Venezuela', 'Panama', 'Ecuador'];

/* Lo primeros Paises despues de un segundo */
function mostrarPaises(err) {
    if (err) {
        return console.log(err);
    }

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
function nuevoPais(pais, functionCallback) {
    /* Este Codigo Se Ejecuta Despues De Dos Segundos */
    setTimeout(function() {
        paises.push(pais);

        if (pais !== 'Alemania') {
            functionCallback(`El Pais ${pais} No Hace Parte De La Lista Del Array`);
        } else {
            functionCallback(null);
        }

    }, 2000);
};
nuevoPais('Alemania', mostrarPaises);