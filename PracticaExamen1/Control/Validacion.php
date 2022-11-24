<?php
    class Validacion{
        private $patron;
        private $funcion;
        private $mensaje = array();

        function __construct(){
            $this->patron = array(
                "nick" => array("patron"=>"/^[a-z]$/i", "mensaje"=>"El nick no es válido"),
                "nombre"=> array("patron"=>"/^[a-z]$/i", "mensaje"=>"El nombre no es válido"),
                "apellido"=> array("patron"=>"/^[a-z]$/i", "mensaje"=>"El apellido no es válido"),
                "correo"=> array("patron"=>"/^[a-z]+@[a-z]+\.[a-z]{2,3}$/", "mensaje"=>"El correo no es válido"),
                "edad"=> array("patron"=>"/^[\d]{1,2}$/", "mensaje"=>"La edad no es válido"),
                "password"=> array("patron"=>"", "mensaje"=>"La contraseña no es válido")
            );
            $this->funcion = array(
                "contra2" => array("funcion"=>"comprobarContrasenia", "mensaje"=>"Las contraseñas no coinciden"),
                "nivel"=> array("funcion"=>"", "obligatorio"=>"El campo es obligatorio")
            );
        }

        public function validar($campos){
            $i=0;
            foreach($campos as $clave=>$valor) {
                if (isset($this->patron[$clave])){  
                    if(!preg_match($this->patron[$clave]["patron"], $valor)){  
                        $this->mensaje[$i++]=$clave . ":  " . $this->patron[$clave]["mensaje"];
                    }
                }else if(isset($this->funcion[$clave])){
                    if ($clave=="contra2"){
                        $valor2=$campos["contra"];
                    }else {
                        $valor2=null;
                    }   
                    if(!call_user_func(array($this,$this->funcion[$clave]["funcion"]), $valor, $valor2)){
                            $this->mensaje[$i++]=$clave . ":  " .  $this->funcion[$clave]["mensaje"];
                    }
                }
            } 
            return ($this->mensaje);
        }

        public function obligatorio($campo, $aux=null){
            if (is_array($campo)){//es el tipo check
                return (count($campo)<2);
            }else{
                return empty($campo);
            }
        }
        
        public function comprobarContrasenia($dato1, $dato2){
            return $dato1==$dato2;
        }
    }