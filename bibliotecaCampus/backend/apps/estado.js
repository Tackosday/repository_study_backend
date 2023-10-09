import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const estado = Router();
dotenv.config();

estado.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

estado.get('/',(req,res)=>{
res.send('get')
})
estado.post('/',(req,res)=>{
  res.send('post')
})
estado.delete('/',(req,res)=>{
  res.send('delete')
})

export default estado;