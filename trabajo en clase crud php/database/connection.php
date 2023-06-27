<?php
require_once 'dataConnection.php';
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
        $this->Cnx = new PDO($this->driver.":host=".$this->__get('host').";port=".$this->port.";dbname=".$this->__get('dbname').";user=".$this->username.";password=".$this->password);
        $this->Cnx->setAttribute(\PDO::ATTR_ERRMODE,\PDO::ERRMODE_EXCEPTION);
}
catch(\PDOException $e){
    $this->Cnx=$e->getMessage();
    print_r($e->getMessage());
}
}
}   
