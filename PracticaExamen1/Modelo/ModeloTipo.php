<?php
    require_once("Conexion.php");
    require_once("Tipo.php");
    class ModeloTipo{
        private $tabla;
        private $conexion;

        function __construct(){
            $this->tabla = "Tipos";
            $this->conexion = Conexion::conectar();
        }

        public function select($codigo=null){
            $listadoTipos = array();
            $i = 0;
            if(is_null($codigo)){
                $sql = "SELECT * FROM " . $this->tabla;
                $stmt = $this->conexion->prepare($sql);
            }else {
                $sql = "SELECT * FROM " . $this->tabla . " WHERE codigo = ?;";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bind_param("i", $codigo);
            }

            $stmt->execute();
            $resultado = $stmt->get_result();

            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $listadoTipos[$i++] = new Tipo($row["codigo"], $row["nombreTipo"]);
            }

            return $listadoTipos;
        }
    }