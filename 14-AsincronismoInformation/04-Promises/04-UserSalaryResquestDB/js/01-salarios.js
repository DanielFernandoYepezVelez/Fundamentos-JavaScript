let empleados = [{
        id: 1,
        nombre: 'Daniel'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Melissa'
    }
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    const promise = new Promise((resolve, reject) => {
        if (!empleadoDB) {
            reject(`No existe el empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });

    return promise;
}

let getSalario = (empleadoID) => {
    let salarioDB = salarios.find(salario => salario.id === empleadoID.id);

    return new Promise((resolve, reject) => {
        if (!salarioDB) {
            reject(`El empleado ${empleadoID.nombre} no tiene salario ASIGNADO`);
        } else {
            /* Para Regresar un objeto con mas de una
            propiedad, debe hacerse con un objeto literal */
            resolve({
                nombre: empleadoID.nombre,
                salario: salarioDB.salario,
                id: empleadoID.id
            });
        }
    });
}

/* Promesas Encadenadas, el segundo .then() corresponde a la funciòn salario y no olvidar aplicar el return */
getEmpleado(2)
    .then(empleado => {
        return getSalario(empleado)
    })
    .then(salario => {
        console.log(salario)
        console.log(`El salario de ${salario.nombre} es de $${salario.salario}`);
    })
    .catch(err => console.log(err));