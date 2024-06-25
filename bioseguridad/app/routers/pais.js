import { Router } from "express";
import routesVersioning from "express-routes-versioning"
import { getpais100 } from "../version/1.0.0/pais.js"
import { getpais110 } from "../version/1.1.0/pais.js"
import { putpais100 } from "../version/1.0.0/pais.js"
import { deletepais100 } from "../version/1.0.0/pais.js"
import { postpais100 } from "../version/1.0.0/pais.js"
import { outputLimit } from "../middlewares/ratelimit/limit.js"
import { inputLimit } from "../middlewares/ratelimit/limit.js"


const pais = Router();
const version = routesVersioning()


//Accept-Version
pais.get("/", version({
  "1.0.0": getpais100,
  "1.1.0": (req, res, next) => { 
    outputLimit(req, res => { 
      getpais110(req,res,next)
    })
  }

}))

pais.post("/", version({
  "1.0.0": postpais100,
  // "1.1.0": (req, res, next) => { 

  // }
}))

pais.put("/", version({
  "1.0.0": putpais100,
  // "1.1.0": (req, res, next) => { 

  // }
}))

pais.delete("/", version({
  "1.0.0": deletepais100,
  // "1.1.0": (req, res, next) => { 

  // }
}))

export default pais;


