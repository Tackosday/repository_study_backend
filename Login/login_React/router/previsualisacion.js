import { Router } from "express";
import {conx} from "../DATABASE/connection.js";
import { GetLimit } from "../middlewares/rateLimit.js";

const db=await conx();
const Preview = Router();
let collection = db.collection("usuario")

Preview.get("/",GetLimit,async ( req,res)=>{
    try {
    let funtion= await collection.find({}).toArray();
    res.status(200).send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

export default Preview;