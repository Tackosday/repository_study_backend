console.clear();
import dotenv from 'dotenv';
import express from 'express';
import prefijo from './apps/prefijos.js';
import reacciones from './apps/reacciones.js'
import resources from './apps/resources.js';
import ruta from './apps/ruta.js';
import sugerencia from './apps/sugerencias.js';
import temas from './apps/temas.js';
import user from './apps/user.js';


dotenv.config();
const Express=express();
Express.use(express.json());
Express.use('/regions',prefijo);
Express.use('/reactions',reacciones);
Express.use('/resources',resources);
Express.use('/route',ruta);
Express.use('/suggestions',sugerencia);
Express.use('/topics',temas);
Express.use('/user',user)


const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});

