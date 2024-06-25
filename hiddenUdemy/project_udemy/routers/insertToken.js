import { Router } from "express";
import {conx} from "../database/connection.js";
import { jwtVerify } from 'jose';


const db=await conx();
const Upload = Router();
const collection = db.collection("user")
const encoder = new TextEncoder()

Upload.put("/",async (req,res)=>{
    let token =req.headers.tocken
    let data = {"token":`${token}`}
    
    let key = process.env.jwt_private_Key
    let options =  {alg:"HS256", typ: "JWT"} 
    
    try {
        const decodedToken = await jwtVerify(token,encoder.encode(key),options)
        let id = decodedToken.payload.srch
        let update = await collection.updateOne({"id":id},{ $set: data })
        res.send(update)

    } catch (error) {
        res.send(error)
    }

})

export {Upload};