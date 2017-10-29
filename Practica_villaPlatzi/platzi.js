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
    papel.drawImage(cerdo.imagen, 10, 10);
  }
  if(pollo.cargaOK == true)
  {
    papel.drawImage(pollo.imagen, 50, 50);
  }
  if(vaca.cargaOK == true)
  {
    papel.drawImage(vaca.imagen, 100, 100);
  }
}


function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1));
  return resultado;
}
