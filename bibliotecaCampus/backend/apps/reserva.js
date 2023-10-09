import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const reserva = Router();
dotenv.config();

reserva.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

reserva.get('/',(req,res)=>{
res.send('get')
})
reserva.post('/',(req,res)=>{
  res.send('post')
})
reserva.delete('/',(req,res)=>{
  res.send('delete')
})

export default reserva;