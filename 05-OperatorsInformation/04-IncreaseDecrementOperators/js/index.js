/* INCREMENTO */
let a = 10;
console.log(a);
console.log('---------------------------');

a++;
console.log(a);
console.log('---------------------------');

++a;
console.log(a);
console.log('---------------------------');

let x = 5;
let y = x;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('---------------------------');

/* Post-Incremento */
/* Primero asigno X a Y y luego incremento x */
y = x++;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('---------------------------');

/* Pre-Incremento */
/* primero incremento X y posteriorment 
asigno X a Y con el incremento incluido */
y = ++x;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('---------------------------');

/* DECREMENTO */
let b = 15;
console.log(b);
console.log('---------------------------');

b--;
console.log(b);
console.log('---------------------------');

--b;
console.log(b);
console.log('---------------------------');

let w = 9;
let z = w;

console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('---------------------------');

/* Post-Decremento */
/* Primero asigno W a Z y luego decremento W */
z = w--;
console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('---------------------------');

/* Pre-Decremento */
/* primero decremento W y posteriorment 
asigno W a Z con el decremento incluido */
z = --w;
console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('---------------------------');