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

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = (empleadoID) => {
    let salarioDB = salarios.find(salario => salario.id === empleadoID.id);

    if (!salarioDB) {
        throw new Error(`El empleado ${empleadoID.nombre} no tiene salario ASIGNADO`);
    } else {
        /* Para Regresar un objeto con mas de una
        propiedad, debe hacerse con un objeto literal */
        return ({
            nombre: empleadoID.nombre,
            salario: salarioDB.salario,
            id: empleadoID.id
        });
    }
}

const getInformacionGeneral = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(empleado);
        return `El empleado ${empleado.nombre} tiene un salario de $${salario.salario}`;
    } catch (error) {
        console.log(error);
    }
}

getInformacionGeneral(1)
    .then(res => res === undefined ? console.log('-----No se Ejecuta el Resolve-------') : console.log(res))
    .catch(error => console.log(error))