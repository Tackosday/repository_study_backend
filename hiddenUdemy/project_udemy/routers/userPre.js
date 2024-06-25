import { Router } from "express";
import {conx} from "../database/connection.js";

const db=await conx();
const userPre = Router();
const collection = db.collection("user")

userPre.get("/",async (req,res)=>{
    try {
    let funtion= await collection.find({}).toArray();
    res.status(200).send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

export {userPre};