<?php
interface ambient
{
    public function __get($a);
}

abstract class connection extends dataConnection implements ambient
{
use getInstance;
protected $Cnx;

}