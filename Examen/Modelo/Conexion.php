<?php

class Conexion{
    const hostname = "localhost";
    const usuario = "Pablo";
    const password = "prueba";
    const basededatos = "exam2022";

    function __construct($hostname = null, $usuario=null, $password=null, $basededatos=null){

        $this->hostname = $hostname;
        $this->usuario = $usuario;
        $this->password = $password;
        $this->basededatos = $basededatos;
        
    }

    public static function conectar(){
        return new mysqli(self::hostname, self::usuario, self::password, self::basededatos);
    }
}