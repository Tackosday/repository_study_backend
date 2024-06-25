import { Router } from "express";
import {conx} from "../database/connection.js"

const espesificaciones = Router();


//Accept-Version
espesificaciones.get("/",async(req,res)=>{

const db = await conx()
const collection = db.collection("espesificaciones")

  try {
    let funtion = await collection.find({}).toArray();
    res.send(funtion)
  } catch (error) {
    res.send(error)
  }

})

espesificaciones.post("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("espesificaciones")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }

})

espesificaciones.put("/",async(req,res)=>{



})

espesificaciones.delete("/",async(req,res)=>{

  const db = await conx()
  const collection = db.collection("espesificaciones")

  try {
    let data = req.body
    let id = data._id
    let funtion = await collection.deleteOne({ "_id": id })
    funtion.deletedCount === 1
    ? res.status(200).send({ status: 200, message: `Documento con el id ${id} ha sido eliminado correctamente` })
    : res.status(404).send({ status: 404, message: `El documento con el id ${id} no ha sido encontrado` });
    res.send(funtion)

  } catch (error) {
    res.status(400).send(Error);
  }

})


export default espesificaciones;