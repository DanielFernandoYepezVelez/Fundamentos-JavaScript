/* En este ejercicio se simula una peticion a una base de datos y este proceso se considera asincrono, por eso implemento las promesas que es una alternativa mejor que los callbacks para tratar de controlar este proceso. */

const getUsuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Daniel Fernando'
    }

    const promise = new Promise((resolve, reject) => {
        if (id === 20) {
            reject(`El usuario con id ${id} no existe en la BD`);
        } else {
            resolve(usuario);
        }
    });

    return promise;
}

getUsuarioById(2)
    .then(user => {
        console.log('Ejecutando La Petición...............');

        setTimeout(function() {
            console.log(`Usuario de BD`, user);
            console.log(`id: ${user.id}`);
            console.log(`Nombre: ${user.nombre}`);
        }, 2000);

        setTimeout(() => {
            console.log('Finalizando Petición................');
        }, 2100);
    })
    .catch(err => console.log(err));