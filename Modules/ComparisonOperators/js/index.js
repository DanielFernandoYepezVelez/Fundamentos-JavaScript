/* Operadores Relacionales */
const edadMayor = 18;
const edadMenor = 17;

/* Mayor Que */
if (edadMayor > 17) {
    console.log('Eres Mayor de edad');
} else {
    console.log('Eres Menor de edad');
}

/* Menor Que */
if (edadMenor < 18) {
    console.log('Eres Menor de edad');
} else {
    console.log('Eres Mayor de edad');
}
console.log('----------------------------------');

const edadMayorIgualQue = 18;
const edadMenorIgualQue = 17;

/* Mayor O Igual Que */
if (edadMayorIgualQue >= 18) {
    console.log('Eres Mayor de edad');
} else {
    console.log('Eres Menor de edad');
}

/* Menor O Igual Que */
if (edadMenorIgualQue <= 17) {
    console.log('Eres Menor de edad');
} else {
    console.log('Eres Mayor de edad');
}
console.log('----------------------------------');

/* Operador igual que */
const persona = {
    id: '12345',
    name: 'Daniel Fernando',
    age: 26
};

if (persona.id == 12345) {
    console.log('Los ID coinciden');
} else {
    console.log('Los ID NO coinciden');
}

if (persona.age == '26') {
    console.log('La EDAD coincide');
} else {
    console.log('Los EDAD NO coincide');
}
console.log('----------------------------------');

/* Operador Exactament Igual Con Los Tipos De Datos */
if (persona.id === 12345) {
    console.log('Los ID coinciden');
} else {
    console.log('Los ID NO coinciden');
}

if (persona.age === '26') {
    console.log('La EDAD coincide');
} else {
    console.log('Los EDAD NO coincide');
}
console.log('----------------------------------');

/* Operador No Igual Que */
if (persona.id != 12345) {
    console.log('Los ID Son Diferentes');
} else {
    console.log('Los ID NO Son Diferentes');
}

if (persona.age != '26') {
    console.log('Las EDADES Son Diferentes');
} else {
    console.log('Los EDADES NO Son Diferentes');
}
console.log('----------------------------------');

/* Operador No Igual Que INCLUIDO El Tipo De Dato*/
if (persona.id !== 12345) {
    console.log('Los ID Son Diferentes');
} else {
    console.log('Los ID NO Son Diferentes');
}

if (persona.age !== '26') {
    console.log('Las EDADES Son Diferentes');
} else {
    console.log('Los EDADES NO Son Diferentes');
}
console.log('----------------------------------');

/* Operadore Logicos */
const user = {
    name: 'Neo',
    discount: true
}
const finalValue = 200;

/* Operador AND && */
if (user.discount && finalValue >= 200) {
    console.log('Aplica promoción De Descuento');
} else {
    console.log(' NO Aplica promoción De Descuento');
}
console.log('----------------------------------');

/* Operador OR || */
if (user.discount === false || finalValue >= 200) {
    console.log('Aplica promoción De Descuento');
} else {
    console.log(' NO Aplica promoción De Descuento');
}
console.log('----------------------------------');

/* Operador Not ! */
const goku = {
    name: 'Goku',
    hungry: true
}

const goten = {
    name: 'Goten',
    hungry: false
}

if (!goku.hungry) {
    console.log('Goku Tiene Hambre');
} else {
    console.log('Goku No Tiene Hambre');
}

if (!goten.hungry) {
    console.log('Goten Tiene Hambre');
} else {
    console.log('Goten No Tiene Hambre');
}
console.log('----------------------------------');