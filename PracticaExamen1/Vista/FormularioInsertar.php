<?php
    require_once("Vista/Layouts/Cabecera.html");
?>
    <form action="index.php" method="POST">
        <label for="nick">Nick<input type="text" name="nick" id="nick"></label><br>
        <label for="nombre">Nombre<input type="text" name="nombre" id="nombre"></label>
        <label for="apellido">Apellido<input type="text" name="apellido" id="apellido"></label>
        <label for="email">Correo<input type="email" name="email" id="email"></label><br>
        <label for="password">Contraseña<input type="password" name="password" id="password"></label>
        <label for="password2">Repetir contraseña<input type="password" name="password2" id="password2"></label><br>
        <fieldset>
            <legend>Nivel</legend>
                <label>Principiante<input type="radio" name="nivel" id="bajo" value="principiante"></label>
                <label>Medio<input type="radio" name="nivel" id="medio" value="medio"></label>
                <label>Avanzado<input type="radio" name="nivel" id="avanzado" value="avanzado"></label>
        </fieldset><br>
        <label for="tipo">Tipo
            <select name="tipo">
                <?php 
                    // var_dump($listadoTipos);
                    foreach($listadoTipos as $valor){
                        echo "<option value='". $valor->getCodigo() ."'>". $valor->getNombreTipo() . "</option>";
                    }
                ?>
            </select>
        </label>
        <input type="submit" name="enviar" id="enviar" value="Enviar">
    </form>
<?php
    require_once("Vista/Layouts/Pie.html");
?>