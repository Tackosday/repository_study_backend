import dotenv from 'dotenv';
import express from 'express';
import bodegas from './routers/getBodegas.js'
import postBodegas from './routers/postBodegas.js'
import getProducts from './routers/getProducts.js'
import postProducts from './routers/postProducts.js'
// import users from './routers/users.js'

console.clear();
dotenv.config();
const Express=express();

Express.use(express.json());
Express.use("/bodegas",bodegas);
Express.use("/bodegas",postBodegas);
Express.use("/productos",getProducts);
Express.use("/productos",postProducts);
// Express.use("/users",users);





const config=JSON.parse(process.env.MY_CONFIG)
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});  