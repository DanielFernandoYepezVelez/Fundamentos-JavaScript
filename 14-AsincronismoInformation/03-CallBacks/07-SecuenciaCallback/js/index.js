const calcularOperacion = (numero1, numero2, sumarCallBack, restarCallBack, divisionCallBack) => {
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let division = numero1 / numero2

    if (suma > 30) {
        sumarCallBack(`La suma no es válida porque es mayor a diez, ${suma}`);
    } else {
        sumarCallBack(null, suma);
    }

    if (resta < 0) {
        restarCallBack(`La resta no es válida porque es menor a cero, ${resta}`);
    } else {
        restarCallBack(null, resta);
    }

    if (numero2 !== 0) {
        divisionCallBack(null, division);
    } else {
        divisionCallBack(`La division no es validad por que el numero dos es igual a cero ${numero2}`)
    }
}

calcularOperacion(11, 5, (err, operacionRecibida) => {
        if (err) {
            return console.log(err);
        }
        console.log("Suma: ", operacionRecibida);
    },
    (err, operacionRecibida) => {
        if (err) {
            return console.log(err);
        }
        console.log("Resta: ", operacionRecibida);
    },
    (err, operacionRecibida) => {
        if (err) {
            return console.log(err);
        }
        console.log("Producto: ", operacionRecibida);
    }
);