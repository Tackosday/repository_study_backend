import{proxysug} from '../proxy/proxySug.js';
import { Router } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config()
const sugerencia= Router();

let connect=undefined;
sugerencia.use((req,res,next)=>{
    let myconfig =JSON.parse(process.env.CONNECTION);
    connect = mysql.createPool(myconfig);
    next();
})

sugerencia.get("/",(req,res)=>{
    connect.query(`
    SELECT id,usuario,id_tema,mensaje FROM sugerencias;    
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



sugerencia.post("/",proxysug,(req,res)=>{
    let data=req.body;
     connect.query(
         `INSERT INTO sugerencias SET ?`,
         data,
         (err,data2,fil)=>{
             if (err) {
                 const errorMessage = `no se pudieron enviar la data`;
                 res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessage}`);
             } 
             res.send("data subida");
         }
     )
     });


     sugerencia.delete("/:data",(req,res)=>{
        let variable=req.params.data;
        connect.query(
            `DELETE FROM sugerencias WHERE id = ?;`,
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


    sugerencia.put('/',proxysug,(req,res)=>{
        const idSelect = req.query.idSelect;
        const Data = req.body;
        connect.query(
            `UPDATE sugerencias SET ? WHERE id = ${idSelect};`, Data,
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


export default sugerencia;