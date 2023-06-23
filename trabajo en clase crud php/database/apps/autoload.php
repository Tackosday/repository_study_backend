<?php
function autoload($class){
    function serchDir($url)
    {
        $nameDir=array();
        $dirFather = scandir($url);
        print_r($dirFather) ;
        foreach($dirFather as $dirSon){
            if($dirSon != "." && $dirSon != ".."){
                 $nameDir[]=$dirSon;
            }
        }
        return $nameDir;
    }
    
    $urlFather=dirname(__DIR__).'\tables';
    $dirs =array();
    $urlFather = dirname(__DIR__)."/database/tables";
    foreach(serchDir($urlFather) as $dir){
        $urlDir = dirname(__DIR__).'/database/tables'.$dir.'/';
        $dirs[]=$urlDir;
    }
}