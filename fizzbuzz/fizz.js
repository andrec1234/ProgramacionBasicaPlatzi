//fizz / 3
//buzz / 5
//fizz buzz - ambos
var numeros = 100;

for (var i=1; i<=numeros; i++){

  if(esDivisible(i,3) && esDivisible(i,5))
  {
    document.write(i + " fizz buzz");
  }
  else if( esDivisible(i,3) )
  {
      document.write(i + " fizz");
  }
  else if( esDivisible(i,5))
  {
      document.write(i + " buzz");
  }
  else
  {
      document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
