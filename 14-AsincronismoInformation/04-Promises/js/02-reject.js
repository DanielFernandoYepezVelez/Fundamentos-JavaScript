const aplicarDescuento = new Promise(function(resolve, reject) {

    const descuento = false;
    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        /* Resject Se ejecuta cuando la promesa NO se cumple. */
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(res) {
    console.log(res);

}).catch(function(err) {
    console.log(err);
});