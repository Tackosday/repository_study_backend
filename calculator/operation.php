<?php
session_start();
if(!isset($_session['array'])){
    $_seccion['text']=(string)"";
}
if($_POST){
    if($_POST["number"]){
    $_seccion['text'] .=(string) $_POST["number"];
    print_r($_seccion['text']);  
    }
    if($_POST["oper"]){
        print "operadores";
    }
    if($_POST["equa"]){
        print "operadores";
    }
    if($_POST["eracer"]){
        print "operadores";
    }   
}
?>