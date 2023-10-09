import dotenv from 'dotenv'
import express from 'express'

dotenv.config();
let Express=express();

Express.use(json());




const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)})