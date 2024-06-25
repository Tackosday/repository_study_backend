<h1 align="center">< BACKEND /></h1>

###

<img align="right" height="200" src="https://cdn1.epicgames.com/ue/product/Screenshot/1080-1920x1080-d7b0b9e6c59ef91a7bf4b94dbb2e97e3.png?resize=1&w=1920"  />

###

<p align="left">Aunque la mayoria del backend pertenece al login hay otras rutas que permiten hacer detalles  diferentes y estan muy ligadas a funciones especificas con react, cualquier cambio con estas puede afectar gravemente el programa, es recomendable no editar ninguna funcion de las que se realizan o algun dato no editable, si algun error se presenta porfavor vuelva a clonar el repositorio borrando el anterior archivo para que no genere conflictos.</p>

###

<p align="center">las rutas establecida son cada una de las siguiente que seran explicadas a detalle  cada una</p>

###

```
/ingreso
/registro
/preview
/encrypt
/upload
/admin
/changerole

```

<details>
<summary>/ingreso</summary>
<p align="center">la ruta de ingreso validara por completo la data ingresada verificando su ingreso y verificando si se cumple la contraseña del usuario con el username, ademas esta genera un tocken para poder generar la seccion de usuario que se encuentra en el local storage, este estara regido a ser un metodo post y la data a ingresar debe estar estructurade de la siguiente manera por el body </p>

```bash
    {
    "user": "Tackosday",
    "password": "197355"
  }
```

</details>

<details>
<summary>/registro</summary>
<p align="center">La mayor cantidad de datos tiene que ser del registro por lo que esto tiene que estar validado al igual que el login, esta data se ingresa a ala base de datos, este es un metodo post cuyo cambio se encuentra en el body ya que resive la data, puedes quiarte con estaplantilla</p>

```bash
{
    "name": "Juan Diego Rodrigez Roa",
    "user": "Tackashi",
    "password": "micontra123",
    "phone": 3153568957,
    "token": null,
    "email": "tachi@hotmail.com",
    "role": 1,
    "gender": "otro"
  }
```

</details>
<details>
<summary>/preview</summary>
<p align="center"> para los datos que se encuentran dentro se necesita poder previsualizar, esta funciona para tomar todos los usuarios y toda su data relacionada, este es un metodo get, no se necesita de nada en el body ni en el header</p>
</details>

<details>
<summary>/encrypt</summary>
<p align="center">este metodo permite validar que el tocken sea el correcto y la seccion este activa, esto a si vez genera que la ruta este protegida y no se pueda acceder de otro modo sino con el ingreso correcto, este esta regido por un metodo post con el body vacio pero con un header extra llamado "tocken" el cual se debe pasar con el tocken para el uso y verificacion dentro de la funcion en la ruta un buen ejemplo de esto es el sigiente objeto que es el header </p>

```bash
headers: {
                'content-Type': 'application/json',
                'tocken':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmNoIjozLCJpYXQiOjE2OTY0NDc5NzUsImV4cCI6MTY5NjQ1NTE3NX0.pwzG0rQG6RsSgDjyb_glThqc4gXhSM-98FtiPyOoVJ"
            }
```
</details>

<details>
<summary>/upload</summary>
<p align="center">esta ruta permite subir  y actualizar el tocken de el usuario y la estructura es la misma apesar de que el metodo usado no es post sino put  en cuanto al header es igual de `/encrypt`</p>

```bash
headers: {
                'content-Type': 'application/json',
                'tocken':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmNoIjozLCJpYXQiOjE2OTY0NDc5NzUsImV4cCI6MTY5NjQ1NTE3NX0.pwzG0rQG6RsSgDjyb_glThqc4gXhSM-98FtiPyOoVJ"
            }
```

</details>

<details>
<summary>/admin</summary>
<p align="center">esta rota permite verificar si la seccion del usuario es admin o no, esto verifica y permite generar funciones en funcion a los roles, como `/encrypt` la forma de enviarlo es post y los headers son exactamente iguales a `/encrypt`</p>

```bash
headers: {
                'content-Type': 'application/json',
                'tocken':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcmNoIjozLCJpYXQiOjE2OTY0NDc5NzUsImV4cCI6MTY5NjQ1NTE3NX0.pwzG0rQG6RsSgDjyb_glThqc4gXhSM-98FtiPyOoVJ"
            }
```

</details>

<details>
<summary>/changerole</summary>
<p align="center">esta ruta permite intercambiar routers automaticamente esta funcion simplemente resive un header de nombre `id` esta permite buscar el usuario y automaticamente cambia el rol, esta funcion se realiza con un put, pero es una funcion fuertamente ligada a funciones de react por lo que cambiar su contenido conyeba posibilidad de crashear la pagina</p>

```bash
headers: {
                'content-Type': 'application/json',
                'id':14156
            }
```

</details>

<p align="center">para el funcionamiento correcto de la pagina se debe ingresar de forma directa almenos un usuario como rol 1 (el rol 1 significa rol de admin), la plantilla para ingreso directo se encuentra en la siguiente ruta `project_udemy\database\dataTable.mongodb `</p>