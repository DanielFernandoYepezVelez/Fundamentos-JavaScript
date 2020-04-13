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

let getPersonById = (id, callBack) => {
    let personDB = persons.find(personas => personas.id === id);

    if (!personDB) {
        callBack('La persona No existe en la BD de monkaroo');
    } else {
        callBack(null, personDB);
    }
};

getPersonById("5d8c4615fc13ae1234000000", (err, personDBParametro) => {
    console.log('Ejecutando La Petición...............');

    setTimeout(() => {
        if (err) {
            return console.log(err);
        }

        console.log(`Nombre de la persona de la BD es ${personDBParametro.name}`);
        console.log(`Email de la persona de la BD es ${personDBParametro.email}`);
        console.log(`Lenguaje de la persona de la BD es ${personDBParametro.language}`);
    }, 2000);

    setTimeout(() => {
        console.log('Finalizando La Petición................');
    }, 2100);
});