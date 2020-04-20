/* Aqui estamos ejemplarizando por que es importante async-await, y no solo con las promesas se puede controlar el codigo asincrono, esta especificación salio en el 2016 con ES7 */

/* Esta función entrega una promesa con un nombre que se simula su peticion a una API, pero va tardar 2 segundos, en una API real no se sabe cuanto va a tardar, en conclusión, el resultado no va estar disponible cuando la función sayHello renderice en pantalla, por que dicha función esta en la pila de ejecución, es decir, no tuvo que realizar un proceso asincrono como lo esta haciendo getName(), por ende sus tiempos de respuestas son diferentes, para eso llego async-await, para que el codigo sincrono y asincrono tenga el mismo tiempo de ejecución */
/* const getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Daniel Fernando Yepez Velez');
        });
    }, 2000);
} */

/* getName()
    .then(name => console.log(name))
    .catch(err => console.log(err)); */

/* Esta funcion no puede entregar el resultado esperado por que la promesa aun no tiene datos o infromacion que le entregara el backend o el servidor */
/* const sayHello = () => {
    const name = getName();
    return `Hello ${name}`; //Error Inminente
} 
console.log(sayHello()); */

/* SOLUCIÓN AL PROBLEMA ANTERIOR */

const getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Daniel Fernando Yepez Velez');
        });
    }, 2000);
}

const sayHello = async() => {
    const name = await getName();
    return `Hello ${name}`; //Error Inminente
}

/* Pongo El .then() por que el async retorna una promesa, tambien se pued aplicar el .catch() */
sayHello()
    .then(res => console.log(res))
    .catch(err => console.log(err));