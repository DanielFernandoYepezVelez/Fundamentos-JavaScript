let daniel = {
  nombre: 'Daniel Fernando',
  apellidos: 'Yépez Vélez',
  edad: 26,
  genero: 'Masculino',
  sexo: true
}

let laura = {
  nombre: 'Laura Jimena',
  apellidos: 'Velasquez',
  edad: 17,
  genero: 'Femenino',
  sexo: false
}

// Parametros por valor OBJETO DANIEL.
function valoresValor1(personaValor1, personaValor2, personaValor3, personaValor4, personaValor5)
{
  personaValor1 = 'Policarpa';
  personaValor2 = 'Zabalarrieta Perez';
  personaValor3 += 3;
  personaValor4 = 'Femenino';
  personaValor5 = false;

  return '  Nombre: ' + personaValor1 + ','+
         ' Apellidos: ' + personaValor2 + ','+
         ' Edad: ' + personaValor3 + ','+
         ' Genero: ' + personaValor4 + ','+
         ' Sexo: ' + personaValor5 + ',';
}

console.log(daniel);
let danielMayor = valoresValor1(daniel.nombre, daniel.apellidos, daniel.edad, daniel.genero, daniel.sexo);
console.log(danielMayor);
console.log(daniel);

// Parametros por valor OBJETO LAURA.
function valoresValor2(personaValor1, personaValor2, personaValor3, personaValor4, personaValor5)
{
  personaValor1 = 'Don Emilio';
  personaValor2 = 'Gomez Campo';
  personaValor3 += 3;
  personaValor4 = 'Masculino';
  personaValor5 = true;

  return '  Nombre: ' + personaValor1 + ','+
         ' Apellidos: ' + personaValor2 + ','+
         ' Edad: ' + personaValor3 + ','+
         ' Genero: ' + personaValor4 + ','+
         ' Sexo: ' + personaValor5 + ',';
}

console.log(laura);
let lauraMayor = valoresValor2(laura.nombre, laura.apellidos, laura.edad, laura.genero, laura.sexo);
console.log(lauraMayor);
console.log(laura);
console.log(' ');
// ---------------------------------------------

// Parametros por Referencia OBJETO DANIEL
function valoresReferencia1(personaObjeto1)
{
  personaObjeto1.edad += 2;
  personaObjeto1.nombre = 'Gustavo Emilio';
  return personaObjeto1;
}
console.log(daniel);
danielMayor = valoresReferencia1(daniel);
console.log(danielMayor);
console.log(daniel);

// Parametros por Referencia OBJETO LAURA
function valoresReferencia2(personaObjeto2)
{
  personaObjeto2.edad -= 3;
  personaObjeto2.nombre = 'Daniela Andrea';
  return personaObjeto2;
}
console.log(laura);
lauraMayor = valoresReferencia2(laura);
console.log(lauraMayor);
console.log(laura);
console.log(' ');
// ---------------------------------------------

/* Nuevo Objeto DE DANIEL */
function nuevoObjeto1(persona1)
{
  return {
    ...persona1,
    nombre: 'Nuevo Objeto Andres',
    apellidos: 'Nuevo objeto Zapata',
    edad: persona1.edad + 2,
    genero: 'Nuevo Objeto Masculino',
    sexo: false
  }
}
console.log(daniel);
let nuevoObjetoDaniel = nuevoObjeto1(daniel);
console.log(nuevoObjetoDaniel);

/* Nuevo Objeto DE LAURA */
function nuevoObjeto2(persona2)
{
  return{
    ...persona2,
    nombre: 'Nuevo Objeto Carmensa Yolima',
    apellidos: 'Nuevo  Objeto Restrepo Marin',
    edad: persona2.edad + 3,
    genero: 'Nuevo Objeto Femenino',
    sexo: false
  }
}
console.log(laura);
let nuevoObjetoLaura = nuevoObjeto2(laura);
console.log(nuevoObjetoLaura);
console.log(' ');
// ---------------------------------------------