import dotenv from 'dotenv';
import express from 'express';
import Stock from './routers/fil_stock.js'
import his_med from './routers/fecha_his_med.js'

console.clear();
dotenv.config();
const Express=express();

Express.use(express.json());
Express.use('/getMenor50',Stock)
Express.use('/most_fecha_enero',his_med)


const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});