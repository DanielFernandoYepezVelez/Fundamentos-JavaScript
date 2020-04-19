/* Este ejercicio simula peticiones desde el cliente, pasando por un backend construido en nodeJS con express hasta llegar a la base de datos y posteriormente devolver la respuesta al cliente */
// -------------------------------------

/* Voy a consultar en la base de datos por un id, cuando termine de consultar y obtenga una respuesta solo pueden pasar dos cosas, un error o una respuesta exitosa que en este caso es un usario, voy a manejar dicha respuesta por medio de la funcion callback.
Pasa algo similar cuando se consultan los usuarios del usuario */
function requesHandler(req, res) {
    User.findById(req.userId, (err, user) => {
        if (err) {
            return console.log(err);
        }
        Task.findById(user.taskId, (err, tasks) => {
            if (err) {
                return console.log(err);
            }
            tasks.completed = true;
            tasks.save((err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Tarea Guardada Correctamente');
            });
        });
    });

    /* NOTA IMPORTANTE! */
    /* Recordar la teoria de los lenguajes blocking y no-blocking, nodeJS es no-blocking por ende, no puedo escribir codigo aqui debajo, por que se va a ejecutar de forma inmediata sin a ver terminado la petición a la BASE DE DATOS, por que la peticion a la base de datos es asincrona y se debe esperar y manejar con el callback, entonces el codigo debe ir dentro del callback */
}