//document.addEventListener("keydown",dibujarMouse); //para dibujar se coloca la funcion
var cuadrito = document.getElementById('lienzo');
var papel = cuadrito.getContext("2d");


dibujo.addEventListener('mousedown', estados, false);
dibujo.addEventListener('mouseup', estados, false);
dibujo.addEventListener('mousemove', pintaLinea, false);
  dibujo.style.cursor="hand";

var x = x; //inicio
var y = y; //inicio
color="red";

dibujar_linea("red",x-1,y-1,x+1,y+1,papel);

function dibujar_linea(color,xi,yi,xf,yf,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

/*function dibujarTeclado(evento) //el paramtetro es llenada por addEventListener
{

}
*/
