let names = ['Paco', 'Jose', 'Paula', 'Maria'];

/* Se debe asignar un nombre tipo llave, para recorrer el arreglo y obtener el INDICE de cada posición */
for (let name in names) {
    console.log('Valor Obtenido =>', name);
}
console.log('-------------------------------');

/* Con la forma anterior obtengo solo el indice, pero con esta forma de definición puedo obtener el valor y tambien su indice*/
for (let name in names) {
    console.log(`Posición => ${name} \nValor Obtenido => ${names[name]}`);
}
console.log('------------------------------');

/* Recorrer un objeto con un for-In */
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    marca: 'Chevrolet',
    venta: true
};

/* Objeto Completo */
console.log(automovil);

/* keyAuto es la palabra LLAVE o CLAVE y automovil[keyAuto] es el valor de la LLAVE o CLAVE del objeto recorrido */
for (const keyAuto in automovil) {
    console.log(`${keyAuto}: ${automovil[keyAuto]}`);
}
console.log('------------------------');