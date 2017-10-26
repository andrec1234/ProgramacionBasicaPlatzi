//variables
var x = 0;

//dibujo en canvas
var lienzo = document.getElementById("lienzo");
var contexto = lienzo.getContext("2d");
var ancho = lienzo.width;

function dibujarLinea(grosor, color, xInicial, yInicial, xFinal, yFinal)
{
  contexto.beginPath(); // inicia
  contexto.lineWidth=grosor;
  contexto.strokeStyle=color;
  contexto.moveTo(xInicial, yInicial);
  contexto.lineTo(xFinal, yFinal);
  contexto.stroke();
  contexto.ClosePath(); ///fin
}

//captura de eventos
document.addEventListener("click", click, false);
document.addEventListener("dblclick", limpiar);

function click()
  {

    //rotar linea
    dibujarLinea(5,"red",x*500,0,ancho-(x*500),ancho);
    //dibujarLinea(0.1,"red",10,0,290,300);

  //  x=0
    x = x + 1
    document.getElementById("demo").innerHTML = "Click N° " + x + "<br/>";
    document.addEventListener("click", click, false);

    switch (x%5) {
      case 0:
      //    alert("Bien hecho llegaste a: " + x);
        break;
      default:
        }

  }

function limpiar()
  {
    document.getElementById("demo").innerHTML = "Muy Rapido"
  contexto.clearRect(0, 0, ancho, ancho);
  contexto.beginPath();
    x = 0;
  }
