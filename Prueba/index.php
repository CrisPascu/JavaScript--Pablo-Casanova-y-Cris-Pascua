<?php
    require_once("Vista/layouts/header.php");

?>

    <form action="index.php" method="POST">
        <label for="nick">Nick: <input type="text" name="nick" id="nick"></label><br><br>
        <label for="password">Password: <input type="password" name="password" id="password"></label><br><br>
        <input type="submit" name="enviar" value="ENVIAR">
    </form>



<?php

    require_once("Vista/layouts/footer.php")

?>