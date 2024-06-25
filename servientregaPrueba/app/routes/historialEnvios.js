import { Router } from "express";
import {conx} from "../database/connection.js"

const historialEnvios = Router();



//Accept-Version
historialEnvios.get("/",async(req,res)=>{
    const db = await conx()
    const collection = db.collection("historialEnvios")
    try {
        let funtion = await collection.find({}).toArray();
        res.send(funtion)
      } catch (error) {
        res.send(error)
      }

})

historialEnvios.post("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("historialEnvios")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }

})

historialEnvios.put("/",async(req,res)=>{

})

historialEnvios.delete("/",async(req,res)=>{

})


export default historialEnvios;