import { Router } from "express";
import { conx } from "../database/connection.js";
import { ProxyReg } from "../middlewares/DTO/proxy/Proxyuser.js"


const db = await conx();
const userReg = Router();
const collection = db.collection("user")

userReg.post("/", ProxyReg, async (req, res) => {

    let data = req.body;

    try {
        let string = JSON.stringify(data).length
        if (string > 2) {

            const usuario = data.user;
            const FindUser = await collection.find({ "user": `${usuario}` }).toArray()
            const lengthUser = JSON.stringify(FindUser).length

            const correo = data.email;
            const FindCorreo = await collection.find({ "email": `${correo}` }).toArray()
            const lengthCorreo = JSON.stringify(FindCorreo).length

            if (lengthCorreo === 2) {
                if (lengthUser === 2) {

                    //autoincrement
                    let idSort = await collection.find({}).sort({ "id": -1 }).toArray()
                    let masId = idSort[0].id
                    let dataString = JSON.stringify(data).slice(1)
                    let anexData = `{"id":${masId + 1},${dataString}`
                    let dataFinish = JSON.parse(anexData)
                    //data ingreso
                    let work = await collection.insertOne(dataFinish);
                    res.send("se ah creado un usuario de manera exitosa")
                } else {
                    res.send("el usuario ya esta registrado")
                }
            } else {
                res.send("el email ya esta registrado")
            }

        } else {
            res.send("sin datos no podemos crear un usuario, agrega data")
        }


    } catch (error) {
        res.send(error)
    }

})


export { userReg };