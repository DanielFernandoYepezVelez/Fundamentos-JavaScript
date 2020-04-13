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

let getPersonById = (id, callBack) => {
    let personDB = persons.find(personas => personas.id === id);

    if (!personDB) {
        callBack('La persona No existe en la BD de monkaroo');
    } else {
        callBack(null, personDB);
    }
};

let getSalaryPerson = (personID, cb) => {
    const salaryDB = salarios.find(salario => salario.id === personID.id);

    if (!salaryDB) {
        cb(`La persona que se llama ${personID.name}, no tiene asignado un salario actualmente`);
    } else {
        cb(null, salaryDB);
    }
}

getPersonById("5d8c4615fc13ae1234000000", (err, personDBParametro) => {
    console.log('Ejecutando La Petición...............');

    setTimeout(() => {
        if (err) {
            return console.log(err);
        }
        console.log(`Nombre de la persona de la BD es ${personDBParametro.name}`);
        console.log(`Email de la persona de la BD es ${personDBParametro.email}`);
        console.log(`Lenguaje de la persona de la BD es ${personDBParametro.language}`);
        console.log(`Lenguaje de la persona de la BD es ${personDBParametro.university}`);
    }, 2000);

    getSalaryPerson(personDBParametro, (err, salaryDB) => {
        setTimeout(() => {
            if (err) {
                return console.log(err);
            }
            console.log(`El salario de ${personDBParametro.name} es ${salaryDB.salary} pesos`);
        }, 2000);
    });

    setTimeout(() => {
        console.log('Finalizando La Petición................');
    }, 2100);
});