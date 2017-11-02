class imagen {
  constructor(nombreImagen) {
    this.imagen = new Image();
    this.nombre = nombreImagen;
    this.imagen.src = this.nombre;
    document.body.appendChild(this.imagen);
  }
}
foto = new imagen("pollo.png");
