import {createServer} from 'http';
import https from 'https';
let myServer = createServer((req,res)=>{
    let data="";
    https.get(`https://pokeapi.co/api/v2/pokemon/1`,(peticion)=>{
        peticion.on("data",(chunk)=>{
            data += chunk
        })
        peticion.on("end",()=>{
            res.end(data)
        })
    })
})




let config ={
    hostname:"172.16.51.107",
    port:8080
}

myServer.listen(8080,()=>{
    console.log(`http://${config.hostname}:${config.port}/`)
})