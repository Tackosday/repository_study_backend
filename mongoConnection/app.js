import dotnev from 'dotenv';
import {configGet} from './middleware/limit.js';
import express from 'express';

console.clear();
dotnev.config();

const Api = express();
Api.use(express.json());

import { Collection } from 'mongodb';
import { con } from './atlas.js';

let db = await con();

// ════════ ⋆★⋆ ════════
    Api.get('/', configGet, (req, res) =>{
        console.log(req.headers);
        res.send("Wenas cabros")
    })
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
Api.listen(config, ()=>{console.log(`http:${config.hostname}:${config.port}`);})


