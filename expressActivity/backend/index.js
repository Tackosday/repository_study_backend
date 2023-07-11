import { dotenv } from 'dotenv';
import {express} from 'express';

dotenv.config();
const appExpress=express();
appExpress.use("/bodegas",)

const config=JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)})