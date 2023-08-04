import rateLimit from "express-rate-limit";

export let configGet = rateLimit({
    windowMs: 15 * 1000, // 15 sg
    max: 5, // Limit each IP to 5 requests per window (here, per 15 sg)
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
    message: 'Se te acabo el tiempo'
})