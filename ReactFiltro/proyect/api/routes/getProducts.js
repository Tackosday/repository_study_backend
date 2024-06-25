import { Router } from "express";
import { conx } from "../db/conexion.js";
import { limitGetProducto } from "../helpers/rateLimit.js";

const db = await conx();
const productos = Router();
const collection = db.collection("producto")

productos.get("/", limitGetProducto(), async (req, res) => {
    if(!req.rateLimit) return;

    try {

        let funtion = await collection.find({}).toArray();
        res.status(200).send(funtion)

    } catch (error) {

        res.send(error)

    }

})

export { productos };