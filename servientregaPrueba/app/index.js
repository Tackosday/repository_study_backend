import  dotenv  from "dotenv"
import express from "express"
import espesificaciones from "./routes/espesificaciones.js"
import estadoEnvio from "./routes/estadoEnvio.js"
import tipoDelPaquete from "./routes/tipoDelPaquete.js"
import historialEnvios from "./routes/historialEnvios.js"
import rutasDeEnvio from "./routes/rutasDeEnvio.js"


console.clear()

dotenv.config()
let Express = express()

Express.use(express.json())
Express.use("/espesificaciones",espesificaciones)
Express.use("/estadoEnvio",estadoEnvio)
Express.use("/historialEnvios",historialEnvios)
Express.use("/rutasDeEnvio",rutasDeEnvio)
Express.use("/tipoDelPaquete",tipoDelPaquete)



const config = JSON.parse(process.env.servidor_backend)
Express.listen(config, () => {
  console.clear();
  console.log("el protocolo de subida ah sido exitoso")
  console.log(`http://${config.hostname}:${config.port}`)
})