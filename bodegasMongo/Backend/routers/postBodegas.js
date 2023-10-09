import dotenv from 'dotenv';
import {Router} from 'express';
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js';

dotenv.config();
const postBodegas=Router();
let db= await conx();

postBodegas.post("/", GetLimit(), async (req,res)=>{
    try{let data=req.body;
    let collect=db.collection("bodegas");
    await collect.insertOne(data);
    res.send(`se ah ingresado la data ${data}`)
    }catch(Error){
        res.status(400).send(Error);
    }
})

export default postBodegas;