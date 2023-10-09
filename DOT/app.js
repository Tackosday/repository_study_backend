import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {user} from './controller/user.js'

let json={
    id:"1",
    nombre:"migel",
    edad:23
}
let data= plainToClass(user,json,{excludeExtraneousValues:true})
console.log(data)