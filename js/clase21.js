function Persona(nombre, apellido, edad, pais, altura)
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.pais = pais;
  this.altura = altura;
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function(){
  (this.altura >= 1.8)?console.log(`${this.nombre} ${this.apellido} Es alto.`)
                      :console.log(`${this.nombre} ${this.apellido} No es alto.`)
};

let daniel = new Persona('Daniel Fernando', 'Yépez Vélez', 26, 'Colombia', 1.80);
let andres = new Persona('Andres Felipe', 'Mora Perez', 24, 'Ecuador', 1.70);
let erika = new Persona('Erika Camila', 'Muñoz Raigoza', 21, 'Argentina', 1.60);
let lucia = new Persona('Lucia Luciana', 'Restrepo Vélez', 23, 'Peru', 1.90);

daniel.saludar();
andres.saludar();
erika.saludar();
lucia.saludar();
daniel.soyAlto();
andres.soyAlto();
erika.soyAlto();
lucia.soyAlto();