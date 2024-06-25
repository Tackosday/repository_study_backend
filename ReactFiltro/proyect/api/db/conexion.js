import { loadEnv } from 'vite';
import { MongoClient } from "mongodb";
const env = loadEnv("development", process.cwd(), 'VITE')

export async function conx(){
    try {   
        const uri = env.VITE_URI_MONGO;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(uri, options);
        return client.db()
    } catch (error) {
        console.log(error);
        return {status: 500, message:error};
    }
}