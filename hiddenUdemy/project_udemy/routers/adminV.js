import { Router } from "express";
import { conx } from "../database/connection.js";
import { jwtVerify } from 'jose';


const db = await conx();
const adminVal = Router();
const collection = db.collection("user")
const encoder = new TextEncoder()

adminVal.post("/", async (req, res) => {
    let token = req.headers.tocken
    let key = process.env.jwt_private_Key
    let options = { alg: "HS256", typ: "JWT" }

    try {
        const decodedToken = await jwtVerify(token, encoder.encode(key), options)
        let id = decodedToken.payload.srch
        const userExist = await collection.find({ "id": id }).toArray()
        const tokendb = userExist[0].role
        const userdb = userExist[0].user

        try {
            if(tokendb === 1) {
                res.send({
                    "authorized":"authorized",
                    "user":userdb
                })
            }else{
                res.send({
                    "authorized":"unauthorized",
                    "user":userdb
                })
            }
        } catch (error) {
            res.send(error)
        }

    } catch (error) {
        res.send(error)
    }
})

export { adminVal };