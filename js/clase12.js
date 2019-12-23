const MAYOR = 18;
const MENOR = 17;

let daniel = {
  nombre: 'Daniel',
  apellido: 'Yépez',
  edad: 18
}

let orion = {
  nombre: 'Fernando',
  apellido: 'Vélez',
  edad: 10
}

/* Con un solo parametro */
// const mayorEdad = persona => persona.edad >= MAYOR;
// const menorEdad = persona => persona.edad < MENOR;

/* Destructurando un objeto */
const mayorEdad = ({edad}) => edad >= MAYOR;
const menorEdad = ({edad}) => edad < MENOR;

function imprimirEdad(persona)
{
  if(mayorEdad(persona))
  {
    console.log(`${persona.nombre} Es mayor de edad`);
  }
  else if(menorEdad(persona))
  {
    console.log(`${persona.nombre} No es mayor de edad`);
  }
  else
  {
    console.log(`${persona.nombre} No tiened edad como propiedad`);
  }
}

function permitirAcceso(persona)
{
  if(mayorEdad(persona))
  {
    console.log(`${persona.nombre} Acceso PERMITIDO`);
  }
  else if(menorEdad(persona))
  {
    console.log(`${persona.nombre} Acceso DENEGADO`);
  }
  else
  {
    console.log(`${persona.nombre} No tiene de edad como propiedad`);
  }
}

imprimirEdad(daniel);
console.log(mayorEdad(daniel));
console.log(menorEdad(orion));
permitirAcceso(orion);