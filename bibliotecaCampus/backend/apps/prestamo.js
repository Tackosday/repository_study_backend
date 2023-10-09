import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const prestamo = Router();
dotenv.config();

prestamo.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

prestamo.get('/',(req,res)=>{
res.send('get')
})
prestamo.post('/',(req,res)=>{
  res.send('post')
})
prestamo.delete('/',(req,res)=>{
  res.send('delete')
})

export default prestamo;