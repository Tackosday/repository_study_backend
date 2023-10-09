<h1 align="center">DOCUMENTACION</h1>
<p align="center"> en esta documentacion mostraremos el funcionamiento de de la api res y como podrias usarla depende el rol que elijas para el uso de esta ya sea como usuario o como developer.</p>
<img align="center" src="https://github.com/JuanDavidEscalanteCastaneda-Campus/citasNodeExpress/blob/main/images/citas.jpg?raw=true"></img>

en esta seccion estara contenida el modelo de la base de datos de la cual logremos ejecutar distintas consultas para modificar data

<img align="center" src="https://github.com/JuanDavidEscalanteCastaneda-Campus/citasNodeExpress/blob/main/images/database.png?raw=true"></img>
<br>
<br>
<br>

## INSTALACION

para su instalacion descarga el repositorio y en la carpeta backend dale click derecho y abre la terminal, ejecuta en esta el siguiente codigo 

```
npm i
```

para descargar de la carpeta de dependencias, tambien encontraras una carpeta llamada .env.example, renombra esta carpeta como .env y con el codigo de ejemplo guiate para realizar la correcta insercion de data

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


<br>
<br>
<br>

## USUARIO

para el uso de usuario esta establecido varios tipos de consultas que estan en el methodo CRUD asi que aca se te explicara los endpoint posibles para el uso y cada especificacion de su uso.

**GET**

para esta peticion no es necesario ninguna recomendacion ya que solo obtiene la data contenida de tipo JSON. 
``` 
/acudiente      //permite obtener data de la tabla acudiente
/cita           //permite obtener data de la tabla cita 
/consultorio    //permite obtener data de la tabla consultorio
/documento      //permite obtener data de la tabla documento
/especialidad   //permite obtener data de la tabla especialidad
/estado_cita    //permite obtener data de la tabla estado_cita
/genero         //permite obtener data de la tabla genero
/medico         //permite obtener data de la tabla medico
/user           //permite obtener data de la tabla user
```

**POST**

toda la data se envia por el body escrita de tipo JSON de tal manera que se cumpla la condicion para cada tabla, la id en la mayoria de tablas es automatica pero en el caso de la tabla medico y consultorio si se necesita el dato escrito.
``` 
/acudiente      //permite insertar data a la tabla acudiente
/cita           //permite insertar data a la tabla cita
/consultorio    //permite insertar data a la tabla consultorio
/documento      //permite insertar data a la tabla documento
/especialidad   //permite insertar data a la tabla especialidad
/estado_cita    //permite insertar data a la tabla estado_cita
/genero         //permite insertar data a la tabla genero
/medico         //permite insertar data a la tabla medico
/user           //permite insertar data a la tabla user
```


**DELETE**

para eliminar la data se elimina por su id asi que esta podras colocarla en la ruta cons esta sintaxis /acudiente/(id para borrar) de esta manera colocaras la id que se necesita para eliminar, date cuenta que no este dato a eliminar no dependan otros datos mas o no funcionara.
``` 
/acudiente      //permite eliminar data de la tabla acudiente
/cita           //permite eliminar data de la tabla cita 
/consultorio    //permite eliminar data de la tabla consultorio
/documento      //permite eliminar data de la tabla documento
/especialidad   //permite eliminar data de la tabla especialidad
/estado_cita    //permite eliminar data de la tabla estado_cita
/genero         //permite eliminar data de la tabla genero
/medico         //permite eliminar data de la tabla medico
/user           //permite eliminar data de la tabla user
```



**PUT**
para actualizar la data debes colocarla exactamente como un json con la plantilla que puedes obtener del metodo get para modificar el dato, ademas debes colocar el dato de la id a modificar en el query con el nombre de idSelect.
``` 
/acudiente      //permite actualizar data la tabla acudiente
/cita           //permite actualizar data la tabla cita 
/consultorio    //permite actualizar data la tabla consultorio
/documento      //permite actualizar data la tabla documento
/especialidad   //permite actualizar data la tabla especialidad
/estado_cita    //permite actualizar data la tabla estado_cita
/genero         //permite actualizar data la tabla genero
/medico         //permite actualizar data la tabla medico
/user           //permite actualizar data la tabla user
```

<h4>RECOMENDACIONES</h4>

* porfavor no modificar ningun archivo dentro, podria generar un error en el funcionamiento

* si surge un error en el archivo porfavor vuelva a descargarlo y elimine el anterior


# developer
si eres un desarrollador aca te explicare el proceso y como se estructura la api

**estructuracion de carpetas**
descargar el proyecto lo primero que veras sera esto

![1capa](https://github.com/JuanDavidEscalanteCastaneda-Campus/citasNodeExpress/blob/main/images/1.png?raw=true)

esta capeta tiene contenido:
* images: encontraras el registro de todas las modificaciones de la base de datos y las imagenes que estan contenidas en el readme.
* README: contiene toda la documentacion y descripcion del proyecto.

y la carpeta backen que nos encontraremos con esto.

![2capa](https://github.com/JuanDavidEscalanteCastaneda-Campus/citasNodeExpress/blob/main/images/2.png?raw=true)

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