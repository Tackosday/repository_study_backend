import rateLimit from "express-rate-limit";

export let GetLimit= () => { 
    return rateLimit({
        windowMs: 5 * 1000, 
        max: 3, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>1){
                res.status(413).send({
                    status: 413,
                    message: "no se permiten datos de entrada"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'rebaso su totalidad de consultas estipuladas'
            })
        }
    })
}
 

export let PostLimit=()=>{
    return rateLimit({
        windowMs:5 * 1000,
        max:3,
        standardHeader: false,
        
    })
}