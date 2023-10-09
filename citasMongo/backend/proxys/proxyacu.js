import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_acu} from "../validator_js/val_acu.js"

const proxyacu=express();

proxyacu.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_acu, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyacu};