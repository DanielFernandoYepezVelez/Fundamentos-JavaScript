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

getPersonById("5d8c4615fc13ae1234000000")
    .then(user => {
        console.log('Ejecutando La Petición...............');

        setTimeout(() => {
            console.log(`Nombre de la persona de la BD es ${user.name}`);
            console.log(`Email de la persona de la BD es ${user.email}`);
            console.log(`Lenguaje de la persona de la BD es ${user.language}`);
        }, 2000);

        setTimeout(() => {
            console.log('Finalizando La Petición................');
        }, 2100);
    })
    .catch(res => console.log(res))