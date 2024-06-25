import rateLimit from "express-rate-limit";

// export const outputLimit = () => {
//   return rateLimit({
//     windowMs: 5 * 1000,
//     max: 15,
//     standardHeaders: true,
//     legacyHeaders: false,
//     message:"se ah exedido el nimero de peticiones por tiempo variable de tiempo, espera un poco"
//   })
// }
export let outputLimit = () => {
  return rateLimit({
    windowMs: 5 * 1000,
    max: 3,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req, res) => {
      if (req.headers["content-length"] > 1) {
        res.status(413).send({
          status: 413,
          message: "no se permiten datos de entrada"
        });
        return true;
      }
    },
    message: (req, res) => {
      res.status(429).send({
        status: 429,
        message: 'rebaso su totalidad de consultas estipuladas'
      })
    }
  })
}
 
export const inputLimit = () => {
  return rateLimit({
    windowMs: 6 * 1000,
    max: 8,
    standardHeaders: true,
    legacyHeaders: false,
    message: "se ah exedido el nimero de peticiones por tiempo variable de tiempo, espera un poco"
  })
}