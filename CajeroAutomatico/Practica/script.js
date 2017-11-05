class billetesEnCajero
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}
var caja = [];
caja.push( new billetesEnCajero(50, 3) );
caja.push( new billetesEnCajero(20, 2) );
caja.push( new billetesEnCajero(10, 2) );

var boton = document.getElementById("retirar");
var resultado = document.getElementById("resultado");
boton.addEventListener("mousedown",capturarCantidad);
var botonNuevo = document.getElementById("nuevo");
botonNuevo.addEventListener("click",nuevo,true);
var cantidadSolicitada = 0;
var BilletesEntregados = [];
var retirado = false;

function capturarCantidad()
{
  if (!retirado)
  {
    var campoCantidad = document.getElementById("cantidadRetiro");
    cantidadSolicitada = parseInt(campoCantidad.value);

    if(cantidadSolicitada > 0)
    { retirado = true;
      calcularBilletes(cantidadSolicitada);
    }
    else
    {
      resultado.innerHTML = "Por Favor Ingrese un Número mayor 0";
    }
  }
  else
  {
    resultado.innerHTML = "Por favor presionar Nuevo Retiro";
  }
}

function calcularBilletes(cantidadSol)
{
  var division = 0;
  for(var billetes of caja)
  {
    if(cantidadSol > 0)
    {
      division = Math.floor(cantidadSol / billetes.valor);
      //  console.log(division)
      if (division > billetes.cantidad)
      {
        BilletesEntregados.push( new billetesEnCajero(billetes.valor, billetes.cantidad ));
        division = billetes.cantidad;
        cantidadSol = cantidadSol - (billetes.valor * division);

      }
      else
      {
        BilletesEntregados.push( new billetesEnCajero( billetes.valor, division ));
        cantidadSol = cantidadSol - (billetes.valor * division);
      }

    }
  }
  resultado.innerHTML = (mostrarBilletes(BilletesEntregados));
}

function mostrarBilletes(arregloBilletes)
{
  var texto = '';
  for (billetes of arregloBilletes)
  {
    texto = texto + "Se entregan $ " + billetes.cantidad + " de $" + billetes.valor + "</br>";
  }
  return texto;
}

function nuevo()
{
  BilletesEntregados = [];
  resultado.innerHTML='';
  retirado = false;
}
