import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_reg} from "../javascript/register.js"

const ProxyReg=express();

ProxyReg.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_reg , req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {ProxyReg};