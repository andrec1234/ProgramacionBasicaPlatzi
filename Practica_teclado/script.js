//declarar coleccion de variables que guardaran los codigos de las telcas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
}

document.addEventListener("keydown",dibujarTeclado);
document.addEventListener("mousemove",dibujarMouse);
var lienzo = document.getElementById("area_de_dibujo");
var papel = lienzo.getContext("2d");

//para recordar los datos en el centro
var x = 150;
var y = 150;
var espacio=1;

  dibujarLinea(3,"blue",149,149,151,151,papel);
//addEventListener le pasa el evento y detalles
//todos los datos internos relevantes a un evento salen en la variable "evento"
function dibujarTeclado(evento){
//  console.log(evento.keyCode);
  switch (evento.keyCode) {
    case teclas.UP:
      //console.log("arriba");
      dibujarLinea(3,"blue",x,y,x,y = y - espacio,papel);
    break;
    case teclas.DOWN:
      //console.log("abajo");
      dibujarLinea(3,"blue",x,y,x,y = y + espacio,papel);
    break;
    case teclas.LEFT:
      //console.log("izquierda");
      dibujarLinea(3,"blue",x,y,x = x - espacio,y,papel);
    break;
    case teclas.RIGTH:
      //console.log("derecha");
      dibujarLinea(3,"blue",x,y,x = x + espacio,y,papel);
    break;
    default:
        console.log("ninguna");
      break;
  }
}

function dibujarMouse(evento){
  console.log(evento);
}


function dibujarLinea(grosor, color, xInicial, yInicial, xFinal, yFinal, contexto)
{
  contexto.beginPath(); // inicia
  contexto.lineWidth=grosor;
  contexto.strokeStyle=color;
  contexto.moveTo(xInicial, yInicial);
  contexto.lineTo(xFinal, yFinal);
  contexto.stroke();
  contexto.closePath(); ///fin
}
