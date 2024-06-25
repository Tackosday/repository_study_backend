import Router from "express";
import dotenv from 'dotenv'
import { conx } from '../database/connection.js'
import {SignJWT} from 'jose'

dotenv.config()
const Login = Router();
const db = await conx()
const collection = db.collection('user')

Login.post("", async(req,res) => {  
  let user = req.body.user
  let password = req.body.password
  let data = await collection.find({ user }).toArray()
  let debbugLarge = JSON.stringify(data).length

  if (debbugLarge > 2) {
     
      const verify = data[0].password

    if (password === verify) {

      let srch = data[0].id
    
      const ConfiguratorJWT = new SignJWT({ srch });
      const encoder = new TextEncoder();
      const jwt = await ConfiguratorJWT
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(encoder.encode(process.env.jwt_private_Key));


      res.status(200).send({
        "status": "OK",
        "message": `Welcome ${user}`,
        "tocken": jwt
      })

    } else {
      res.status(401).send("no coicide la contraseña")
    }

  } else {
    
    res.status(404).send("no se encuentra el usuario")
  }

})

export default Login