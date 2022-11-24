<?php
    require_once("Tipo.php");
    require_once("ModeloUsuario.php");
    class Usuario{
        private $id;
        private $nick;
        private $nombre;
        private $apellido;
        private $correo;
        private $password;
        private $nivel;
        private $tipo;

        function __construct(...$args){ //TODO aprender
            $args = func_get_args();
            $atributo = get_object_vars($this);
            current($atributo);

            foreach ($args as $value) {
                if(key($atributo) == "tipo"){
                    $this->tipo = new Tipo($value);
                    $this->tipo->cargar();
                }else{
                    $this->{key($atributo)} = $value;
                }
                next($atributo);
            }
        }

        public function insertar(){
            $modelo = new ModeloUsuario();
            $modelo->insertar($this);
        }

        public function consultar(){
            $modelo = new ModeloUsuario();
            $modelo->consultar($this->id);
        }

        public function borrar(){
            $modelo = new ModeloUsuario();
            $modelo->borrar($this->id);
        }

        public function actualizar(){
            $modelo = new ModeloUsuario();
            $modelo->actualizar($this->id, null); //TODO actualizar
        }

        public function getId() {
            return $this->id;
        }

        public function getNick() {
            return $this->nick;
        }
        public function getNombre() {
            return $this->nombre;
        }

        public function getApellido() {
            return $this->apellido;
        }

        public function getCorreo() {
            return $this->correo;
        }

        public function getPassword() {
            return $this->password;
        }

        public function getNivel() {
            return $this->nivel;
        }

        public function gettipo() {
            return $this->tipo;
        }
    
        public function setId($id): void {
            $this->id = $id;
        }

        public function setNick($nick): void {
            $this->nick = $nick;
        }

        public function setNombre($nombre): void {
            $this->nombre = $nombre;
        }

        public function setApellido($apellido): void {
            $this->apellido = $apellido;
        }

        public function setCorreo($correo): void {
            $this->correo = $correo;
        }

        public function setPassword($password): void {
            $this->password = $password;
        }

        public function setNivel($nivel): void {
            $this->nivel = $nivel;
        }

        public function setTipo($tipo): void {
            $this->tipo = $tipo;
        }
    }