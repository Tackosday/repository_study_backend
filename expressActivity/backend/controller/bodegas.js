// importaciones
import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

//creacion de dependencias y funciones para acortar codigo
const storage=Router();
dotenv.config();

//creacion de entorno en my sql
storageCampus.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})



