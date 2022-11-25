<?php
    require_once("ModeloTipo.php");
    class Tipo{
        private $id;
        private $descripcion;

        function __construct($id, $descripcion){
            if(!is_null($id)){
                $this->id = $id;
                $this->descripcion = $descripcion;
            }
        }

        public function cargar(){
            $modelo = new ModeloTipo();
            $ayuda = $modelo->select($this->id);

            $this->setDescripcion($ayuda[0]->getDescripcion());
            return $this;
        }

        public function listar(){
            $modelo = new ModeloTipo();
            $modelo->select();
        }

        public function getId() {
            return $this->id;
        }
    
        public function getDescripcion() {
            return $this->descripcion;
        }
    
        public function setId($id): void {
            $this->id = $id;
        }
    
        public function setDescripcion($descripcion): void {
            $this->descripcion = $descripcion;
        }
    }