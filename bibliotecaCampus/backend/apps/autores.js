import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const author = Router();
dotenv.config();

  author.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

author.get('/',(req,res)=>{
res.send('get')
})
author.post('/',(req,res)=>{
  res.send('post')
})
author.delete('/',(req,res)=>{
  res.send('delete')
})

export default author;