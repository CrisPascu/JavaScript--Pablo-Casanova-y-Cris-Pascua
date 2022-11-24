<?php
    require_once("Conexion.php");
    require_once("Usuario.php");
    require_once("Tipo.php");
    class ModeloUsuario{
        private $tabla;
        private $conexion;

        function __construct(){
            $this->tabla = "usuarios";
            $this->conexion = Conexion::conectar();
        }

        public function generarId(){
            $sql = "SELECT * FROM " . $this->tabla;
            echo $sql;
            $resultado = $this->conexion->query($sql);
            $max = 0;

            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $num = (int) substr($row["id"], 7);
                $max = ($max > $num) ? $max : $num;
            }

            echo $max;

            return "Usuario" . $max + 1;
        }

        public function insertar($usuario){
                $sql = "INSERT INTO " . $this->tabla . " (id, nick, nombre, apellido, correo, password, nivel, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bind_param("sssssssi", $this->generarId(), $usuario->getNick(), $usuario->getNombre(), $usuario->getApellido(), $usuario->getCorreo(), $usuario->getPassword(), $usuario->getNivel(), $usuario->getTipo()->getCodigo());
                $stmt->execute();
                echo "bien";
                return true;
        }

        public function consultar($id = null){
            $listadoUsuarios = array();
            $i = 0;
            
            if(is_null($id)){
                $sql = "SELECT * FROM " . $this->tabla;
                $stmt = $this->conexion->prepare($sql);
            } else {
                $sql = "SELECT * FROM " . $this->tabla . " WHERE id = ?;";
                $stmt = $this->conexion->prepare($sql);
                $stmt->bind_param("s", $id);
            }
            $stmt->execute();

            $resultado = $stmt->get_result();

            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $listadoUsuarios[$i++] = new Usuario($row["id"], $row["nick"], $row["nombre"], $row["apellido"], $row["correo"], $row["password"], $row["nivel"]);
            }

            return $listadoUsuarios;
        }

        public function borrar($nombre){
            $sql = "DELETE FROM " . $this->tabla . " WHERE bombre = ?;";
            $stmt = $this->conexion->prepare($sql);
            $stmt->bind_param("s", $nombre);
            $stmt->execute();
        }

        public function actualizar($id, $valor){

        }
    }
?>