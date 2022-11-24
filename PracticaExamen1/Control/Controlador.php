<?php
    require_once("Modelo/ModeloTipo.php");
    require_once("Modelo/Usuario.php");
    require_once("Modelo/Tipo.php");
    class Controlador{

        static function validarUsuario(&$datosUsuario){
            $valido = new Validacion();
            $valido->validar($datosUsuario);

            if(count($valido->mensaje)>0){
                echo "Datos inválidos";
            }else{
                foreach ($datosUsuario as $key => $value) {
                    $datosUsuario[$key]=filter_var($value, FILTER_SANITIZE_STRING);
                }
            }
            return $valido->mensaje;
        }

        public static function insertarUsuario(){ //TODO orden importante
            $usuario = new Usuario(null, $_POST["nick"], $_POST["nombre"], $_POST["apellido"], $_POST["email"], $_POST["password"], $_POST["nivel"], $_POST["tipo"]);
            $usuario->insertar();
            header("Location:index.php");
        }

        public static function borrarUsuario(){ //no lo he probado
            $usuario = new Usuario($_POST["nombre"]);
            $usuario->borrar();
        }

        public static function mostrarUsuario(){
            $usuario = new Usuario();
            $usuario->consultar();
        }
        public static function actualizarUsuario(){ //no lo he hecho
            
        }

        public static function pintarFormInsertar(){
            $modelo = new ModeloTipo();
            $listadoTipos = $modelo->select(null);
            //var_dump($listadoTipos);
            require_once("Vista/FormularioInsertar.php");
        }

        public static function pintarFormLogin(){
            require_once("Vista/FormularioLogin.php");
        }

        public static function comprobar(){
            $usuario = new Usuario(null, $_POST["nick"], null, null, null, $_POST["password"], null, null);
            $modelo = new ModeloUsuario();
            $listadoUsuarios = $modelo->consultar(null);
            //var_dump($listadoUsuarios);
            // echo $usuario->getNick();
            // echo $usuario->getPassword();
            
            for ($i=0; $i < count($listadoUsuarios); $i++) { //TODO aprender
                if($usuario->getNick() == $listadoUsuarios[$i]->getNick()){
                    if($usuario->getPassword() == $listadoUsuarios[$i]->getPassword()){
                        return true;
                    }
                } else{
                    require_once("Vista/FormularioLogin.php");
                }
            }
        }
    }