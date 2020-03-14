class Persona {
  constructor(nombre, apellido, edad, pais, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
    this.altura = altura;
  }

  saludar()
  {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto()
  {
    (this.altura >= 1.8)?console.log(`${this.nombre} ${this.apellido} Es alto.`)
                        :console.log(`${this.nombre} ${this.apellido} No es alto.`)
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, edad, pais, altura, profesion){
    super(nombre, apellido, edad, pais, altura);
    this.profesion = profesion;
  }

  saludar()
  {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador(a) ${this.profesion}`);
  }

  profesional()
  {
    console.log(`${this.nombre} ${this.apellido} tiene titutlo de ${this.profesion}`)
  }
}

let daniel = new Persona('Daniel Fernando', 'Yépez Vélez', 26, 'Colombia', 1.80);
let andres = new Persona('Andres Felipe', 'Mora Perez', 24, 'Ecuador', 1.70);
let erika = new Desarrollador('Erika Camila', 'Muñoz Raigoza', 21, 'Argentina', 1.60, 'Ingeniera');
let lucia = new Desarrollador('Lucia Luciana', 'Restrepo Vélez', 23, 'Peru', 1.90, 'Ingeniera');

console.log('Clase Padre');
daniel.saludar();
andres.saludar();
console.log(' ');

console.log('Clase Hija metodos heredados sobre-escrito');
erika.saludar();
lucia.saludar();
console.log(' ');

console.log('Clase Hija nuevos metodos');
erika.profesional();
lucia.profesional();
console.log(' ');

console.log('Clase Padre e Hija con el mismo metodo soyAlto');
daniel.soyAlto();
andres.soyAlto();
erika.soyAlto();
lucia.soyAlto();