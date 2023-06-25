<?php
interface ambient
{
    public function __get($a);
}

abstract class connection extends dataConnection implements ambient
{
use getInstance;
protected $Cnx;

function __construct(private $db ="mysql", private $port =3306 ){

    try{
        $connection = new PDO(DB_TYPE.":host".DB_HOST.";dbname)
}
catch{

}
}

}