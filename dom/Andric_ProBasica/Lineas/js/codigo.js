var d; //variable para canvas
d = document.getElementById('dibujito'); //asignando dibujito al d

var texto=document.getElementById('cantidad');
var boton=document.getElementById('botoncito');

boton.addEventListener("click",dibujoPorClick); //addEventListener --cuando un boton de apreta -- el segundo parametro es una función que si tiene () se activa automaticamente -- si no tiene el () espera la acción que se solicita
var lienzo = d.getContext("2d"); //variable para el lienzo -- getContext funcion de canvas para obtener el area donde se va a dibujar

function dibujoPorClick()
{
  lienzo.clearRect(0, 0, d.width, d.height);
  Ancho=parseInt(d.width); // ancho de objeto
  L=parseInt(texto.value);
  espacio=Ancho/L; //espacio entre lineas
  color_linea='red'

  for (i=0; i<L;i++)
  {
   dibujar_linea(color_linea,0,(espacio*i),(espacio*(i+1)),Ancho);
   dibujar_linea(color_linea,espacio*i,0,Ancho,espacio*(i+1));
   dibujar_linea(color_linea,0,(Ancho-(espacio*i)),(espacio*(i+1)),0);
   dibujar_linea(color_linea,(espacio*i),Ancho,Ancho,(Ancho-(espacio*(i+1))));
  }
}

function dibujar_linea(color,xi,yi,xf,yf){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

//console.log(lienzo);
/*
//dibujando la linea
//lapiz sobre papel
//iniciar un pago
lienzo.beginPath();
//color de lineas
lienzo.strokeStyle = "red";
//mover el lapiz donde va arrancar la linea
lienzo.moveTo(100,100);
//hasta donde sigue la liena
lienzo.lineTo(150,200);
//cerrar linea
lienzo.stroke();
//fin de dibujo
lienzo.closePath();
*/
//para hacer otra linea se puede dubplicar o utilizar fot



//var L=0;
//L=3; //cantidad de lineas
