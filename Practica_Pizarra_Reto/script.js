var lienzo = document.getElementById("canvas");
var papel = lienzo.getContext("2d");

//var canvas = document.getElementById("canvas")

var clicX = new Array();
var clicY = new Array();
var clicDibujado = new Array();
var pintar;

canvas.addEventListener("mousedown",coordenadasMouse);
canvas.addEventListener("mousemove",dibujar);
canvas.addEventListener("mouseup",dejarDibujo);
canvas.addEventListener("mouseleave",salirLienzo);


function coordenadasMouse(evento){

  var mouseX = evento.offsetX;
  var mouseY = evento.offsetY;

pintar = true;
agregarClic(mouseX, mouseY,true);
pintarLinea();
}

function dibujar(evento){

  if(pintar)
  {
    var mouseX = evento.offsetX;
    var mouseY = evento.offsetY;

  agregarClic(mouseX, mouseY, true);
  pintarLinea();
}
}

function dejarDibujo(evento)
{
  pintar = false;

}

function salirLienzo(evento)
{
  pintar = false;

}

function agregarClic(x, y, dibujado)
{
  clicX.push(x);
  clicY.push(y);
  clicDibujado.push(dibujado);
  //console.log(clickX);
}

function pintarLinea(){

  papel.clearRect(0, 0, papel.canvas.width, papel.canvas.height);


  papel.strokeStyle = "#df4b26";
  papel.lineJoin = "round";
  papel.lineWidth = 1;

  for(var i=0; i < clicX.length; i++)
  {
    papel.beginPath();
    if(clicDibujado[i] && i)
      {
        papel.moveTo(clicX[i-1], clicY[i-1]);
      }
    else
      {
       papel.moveTo(clicX[i]-1, clicY[i]);
      }
    papel.lineTo(clicX[i], clicY[i]);
    papel.closePath();
    papel.stroke();
  }



}
