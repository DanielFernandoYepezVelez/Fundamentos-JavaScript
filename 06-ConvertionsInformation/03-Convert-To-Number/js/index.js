/* String Original */
let cadenaNumber = "28";

/* String a Number */
console.log(cadenaNumber, typeof cadenaNumber, typeof Number(cadenaNumber), Number(cadenaNumber));
console.log('--------------------------------------------');

/* String a parseInt */
console.log(cadenaNumber, typeof cadenaNumber, typeof parseInt(cadenaNumber), parseInt(cadenaNumber));
console.log('--------------------------------------------');

/* String a parseFloat */
console.log(cadenaNumber, typeof cadenaNumber, typeof parseFloat(cadenaNumber), parseFloat(cadenaNumber));
console.log('--------------------------------------------');

/* String a Number (NaN) Not A Number*/
let cadenaExtraña = '28 r .';
console.log(cadenaExtraña, typeof cadenaExtraña, typeof Number(cadenaExtraña), Number(cadenaExtraña));
console.log('--------------------------------------------');