<h1 align="center">~Dark Udemy~</h1>

###

<p align="center">Como developer eh buscado la forma de reproducir videos y recursos que esta en consumo de una api externa para asi reproducir videos  y mostrar textos  de cursos de diferentes tecnologias que actua de forma autonoma sobre la api externa, si se genera un cambio automaticamente la pagina se adaptara a ese cambio, con esto permitiremos a los campers tener un recursos de datos graficamente estable para poder reproducir con facilidad los conosimientos de los recursos.</p>

###

<img align="left" height="200" src="https://imagenes.elpais.com/resizer/_Fyk-l5CWAruYGHA0y8KTdtLUjA=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CQCRHSU43REB5KI53PCHUC6EJA.jpg"  />

###

<p align="left">La documentacion se divide en dos secciones, detalles del backend y detalles de frontend, en estos se daran detalles sobre el uso y el manejo pero antes de manejar lo contenido en la documentacion te recomendamos realizar el proceso de instalacion previa que se presentara a continuacion en la parte inferior de este texto</p>

###

* [documentacion de backend](https://github.com/JuanDavidEscalanteCastaneda-Campus/TheHiddenUdemy/blob/main/DOCUMENTATION/backend.md)
* [documentacion de frontend](https://github.com/JuanDavidEscalanteCastaneda-Campus/TheHiddenUdemy/blob/main/DOCUMENTATION/frontend.md)


<p align="left"></p>

###

<h2 align="center">INSTALACION</h2>

###

<p align="center">Para su instalacion deberas clonar el repositorio  actual para poder iniciar el proseso de configuracion.</p>

###
```bash
git clone <url del repositorio>
```

<p align="left">Despues de clonarlo tendremos que configurarlo para su funcionamiento, crearemos un archivo llamado .env lo que configuraremos con el codigo contenido en el archivo .env.example o copiar el siguiente codigo</p>

###
```bash
# DATA DE BACKEND
Servidor={"hostname":"<puedes colocar localhost o en su defecto una IP de prueba>","port":<puerto local de a usar>} #NODE TESTING BACK
# Servidor={"hostname":"<IP del cluster a usar>","port":<puerto a usar>} #NODE CLUSTER BACK

# DATA DE FRONTEND
VITE_Servidor_back={"hostname":"<puedes colocar localhost o en su defecto una IP de prueba>","port":<puerto local de a usar>} #VITE TESTING BACK
# VITE_Servidor_back={ "hostname":"<IP del cluster a usar>","port":<puerto a usar> } #VITE CLUSTER BACK
# VITE_Servidor_front={"hostname":"<IP del cluster a usar>","port":<puerto a usar>} #VITE CLUSTER FRONT


# Informacion base de datos
User = <usuario de la base de datos>
Password = <contraseña de la base de datos>
Database = <la base de datos>

# contraseña jwt
jwt_private_Key = <contraseña para encriptaciones>
VITE_jwt_private_Key  = <contraseña para encriptaciones>
```

<p align="center">Como veras el codigo comentado se secciona para subida al cluster o predeterminado para testeo local. despues de esto prosederemos a instalar los paquetes  de node configurados en el package.json, para esto ejecutaremos posicionados en la carpeta project_udemy donde se encuentra el package el siguiente codigo para instalar esto</p>

###
```bash
npm i -y
```

<p align="center">Con esto concluiras la instalacion y podras activar los servidores, ejecuta los siguientes codigos en diferentes terminales posicionadas en la carpeta project_udemy</p>

###

```bash
//para ejecutar el servidor
npm run node

//para ejecutar el frontend
npm run vite
```

<p align="center">no olvides crear la base de datos que se encuentra en la siguiente ruta `project_udemy\database\workTable.mongodb` al ejecutarla estaras libre para iniciar el proyecto</p>

