import { Router} from "express";
import {conx} from "../DATABASE/connection.js";
import { ProxyIng } from "../middlewares/DTO/proxys/ProxyIng.js";
import {SignJWT} from 'jose';
import dotenv from 'dotenv'

dotenv.config();
const db=await conx();
const Ingreso = Router();
const collection = db.collection("usuario");

Ingreso.post("/",ProxyIng,async(req,res)=>{
    const data = req.body
    const user = data.usuario
    const password = data.contrasena

    let findUser = await collection.find({"usuario":`${user}`}).toArray()
    let lengthUser = JSON.stringify(findUser).length
    
    if(lengthUser > 2){
        const parseUser = JSON.parse(JSON.stringify(findUser))
        let dbData = parseUser[0].contrasena
        
        let  idMongo  = parseUser[0]._id;
        

        if(dbData === password){

            const ConfiguratorJWT = new SignJWT({idMongo});
            const encoder = new TextEncoder();
            const jwt = await ConfiguratorJWT
            .setProtectedHeader({alg:"HS256", typ: "JWT"})
            .setIssuedAt()
            .setExpirationTime("1m")
            .sign(encoder.encode(process.env.jwt_private_Key));
            
            console.log(jwt);

            res.status(200).send(`bienvenido ${user}`)

        }else{
            res.status(400).send("la contraseña no coincide")
        }
        
    }else{
        res.status(404).send("no se encuentre el usuario")
    }

})

export default Ingreso;