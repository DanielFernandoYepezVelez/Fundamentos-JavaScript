let daniel = {
  nombre: 'Camilo Fernando',
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

/* Forma #1 (PASANDO UN ATRIBUTO DEL OBJETO)*/
function imprimirNombre(nombre)
{
  nombre = nombre.toUpperCase();
  console.log(nombre);
}
imprimirNombre(daniel.nombre);

/* Forma #2 (PASANDO EL OBJETO COMPLETO)*/
function imprimirNombreObjeto(persona)
{
  persona = persona.nombre.toUpperCase();
  console.log(persona);
}
imprimirNombreObjeto(laura);

/* Forma #3 (PASANDO EL OBJETO COMPLETO, PERO SELECCIONANDO SUS PROPIEDADES)*/
function imprimirNombreDestructurado({ nombre, edad })
{
  console.log(nombre.toUpperCase(), edad, 'Años');
}
imprimirNombreDestructurado(daniel);

/* Forma #4 (PASANDO LAS PROPIEDADES UNA A UNA COMO PARAMETROS Y ARGUMENTOS)*/
function imprimirNombreADestructuradoArgumentos({nombre, edad, sexo})
{
  console.log(`${nombre.toUpperCase()} ${edad} Años, ${sexo.toUpperCase()}`);
}
imprimirNombreADestructuradoArgumentos({nombre: 'Roncancia', edad: 30, sexo: 'Femenino'});

/* Forma #5 (PASANDO EL OBJETO COMPLETO Y DEFINIENDO LOS ATRIBUTOS QUE SE NECESITAN)*/
function imprimirNombreUnoAuno(persona)
{
  let {nombre, edad, genero } = persona;
  console.log(`${nombre.toUpperCase()} tiene ${edad} Años, ${genero.toUpperCase()}`);
}
imprimirNombreUnoAuno(laura);