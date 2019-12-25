/* Funciones para los strings o cadenas de caracteres */
let name = 'Daniel Fernando';
let lastName = 'Yepez Vélez';
let completeName;

/* Convierto Strings a minusculas */
completeName = `${name.toLowerCase()} ${lastName.toLowerCase()}`;
console.log(completeName);

/* Convierto strings a mayusculas */
completeName = `${name.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(completeName);

/* Obtengo letra de un string referenciando la posición */
let firstLetterName = name.charAt(0).toLowerCase();
console.log(firstLetterName);

/* Obtengo letra de un string referenciando la posición Y Convierto Strings a mayusculas */
let secondLetterLastNameMayus = lastName.charAt(1).toUpperCase();
console.log(secondLetterLastNameMayus);

/* Obtengo la longitud de un string */
let lengthCompleteName = completeName.length;
console.log(lengthCompleteName);

/* Obtengo un rango de letras de un string principal referenciando la posición */
let strCompleteName = completeName.substr(0, 4);
console.log(strCompleteName);

/* Obtengo las letras de un string desde la posición referenciada hasta su final*/
let substrCompleteName = completeName.substring(3);
console.log(substrCompleteName);