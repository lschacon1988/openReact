export class Contacto {
  nombre = "";
  apellido = "";
  email = "";
  conenctado = false;

  constructor(nombre, apellido, email, conenctado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conenctado = conenctado;
  }
}
