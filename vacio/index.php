<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
        require ("CONTROL/cabecera.php");
        require ("CONTROL/Cuerpo.php");
       session_start();
       echo "<HTML> <HEAD> </HEAD><BODY>";
       echo "<header>";
       
       $Cab=new Cabecera();
       echo "</header>";
       echo "<div id='cuerpo'>";
       $body=new Cuerpo();
       echo "</div>";
       echo "<footer></footer>";
       echo "</BODY></HTML>";

?>