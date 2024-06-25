import { Router} from "express";
import {conx} from "../database/connection.js";
import {SignJWT} from 'jose';
import dotenv from 'dotenv'
import {ProxyIng} from '../middlewares/DTO/proxy/proxyIng.js'

dotenv.config();
const db=await conx();
const userIng = Router();
const collection = db.collection("user");

userIng.post("/",ProxyIng,async(req,res)=>{
    const data = req.body
    const usuario = data.user
    const contraseña = data.password

    let findUser = await collection.find({"user":`${usuario}`}).toArray();
    let lengthUser = JSON.stringify(findUser).length;
    
    if(lengthUser > 2){
        const parseUser = JSON.parse(JSON.stringify(findUser))
        let dbData = parseUser[0].password
        
        let  srch  = parseUser[0].id;
        

        if(dbData === contraseña){

            const ConfiguratorJWT = new SignJWT({srch});
            const encoder = new TextEncoder();
            const jwt = await ConfiguratorJWT
            .setProtectedHeader({alg:"HS256", typ: "JWT"})
            .setIssuedAt()
            .setExpirationTime("2h")
            .sign(encoder.encode(process.env.jwt_private_Key));
        

            res.status(200).send({
                "status": "OK",
                "message": `Welcome ${usuario}`,
                "tocken": jwt
            })

        }else{
            res.status(400).send("la contraseña no coincide")
        }
        
    }else{
        res.status(404).send("no se encuentre el usuario")
    }

})

export {userIng};