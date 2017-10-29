document.addEventListener("keyup",moverFarmer);

var flechas = {
  LEFT : 37,
  UP : 38,
  RIGTH : 39,
  DOWN : 40
};

var posInix = 210;
var posIniy = 210;
var espacio = 10;

function moverFarmer(event){
  switch (event.keyCode) {
    case flechas.LEFT:
      posInix = posInix - espacio;
      dibujar();
      break;
    case flechas.UP:
      posIniy = posIniy - espacio;
      dibujar();
      break;
    case flechas.RIGTH:
      posInix = posInix + espacio;
      dibujar();
      break;
    case flechas.DOWN:
      posIniy = posIniy + espacio;
      dibujar();
      break;
    default:
  }
}

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

var farmer = {
  url: "farmer.jpg",
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

farmer.imagen = new Image();
farmer.imagen.src = farmer.url;
farmer.imagen.addEventListener("load",pintarFarmer);

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

function pintarFarmer()
{
  farmer.cargaOK = true;
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
  if(farmer.cargaOK == true)
  {
    papel.drawImage(farmer.imagen, posInix, posIniy);
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
