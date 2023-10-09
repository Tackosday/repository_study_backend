import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_est} from "../validator_js/val_est.js"

const proxyest=express();

proxyest.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_est, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyest};