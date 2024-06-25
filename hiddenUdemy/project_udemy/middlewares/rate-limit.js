import rateLimit from "express-rate-limit";

export let GetLimit= () => { 
    return rateLimit({
        windowMs: 5 * 1000, 
        max: 6, 
        standardHeaders: true, 
        legacyHeaders: false, 
        message: 'rebaso su totalidad de consultas estipuladas',
        skip: (req, res) =>{
            if(req.headers["content-length"]>1){
                res.status(413).send({
                    status: 413,
                    message: "no se permiten datos de entrada"
                });
                return true;
            }
        }
    })
}

export let postLimit= () => { 
    return rateLimit({
    
        windowMs: 5 * 1000, 
        max: 6, 
        standardHeaders: true, 
        legacyHeaders: false, 
        message:'rebaso su totalidad de consultas estipuladas'
        
    })
}
