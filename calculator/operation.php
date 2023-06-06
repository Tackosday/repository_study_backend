<?php

if (!isset($FirstValue)) {
    $FirstValue = (string) "";
}
if ($_POST) {
    if ($_POST["number"]) {
        $_COOKIE_number =$_POST["number"];
        echo($_COOKIE_number."<br>");
        print_r($_COOKIE_number."<br>");
        print($_COOKIE_number."<br>");




    } else if ($_POST["oper"]) {
        print_r("no es un numero");

    }
}