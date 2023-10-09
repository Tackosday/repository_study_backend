import{proxyrea} from '../proxy/proxyRea.js';
import { Router } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config()
const reacciones= Router();

let connect=undefined;
reacciones.use((req,res,next)=>{
    let myconfig =JSON.parse(process.env.CONNECTION);
    connect = mysql.createPool(myconfig);
    next();
})

reacciones.get("/",(req,res)=>{
    connect.query(`
    SELECT * FROM his_reacciones;    
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


reacciones.post("/",proxyrea,(req,res)=>{
    let data=req.body;
     connect.query(
         `INSERT INTO his_reacciones SET ?`,
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


     reacciones.delete("/:data",(req,res)=>{
        let variable=req.params.data;
        connect.query(
            `DELETE FROM his_reacciones WHERE id = ?;`,
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

    reacciones.put('/',proxyrea,(req,res)=>{
        const idSelect = req.query.idSelect;
        const Data = req.body;
        connect.query(
            `UPDATE his_reacciones SET ? WHERE id = ${idSelect};`, Data,
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


export default reacciones;