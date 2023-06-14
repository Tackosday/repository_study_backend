<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include("operation.php");
    ?>
    <form action="" method="post">
        <input type="text"><br>
        <button type="submit" name="number" value="1">1</button>
        <button type="submit" name="number" value="2">2</button>
        <button type="submit" name="number" value="3">3</button>
        <button type="submit" name="oper" value="suma">+</button><br>
        <button type="submit" name="number" value="4">4</button>
        <button type="submit" name="number" value="5">5</button>
        <button type="submit" name="number" value="6">6</button>
        <button type="submit" name="oper" value="resta">-</button><br>
        <button type="submit" name="number" value="7">7</button>
        <button type="submit" name="number" value="8">8</button>
        <button type="submit" name="number" value="9">9</button>
        <button type="submit" name="oper" value="multiplicacion">x</button><br>
        <button type="submit" name="eraser" value="divicion">c</button>        
        <button type="submit" name="number" value="divicion">0</button>        
        <button type="submit" name="equa" value="divicion">=</button>        
        <button type="submit" name="oper" value="divicion">/</button>        
        
    </form>
</body>
</html>