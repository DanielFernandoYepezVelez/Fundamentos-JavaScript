/* Este ejercicio simula peticiones desde el cliente, pasando por un backend construido en nodeJS con express hasta llegar a la base de datos y posteriormente devolver la respuesta al cliente */
// -------------------------------------

/* Aqui estamos utilizando Async-Await mucho mas facil de entender y visualizar el codigo */

async function requesHandler(req, res) {
    try {
        const user = await User.findById(req.userId);
        const tasks = await Task.findById(user.taskId);

        tasks.completed = true;
        await userTask.save();

        res.send('Tarea Completada');
    } catch (error) {
        console.log(error);
    }
};