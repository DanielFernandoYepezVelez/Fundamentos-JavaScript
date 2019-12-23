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

function mayorEdad(persona)
{
  return persona.edad >= MAYOR;
}

function menorEdad(persona)
{
  return persona.edad < MENOR;
}

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

imprimirEdad(daniel);
console.log(mayorEdad(daniel));
console.log(menorEdad(orion));