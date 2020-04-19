const getUser = (id, cb) => {
    const user = {
        nombre: 'Daniel',
        id
    }

    if (user.id === 2) {
        cb('El Usuario No existe en la Base de datos');
    } else {
        cb(null, user);
    }

}

getUser(1, (err, user) => {
    if (err) {
        return console.log(err);
    }

    console.log(`El Nombre Del Usuario Es ${user.nombre}`);
});