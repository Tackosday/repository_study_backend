console.clear()

import { loadEnv } from 'vite';
import express from "express";
import cors from "cors";
import { productos } from './routes/getProducts.js';
import { categorias } from './routes/getCategories.js';


const env = loadEnv("development", process.cwd(), 'VITE')
const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos",productos)
app.use("/categorias",categorias)


const config = JSON.parse(env.VITE_CONFIG_EXPRESS);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
}); 