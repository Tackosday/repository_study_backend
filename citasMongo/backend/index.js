import dotenv from 'dotenv';
import express from 'express';
import acudiente from './Routers/acudiente.js';
import cita from './Routers/cita.js';
import consultorio from './Routers/consultorio.js';
import documento from './Routers/documento.js';
import especialidad from './Routers/especialidad.js';
import estado_cita from './Routers/estado_cita.js';
import genero from './Routers/genero.js';
import medico from './Routers/medico.js';
import user from './Routers/user.js';


dotenv.config();
const Express=express();

Express.use(express.json());
Express.use('/acudiente',acudiente);
Express.use('/cita',cita);
Express.use('/consultorio',consultorio);
Express.use('/documento',documento);
Express.use('/especialidad',especialidad);
Express.use('/estado_cita',estado_cita);
Express.use('/genero',genero);
Express.use('/medico',medico);
Express.use('/user',user);

 

const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});

