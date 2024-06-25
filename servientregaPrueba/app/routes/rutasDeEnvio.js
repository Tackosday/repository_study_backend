import { Router } from "express";
import {conx} from "../database/connection.js"

const rutasDeEnvio = Router();



//Accept-Version
rutasDeEnvio.get("/",async(req,res)=>{
    const db = await conx()
    const collection = db.collection("rutasDeEnvio")
    try {
        let funtion = await collection.find({}).toArray();
        res.send(funtion)
      } catch (error) {
        res.send(error)
      }

})

rutasDeEnvio.post("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("rutasDeEnvio")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }

})

rutasDeEnvio.put("/",async(req,res)=>{

})

rutasDeEnvio.delete("/",async(req,res)=>{

})


export default rutasDeEnvio;