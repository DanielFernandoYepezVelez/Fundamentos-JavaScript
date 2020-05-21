/* ENVIAR MUCHAS PROMESAS O PROMESAS EN GRUPO */
/* AQUI SOLO SE EJECUTA LA PROMESA ALL, LA CUAL VA A LLAMAR A LAS PROMESAS 
QUE EL METODO DE LA PROMESA TENGA EN SU PILA DE EJECUCIÓN Y CADA UNA DE ESAS
PROMESAS MUESTRAN LO QUE DEVUELVEN Y POR ULTIMO SE MUESTRA EL MENSAJE
DE LO QUE DEVUELVE LA PROMESA PRINCIPAL(ALL) */

const getUserTwoFalse = new Promise((resolve, reject) => {
        /* La function setTimeout me ayuda a simular
          como funcionan las promesas las cuales en
          realidad pueden ser Llamar un api externa, o
          realizar una consulta a una DB O tambien una
          consulta al sistema operativo de mi equipo.
        */
        setTimeout(() => {
            reject('SOY getUser FALSE \"DOS\"');
        }, 6000);
    })
    .then(() => console.log('Promesa Exitosa'))
    .catch((messageReject) => console.log(messageReject + ' Promesa Rechazada \"DOS\"'));

const getUserTwoTrue = new Promise((resolve, reject) => {
        /* La function setTimeout me ayuda a simular
           como funcionan las promesas las cuales en
           realidad pueden ser Llamar un api externa, o
           realizar una consulta a una DB O tambien una
           consulta al sistema operativo de mi equipo.
        */
        setTimeout(() => {
            resolve('SOY getUser TRUE \"DOS\"');
        }, 6000);
    })
    .then((messageResolve) => console.log(messageResolve + ' Promesa Recibida Exitosamente \"DOS\"'))
    .catch((error) => console.log(error));

/* TODAS LAS PROMESAS EN GRUPO */
Promise.all([
        getUserTwoFalse,
        getUserTwoTrue
    ])
    .then(() => console.log('Las Ultimas Dos Promesas EN GRUPO Fueron Exitosas'))
    .catch((messageReject) => console.log(messageReject));
/* ---------------------------------------------------------------------------------- */