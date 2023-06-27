<?php
require_once 'dataConnection.php';
class Conectar extends dataConnection {
    protected $dbCnx;

    public function __construct(){
        $this->dbCnx = new PDO($this->server . ":host=" . $this->host . ";dbname=" . $this->dbname, $this->user, $this->password);
    }
}