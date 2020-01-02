/* Boolean a Number */
let booleanFalse = false;
let booleantrue = true;

console.log(booleanFalse, typeof booleanFalse, typeof Number(booleanFalse), Number(booleanFalse));
console.log(booleantrue, typeof booleantrue, typeof Number(booleantrue), Number(booleantrue));
console.log('-----------------------------------------------');

/* Boolean a String */
booleanFalse = false;
booleantrue = true;

console.log(booleanFalse, typeof booleanFalse, typeof String(booleanFalse), String(booleanFalse));
console.log(booleantrue, typeof booleantrue, typeof String(booleantrue), String(booleantrue));
console.log('------------------------------------------------');

/* Strings And Numbers To Boolean (RESULT FALSE) */
const stringVacio = '';
const number = 0;
const nuleValue = null;
const undefinedValue = undefined;
const NaNValue = NaN;

console.log(stringVacio, 'AquiHayUnStringVacio', typeof stringVacio, typeof Boolean(stringVacio), Boolean(stringVacio));
console.log(number, typeof number, typeof Boolean(number), Boolean(number));
console.log(nuleValue, typeof nuleValue, typeof Boolean(nuleValue), Boolean(nuleValue));
console.log(undefinedValue, typeof undefinedValue, typeof Boolean(undefinedValue), Boolean(undefinedValue));
console.log(NaNValue, typeof NaNValue, typeof Boolean(NaNValue), Boolean(NaNValue));
console.log('------------------------------------------------');

/* Strings, Arrays, Objects And Numbers To Boolean (RESULT TRUE) */
const stringNotVacio = 'This is a String';
const numberTrue = 1;
const objectVacio = {};
const objectNotVacio = { name: 'Daniel' };
const arrayVacio = [];
const arrayNotVacio = [1, 2, 3];

console.log(stringNotVacio, typeof stringNotVacio, typeof Boolean(stringNotVacio), Boolean(stringNotVacio));
console.log(numberTrue, typeof numberTrue, typeof Boolean(numberTrue), Boolean(numberTrue));
console.log(objectVacio, typeof objectVacio, typeof Boolean(objectVacio), Boolean(objectVacio));
console.log(objectNotVacio, typeof objectNotVacio, typeof Boolean(objectNotVacio), Boolean(objectNotVacio));
console.log(arrayVacio, typeof arrayVacio, typeof Boolean(arrayVacio), Boolean(arrayVacio));
console.log(arrayNotVacio, typeof arrayNotVacio, typeof Boolean(arrayNotVacio), Boolean(arrayNotVacio));
console.log('------------------------------------------------');