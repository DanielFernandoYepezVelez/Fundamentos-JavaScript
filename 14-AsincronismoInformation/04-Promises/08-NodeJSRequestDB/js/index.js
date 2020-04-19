/* Este ejercicio simula peticiones desde el cliente, pasando por un backend construido en nodeJS con express hasta llegar a la base de datos y posteriormente devolver la respuesta al cliente */
// -------------------------------------

/* Voy a consultar en la base de datos por un id, cuando termine de consultar y obtenga una respuesta solo pueden pasar dos cosas, un error o una respuesta exitosa que en este caso es un usario, voy a manejar dicha respuesta por medio de promesas. Pasa algo similar cuando se consultan las tareas del usuario */
/* Tener encuenta que el resolve y el reject ya se incluyen, solo necesito obtener y disparar la respuesta, .then(), para resolve, .catch() para reject */
function requesHandler(req, res) {
    User.findById(req.userId)
        .then(user => {
            return Task.findById(user.taskId)
        })
        .then(userTask => {
            userTask.completed = true;
            return userTask.save();
        })
        .then(() => {
            res.send('Tarea Completada')
        })
        .catch(errors => console.log(errors));
};