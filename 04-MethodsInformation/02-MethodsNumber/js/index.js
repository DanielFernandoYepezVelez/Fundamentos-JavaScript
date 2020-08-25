/* EL OBJETO MATH ES ESTATICO, ES DECIR, TENEMOS QUE ESCRIBIR SU NOMBRE PARA UTILIZARLO 
Y NO ES NECESARIO INSTANCIAR LA CLASE */

/* Propiedad Para Obtener El Numero PI */
const PI = Math.PI;
console.log(`Numero PI => ${PI}`);
console.log('---------------------------------');

/* Propiedad Para Obtener El Numero E */
const E = Math.E;
console.log(`Numero E => ${E}`);
console.log('---------------------------------');

/* Método Para Obtener El Valor Absoluto De Un Numero */
const numberABS = -12;
const valorAbsoluto = Math.abs(numberABS);
console.log(`Valor Absoluto => ${valorAbsoluto}`);
console.log('---------------------------------');

/* Método Para Obtener El Entero Mayor De Un Numero Decimal  */
const numeroCEIL = 5.1;
const redondeoSuperior = Math.ceil(numeroCEIL);
console.log(`Redondeo Superior => ${redondeoSuperior}`);
console.log('---------------------------------');

/* Método Para Obtener El Entero Menor De Un Numero Decimal  */
const numeroFLOOR = 7.9;
const redondeoInferior = Math.floor(numeroFLOOR);
console.log(`Redondeo Inferior => ${redondeoInferior}`);
console.log('---------------------------------');

/* Método Para Obtener La Potencia De Un Numero */
const base = 5,
    exponente = 2;
const potencia = Math.pow(base, exponente);
console.log(`Potencia Del Numero 5 => ${potencia}`);
console.log('---------------------------------');

/* Método Para Obtener Un Numero pseudoAleatorio Entre El 0 Y 1 */
const numeroALEATORIO = Math.random();
console.log(`Numero Aleatorio Entre 0 Y 1 => ${numeroALEATORIO}`);

/* FORMULA QUE SIEMPRE SE USA PARA GENERAR UN NUMERO ALEATORIO ENTRE 5 Y 10 */
const max = 10;
const min = 5;
const formulaGeneral = Math.round((Math.random() * (max - min) + min));
console.log(`Número Aleatorio Entre 5 Y 10 => ${(Math.random() * (max - min) + min)}`);
console.log(`Número Aleatorio Entre 5 Y 10 Y Tambien Redondeado => ${formulaGeneral}`);
console.log('---------------------------------');

/* Método Para Obtener Un Numero Decimal A Un Numero Redondeado Al Entero Mas Cercano */
const numeroALEATORIO2 = 56.9894948484848;
const numeroREDONDEADO = Math.round(numeroALEATORIO2);
console.log(`Numero pseudoAleatorio Redondeado => ${numeroREDONDEADO}`);
console.log('---------------------------------');

/* Método Para Obtener La Raiz Cuadrada De Un Numero */
const numeroCuadrado = 81;
const raizCuadrada = Math.sqrt(numeroCuadrado);
console.log(`Raiz Cuadrada => ${raizCuadrada}`);
console.log('---------------------------------');

/* Método Para Obtener El Número Minimo */
const numeroMin = Math.min(-8, 1, 2, 3, 4, 5);
console.log(`Numero Minimo => ${numeroMin}`);

/* Método Para Obtener El Número Maximo */
const numeroMax = Math.max(-8, 1, 2, 3, 4, 5, 6, 7);
console.log(`Numero Maximo => ${numeroMax}`);
console.log('---------------------------------');

/* Método Para Obtener El signo Positivo, Cero, Signo Negativo De Un Numero, Se Representa Con El Numero 1 */
const numeroPositivo = 5;
const numeroCero = 0;
const numeroNegativo = -5;
console.log(`Numero Positivo => ${Math.sign(numeroPositivo)}`);
console.log(`Numero Positivo => ${Math.sign(numeroCero)}`);
console.log(`Numero Positivo => ${Math.sign(numeroNegativo)}`);
console.log('---------------------------------');

/* EJEMPLO AISLADO O INDEPENDIENTE */
/* Operaciones con decimales */
let precioVino = 200.3;
let total = precioVino * 3;

/* Necesitamos Darle presición a los decimales */
total = precioVino * 100 * 3 / 100;

/* Precisión o redondeo de los decimales con las funciones del objeto Math*/
total = Math.round(precioVino * 100 * 3) / 100;

/* Aqui estamos agregando decimales al numero Total que la funcion toFixed() me convierte a un string */
let totalStr = total.toFixed(3);

/* Aqui ese numero total de string lo convertimos en un numero flotante */
let totalFloat = parseFloat(total.toFixed(3));

/*Division de pizza que corresponde a una persona */
let pizza = 8;
let personaPizza = 2;
let cantidadPizzaPersona = pizza / personaPizza;