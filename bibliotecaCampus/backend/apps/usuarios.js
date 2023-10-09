import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';

const user = Router();
dotenv.config();

user.use((res,req,next)=>{
    let myconfig =json.parse(process.env.MY_CONFIG);
    con= mysql.createPool(myconfig);
    next();
  })

user.get('/',(req,res)=>{
res.send('get')
})
user.post('/',(req,res)=>{
  res.send('post')
})
user.delete('/',(req,res)=>{
  res.send('delete')
})

export default user;