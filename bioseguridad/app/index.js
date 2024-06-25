import  dotenv  from "dotenv"
import express from "express"
import pais from "./routers/pais.js"


console.clear()

dotenv.config()
let Express = express()

Express.use(express.json())
Express.use("/pais",pais)


const config = JSON.parse(process.env.servidor_backend)
Express.listen(config, () => {
  console.clear()
  console.log("el protocolo de subida ah sido exitoso")
  console.log(`http://${config.hostname}:${config.port}`)
})