var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var mapa = "tile.png"; // ruta del mapa;

//crear objeto e insertar fondo
var fondo = new Image(); //creando objeto Imagen();-- definir objeto; -- clase
fondo.src =mapa; //src metodo de la clase;
fondo.addEventListener("load",dibujar); //solo esta listo cuando carga

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load",dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load",dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load",dibujarPollos);

function dibujar()
{
  papel.drawImage(fondo,0,0); //pintar
}

function dibujarVacas()
{
  papel.drawImage(vaca,0,10); //pintar
}
function dibujarCerdos()
{
  papel.drawImage(cerdo,0,100); //pintar
}
function dibujarPollos()
{
  papel.drawImage(pollo,0,200); //pintar
}
function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1));
  return resultado;
}
