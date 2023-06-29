import {createServer} from 'http';

let myServer =createServer((req,res)=>{
    let datos = "";
    req.on("data",(chunk)=>{
        datos += chunk;
    })
    req.on("end",()=>{
        res.end(datos);
    });
})


let config ={
    hostname:"172.16.51.107",
    port:8080
}

myServer.listen(8080,()=>{
    console.log(`http://${config.hostname}:${config.port}/`)
})