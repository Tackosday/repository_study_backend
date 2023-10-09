import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const edito = Router();
dotenv.config();

edito.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

edito.get('/',(req,res)=>{
res.send('get')
})
edito.post('/',(req,res)=>{
  res.send('post')
})
edito.delete('/',(req,res)=>{
  res.send('delete')
})

export default edito;