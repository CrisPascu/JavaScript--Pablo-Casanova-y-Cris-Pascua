<?php

require_once("Conexion.php");

class ModeloLogeado{

    private $conexion; 

    

    public function select($nick, $password){

        $conexion = new Conexion();
        $conexion->conectar(); 


        //"id"=>"int", "nick"=>"string", "correo"=>"string", "idTipo"=>"int", "tipo"=>"string", "imagen"=>"string"
        $datos = array();
        $i = 0;
        
        $sql = "SELECT US.id as id, US.nick as nick, US.correo as correo, US.tipo as idTipo, US.tipo as idTipo, T.descripcion as tipo FROM usuario US INNER JOIN password P ON US.id=P.id INNER JOIN tipo T ON US.tipo=T.id
        WHERE US.nick LIKE ? AND P.passwd LIKE ?;";

        $stmt = $conexion->prepare($sql);
        $stmt ->bind_param("ss", $nick , $password);
        $stmt->execute();
            $resultado = $stmt->get_result();

            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $datos[$i++] = new Tipo($row["codigo"], $row["nombreTipo"]);
            }
            
            return $datos;


        //return array indexado 
    }

}