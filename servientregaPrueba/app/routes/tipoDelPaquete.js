import { Router } from "express";
import {conx} from "../database/connection.js"

const tipoDelPaquete = Router();



//Accept-Version
tipoDelPaquete.get("/",async(req,res)=>{
    const db = await conx()
    const collection = db.collection("tipoDelPaquete")
    try {
        let funtion = await collection.find({}).toArray();
        res.send(funtion)
      } catch (error) {
        res.send(error)
      }

})

tipoDelPaquete.post("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("tipoDelPaquete")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }

})

tipoDelPaquete.put("/",async(req,res)=>{

})

tipoDelPaquete.delete("/",async(req,res)=>{

})


export default tipoDelPaquete;