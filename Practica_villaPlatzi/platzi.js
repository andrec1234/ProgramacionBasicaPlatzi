var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var mapa = "tile.png"; // ruta del mapa;

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

//crear objeto e insertar fondo
fondo.imagen = new Image(); //creando objeto Imagen();-- definir objeto; -- clase
fondo.imagen.src = fondo.url; //src metodo de la clase;
fondo.imagen.addEventListener("load",cargarFondo); //solo esta listo cuando carga

vaca.imagen = new Image(); //se agrega al objeto literal;
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {

    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOK == true)
  {
    for(var i=0; i < cantidad; i++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;
        papel.drawImage(cerdo.imagen, x, y);
    }

  }
  if(pollo.cargaOK == true)
  {
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;
        papel.drawImage(pollo.imagen, x, y);
    }


  }
  if(vaca.cargaOK == true)
  {
    for(var c=0; c < cantidad; c++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x * 60;
      y = y * 60;

      papel.drawImage(vaca.imagen, x, y);
    }

  }
}

    var cantidad =  aleatorio(0, 25);
    console.log(cantidad);

function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1));
  return resultado;
}
