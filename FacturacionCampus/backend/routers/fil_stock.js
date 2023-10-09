import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../database/connection.js';
import {GetLimit} from '../middlewares/rate-limit.js'

dotenv.config()
const Stock = Router();
let db= await conx();
let collection =db.collection("inventario")

Stock.get('/',async(req,res)=>{
    
    try {
        const work=await collection.find({"cantidad":{$lt:50}}).toArray();
        res.send(work)
    } catch (error) {
        res.send(error)
    }


})

export default Stock;