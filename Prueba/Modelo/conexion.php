<?php

class Conexion{

    const hostname = "localhost";
    const usuario = "Pablo";
    const password = "prueba";
    const basededatos = "phpusuarios";

    public static function conectar(){
        return new mysqli(self::hostname, self::usuario, self::password, self::basededatos);
    }

}