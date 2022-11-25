<?php

$method = $_SERVER["REQUEST_METHOD"];

if('POST' === $method){
    if(isset(ControlModel::logar($_POST["nick"], $_POST["password"]))){
        require_once("Vista/Informacion.php");
    }else{
        //GET ERROR
    }
  

}

//GET ERROR NO SE HACERLO
if('GET' === $method){
    require_once("Vista/Formulario.php");
    
    
}
?>