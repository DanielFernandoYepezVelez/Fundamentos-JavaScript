const users = [{
        id: 1,
        name: 'Daniel'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    },
];

const emails = [{
        id: 1,
        email: 'daniel.02@gmail.com'
    },
    {
        id: 2,
        email: 'laura.02@gmail.com'
    }
];

const getUser = (id) => {
    const userDB = users.find(user => user.id === id);

    if (!userDB) {
        throw new Error('El usuario No existe en la base de datos');
    } else {
        return userDB;
    }
}

const getEmail = (user) => {
    const emailDB = emails.find(email => email.id === user.id);

    if (!emailDB) {
        throw new Error(`El usuario ${user.name} No tiene un email en la base de datos`);
    } else {
        return ({
            id: user.id,
            user: user.name,
            email: emailDB.email
        });
    }
}

const getInfo = async(id) => {
    try {
        const user = await getUser(id);
        const email = await getEmail(user);
        return `El Nombres es: ${user.name} y le corresponde el email ${email.email}`;
    } catch (error) {
        console.log('Este es el error del try-catch', error);
    }
}

getInfo(3)
    .then(res => res === undefined ? console.log('-----No se Ejecuta el Resolve-------') : console.log(res))
    // .catch(error => console.log(error))