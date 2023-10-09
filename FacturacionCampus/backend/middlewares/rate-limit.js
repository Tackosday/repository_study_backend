import rateLimit from "express-rate-limit";

export let GetLimit= () => { 
    return rateLimit({
        windowMs: 10 * 1000, 
        max: 6, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>1){
                res.status(413).send({
                    status: 413,
                    message: "lo sentimos, no se aceptan datos de entrada"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'has alcanzado el limite de consultas, intentalo mas tarde'
            })
        }
    })
}