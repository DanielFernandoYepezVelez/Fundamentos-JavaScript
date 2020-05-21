/* NUEVO DE ECMAScript 6 */
/* Obtenemos El Array */
const numbers = [-12, -6, 23, 40, 56];
console.log(numbers);
console.log('-------------------------');

/* El Array se disuelve y se obtienen los valores individualmente */
console.log(...numbers);
console.log('-------------------------');

/* Enviar elementos de un array a una función */
const addNumbers = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    return console.log('SUMA FINAL:', a + b + c);
}

const numbersAdd = [1, 2, 3];
addNumbers(...numbersAdd);
console.log('-------------------------');

/* Añadir un array a otro array */
const users = ['javier', 'david', 'rosa', 'juan', 'mercedes'];
console.log(users);

const newUsers = ['marta', 'jaime', 'laura'];

/* Agrego Tres O 200 Usuarios Nuevos Mas Facil */
/* DELANTE unshift */
/* CUALQUIER LUGAR splice */
/* ULTIMO push */
users.splice(2, 0, ...newUsers);
console.log(users);
console.log('-------------------------');

/* Copiar Arrays */
let arrayUno = [1, 2, 3, 4];
console.log(arrayUno);

/* Copiando El Array */
let arrayDos = [...arrayUno];
console.log(arrayDos);
console.log('-------------------------');

/* Concatenar Array */
let arrayConcat = arrayUno.concat(arrayDos);
console.log(arrayConcat);

/* Otra Forma */
arrayConcat = [...arrayUno, ...arrayDos]
console.log('Nuevo => ', arrayConcat);
console.log('-------------------------');

/* Enviar Un Número de argumentos indefinidos a una función (parametros REST) */
const restParams = (...numeritos) => {
    return console.log('Array =>', numeritos);
}

restParams(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
console.log('-------------------------');

/* Libreria Math */
/* Obtengo el maximo o el minimo de un array, sin
el spread operator me muestra un error */
console.log('Maximo => ', Math.max(...arrayUno));
console.log('Minimo => ', Math.min(...arrayUno));
console.log('-------------------------');

/* Eliminar Elementos Duplicados de un array */
const duplicados = [2, 2, 4, 5, 5, 5, 6, 7];
/* para ejecutar esto llego un nuevo objeto llamado SET, este objeto no permite elementos duplicados */
const set = new Set(duplicados);
console.log(set);

/* Otra Forma De Aplicar SET */
console.log(new Set(duplicados));
console.log('-------------------------');