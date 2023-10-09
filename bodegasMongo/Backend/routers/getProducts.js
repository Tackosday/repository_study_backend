import dotenv from 'dotenv';
import { Router } from 'express';
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js'; 

dotenv.config();
const getProducts=Router();
const db= await conx();

getProducts.get("/",GetLimit(),async (req,res)=>{
    if(!req.rateLimit) return;
    const collection=db.collection("productos")
    const peticion =await collection.find({}).sort({estado:-1}).toArray()
    res.send(peticion);
})

export default getProducts;
