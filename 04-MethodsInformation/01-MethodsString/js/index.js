const name = 'Daniel Fernando Yepez Velez';

/* LENGTH */
/* Longitud de una cade de caracteres */
console.log('Nombre =>', name);
console.log('Longitud Nombre =>', name.length);
console.log('----------------------------------------');

/* SUBSTRING() */
/* Mostrar el inicio de la cadena de caracteres.
Tambien puede recibir un argumento de fin */
console.log('Nombre =>', name);
console.log('Inicio Cadena =>', name.substring(5));
console.log('-----------------------------------------');

/* SUBSTR() */
/* Mostrar el inicio y el fin de una cadena de caracteres. 
Tambien puede mostrar solo el inicio de una cadena de 
caracteres */
console.log('Nombre =>', name);
console.log('Inicio y Fin Cadena =>', name.substr(0, 17));
console.log('------------------------------------------');

/* INDEXOF() */
/* Devuelve la posición de un caracter en la cadena(array) 
al pasarle un argumento que exista en la cadena */
console.log('Nombre =>', name);
console.log(`Posicion Letter Find => ${name.indexOf('i')}`);

/* Si el argumento no existe en la cadena nos va a retornar un -1 */
console.log(`Posicion Letter Not Find => ${name.indexOf('x')}`);

/* Puede recibir dos argumentos, la letra a buscar y desde que indice
o posición inicia la busqueda */
console.log(`Posicion Letter E Indice De Inicio A Buscar => ${name.indexOf('F', 5)}`);
console.log('------------------------------------------');

/* LASTINDEXOF() */
/* Devuelve la ultima posición de un caracter en 
la cadena(array) al pasarle un argumento que exista 
en la cadena */
console.log('Nombre =>', name);
console.log('Ultima Posicion Letter => ', name.lastIndexOf('z'));

/* Si el argumento no existe en la cadena nos va a retornar un -1 */
console.log(`Posicion Letter Not Find => ${name.lastIndexOf('x')}`);
console.log('------------------------------------------');

/* TOUPPERCASE() */
console.log('Nombre =>', name);
console.log('Nombre Mayúscula => ', name.toUpperCase());
console.log('------------------------------------------');

/* TOLOWERCASE() */
console.log('Nombre =>', name);
console.log('Nombre Minúscula => ', name.toLowerCase());
console.log('------------------------------------------');

/* CONCAT() */
/* Puedo Concatenar Variables De Tipo String */
console.log('Nombre =>', name);
let nameTwo = ' | Camila Velasquez Mesa';
console.log(name.concat(nameTwo));

/* Puedo concatenar un String Puro */
console.log(name.concat(' Concatenando Un String Puro'));

/* Puedo Concatenar Variables De Tipo Numerica */
nameTwo = 23;
console.log(name.concat(' ' + nameTwo));
console.log('Type Variable Concatenada =>', typeof nameTwo);
/* Puedo Concatenar variables de cualquier tipo */
console.log('------------------------------------------');


/* slice(-3) empieza de atras hacia delante y tambien
hace lo mismo qe substring*/