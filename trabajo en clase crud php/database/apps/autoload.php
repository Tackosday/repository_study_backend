<?php
// function autoload($class){
    function serchDir($url)
    {
        $nameDir=array();
        $dirFather = scandir($url);
        print_r($dirFather);
        echo "<br>";
        foreach($dirFather as $dirSon){
            $nameDir = $dirSon;
            // if($dirSon != "." && $dirSon != ".."){
            //     $nameDir[]=$dirSon;
            // }
            return $nameDir;
        }
    }
    // $dirs =array();
    // $urlFather = dirname(__DIR__)."/database/tables";
    // foreach(serchDir($urlFather) as $dir){
    //     $urlDir = dirname(__DIR__).'/database/tables'.$dir.'/';
    //     $dirs[]=$urlDir;
    // }
// }