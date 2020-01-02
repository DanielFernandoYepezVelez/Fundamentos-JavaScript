/* INCREMENTO */
let a = 10;
console.log(a);
console.log('------------------------------------');

a++;
console.log(a);
console.log('------------------------------------');

++a;
console.log(a);
console.log('------------------------------------');

let x = 5;
let y = x;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('-------------------------------------');

/* Post-Incremento */
/* Primero asigno x a y y luego incremento x */
y = x++;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('-------------------------------------');

/* Pre-Incremento */
/* primero incremento x y posteriorment 
asigno x a y con el incremento incluido */
y = ++x;
console.log(`El Valor de \"X\" es => ${x} Y el valor de \"Y\" es => ${y}`);
console.log('-------------------------------------');

/* DECREMENTO */
let b = 15;

b--;
console.log(b);
console.log('-------------------------------------');

--b;
console.log(b);
console.log('-------------------------------------');

let w = 9;
let z = w;

console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('-------------------------------------');

/* Post-Decremento */
/* Primero asigno w a z y luego decremento w */
z = w--;
console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('-------------------------------------');

/* Pre-Decremento */
/* primero incremento x y posteriorment 
asigno x a y con el incremento incluido */
z = --w;
console.log(`El Valor de \"W\" es => ${w} Y el valor de \"Z\" es => ${z}`);
console.log('-------------------------------------');