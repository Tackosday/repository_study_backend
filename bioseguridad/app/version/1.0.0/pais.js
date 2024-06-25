import { conx } from '../../database/mongodb/connection.js'

export const getpais100 = async (req, res) => { 
  
  const db = await conx()
  const collection = db.collection("pais")
  try {
    let funtion = await collection.find({}).toArray();
    res.send(funtion)
  } catch (error) {
    res.send(error)
  }

}

export const postpais100 = async (req, res) => { 

  const db = await conx()
  const collection = db.collection("pais")
  try {
    let data = req.body;
    await collection.insertOne(data);
    res.send(`se ah ingresado la data`)
  } catch (Error) {
    res.status(400).send(Error);
  }


}

export const putpais100 = async (req, res) => { 
  
  const db = await conx()
  const collection = db.collection("pais")

    let actualizaciones = { ...req.body, caducidad: new Date(req.body.caducidad) };
    let filter = parseInt(req.query.id, 10)
    try {
      let working = await collection.updateOne({ _id: filter }, { $set: actualizaciones });
      res.send("se ah actualizado la data")
      if (working.modifiedCount > 0) {
        res.status(200).send({ status: 200, message: `Documento con el id ${filter} se ha actualizado Correctamente` });
      } else {
        working.matchedCount === 1
          ? res.status(200).send({ status: 200, message: `No se realizaron cambios en el documento con el id ${filter}` })
          : res.status(404).send({ status: 404, message: `El documento con el id ${filter} no ha sido encontrado` });
      }
    } catch (error) {
      res.send(error);
    }


}

export const deletepais100 = async (req, res) => {
  const db = await conx()
  const collection = db.collection("pais")

  alimento.delete('/', async (req, res) => {
    try {
      let data = req.body
      let id = data._id
      let funtion = await collection.deleteOne({ "_id": id })
      res.send(funtion)
      funtion.deletedCount === 1
        ? res.status(200).send({ status: 200, message: `Documento con el id ${id} ha sido eliminado correctamente` })
        : res.status(404).send({ status: 404, message: `El documento con el id ${id} no ha sido encontrado` });

    } catch (error) {
      res.status(400).send(Error);
    }
  })
 }