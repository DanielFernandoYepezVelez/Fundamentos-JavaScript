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

let getEmpleado = (id, cb) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        cb(`No existe el empleado con el id ${id}`);
    } else {
        cb(null, empleadoDB);
    }
}

let getSalario = (empleadoID, cb) => {
    let salarioDB = salarios.find(salario => salario.id === empleadoID.id);

    if (!salarioDB) {
        cb(`El empleado ${empleadoID.nombre} no tiene salario ASIGNADO`);
    } else {
        /* Para Regresar un objeto con mas de una
        propiedad, debe hacerse con un objeto literal */
        cb(null, {
            nombre: empleadoID.nombre,
            salario: salarioDB.salario,
            id: empleadoID.id
        });
    }
}

getEmpleado(2, (err, empleadoRecibido) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleadoRecibido, (err, salarioRecibido) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${salarioRecibido.nombre} es de ${salarioRecibido.salario}$`);

        /* Si yo necesito hacer una consulta en la BD que dependa
        del salario, escribiria otro callback en este lugar y El
        problema con los callback anidados, es que son muy complicados
        de interpretar porque el codigo se va ubicando de forma lateral,
        pero para evitar eso existen las promesas. */
    });
});