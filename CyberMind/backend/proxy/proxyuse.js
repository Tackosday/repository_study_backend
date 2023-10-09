import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_use} from "../validator/val_use.js";

const proxyuse=express();

proxyuse.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_use, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyuse};