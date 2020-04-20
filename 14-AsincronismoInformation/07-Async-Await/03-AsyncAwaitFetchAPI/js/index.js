/* const leerTodos = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (response.ok === true) {
        const datos = await response.json();
        return datos;
    } else {
        return Promise.reject('No salio Correcto');
    }
} */

/* 
leerTodos()
    .then(res => res === undefined ? console.log('No hubo DATOS') : console.log(res))
    .catch(err => console.log(err)) */

/* Tambien puedo capturar el error con try-catch */
const leerTodos = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/tods');

        if (response.ok === true) {
            const datos = await response.json();
            return datos;
        } else {
            throw new Error('No tenemos datos referenciados');
        }
    } catch (e) {
        console.log(e);
    }
}

leerTodos()
    .then(res => res === undefined ? console.log('No hubo DATOS') : console.log(res))