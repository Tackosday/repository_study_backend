import {proxycit} from '../proxys/proxycit.js';
import { Router } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config()
const cita= Router();

let connect=undefined;
cita.use((req,res,next)=>{
    let myconfig =JSON.parse(process.env.CONNECTION);
    connect = mysql.createPool(myconfig);
    next();
})



cita.get("/",(req,res)=>{
    connect.query(`
    SELECT * FROM cita;    
    `,
    (err,data,fil)=>{
        if(data.length== 0){
            const text="parece que no hay nada";
            res.status(500).send(text);
        }else{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    }
    );
});


cita.post("/",proxycit,(req,res)=>{
   let data=req.body;
    connect.query(
        `INSERT INTO cita SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `no se pudieron enviar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } 
            res.send("data subida");
        }
    );
    });


    cita.delete("/:data",(req,res)=>{
    let variable=req.params.data;
    connect.query(
        `DELETE FROM cita WHERE cit_codigo = ?;`,
        [variable],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`la data no existe`);
                } else {
                    res.send("se ah eliminado");
                }
            }
        }
    );
});


cita.put('/',proxycit,(req,res)=>{
    const idSelect = req.query.idSelect;
    const Data = req.body;
    connect.query(
        `UPDATE cita SET ? WHERE cit_codigo = ${idSelect};`,
        Data,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El area con el ID ${idSelect} no existe.`);
                } else {
                    res.send("Los datos han sido actualizados correctamente");
                }
            }
        }
    );
})

export default cita;