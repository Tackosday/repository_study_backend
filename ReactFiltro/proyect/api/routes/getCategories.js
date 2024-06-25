import { Router } from "express";
import { conx } from "../db/conexion.js";
import { limitGetProducto } from "../helpers/rateLimit.js";

const db = await conx();
const categorias = Router();
const collection = db.collection("categoria")

categorias.get("/", async (req, res) => {

    try {

        let funtion = await collection.find({}).toArray();
        res.status(200).send(funtion)

    } catch (error) {

        res.send(error)

    }

})

export { categorias };