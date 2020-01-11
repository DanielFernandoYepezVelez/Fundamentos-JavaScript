/* Recorrer un objeto con un for-In */
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    modelo: 3,
    marca: 'Chevrolet',
    venta: true
};

/* Objeto Completo */
console.log(automovil);

/* keyAuto es la llave y automovil[keyAuto]
es el valor de la llave del objeto */
for (const keyAuto in automovil) {
    console.log(`${keyAuto}: ${automovil[keyAuto]}`);
}
console.log('------------------------');