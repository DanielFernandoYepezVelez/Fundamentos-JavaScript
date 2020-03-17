/* Utilizo el tryCatch para que la ejecución del programa continue y apesar de que no exista una función invocada en dicho programa. Y asi, El pograma ejecute todas las demás, no se recomienda utilizarlo siempre. */

/* Para insertar en HTML, o agregar una clase no se recomienda mucho */
try {
    noExiste(); // Funcion NO EXISTE
} catch (error) {
    console.log(error);
}

/* Si se marca try o se marca catch, en cualquiera de los dos casos se va a ejecutar(finally) siempre */
try {
    noExiste(); // Funcion NO EXISTE
} catch (error) {
    console.log(error);
} finally {
    console.log('No Le Importa Para Nada, Ejecuta el codigo');
}

obtenerUsers();

function obtenerUsers() {
    console.log('Descargando......');

    setTimeout(function() {
        console.log('Operación Completa')
    }, 2000);
};