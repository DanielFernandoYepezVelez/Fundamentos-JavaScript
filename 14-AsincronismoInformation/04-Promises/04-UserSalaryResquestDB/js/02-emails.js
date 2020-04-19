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

    const promise = new Promise((resolve, reject) => {
        if (!userDB) {
            reject('El usuario No existe en la base de datos');
        } else {
            resolve(userDB);
        }
    });

    return promise;
}

const getEmail = (user) => {
    const emailDB = emails.find(email => email.id === user.id);

    return promise = new Promise((resolve, reject) => {
        if (!emailDB) {
            reject(`El usuario ${user.name} No tiene un email en la base de datos`);
        } else {
            resolve({
                id: user.id,
                user: user.name,
                email: emailDB.email
            });
        }
    });
}

getUser(2)
    .then(user => {
        return getEmail(user);
    })
    .then(email => {
        console.log('email =>', email);
    })
    .catch(err => console.log(err));