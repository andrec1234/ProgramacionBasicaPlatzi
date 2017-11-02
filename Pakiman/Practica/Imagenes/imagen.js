//creando arreglo - diccionario de datos
Imagenes = [];
Imagenes['Pollo'] = "pollo.png";
Imagenes['Cerdo'] = "cerdo.png";

class imagen {
  constructor(nombreImagen,nombre,vida) {
    this.imagen = new Image();
    this.nombre = nombreImagen;
    this.animal = nombre,
    this.vida = vida,
    this.imagen.src = Imagenes[this.nombre];

  }

  mostrar(){
    document.write("<hr/>")
    document.write("El es un: " + this.animal + "<br />");
    document.write("Tiene de vida: " + this.vida + "<br />");
    document.body.appendChild(this.imagen);
  }
}
foto = new imagen("Pollo", "Pollo", 50);
foto2 = new imagen("Cerdo", "Cerdo", 40);
