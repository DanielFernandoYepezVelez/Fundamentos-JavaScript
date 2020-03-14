class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar(recibiendoFuncionComoParametro)
  {
    if(recibiendoFuncionComoParametro) //Si la función existe
    {
      responderSaludoComoParametro(this.nombre, this.apellido, false);
    }
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido){
    super(nombre, apellido);
  }

  saludar(recibiendoFuncionComoParametro)
  {
    if(recibiendoFuncionComoParametro) //Si la función existe
    {
      responderSaludoComoParametro(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludoComoParametro(nombre, apellido, isDev)
{
  if(isDev)
  {
    console.log(`${nombre} ${apellido} Ahh!! no sabia que eras DEV...GENIAL....`);
  }
  else
  {
    console.log(`${nombre} ${apellido} yo sabía que NO!! eras DEV...`)
  }
}

let andres = new Persona('Andres Felipe', 'Mora Perez');
let lucia = new Desarrollador('Lucia Luciana', 'Restrepo Vélez');

console.log('Clase Padre PERSONA');
andres.saludar(responderSaludoComoParametro);
console.log(' ');

console.log('Clase Hija DESARROLLADOR');
lucia.saludar(responderSaludoComoParametro);
console.log(' ');