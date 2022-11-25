
<?php

class Cuerpo{
    function __construct() {
        
        if (isset($_SESSION["usuario"]))
        { echo ("Cuerpo de la página de Logado");
            
        }
        else
        {
            echo "Cuerpo de la página sin Logarse aún";
        
        }
                  
       
        
        
    }

}

