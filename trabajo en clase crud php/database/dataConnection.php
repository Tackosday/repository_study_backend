<?php
abstract class dataConnection
{
    // protected $host = '172.16.48.204';
    // private $username = 'sputnik';
    // private $password = 'Sp3tn1kC@';
    // protected $dbname = 'campusland';

    protected $host = 'localhost';
    private $username = 'root';
    private $password = '';
    protected $dbname = 'campusland';

    public function __get($a)
    {
        return $this->{$a};
    }

    function __constructor()
    {
    }
}