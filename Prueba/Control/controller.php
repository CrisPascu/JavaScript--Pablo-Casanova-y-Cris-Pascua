<?php

    require_once("Modelo/modeloTipo.php");
    require_once("Modelo/usuario.php");
    require_once("Modelo/tipo.php");
    require_once("validacion.php");

class Controller{

    static function validarUsuario(&$datosUsuario){

    }

    public static function insertarUsuario(){
        $user = new Usuario(null, $_POST["nick"], $_POST["nombre"], $_POST["apellido"], $_POST["email"], $_POST["password"], $_POST["nivel"], $_POST["tipo"]);
        $user->insertar();
        header("Location:index.php");
    }

    public static function borrarUsuario(){
        $user = new Usuario($_POST["nombre"]);
        $user->borrar();
    }

    public static function mostrarUsuario(){
        $user = new Usuario();
        $user->consultar();
    }

    public static function actualizarUsuario(){}

    public static function pintarFormInsertar(){
        $modelo = new ModeloTipo();
        $listadoTipos = $modelo->select(null);
        require_once("Vista/FormularioInsertar.php");
    }

}