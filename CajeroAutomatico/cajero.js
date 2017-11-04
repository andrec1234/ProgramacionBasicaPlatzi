class Billete
{
  constructor(v, c)
  {
      this.valor = v;
      this.cantidad = c;
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(50, 3) ); //agrega objetos
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );

var dinero = 0; //cantidad de extracción
var division = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
var resultado = document.getElementById("resultado")

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      //console.log(div);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }
    //console.log(bi);
  }
  if(dinero > 0)
  {
    //console.log("No hay dinero");
    //document.write("No hay dinero");
    resultado.innerHTML = "No hay dinero";

  }
  else
  {
    //console.log(entregado);
    for (var e of entregado)
    {
      if(e.cantidad > 0)
      {
      //document.write(e.cantidad + " Billetes de $" + e.valor + "<br />");
      resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de $" + e.valor + "<br />" ;
      }
    }
  }

}
