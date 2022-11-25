<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Validar
 *
 * @author admin-infanta
 */
class Sanitarizar
{

  static function cleanInput($input)
  {

    $search = array(
      '@<script[^>]*?>.*?</script>@si',   // Elimina javascript
      '@<[\/\!]*?[^<>]*?>@si',            // Elimina las etiquetas HTML
      '@<style[^>]*?>.*?</style>@siU',    // Elimina las etiquetas de estilo
      '@<![\s\S]*?--[ \t\n\r]*>@'         // Elimina los comentarios multi-línea
    );

    $output = preg_replace($search, '', $input);
    return $output;
  }

  function sanitize($input)
  {
    if (is_array($input)) {
      foreach ($input as $var => $val) {
        $output[$var] = sanitize($val);
      }
    } else {
      if (get_magic_quotes_gpc()) {
        $input = stripslashes($input);
      }
      $input  = cleanInput($input);
      $output = mysql_real_escape_string($input);
    }
    return $output;
  } //put your code here

  // public static function sanitize($input){
    
  // }
}
