/* Es Muy Comun Que el primer parametro de un callback sea un error */
/* Cuando no tengo errores, se debe mandar un argumento de tipo null, al primer parametro definido como err a la funcion callback, para decirle al callback que el error no existe */

function getUsuarioById(id, functionCallback) {
    let usuario = {
        id,
        nombre: 'Daniel Fernando Yepez Velez'
    };

    if (id === 20) {
        functionCallback(`El Usuario Con El Id ${id} No Existe En La Base De Datos`);
    } else {
        functionCallback(null, usuario);
    }
}

function functionCallback(err, getUserById) {
    if (err) {
        return console.log(err);
    }

    console.log(`El Objeto De La Base De Datos Simulada =>`,
        JSON.stringify(getUserById));
    console.log(`El Id Del Objeto De La Base De Datos Simulada => ${getUserById.id}`);
    console.log(`El Nombre Del Objeto De La Base De Datos Simulada => ${getUserById.nombre}`);
}

getUsuarioById(10, functionCallback);