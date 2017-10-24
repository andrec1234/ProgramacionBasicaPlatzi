//colección de variables - JSON javascript objet notatión
var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
}; //Una sola linea de codigo
console.log(teclas);
//el documento detecta las teclas del teclado
document.addEventListener("keydown",dibujarTeclado); //para dibujar se coloca la funcion
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");

var x = 150; //inicio
var y = 150; //inicio


dibujar_linea("red",x-1,y-1,x+1,y+1,papel);

function dibujar_linea(color,xi,yi,xf,yf,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) //el paramtetro es llenada por addEventListener
{
  var colorcito="yellow";
  var colorcito2="green";
  var movimiento=1;
  switch (evento.keyCode) {
    case teclas.RIGHT:
    dibujar_linea(colorcito,x,y,x + movimiento,y,papel);
    x = x + movimiento;
    console.log('derecha');
    break;

    case teclas.LEFT:
    dibujar_linea(colorcito2,x,y,x - movimiento,y,papel);
    x = x - movimiento;
    console.log('izquierda');
    break;

    case teclas.DOWN:
    dibujar_linea(colorcito,x,y,x,y+movimiento,papel);
    y= y+movimiento;
    console.log('abajo');

    break;
    case teclas.UP:
    dibujar_linea(colorcito2,x,y,x,y-movimiento,papel);
    y= y-movimiento;
    console.log('arriba');
    break;

    default:
    console.log('otra tecla');
    break;
  }
}
