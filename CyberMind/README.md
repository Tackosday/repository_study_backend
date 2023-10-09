<h1 align="center">-CyberMind-</h1>

###

<h4 align="center"> proyecto para creación de una pagina web que cree rutas de aprendizaje de manera grafica y automática en base a las sugerencias del admin y las interacciones de los usuarios...</h4>


![Cyberpunk](https://github.com/JuanDavidEscalanteCastaneda-Campus/Auto_study_routes_creator/blob/main/images/CyberMind.png?raw=true)
<h4 align="center">la realización de este proyecto esta actualmente elegido, como desarrollador de un sistema que permite tener por medio de el admin y el  usuario permite tener una comunidad para obtener rutas de aprendizaje automáticas basadas en sugerencias y se permiten modificar basado los permisos de flexibilidad dados por el admin, este es un proceso en desarrollo y constantemente estará en cambios en base a  el tiempo y experiencia del developer.</h4>



# OBJETIVO GENERAL
El objetivo de  este proyecto es lograr establecer rutas de aprendizaje de manera más sencilla gracias a la creación de la ruta en base a un admin y la generación de cambios en la ruta de aprendizaje gracias a la interacción y sugerencias del usuario, esto permitirá cambiar y elaborar una ruta más óptima para el aprendizaje a medida que los usuarios de la ruta interaccionen, otorgando sugerencias y reacciones en las partes de la ruta.

# OBJETIVOS ESPECIFICOS
* lograr dar la ruta de aprendiza del tema
* dar los recursos para su estudio
* establecer y adaptar de la mejor manera su ruta

# DESARROLLO
Para el desarrollo de este proyecto se planea realizar un funcionamiento basado en interacciones, donde hay dos usuarios, el primero es el admin y los restantes son los usuarios generales, su interacción será distinta en el ambiente.
Los admins serán los que crearon la ruta de manera básica y gracias a la configuración de flexibilidad, permite al los usuarios reaccionar de manera positiva o negativa, actúe la forma en agregar o eliminar partes de la ruta, así se podrá automáticamente crear la ruta de aprendizaje.

# DATABASE
la base de datos consta de 7 tablas que contienen la informacion necesaria para el funcionamiento de esta idea
![autogeneradorDeRutas.png](https://github.com/JuanDavidEscalanteCastaneda-Campus/Auto_study_routes_creator/blob/main/images/autogeneradorDeRutas7.png?raw=true)

<br>
<h1 align="center">COMO USARLA??</h1>

para el uso de esta api podras encontarla como desarrollador o como consumidor de esta cada una con distintas explicaciones.

# USUARIO
para el uso de esta api como usuario porfavor ejecuta en este orden la aplicacion para su instalacion y su uso.

para su instalacion descarga el repositorio y en la carpeta backend dale click derecho y abre la terminal, ejecuta en esta el siguiente codigo 

```
npm i
```

para descargar de la carpeta de dependencias, tambien encontraras una carpeta llamada .env.example, renombra esta carpeta como .env y con el codijo de ejemplo giate para realizar la correcta incercion de data

```

/*estos datos ingresados seran los que crees tu para prueba y un puerto que no interfiera ningun otro puerto en proceso estos son para la configuracion de el framework express*/

MY_CONFIG={"hostname":"127.10.10.10","port":3356}  



/*estos son los datos necesarios para la funcion de la  base de datos asi que digita los valores reales que usaras*/

CONNECTION={"host":"localhost","user":"root","database":"mibasededatos","password":"123","port":3306}

```
acuerdate que estos datos son tus datos de conexion, te recomendamos utilizar en visual studio la extencion de mysql para extablecer la conexion a la base de datos

![Extencion](https://github.com/JuanDavidEscalanteCastaneda-Campus/Auto_study_routes_creator/blob/main/images/extencion.png?raw=true)

tambien deberas instalar la base de datos, si instalaste la extencion el archivo te permitira ejecutarlos si no tendras que realizarlo por consola, la ruta para encontrar el archivo es backend/dataBase/workTable.sql , crea la base de datos con 
```
CREATE DATABASE centerControl;
```
y usala con
```
USE centerControl;
```
de hay en adelante son los ejecutables de las tablas, ejecutalo uno por uno para crearlas, giate con los comentarios que estan escritos, tambien se encuentra la seccion de DROPS que se encarga de eliminar la base de datos o tablas individualmente asi que asegurate de no seleccionar todo y ejecutar


con eso terminado pondras el sigiente codigo en consola

```
npm run dev
```

esto ejecutara el archivo index.js y levantara el servidor para poder iniciar las peticiones.

las peticiones que puedes usar y para que son las sigientes

**GET**
```
/regions       //ingreso a las data de prefijos y regiones
/reactions     //ingreso a historial de reacciones
/resources     //ingreso al registro de recursos
/route         //ingreso a la ruta creada y sus datos
/suggestions   //ingreso al historial de sugerencias
/topics        //ingreso a los temas relacionados con las rutas de aprendisage
/user          //ingreso a los temas relacionados con usuario
```
(toda la data es la que aparece en cada tabla del diagrama)

**DELETE**
```
/regions       //eliminar con el nombre de region del dato
/reactions     //eliminar con id del dato
/resources     //eliminar con id del dato
/route         //eliminar con id del dato
/suggestions   //eliminar con id del dato
/topics        //eliminar con id del dato
/user          //eliminar con id del dato
```
(al eliminar con el endpoint /regions tiene que exactamente como lo tiene el dato si no no lo lograras eliminar)

**PUT**
```
/regions       //editar data de la tabla prefijo
/reactions     //editar data de la tabla his_reacciones
/resources     //editar data de la tabla recurso
/route         //editar data de la tabla ruta_aprendisaje
/suggestions   //editar data de la tabla sugerencias
/topics        //editar data de la tabla temas
/user          //editar data de la tabla usuario
```
(al igual que el post los datos se envian de tipo json aca abajo despues del metodo post tendras las plantillas para que envies data segun el endpoint)

**POST**
```
/regions       //ingresar data de la tabla prefijo
/reactions     //ingresar data de la tabla his_reacciones
/resources     //ingresar data de la tabla recurso
/route         //ingresar data de la tabla ruta_aprendisaje
/suggestions   //ingresar data de la tabla sugerencias
/topics        //ingresar data de la tabla temas
/user          //ingresar data de la tabla usuario
```
(los datos se envian de tipo json aca abajo tendras las plantillas para que envies data segun el endpoint, tambien al enviar data pon atencion a que se cumplan las relaciones, de esa manera no surgiran errores)

**/regions**
```
    {
    "region": "Estados Unidos",
    "prefijo": 1
    }
```
**/reactions**
```  
    {
    "id_usuario": 1,
    "tipo_reaccion": "Me gusta",
    "id_tema": 1,
    "id_ruta": 1
    }
```
**/resources**
```
    {
    "tipo": "Video",
    "url": "http://www.ejemplo.com/video1",
    "id_tema": 1
    }
```
**/route**
```
   {
    "nombre": "Ruta 1",
    "etiqueta": "Etiqueta 1",
    "us_creador": 1,
    "fec_creacion": "2023-07-23T05:00:00.000Z",
    "configuracion": "Config1",
    "sugerencias": "1",
    "post_recursos": "0",
    "reacciones": "1"
  }
```
**/suggestions**
```
    {
    "usuario": 1,
    "id_tema": 1,
    "mensaje": "¡Me gustaría ver más eventos culturales en la comunidad!"
    } 
```
**/topics**
```
    {
    "nombre": "Tema 1",
    "etiqueta": "Etiqueta 1",
    "ruta_aprendisaje": 1
    }
```
**/user**
```
  {
    "nombre": "juan carlos",
    "sexo": "Masculino",
    "contrasena": "password728",
    "correo": "juan@example.com",
    "sobrenombre": "pehfv123",
    "edad": 88,
    "telefono": 555265675,
    "region": "America del Sur",
    "prefijo_cel": 54
  }
```

<h4 align="center">RECOMENDACIONES</h4>

* borrar o editar un archivo puede generar un error asi que ten cuidado.
* asegurate de tener la conexion activa para mandar las peticione.
* ejecuta el npm run dev y no lo cierres, el mantendra el servidor activo para realizar las peticiones.
* si eliminas o corrompes un archivo puedes cambiarlo por el que esta en este repositorio o a lo mejor bajar de nuevo el repositorio.
* si deseas colocar datos de de ejemplo podras colocarlos en la ruta backend/dataBase/data.sql y giarte por los comentario que alli esta escritos.
* si eliminaras una data puede generar error si hay otra data dependiendo de ella asi que asegurate de eliminar la data que este ligada a ella.

# developer
si eres un desarrollador aca te explicare el proceso y como se estructura la api

**estructuracion de carpetas**
descargar el proyecto lo primero que veras sera esto

![1capa](https://github.com/JuanDavidEscalanteCastaneda-Campus/Auto_study_routes_creator/blob/main/images/1.png?raw=true)

esta capeta tiene contenido:
* images: encontraras el registro de todas las modificaciones de la base de datos y las imagenes que estan contenidas en el readme.
* README: contiene toda la documentacion y descripcion del proyecto.

y la carpeta backen que nos encontraremos con esto.

![2capa](https://github.com/JuanDavidEscalanteCastaneda-Campus/Auto_study_routes_creator/blob/main/images/2.png?raw=true)

esta capeta tiene contenido:
* apps: en esta carpeta encontraras los archivos de cada tabla que son los routhers, especifican los metodos que se pueden realizar.

* database: encontraras los comandos para creacion de base de datos, tablas y la insercion de data de ejemplo.

* node_modules: si ejecutas npm run dev dentro de la carpeta backend encontraras esta carpeta, que contiene recursos necesarios para node y sus dependencias.

* proxy: encontraras los archivos de coneccion entre traduccion de validacion de la dependencia usada class-validator que se explicara mas adelante.

* source: se encuentra el typescript de la extencion de class-validator que permite validar los datos de manera mas simple desde un archivo typora que convierte a javascript y se une con el proxy para poderce incertar como un solo comando en los metodos de peticion.

* validator: se encuentra la traduccion de lo anterior mencionado.

* .env: son las variables de entorno.

* .env.example: son la plantilla que se subira al repositorio.

* .gitignore: es el archivo que no permitira subir ciertas carpetas o archivos.

* index.js: el archivo central en el que correra los endpoint.

* package-lock.json: archivo de generacion automatica necesario para el node.

* package.json: archivo que contiene la configuracion de el node.

* tsconfig.json: es el archivo que configura el typescript y el class-calidator.

<h3 align="center">tecnologias usadas</h3>

###

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
</div>

###
