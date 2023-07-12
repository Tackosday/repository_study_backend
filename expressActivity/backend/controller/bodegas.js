// importaciones
import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

//creacion de dependencias y funciones para acortar codigo
const storage=Router();
dotenv.config();

//creacion de entorno en my sql
storage.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})



//obtener
storage.get(`/account`,(req,res)=>{
    res.send("hola get");
});
 
//agregar
storage.post(`/account`,(req,res)=>{
    res.send("hola agregar");
});

//actualizar
storage.patch(`/account`,(req,res)=>{
    res.send("hola actualizar");
});

//eliminar
storage.delete(`/account`,(req,res)=>{
    res.send("hola delete");
});


export default {storage};