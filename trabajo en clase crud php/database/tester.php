<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include 'apps/autoload.php';
    
    $t=serchDir(dirname(__DIR__)."/database/tables");
    print_r($t);
    ?>
</body>
</html>