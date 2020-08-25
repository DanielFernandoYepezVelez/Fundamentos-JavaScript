let name = ' Daniel Fernando Yepez Velez';

/* LENGTH */
/* Longitud de una cadena de caracteres */
console.log('Nombre =>', name);
console.log('Longitud Nombre =>', name.length);
console.log('----------------------------------------');

/* SUBSTRING() */
/* Mostrar el inicio de la cadena de caracteres.
Tambien puede recibir un argumento de fin */

/* NOTA => Si pones el numero mayor al principio
y el numero menor al final, El metodo es inteligente,
para intercambiar el orden, esa es la única diferencia 
con el slice, que este método no hace nada */
console.log('Nombre =>', name);
console.log('Inicio Cadena =>', name.substring(5));
console.log('Inicio Cadena y fin =>', name.substring(5, 8));
/* No se suele utilizar mucho */
console.log('Inicio Cadena y fin =>', name.substring(3, 10 - 1));
console.log('-----------------------------------------');

/* SUBSTR() */
/* Mostrar el inicio y el fin de una cadena de caracteres. 
Tambien puede mostrar solo el inicio de una cadena de 
caracteres */
console.log('Nombre =>', name);
console.log('Inicio y Fin Cadena =>', name.substr(0, 17));
console.log('------------------------------------------');

/* SLICE() */
/* Empieza La Cadena de Caracteres de atras hacia delante y
tambien puede funcionar como SUBSTR, es decir, recibe un 
valor inicial y un valor final */
console.log('Nombre =>', name);
console.log('Inicio y Fin Cadena "SLICE" =>', name.slice(0, 15));
console.log('Cadena Invertida "SLICE" =>', name.slice(-10));
console.log('------------------------------------------');

/* INDEXOF() */
/* Devuelve la posición de un caracter en la cadena(array) 
al pasarle un argumento que exista en la cadena, la primera coincidencia */
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
/*En conclusión, Puedo Concatenar variables de cualquier tipo */
console.log('------------------------------------------');

/* CHARAT() */
/* Recibe como argumento un numero de indice para devolver 
el "DATO" del indice indicado. */
console.log('Nombre =>', name);
console.log('Valor Devuelto =>', name.charAt(3));
console.log('------------------------------------------');

/* STARTSWITH() */
/* Le estoy indicando la letra o la palabra con que inicia
mi cadena de caracteres. me devuleve un valor de tipo
boolean. */
console.log('Nombre =>', name);
console.log('Palabra Inicial =>', name.startsWith('Daniel'));
console.log('Palabra Inicial =>', name.startsWith('Camilo'));
console.log('Letra Inicial =>', name.startsWith('D'));
console.log('Letra Inicial =>', name.startsWith('C'));
console.log('------------------------------------------');

/* ENDSWITH() */
/* Le estoy indicando la letra o la palabra con que termina
mi cadena de caracteres. Me devuleve un valor de tipo boolean.*/
console.log('Nombre =>', name);
console.log('Palabra Final =>', name.endsWith('Velez'));
console.log('Palabra Final =>', name.endsWith('Vasquez'));
console.log('Letra Final =>', name.endsWith('z'));
console.log('Letra Final =>', name.endsWith('S'));
console.log('------------------------------------------');

/* INCLUDES() */
/*Le estoy indicando que la letra o la palabra tiene alguna
coincidencia o relación con mi cadena de caracteres.
Me devuleve un valor de tipo boolean. */
console.log('Nombre =>', name);
console.log('Palabra Coincidencia =>', name.includes('Velez'));
console.log('Palabra Coincidencia =>', name.includes('Vasquez'));
console.log('Letra Coincidencia =>', name.includes('z'));
console.log('Letra Coincidencia =>', name.includes('S'));
console.log('Letra Coincidencia =>', name.includes('S', 3));
console.log('------------------------------------------');

/* REPLACE() */
/* Me sirve para reemplazar una cadena de texto completa o
simplemente una fracción de la cadena existente. */
console.log('Nombre =>', name);
console.log('Palabra Reemplazada =>', name.replace('Daniel Fernando', 'danielito fernandito'));
console.log('Letra Uno(Y) Reemplazada =>', name.replace('Y', 'y'));
console.log('Letra Dos(a) Reemplazada =>', name.replace('a', 'A'));
console.log('------------------------------------------');

/* REPEAT() */
/* Recibe un argumento de tipo numerico
y me permite indicar el numero de veces que deseo 
repetir la cadenas de texto completa. */

/* NOTA => Si le pasan un numero decimal, el numero se redondea
al numero mayor (2.4 pasa a 3) */
console.log('Nombre =>', name);
console.log('Cadena Repetida =>', name.repeat(2));
console.log('Cadena Repetida =>', name.repeat(2.4));
console.log('------------------------------------------');

/* SPLIT() */
/* Es muy util porque me permite pasar
datos de una variable a una estructura de tipo array
y este método recibe como argumento el carácter 
separador que va a indicar a que indice pertenece un
valor y a que indice pertenece otro. */
console.log('Nombre =>', name);
console.log('String A Array =>', name.split(','));
console.log('------------------------------------------');

/* TRIM() */
/* Me permite pasar por alto los caracteres
en blanco que tienen una cadena de texto, en el extremo
inicial y en el extremo final, no en otro lugar de la 
cadena de caracteres. */
let espacios = '          <- EspacioAqui       ESPACIOS CON BLANCO       ';
console.log('Nombre =>', espacios);
console.log('No Espacios Al Inicio =>', espacios.trimStart());
console.log('No Espacios Al Final =>', espacios.trimEnd());
console.log('No Espacios =>', espacios.trim());
console.log('------------------------------------------');

/* TOSTRING */
/* Convertir el numero de type number a un numero de tipo
string */
const number = 300;
console.log(number.toString());

/* METODOS ENCADENAMOS */
espacios = '          <- EspacioAqui       ESPACIOS CON BLANCO       ';
console.log('Nombre =>', espacios.toLowerCase().trimStart().trimEnd());
console.log('------------------------------------------');