/* En este ejercicio se simula una peticion a una base de datos y este proceso se considera asincrono, por eso implemento los callbacks para tratar de controlar este proceso. */

const getUsuarioById = (id, cb) => {
    let usuario = {
        id,
        nombre: 'Daniel Fernando'
    }

    if (id === 20) {
        cb(`El usuario con id ${id} no existe en la BD`);
    } else {
        cb(null, usuario);
    }
}

getUsuarioById(22, (err, usuarioRecibido) => {
    console.log('Ejecutando La Petición...............');

    setTimeout(function() {
        if (err) {
            return console.log(err);
        }

        console.log(`Usuario de BD`, usuarioRecibido);
        console.log(`id: ${usuarioRecibido.id}`);
        console.log(`Nombre: ${usuarioRecibido.nombre}`);
    }, 2000);

    setTimeout(() => {
        console.log('Finalizando Petición................');
    }, 2100);
});