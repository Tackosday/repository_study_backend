import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js';

dotenv.config()
const bodegas = Router();
let db= await conx();

bodegas.get("/",GetLimit(), async (req,res)=>{
    if(!req.rateLimit) return;
    let coletion=db.collection("bodegas")
    let funtion= await coletion.find({}).sort({nombre:1}).toArray();
    res.send(funtion)
});

export default bodegas;
