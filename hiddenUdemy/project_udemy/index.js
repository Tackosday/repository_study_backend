import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { userReg } from './routers/userReg.js';
import { userIng } from './routers/userIng.js';
import { userPre } from './routers/userPre.js';
import { validation } from './routers/tockenV.js';
import { Upload } from './routers/insertToken.js';
import { adminVal } from './routers/adminV.js';
import { changerole } from './routers/changeRoles.js'



console.clear();
dotenv.config();
let Express = express();


Express.use(express.json());
Express.use(cors())
Express.use("/ingreso", userIng)
Express.use("/registro", userReg)
Express.use("/preview", userPre)
Express.use("/encrypt", validation)
Express.use("/upload", Upload)
Express.use("/admin", adminVal)
Express.use("/changerole", changerole)



const config = JSON.parse(process.env.Servidor)
Express.listen(config, () => {
    console.clear();
    console.log(`URL de conexion:`)
    console.log(`http://${config.hostname}:${config.port}`);
});