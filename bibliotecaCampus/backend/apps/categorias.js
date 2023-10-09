import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const categorias = Router();
dotenv.config();

categorias.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

  categorias.get('/',(req,res)=>{
res.send('get')
})
categorias.post('/',(req,res)=>{
  res.send('post')
})
categorias.delete('/',(req,res)=>{
  res.send('delete')
})

export default categorias;