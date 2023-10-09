import dotenv from 'dotenv';
import express from 'express';
import storage from './controller/bodegas.js'

dotenv.config();
const appExpress=express();
appExpress.use("/bodegas",storage)

const config=JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)})