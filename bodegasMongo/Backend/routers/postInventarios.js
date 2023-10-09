import {Router} from 'express';
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js';

const postInventarios = Router();
let db = await conx();
let productos = db.collection("productos");
let inventarios = db.collection("inventarios");

postInventarios.post('',(req,res)=>{
    
})

export default postProducts;