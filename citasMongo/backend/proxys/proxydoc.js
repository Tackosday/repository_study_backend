import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_doc} from '../validator_js/val_doc.js';

const proxydoc=express();

proxydoc.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_doc, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxydoc};