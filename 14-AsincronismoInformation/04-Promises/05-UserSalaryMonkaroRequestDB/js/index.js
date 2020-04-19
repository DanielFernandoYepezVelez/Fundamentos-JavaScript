const persons = [{
        id: "5d8c4615fc13ae1234000000",
        name: "Arvy McCauley",
        email: "amccauley0@google.cn",
        language: "German",
        university: "Istanbul Kultur University"
    },
    {
        id: "5d8c4615fc13ae1234000001",
        name: "Doe Hardey",
        email: "dhardey1@ucoz.ru",
        language: "English",
        university: "Fachhochschule Kaiserslautern"
    },
    {
        id: "5d8c4615fc13ae1234000002",
        name: "Jeff Aberdeen",
        email: "jaberdeen2@woothemes.com",
        language: "Belarusian",
        university: "Stockholm Institute of Education"
    },
    {
        id: "5d8c4615fc13ae1234000003",
        name: "Murdoch Jubert",
        email: "mjubert3@xrea.com",
        language: "Zulu",
        university: "Stockholm Institute of Education"
    },
    {
        id: "5d8c4615fc13ae1234000004",
        name: "Lazar Pallesen",
        email: "lpallesen4@wp.com",
        language: "Haitian Creole",
        university: "Chengdu University of Traditional Chinese Medicine"
    }
];

salarios = [{
        id: "5d8c4615fc13ae1234000000",
        salary: 10000
    },
    {
        id: "5d8c4615fc13ae1234000001",
        salary: 20000
    },
    {
        id: "5d8c4615fc13ae1234000002",
        salary: 30000
    },
    {
        id: "5d8c4615fc13ae1234000003",
        salary: 40000
    },
    // { Este esta comentado para poder ejecutar el error
    //     id: "5d8c4615fc13ae1234000004",
    //     salary: 50000
    // }
]

let getPersonById = (id) => {
    let personDB = persons.find(personas => personas.id === id);

    return new Promise((resolve, reject) => {
        if (!personDB) {
            reject('La persona No existe en la BD de monkaroo');
        } else {
            resolve(personDB);
        }
    });
};

let getSalaryPerson = (personID) => {
    const salaryDB = salarios.find(salario => salario.id === personID.id);

    const promise = new Promise((resolve, reject) => {
        if (!salaryDB) {
            reject(`La persona que se llama ${personID.name}, no tiene asignado un salario actualmente`);
        } else {
            resolve({
                id: salaryDB.id,
                name: personID.name,
                salario: salaryDB.salary
            });
        }
    });

    return promise;
}

getPersonById("5d8c4615fc13ae1234000000")
    .then(person => {
        console.log('Ejecutando La Petición...............');

        setTimeout(() => {
            console.log(`Nombre de la persona de la BD es ${person.name}`);
            console.log(`Email de la persona de la BD es ${person.email}`);
            console.log(`Lenguaje de la persona de la BD es ${person.language}`);
            console.log(`Universidad de la persona de la BD es ${person.university}`);
        }, 2000);

        return getSalaryPerson(person)
    })
    .then(salaryDB => {
        setTimeout(() => {
            console.log(`El salario de ${salaryDB.name} es $${salaryDB.salario} pesos`);
        }, 2000);

        setTimeout(() => {
            console.log('Finalizando La Petición................');
        }, 2100);
    })
    .catch(err => console.log(err));