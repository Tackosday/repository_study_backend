import { conx } from '../../database/mongodb/connection.js'


export const getpais110 = async (req, res) => { 
  if (!req.ratelimit) return ;
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
  res.send("postpais110")
}

export const putpais100 = async (req, res) => { 
  res.send("putpais110")
}

export const deletepais100 = async (req, res) => {
  res.send("deletepais110")
 }