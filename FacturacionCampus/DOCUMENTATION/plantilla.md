<h1 align="center">~DOCUMENTACION~</h1>

###

<div align="center">
  <img src="https://github.com/JuanDavidEscalanteCastaneda-Campus/testJs/blob/main/DOCUMENTATION/images/fondo.jpg"  />
</div>

###

<p align="left">Esta documentacion contiene datos y parte de codigo para la realizacion de el filtro con temas como inizaliciacion de node, middlewares, conexion a bases de datos, variables de entorno, web token, dependencias y dtos (esta prohibido el uso de codigo de mongo db).</p>

###

<p>los temas de los que se documentara estan en esta lista</p>

<details>
<summary>Inizialisacion de node</summary>

<h1 align="center">~Inizialisacion de node~</h1>

###

<p align="left">para inisializar node se inicia con el commando</p>

###

```bash
npm init -y
```

<p align="left">esto permite instalar el pakage, configura el type module, ademas de configurar los comando que usaremos constantemente y instala las dependencias necesarias, las puedes cojer del siguiente codigo</p>

###

```bash
{
{
    {
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "dev": "nodemon --quiet index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "class-transformer": "0.5.1",
        "class-validator": "0.14.0",
        "dotenv": "16.3.1",
        "express": "4.18.2",
        "express-rate-limit": "6.9.0",
        "jose": "4.14.4",
        "mongodb": "5.8.1",
        "nodemon": "3.0.1",
        "typescript": "5.1.6"
}
}
```

<p align="left">para poder instalar todas las dependencias deberar usar el codigo</p>

###

```bash
npm i -E -D //dependencias
```

<p align="left">necesitaras sera configurar el archivo central de esta forma</p>

###

```bash
import dotenv from 'dotenv';
import express from 'express';

console.clear();
dotenv.config();
const Express=express();

Express.use(express.json());

const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});
```

<p align="left">para que funcione tendremos que tambien configurar las variables de entorno de esta manera</p>

###

```bash
MY_CONFIG={"hostname": "127.10.10.10", "port": 5511}  //configuracion de servidor a levantar, se sugiere los datos que estan en uso
Atlas_User=""                                         // nombre de usuario de servidor
Atlas_Password=""                                     // contraseña del servidor
Atlas_DB=""                                           // nombre de la base de datos
Jwt_Primate_Key=""                                    // primary key json web token
```

<p align="left">con eso podras levantar el servidor, utiliza el siguiente comando para levantarlo</p>

###

```bash
npm run dev
```

<p align="left">testea y continua...</p>

###
</details>
 
<details>
<summary>Rate-limit</summary>

<h1 align="center">~Rate-limit~</h1>

###

<p align="left">la dependencia rate-limit permitira generar una cierta cantidad de consultas por un tiempo determinado para esto tienes este codigo de ejemplo para poder configurarla a tu gusto y segidamente incluirla segun tu necesidad</p>

###

```bash
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
```

<p align="left">se implementara como middleware en la consulta pero primero se debe importar de esta manera</p>

###

```bash
import {GetLimit} from '//ruta de archivo';

```

<p align="left">testea y continua...</p>

###
</details>
 
<details>
<summary>Routers</summary>

<h1 align="center">~Routers~</h1>

###

<p align="left">los routers son la forma de dividir la api por parte con sus respectivos nombres y en este caso mostrare el codigo de la forma de construirlo y los metodos crud basicos para trabajar, estos routers pueden ser personalizados, la creacion de archivo basico se digita de esta manera</p>

###
```bash
import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../database/connectionAtlas.js';
import { GetLimit } from '../middlewares/APILimit.js';

dotenv.config()
const bodegas = Router();
let db= await conx();

// consultas a realizar en esta seccion y como funcion asincrona

export default bodegas;
```

<p align="left">los ejemplos de consultas son los siguientes</p>

###

<h3 align="left">GET - MOSTRAR DATA</h3>

###

```bash

alimento.get("/",async ( req,res)=>{
    try {
    let funtion= await collection.find({}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

```

<h3 align="left">POST - AGREGAR DATA</h3>

###

```bash

alimento.post('/',async (req,res)=>{
    try{
        let data=req.body;
        await collection.insertOne(data);
        res.send(`se ah ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

```

<h3 align="left">PUT - ACTUALIZAR DATA</h3>

###

```bash

alimento.delete('/', async (req,res)=>{
    try {
        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id})
        res.send(funtion)
        funtion.deletedCount === 1
        ? res.status(200).send({ status: 200, message:`Documento con el id ${id} ha sido eliminado correctamente`})
        : res.status(404).send({ status: 404, message:`El documento con el id ${id} no ha sido encontrado`});

    } catch (error) {
        res.status(400).send(Error);
    }
})

```

<h3 align="left">DELETE - ELIMINAR DATO</h3>

###

```bash

