import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Login from './routers/Login.js'


console.clear();
dotenv.config();


let Express = express();
Express.use(cors())
Express.use(express.json());
Express.use("/Login", Login)



const config = JSON.parse(process.env.Servidor)
Express.listen(config, () => {
  console.clear();
  console.log(`URL de conexion:`)
  console.log(`http://${config.hostname}:${config.port}`);
})