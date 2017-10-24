var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//guardar la ruta de la imange
var mapa = "tile.png";

//creando un objeto -- crea la imagen img en html
var fondo = new Image();
fondo.src = mapa; //añadimos la imagen al objeto, aqui se hace el load
fondo.addEventListener("load", dibujar); //solo cuando carge

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

function dibujar()
{
  papel.drawImage(fondo, 0,0);
}

function dibujarVacas()
{
  papel.drawImage(vaca, 10,10);
}

function dibujarPollos()
{
  papel.drawImage(pollo, 105,105);
}

function dibujarCerdos()
{
  papel.drawImage(cerdo, 400,400);
}




function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
