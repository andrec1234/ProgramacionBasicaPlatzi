class Numero
{
  constructor(Usuario)
  {
    this.usuario = Usuario;
  }

  sumarNumeros(x, y)
  {
    var z;
    z = x + y;
    return z;
  }

  imprimirNumeros(inicio, cantidad)
  {
    for (inicio; inicio <= cantidad; inicio++)
    {
      document.write("El numero es: " + inicio + " Generado por el Usuario " + this.usuario + "<br/>");
    }
  }
}

Usuario1 = new Numero ('Andric');
Usuario2 = new Numero ('Alejandro');
//document.write("el resultado de la suma es "+ animal2.suma(2,3));
Usuario1.imprimirNumeros(1,10);
Usuario2.imprimirNumeros(11,20);
