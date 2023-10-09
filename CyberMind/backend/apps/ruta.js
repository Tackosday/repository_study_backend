import{proxyrut} from '../proxy/proxyRut.js';
import { Router } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config()
const ruta= Router();

let connect=undefined
ruta.use((req,res,next)=>{
    let myconfig =JSON.parse(process.env.CONNECTION);
    connect = mysql.createPool(myconfig);
    next();
})

ruta.get("/",(req,res)=>{
    connect.query(`
    SELECT id,nombre,etiqueta,us_creador,fec_creacion,configuracion,sugerencias,post_recursos,reacciones FROM ruta_aprendisaje;    
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


ruta.post("/",proxyrut,(req,res)=>{
    let data=req.body;
     connect.query(
         `INSERT INTO ruta_aprendisaje SET ?`,
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


     ruta.delete("/:data",(req,res)=>{
        let variable=req.params.data;
        connect.query(
            `DELETE FROM ruta_aprendisaje WHERE id = ?;`,
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


    ruta.put('/',proxyrut,(req,res)=>{
        const idSelect = req.query.idSelect;
        const Data = req.body;
        connect.query(
            `UPDATE ruta_aprendisaje SET ? WHERE id = ${idSelect};`, Data,
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


export default ruta;