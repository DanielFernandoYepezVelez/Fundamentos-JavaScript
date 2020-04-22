/* Forma Antigua O Sin Destructuring Para Funciones */
const reservacion = (completo, opciones) => {
    if (completo) {
        const pago = opciones.metodoPago;
        const cantidad = opciones.cantidad;
        const dias = opciones.dias;

        console.log('Forma Tradicional => ', pago);
        console.log('Forma Tradicional => ', cantidad);
        console.log('Forma Tradicional => ', dias);

        return console.log('Reserva Completada.........');
    } else {
        return console.log('Reserva Abandonada.........');
    }
}

reservacion(false);
console.log('----------------------------------------');

/* Forma Con Destructuring */
const reservacion1 = (completo, opciones) => {
    if (!completo) {
        return console.log('Reserva Abandonada.............');
    } else {
        const { metodoPago, cantidad, dias } = opciones;

        console.log('Forma Con Destructuring =>', metodoPago);
        console.log('Forma Con Destructuring =>', cantidad);
        console.log('Forma Con Destructuring =>', dias);

        return console.log('Reserva Completada.........');
    }
}

reservacion1(true, {
    metodoPago: 'Tarjeta Uno',
    cantidad: 5001,
    dias: 51
});
console.log('----------------------------------------');

/* Destructuring Con Parametros O Valores Por Defecto */
/* Es Muy Extraño, pero funciona, aunque prefiero la forma de la parte superior */
const reservacion2 = (completo, {
    metodoPago = 'N/A',
    cantidad = 0,
    dias = 0
}) => {

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

/* Tengo que mandar un objeto vacio para que los parametros por defecto sean leidos correctamente */
reservacion2(false, {
    // metodoPago: 'tarjeta',
    // cantidad: 5000,
    // dias: 4
});
console.log('----------------------------------------');