import{proxyres} from '../proxy/proxyRes.js';
import { Router } from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config()
const resources= Router();

let connect=undefined;
resources.use((req,res,next)=>{
    let myconfig =JSON.parse(process.env.CONNECTION);
    connect = mysql.createPool(myconfig);
    next();
})

resources.get("/",(req,res)=>{
    connect.query(`
    SELECT id,tipo,url,id_tema FROM recurso;    
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


resources.post("/",proxyres,(req,res)=>{
    let data=req.body;
     connect.query(
         `INSERT INTO recurso SET ?`,
         data,
         (err,data2,fil)=>{
             if (err) {
                 const errorMessage = `no se pudieron enviar la data`;
                 res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
             } 
             res.send("data subida");
         }
     );
     });


     resources.delete("/:data",(req,res)=>{
        let variable=req.params.data;
        connect.query(
            `DELETE FROM recurso WHERE id = ?;`,
            [variable],
            (err,data,fil)=>{
                if (err) {
                    const errorMessage = `Error al borrar la data`;
                    res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
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

    resources.put('/',proxyres,(req,res)=>{
        const idSelect = req.query.idSelect;
        const Data = req.body;
        connect.query(
            `UPDATE recurso SET ? WHERE id = ${idSelect};`, Data,
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




export default resources;