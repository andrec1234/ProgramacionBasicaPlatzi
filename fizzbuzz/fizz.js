//fizz / 3
//buzz / 5
//fizz buzz - ambos
var numeros = 100;

for (var i=1; i<=numeros; i++){

  if(i % 3 ==0 && i % 5 ==0)
  {
    document.write(i + " fizz buzz");
  }
  else if( i % 3 == 0 )
  {
      document.write(i + " fizz");
  }
  else if( i % 5 == 0 )
  {
      document.write(i + " buzz");
  }
  else
  {
      document.write(i);
  }
  document.write("<br />");
}
