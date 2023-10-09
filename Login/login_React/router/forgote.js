import { Router} from "express";
import {conx} from "../DATABASE/connection.js";
import dotenv from 'dotenv'

dotenv.config();
const db=await conx();
const FPassword = Router();
const collection = db.collection("usuario");

FPassword.post(("/"),async(req,res)=>{
    try {
        const correo = req.body.email
    console.log(correo)
    const findMail = await collection.find({email:correo}).toArray()
    const StringMail = JSON.stringify(findMail).length
    if(StringMail > 2){

        

        res.status(200).send("se ah enviado un mensaje a tu email")
    }else{
        res.status(404).send("no se encuentra registrado ese email")
    }

    } catch (error) {
        res.send(error)
    }
})
export default FPassword;