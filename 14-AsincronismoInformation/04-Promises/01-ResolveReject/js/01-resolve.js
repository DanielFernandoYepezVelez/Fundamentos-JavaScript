const esperando = new Promise(function(resolve, reject) {
    /* Resolve Se ejecuta cuando la promesa se cumple */
    setTimeout(function() {
        resolve('Se Ejecuto La Promesa Correctamente');
    }, 5000);
});

/* Para que el resolve se ejecute correctamente se debe estar acompañado de la palabra .then() */
/* .then() espera que resolve se cumpla para poder ejecutar el codigo */
esperando
    .then(function(mensaje) {
        console.log(mensaje);
    });