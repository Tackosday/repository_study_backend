import { Router } from "express";
import { conx } from "../database/connection.js";
import { jwtVerify } from 'jose';


const db = await conx();
const changerole = Router();
const collection = db.collection("user")
const encoder = new TextEncoder()

changerole.put("/", async (req, res) => {
    let id = parseInt(req.headers.id)
    let roles = await collection.findOne({ "id": id })
    let rol = roles.role
try {
    if (rol === 1) {
        let data = {"role":2}
        let update = await collection.updateOne({"id":id},{ $set: data })
        res.send("se ah cambiado a usuario")
    } else if (roles.role === 2) {
        let data = {"role":1}
        let update = await collection.updateOne({"id":id},{ $set: data })
        res.send("se ah cambiado a admin")
    }
} catch (error) {
    res.send(error)
}

})

export { changerole };