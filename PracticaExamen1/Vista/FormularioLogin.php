<?php
    require_once("Vista/Layouts/Cabecera.html");
?>
    <form action="index.php" method="POST">
        <label for="nick">Nick<input type="text" name="nick" id="nick"></label><br>
        <label for="password">Contraseña<input type="password" name="password" id="password"></label>

        <input type="submit" name="enviar" value="Enviar">
    </form>
<?php
    require_once("Vista/Layouts/Pie.html");
?>