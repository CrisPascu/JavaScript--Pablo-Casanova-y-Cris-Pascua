<?php

class ControlModel{

    public static function logar($nick, $password){
        $modelo = new ModeloLogeado($nick, $password);
        if(!is_null($modelo->select($nick, $password))){
            $usuario = new Usuario(null, $_POST["nick"], $_POST["correo"], $_POST["idTipo"], $_POST["tipo"], $_POST["imagen"]);
        }else{
            $usuario = new Usuario();
        }

    }

    

    public static function validar($campo){
        $regExNick = "/^[a-z0-9]{3,12}$/i";

        if(preg_match($regExNick, $campo)){
            return true;
        }else{
            return false;
        }
    }

    public static function encriptar($cadena){
        $result = "";

        for ($i=0; $i <strlen($cadena) ; $i++) { 
            $char = substr($cadena, $i, 1);
            switch ($char) {
                case 'a':
                    $result += "*";
                    break;
                case 'e':
                    $result += "**";
                    break;
                case 'i':
                    $result += "***";
                    break;
                case 'o':
                    $result += "****";
                    break;
                case 'u':
                    $result += "*****";
                    break;
                case '0':
                    $result += "9";
                    break;
                case '1':
                    $result += "10";
                    break;
                case '2':
                    $result += "11";
                    break;
                case '3':
                    $result += "12";
                    break;
                case '4':
                    $result += "13";
                    break;
                case '5':
                    $result += "14";
                    break;
                case '6':
                    $result += "15";
                    break;
                case '7':
                    $result += "16";
                    break;
                case '8':
                    $result += "17";
                    break;
                case '9':
                    $result += "18";
                    break;
                default:
                    $result += $char;
                    break;
            }
        }
    }
}