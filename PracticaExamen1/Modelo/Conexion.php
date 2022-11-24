<?php
    class Conexion{
        const hostname = "localhost";
        const usuario = "Cris";
        const password = "practica";
        const basededatos = "examen";

        public static function conectar(){
            return new mysqli(self::hostname, self::usuario, self::password, self::basededatos);
        }
    }