import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const appExpress = express();

appExpress.listen(JSON.parse(precess.env.MY_CONFIG));