<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of BBDDUsuario
 *
 * @author migsu
 */
class BBDD {
    //put your code here
    private $equipo="localhost";
    private $usuario="Pablo";
    private $paasword="prueba";
    private $name="usuarios";
    public $mysql;
    function __construct() {
         $this->mysql = new mysqli($this->equipo, $this->usuario, $this->paasword, $this->name);
        if ($this->mysql->connect_errno) {
                die("error de conexión: " . $this->mysql->connect_error);
            }
        
        
    }

    
}