alimento.put("/", async (req,res)=>{
    let actualizaciones ={...req.body,caducidad:new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
try{
    let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
    res.send("se ah actualizado la data")  
     if (working.modifiedCount > 0) {
        res.status(200).send({status: 200, message: `Documento con el id ${filter} se ha actualizado Correctamente`});
    } else {
        working.matchedCount === 1
        ? res.status(200).send({ status: 200, message:`No se realizaron cambios en el documento con el id ${filter}`})
        : res.status(404).send({ status: 404, message:`El documento con el id ${filter} no ha sido encontrado`});
    }
} catch (error) {
    res.send(error);
}
})

```

<p align="left">testea y continua...</p>

###
</details>

<details>
<summary>Validacion typescript</summary>

<h1 align="center">~Validacion typescript~</h1>

###

<p align="left">la validacion con typescript permite generar validaciones mas simples desde typescript y lo transforma a javascript para despues de eso con proxys generar la coneccion para crear los middlewares para el crrecto uso; para iniciar la validacion secciona una parte para los archivos typescrip, los archivos de traduccion y los archivos proxy ademas de un archivo de nombre tsconfig.json que permitira la configuracion, que es el siguiente</p>

###

```bash

{
    "compilerOptions" : {
        "target" : "es6",
        "module" : "Es6",
        "moduleResolution" : "node",
        "outDir" : "./validator",
        "esModuleInterop" : true,
        "experimentalDecorators" : true,
        "emitDecoratorMetadata" : true
    }
}

```

<p align="left">a continuacion anexaras en el package un nuevo script que permita generar la traduccion continua que es esta codigo</p>

###

```bash

    "tsc": "tsc -w"
```

<p align="left">a continuacion crearas el archivo de typescript y crearas el codigo base que es el siguiente</p>

###

```bash

import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,Max} from 'class-validator';

export class val_pre{
    
    @Expose({name:"region"})
    // propiedades del dato
    region:string;

    @Expose({name:"prefijo"})
    // propiedade de dato
    prefijo:number;
    
    constructor(region:string, prefijo:number){
        this.region= region;
        this.prefijo= prefijo;
    }
};

```

<p align="left">este codigo tienes que validarlo con las propiedades adecuadas, aca tendremos las mas comunes y de mayor uso auque tendras que modificarlas</p>

###

```bash

    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro region solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro region debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro region no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro region es obligatorio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro prefijo es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro prefijo debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro prefijo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro prefijo no puede estar vacio'}}})
    @Max(9999,{message:()=>{throw{status:400, message:'el parametro prefijo tiene que ser maximo de 4 caracteres'}}})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro id debe estar vacia'}}})
    @IsUrl(undefined,{ message: ()=>{ throw {status:400,message:'el parametro url debe ser una url valida'}}})
    @IsEmail({}, { message: 'Debe proporcionar una dirección de correo electrónico válida para el parametro correo' })

```

<p align="left">despues de realizarlo crea otro archivo que sera el proxy que establesca la conexion como middleware el proxy podras generarlo a partir de este codigo</p>

###

```bash

import 'reflect-metadata';
import  express from 'express';
import {validate} from 'class-validator'
import { plainToClass } from "class-transformer";
import {val_pre} from "../validator/val_pre.js"

const proxypre=express();

proxypre.use(async(req, res, next)=>{
    try {
        let data = plainToClass(val_pre, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxypre};

```

<p align="left"> activa el codigo de package y ya podras implementarlo como un middleware y usarlo segun tu nesesidad</p>

###

```bash

npm run tsc

```

<p align="left">testea y continua...</p>

###
</details>
 
<details>
<summary>Conexion a base de datos</summary>

<h1 align="center">~Conexion a base de datos~</h1>

###

<p align="left">para utilizar la base de datos de mongo es necesario usar la conexion de mongodb para poder usar el atribbuto db como se realizan consultas en community , la conexion se realiza con el siguiente codigo</p>

###
```bash

import dotnev from "dotenv";
import { MongoClient } from "mongodb";
dotnev.config();
export async function conx() {
    try {
        const uri = `mongodb+srv://${process.env.Atlas_User}:${process.env.Atlas_Password}@tackosday.tykb3fk.mongodb.net/${process.env.Atlas_DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return {status: 500, message: error}
    }
}

```
<p align="left">testea y continua...</p>

###
</details>
 
<details>
<summary>Web tokens</summary>

 
</details>
 
<details>
<summary>Verciones</summary>
</details>
 
<details>
<summary>Testing</summary>
</details>
 
<details>
<summary>Git</summary>

<h1 align="center">~Git~</h1>

###

<p align="left">git es una herramienta util para el trabajo y para guardar cambios  asi que en esta seccion colocare una lista de comandos utiles para trabajar con git</p>

###

* git branch - 
permite ver las ramas disponibles y en cual te encuentras

* git log - 
permite ver los commit y sus espesificaciones, ademas si colocas `--oneline` podras verlos de manera simplificada

* git checkout - 
permite cambiar de rama en rama si espesificas cual deseas ir

* git push `--force` - 
usalo para subir de forma forzada a el github tus cambios

*  git merge - 
permite hacer merge de rama en rama, situate en la que quieres que se una y espesifica cual atraeras 

* git add - 
agrega archivos y cambios para un commit

* git status -  
permite saber cuales cambios faltan por commit

* git commit - 
funciona para hacer commit

* git reset - 
permite devolverte pero borrara todo a su paso de la rama

</details>
 

 
 
