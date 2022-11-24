<?php
    require_once("ModeloTipo.php");
    class Tipo{
        private $codigo;
        private $nombreTipo;

        function __construct($codigo, $nombreTipo = null){
            if(!is_null($codigo)){
                $this->codigo = $codigo;
                $this->nombreTipo = $nombreTipo;
            }
        }

        public function cargar(){
            $modelo = new ModeloTipo();
            $ayuda = $modelo->select($this->codigo);

            $this->getNombreTipo($ayuda[0]->getNombreTipo());
            return $this;
        }

        public function listar(){
            $modelo = new ModeloTipo();
            $modelo->select();
        }

        public function getCodigo() {
            return $this->codigo;
        }
    
        public function getNombreTipo() {
            return $this->nombreTipo;
        }
    
        public function setCodigo($codigo): void {
            $this->codigo = $codigo;
        }
    
        public function setNombreTipo($nombreTipo): void {
            $this->nombreTipo = $nombreTipo;
        }
    }