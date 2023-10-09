import dotenv from 'dotenv';
import express from 'express';
import author from './apps/autores.js';
import categorias from './apps/categorias.js';
import edito from './apps/editorial.js';
import estado from './apps/estado.js';
import book from './apps/libros.js';
import user from './apps/usuarios.js';
import reserva from './apps/reserva.js';
import prestamo from './apps/prestamo.js';

console.clear();
dotenv.config();
const Express=express();
Express.use(express.json());

Express.use("/author",author);
Express.use("/category",categorias);
Express.use("/editorial",edito);
Express.use("/book_status",estado);
Express.use("/books",book);
Express.use("/user",user);
Express.use("/booking",reserva);
Express.use("/loan",prestamo);

const config = JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});