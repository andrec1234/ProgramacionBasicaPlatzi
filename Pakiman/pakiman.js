class Pakiman
{
  constructor(name, life, attack)
  {
    this.imagen = new Image();
    this.nombre = name;
    this.vida = life;
    this.ataque = attack;
    //this.tipo = "tierra"; //

    this.imagen.src = imagenes[this.nombre];
  }
  hablar ()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    //document.body.appendChild(this.imagen)
    document.write("<img src=" + this.imagen.src + ">;")
    document.write("<p>");
    document.write("<strong>" + this.nombre+ "</strong><br/>");
    document.write("Vida: " + this.vida+ "<br/>");
    document.write("Ataque: " + this.ataque+ "<br/><hr/>");
    document.write("</p>");
  }
}
