var express = require("express"); //variable donde esta express
var aplicacion = express(); //se crea una aplicación -- el express de var y se invoca como función y para que se ejecute y se pone en un variable

aplicacion.get("", inicio);//es como addEventListener
aplicacion.get("/cursos",cursos);

function inicio(peticion, resultado) //req = peticion por el servidor
{
  resultado.send("Este es el <strong>Home - Genial</strong>");
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>Cursos</strong>");
}

aplicacion.listen(8989);
