import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_med} from "../validator_js/val_med.js"

const proxymed=express();

proxymed.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_med, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxymed};