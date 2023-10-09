<?php

class connection extends credentials{
    protected $db;
    protected $coneccion =$this->db = new PDO( "mysql:local=".$this->host.";dbname=".$this->dbname,$this->username,$this->password);

    public function translate(){
        return $this->db->query("SET NAMES'utf8'");
    }
}
