<?php
    require_once("Control/Controlador.php");
    $metodo = $_SERVER["REQUEST_METHOD"];
    //esto es para comprobar si existe y mostrar la foto
      if($metodo == "GET"){
        Controlador::pintarFormLogin();
    } else if($metodo == "POST"){
        if(Controlador::comprobar()){
            $fotos = "./Vista/Fotos/"; //TODO buscar fotos
            $dirint = dir($fotos);
            while (($archivo = $dirint->read()) !== false){
                if($archivo == $_POST["nick"] . ".jpg"){
                    echo "<img src='" . $fotos . $archivo . "'/><br>";
                }
            }
            $dirint->close();
            echo "Hola " . $_POST["nick"];
        }
    }
    
  
    //Esto es para insertar un usuario pero no he probado el validar
    /*if($metodo == "POST"){
        if(!empty($_POST)){
            $mensaje=Controlador::validarUsuario($_POST);
            if(count($mensaje)==0){
                Controlador::insertarUsuario();
            }            
        }
    } else{
        Controlador::pintarFormInsertar();
    }*/