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