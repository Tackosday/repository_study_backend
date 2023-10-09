import {Router} from 'express';
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js';

const postProducts = Router();
let db = await conx();
let productos = db.collection("productos");
let inventarios = db.collection("inventarios");
let bodegaDefault = 11;
let cantidadInicial = 1;

postProducts.post('/',GetLimit(), async (req, res) =>{
    const {_id, created_by} = req.body;
    try {
        let data = {
            ...req.body,
            update_by : null,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
            }
        let funtionOne = await productos.insertOne(data);
        let FuntionTwo = await inventarios.insertOne({
            _id : _id,
            id_bodega: bodegaDefault,
            id_producto: _id,
            cantidad: cantidadInicial,
            created_by: created_by,
            update_by: null,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
          });   
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        res.send(error)
      }1

})

 