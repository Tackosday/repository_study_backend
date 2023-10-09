import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_rut} from "../validator/val_rut.js"

const proxyrut=express();

proxyrut.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_rut, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyrut};