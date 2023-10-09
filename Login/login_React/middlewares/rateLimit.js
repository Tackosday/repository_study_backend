import {rateLimit} from 'express-rate-limit'

export const GetLimit = 
    rateLimit({
        windowMs: 5 * 1000,
        max:2,
        standardHeaders: 'draft-7',
        legacyHeaders:false,
        statusCode:429,
        message:(req,res)=>{
            const message = 'Dale un respiro eh intenta mas tarde'
        return message
        }
        
    })
