let daniel = {
  nombre: 'Daniel Fernando',
  apellidos: 'Yépez Vélez',
  edad: 22
}

function imprimirEdad(objetoPersona)
{
  if(objetoPersona.edad >= 18)
  {
    console.log(`${objetoPersona.nombre} Eres Mayor de edad`);
  }
  else
  {
    console.log(`${objetoPersona.nombre} No eres mayor de edad`);
  }
}
imprimirEdad(daniel);