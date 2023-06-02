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
    $FirstValue="";
    
    
    if($_POST){
        if($_POST["number"]){
            print_r("es un numero");
        }else if($_POST["oper"]){
            print_r("no es un numero");

        }
    }
    ?>
    <form action="" method="post">

        <button type="submit" name="number" value="1">1</button>
        <button type="submit" name="number" value="2">2</button>
        <button type="submit" name="number" value="3">3</button>
        <button type="submit" name="number" value="4">4</button>
        <button type="submit" name="number" value="5">5</button>
        <button type="submit" name="number" value="6">6</button>
        <button type="submit" name="number" value="7">7</button>
        <button type="submit" name="number" value="8">8</button>
        <button type="submit" name="number" value="9">9</button>
        <button type="submit" name="oper" value="suma">+</button>
        <button type="submit" name="oper" value="resta">-</button>
        <button type="submit" name="oper" value="multiplicacion">x</button>
        <button type="submit" name="oper" value="divicion">/</button>        
        
    </form>
</body>
</html>