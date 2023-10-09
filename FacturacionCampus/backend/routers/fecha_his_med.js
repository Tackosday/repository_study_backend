import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../database/connection.js';
import {GetLimit} from '../middlewares/rate-limit.js'

dotenv.config()
const his_med = Router();
let db= await conx();
let collection =db.collection("his_medico")

his_med.get('/',async(req,res)=>{
    
    try {
        const work=await collection.find({"cantidad":{$gt:ISODate("2023-01-01T06:31:15Z")}}).toArray();
        res.send(work)
    } catch (error) {
        res.send(error)
    }


})

export default his_med;