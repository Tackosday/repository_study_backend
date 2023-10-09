import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_rea} from "../validator/val_rea.js"

const proxyrea=express();

proxyrea.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_rea, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyrea};