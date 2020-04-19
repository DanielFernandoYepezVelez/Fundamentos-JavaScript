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

const getUser = (id, cb) => {
    const userDB = users.find(user => user.id === id);

    if (!userDB) {
        cb('El usuario No existe en la base de datos');
    } else {
        cb(null, userDB);
    }
}

const getEmail = (user, cb) => {
    const emailDB = emails.find(email => email.id === user.id);

    if (!emailDB) {
        cb(`El usuario ${user.name} No tiene un email en la base de datos`);
    } else {
        cb(null, {
            id: user.id,
            user: user.name,
            email: emailDB.email
        });
    }
}

/* Camino Hacia el Callback Hell, por eso se dejaron de usar */
getUser(2, (err, user) => {
    if (err) {
        return console.log(err);
    }
    getEmail(user, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(res);
    });
});