import dotenv from 'dotenv';
import express from 'express';
import Register from './router/registro.js'; 
import Preview from './router/previsualisacion.js';
import Ingreso from './router/ingreso.js';
import FPassword from './router/forgote.js';

console.clear();
dotenv.config();
let Express = express();

Express.use(express.json());
Express.use("/register",Register)
Express.use("/preview",Preview)
Express.use("/ingreso",Ingreso)
Express.use("/ForgotePassword",FPassword)


const config =JSON.parse(process.env.Servidor)
Express.listen(config,()=>{
    console.clear();
    console.log(`URL de conexion:`)
    console.log(`http://${config.hostname}:${config.port}`);
});