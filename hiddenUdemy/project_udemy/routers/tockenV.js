import { Router } from "express";
import { conx } from "../database/connection.js";
import { jwtVerify } from 'jose';


const db = await conx();
const validation = Router();
const collection = db.collection("user")
const encoder = new TextEncoder()

validation.post("/", async (req, res) => {
    let token = req.headers.tocken
    let key = process.env.jwt_private_Key
    let options = { alg: "HS256", typ: "JWT" }

    try {
        const decodedToken = await jwtVerify(token, encoder.encode(key), options)
        let id = decodedToken.payload.srch
        const userExist = await collection.find({ "id": id }).toArray()
        const tokendb = userExist[0].token

        try {
            if (token === tokendb){
                res.status(202).send({
                    "status":"Ok",
                    "description":"el usuario se ah verificado correctamente"
                })
            }else{
                res.status(401).send({
                    "error":401,
                    "status":" Unathorised"
                })
            }
    } catch (error) {
            res.send(error)

        }


    } catch (error) {
        res.send(error)
    }
})

export { validation };