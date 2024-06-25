import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_ing} from '../javascript/val_ing.js'

const ProxyIng=express();

ProxyIng.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_ing, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {ProxyIng};