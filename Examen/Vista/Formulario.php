<?php
    require_once("Vista/layouts/header.php");
?>
    <form action="index.php" method="POST">
        <label for="usuario">Usuario: <input type="text" name="usuario" id="usuario"></label><br><br>
        <label for="password">Contraseña: <input type="password" name="password" id="password"></label><br><br>
        <?php
            // "<p id="texto"></p><br><br>"
        ?>
        
        <input type="submit" name="enviar" value="Enviar consulta">
    </form>
<?php
    require_once("Vista/layouts/footer.html");
?>