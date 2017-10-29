var lienzo = document.getElementById('area_dibujo');
var papel = lienzo.getContext("2d");
var dibujo=false;

document.addEventListener("mousedown",iniciarDibujo);
document.addEventListener("mousemove",mover);
document.addEventListener("mouseup",dejarDibujo);

function iniciarDibujo (evento){
  xi=evento.offsetX;
  yi=evento.offsetY;
  dibujo=true;
}

function mover (evento)
{
  if(dibujo)
    {
      dibujarLinea("blue",xi,yi,evento.offsetX,evento.offsetY,papel);
    }

xi=evento.offsetX;
yi=evento.offsetY;
}

function dejarDibujo(event){
  dibujo=false;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
