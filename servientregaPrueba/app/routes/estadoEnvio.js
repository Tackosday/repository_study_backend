import { Router } from "express";
import {conx} from "../database/connection.js"

const estadoEnvio = Router();



//Accept-Version
estadoEnvio.get("/",async(req,res)=>{
    const db = await conx()
const collection = db.collection("estadoEnvio")

    try {
        let funtion = await collection.find({}).toArray();
        res.send(funtion)
      } catch (error) {
        res.send(error)
      }

})

estadoEnvio.post("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("estadoEnvio")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }



})

estadoEnvio.put("/",async(req,res)=>{

})

estadoEnvio.delete("/",async(req,res)=>{

})


export default estadoEnvio;