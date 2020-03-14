/* Utilizo el tryCatch para que la ejecución del programa
continue y apesar de que no exista una función el pograma
ejecute todas las demás, no se recomienda
utilizarlo siempre.*/
try {
    noExiste();
} catch (error) {
    console.log(error);
}

obtenerUsers();

function obtenerUsers() {
    console.log('Descargando......');

    setTimeout(function() {
        console.log('Operación Completa')
    }, 2000);
};