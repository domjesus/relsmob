<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');


include("ClasseBaseTextos.php");

class RecuperaTexto extends ClasseBaseTextos
{
}


$of = new RecuperaTexto;

echo $of->retornaTextos();
