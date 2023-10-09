import {createServer} from 'http';
import https from 'https';
let myServer = createServer((req,res)=>{

    
})




let config ={
    hostname:"172.16.51.107",
    port:3000   
}

myServer.listen(8080,()=>{
    console.log(`http://${config.hostname}:${config.port}/`)
})