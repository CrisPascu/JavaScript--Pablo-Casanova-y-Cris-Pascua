<?php
    require_once("layouts/header.php");

?>

    <form action="index.php" method="POST">
    <label for="nick">Nick<input type="text" name="nick" id="nick"></label><br><br>
        <label for="nombre">Nombre<input type="text" name="nombre" id="nombre"></label><br><br>
        <label for="apellido">Apellido<input type="text" name="apellido" id="apellido"></label><br><br>
        <label for="email">Correo<input type="email" name="email" id="email"></label><br><br>
        <label for="password">Contraseña<input type="password" name="password" id="password"></label><br><br>
        <label for="password2">Repetir contraseña<input type="password" name="password2" id="password2"></label><br><br>
        <fieldset>
            <legend>Nivel</legend>
                <label>Principiante<input type="radio" name="nivel" id="bajo" value="principiante"></label>
                <label>Medio<input type="radio" name="nivel" id="medio" value="medio"></label>
                <label>Avanzado<input type="radio" name="nivel" id="avanzado" value="avanzado"></label>
        </fieldset><br><br>
        <label for="tipo">Tipo
            <select name="tipo">
                <?php
                    foreach ($listadoTipos as $value) {
                        echo "<option value='" . $value->getCodigo() . "'>" . $value->getCodigo() . "</option>";
                    }  

                ?><br><br>
            </select>
        </label>
        <input type="submit" name="enviar" id="enviar" value="Enviar">
    </form>

<?php

    require_once("layouts/footer.php")

?>