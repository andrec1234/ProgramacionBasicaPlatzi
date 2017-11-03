var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//utilizando la colección - array
var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

//creando un ciclos
for (var pakin of coleccion) //para cada objeto dentro de la colección
{
  //console.log(coleccion[pakin]);
  pakin.mostrar();
  //lo que hace realmente el of es usar la instancia
//  new Pakiman("Cauchin",100,30).mostrar();
}

//usando el indice
for(var pakin in coleccion)
{
  coleccion[pakin].mostrar();
}
//el of muestra la instancia ya no el indice
//https://i.imgur.com/K5IGxSQ.png
