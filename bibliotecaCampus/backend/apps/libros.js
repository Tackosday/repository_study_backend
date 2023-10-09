import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const book = Router();
dotenv.config();

book.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

book.get('/',(req,res)=>{
res.send('get')
})
book.post('/',(req,res)=>{
  res.send('post')
})
book.delete('/',(req,res)=>{
  res.send('delete')
})

export default book;