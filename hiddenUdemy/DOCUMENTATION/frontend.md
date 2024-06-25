<h1 align="center">~FRontEnd~</h1>

###

<div align="center">
  <img height="400" src="https://img3.wallspic.com/previews/4/9/8/2/7/172894/172894-ciberpunk_2077_arte-cyberpunk_2077-corredores_de_borde_cyberpunk-arte-cyberpunk-x750.jpg"  />
</div>

###

<p align="center">la configuracion de frontend se ah usado con las tecnologias de react+ vite, todos los recursos  de componentes prinsipales se encuentran en la carpeta src , tambien en esa carpeta podras encontrar los subcomponentes y la carpeta de recursos graficos como imagenes y musica,las rutas son las siguientes, mas adelante daremos detalles de cada una de las rutas</p>

###

```bash
    /Login
    /Register
    /home
    /usersData
```

<details>
<summary>/Login</summary>
<p align="center">esta seccion permite tener la validacion y existencia de usuario ademas de contener la creacion de la seccion para el ingreso adecuado</p>
</details>

<details>
<summary>/Register</summary>
<p align="center">esta seccion permite ingresar la data y enviarla a la base de datos para registrarla con el rol de usuario</p>
</details>

<details>
<summary>/home</summary>
<p align="center">la parte central del proyecto permite manejar la parte grafica del json por parte de los videos y textos que contiene cada curso seccionado para poder reproducir ordenado, esta ruta esta protegida por lo que no se puede acceder de forma directa</p>
</details>

<details>
<summary>/usersData</summary>
<p align="center">esta seccion solo esta permitida para el admin, esta seccion registra los admins que estan permitidos para realizar distintas acciones gracias a los permisos</p>
</details>


<p align="center">todo esta totalmente validado y conectado entre si con funciones por lo que la edicion puede generar un error critico</p>