const autos = [{
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2012,
        precio: 30000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2015,
        precio: 20000,
        puertas: 2,
        color: 'Blanco',
        transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2016,
        precio: 70000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2015,
        precio: 25000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        year: 2018,
        precio: 60000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    },
    { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2017,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2012,
        precio: 25000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 45000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2019,
        precio: 90000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2015,
        precio: 35000,
        puertas: 2,
        color: 'Azul',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2018,
        precio: 50000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2017,
        precio: 80000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico'
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico'
    },
    { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// console.table(autos);
/* Como Se Hace Para Aprender Los Ciclos O Como Se Hacia Antes */
/* for (let index = 0; index < autos.length; index++) {
    console.table(autos[index]);
} */

/* forEach */
/* La Clave Y El Uso Principal Que Se Le Da A Esta Estructura Algoritmica Es Recorrer Arrays, Solo Recorrerolos Por que No Retornan Ningun Otro Nuevo Valor, Solo Muestra Por Pantalla, Cumple La Misma Función Que El For, Solo Que En Menos Lineas De Código */
// autos.forEach((autos) => console.table(autos));

// map
/* El Valor De Esta Estructura Algoritmica Es Que Retorna Un Nuevo Array, es decir, Transforma La Data, Siempre Y Cuando El Retorno Sea Directo */
/* let newAutos = [];
console.log(newAutos);

newAutos = autos.map((autos) => autos);
console.table(newAutos); */

// filter
/* Retorna Un Nuevo Array De Todos Los Elementos Que Encuentre Que Cumplan La Condición Definida, En Su Retorno De Forma Directa */
/* let autosFilter = [];
console.log(autosFilter);

autosFilter = autos.filter((autos) => autos.puertas === 2);
console.table(autosFilter); */

// find
/* Hace Los Mismo Que El Filter, Pero Aqui Solo Me Devuelve Solo El Primer Valor Que Cumpla La Condición Definada En Su Retorno De Forma Directa */
/* let autosFind = [];
console.log(autosFind);

autosFind = autos.find((autos) => autos.puertas > 2 && autos.color === 'Rojo');
console.table(autosFind); */

// reduce
/* Funciona Con Valores Numericos O Precios Retorna Un Unico Valor, Por Que Se Le Mandan Dos Argumentos, El Primero Es Un Valor Acumulativo Donde Se Va Almacenar El Resultado Final Y El Otro Argumento Es Para Indicar EL Valor Unico De Cada Elemento Del Array Y Por Ultimo Se Debe Indicar El Valor Inicial En Que Debe Iniciar el Primer Argumento */
/* let autosReduce;
console.log(autosReduce);

autosReduce = autos.reduce((total, autos) => total + autos.precio, 0);
console.log(autosReduce);

const reduce = [1, 2, 3];
console.log(reduce);

const newReduce = reduce.reduce((total, valorUnico) => total + valorUnico, 100);
console.log(newReduce); */

// some
/* Me retorna Un True O False Si Se Cumple Con La Condición Definida En Su Retorno De Forma Directa, No Se Sabe En Que Momento Se Cumple La Condición, Pero Si Existe Dicha Condición Dentro Del Array */
const condicion = autos.some((auto) => auto.precio > 20000 && auto.puertas > 2);
console.log(condicion);