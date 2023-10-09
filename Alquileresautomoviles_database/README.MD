
<h1 align="center">ALQUILER DE AUTOS</h1>

<img src="https://github.com/JuanDavidEscalanteCastaneda-Campus/AlquilerAutomoviles_database/blob/main/challenger.jpg" align="center">

<h3>Descripción</h3>
Este proyecto contiene una serie de consultas en MongoDB para realizar diversas operaciones en una base de datos de alquiler de automóviles. Estas operaciones incluyen la obtención de información sobre clientes, alquileres, automóviles y sucursales, así como la realización de filtrados y búsquedas específicas.


<br>
<br>
<h3>Requisitos</h3>
MongoDB: Asegúrate de tener MongoDB instalado y en funcionamiento en tu sistema.
Instrucciones
Clona este repositorio en tu máquina local o descarga los archivos proporcionados.

Inicia el servicio de MongoDB en tu sistema.

Importa los datos de la base de datos: Asegúrate de tener una base de datos "firstdb" y las colecciones correspondientes ("cliente", "alquiler", "automovil", "sucursal", etc.). Importa los datos de muestra en cada colección para poder ejecutar las consultas.

Ejecuta las consultas: Abre una terminal o una interfaz de línea de comandos y asegúrate de estar en el directorio donde se encuentran los archivos. Luego, copia y pega cada consulta en el intérprete de MongoDB para obtener los resultados correspondientes.

Observa los resultados: Las consultas devolverán los resultados correspondientes a cada operación realizada en la base de datos. Los resultados se mostrarán en formato JSON.


<br>
<br>
<h3>Consultas Disponibles</h3>
<p>Consulta 2: Mostrar todos los clientes registrados en la base de datos.</p>
<p>Consulta 3: Obtener todos los automóviles disponibles para alquiler.</p>
<p>Consulta 4: Listar todos los alquileres activos junto con los datos de los clientes relacionados.</p>
<p>Consulta 5: Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.</p>
<p>Consulta 6: Obtener los detalles del alquiler con el ID_Alquiler específico.</p>
<p>Consulta 7: Listar los empleados con el cargo de "Vendedor".</p>
<p>Consulta 8: Mostrar la cantidad total de automóviles disponibles en cada sucursal.</p>
<p>Consulta 9: Obtener el costo total de un alquiler específico.</p>
<p>Consulta 10: Listar los clientes con el DNI específico.</p>
<p>Consulta 11: Mostrar todos los automóviles con una capacidad mayor a 5 personas.</p>
<p>Consulta 12: Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.</p>
<p>Consulta 13: Listar las reservas pendientes realizadas por un cliente específico.</p>
<p>Consulta 14: Mostrar los empleados con cargo de "Gerente" o "Asistente".</p>
<p>Consulta 15: Obtener los datos de los clientes que realizaron al menos un alquiler.</p>
<p>Consulta 16: Listar todos los automóviles ordenados por marca y modelo.</p>
<p>Consulta 17: Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.</p>
<p>Consulta 18: Obtener la cantidad total de alquileres registrados en la base de datos.</p>
<p>Consulta 19: Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.</p>
<p>Consulta 20: Obtener los datos del cliente que realizó la reserva con ID_Reserva específico.</p>
<p>Consulta 21: Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.</p>

<br>

- todas las consultas se encuentran en en el archivo de consultas.mongodb 
- todas se pueden ejecutar sin alterar el codigo exepto los sigientes que permiten buscar específicamente

**Consulta 6**
```
use("firstdb");
db.alquiler.find({"ID_alquiler":<id>});   //remplaza el valor <id>

```

**Consulta 9**
```
use("firstdb");
db.getCollection("alquiler").aggregate([
    {
        $match: {
            ID_alquiler:<id>    //remplasa el valor <id>
        }
    },
    {
        $project:{
            _id:0,
            ID_alquiler:0,
            ID_cliente:0,
            ID_automovil:0,
            Fecha_Inicio:0,
            Fecha_Fin:0,
            Estado:0
        }
    }
]);
```

**Consulta 10**
```
use("firstdb");
db.cliente.find({"DNI":"<dni>"});   //remplaza el valor <dni> 
```

**Consulta 13**
```
use("firstdb");
db.getCollection("cliente").aggregate([
    {
        $match: {
            ID_cliente:<id>        //remplasar valor <id>
        }
    },
    {
        $lookup: {
          from: ("reserva"),
          localField: "ID_cliente",
          foreignField: "ID_Cliente",
          as: "reservas_pendientes"
        }
    },
    {
        $match: {
          "reservas_pendientes.Estado":"pendiente"
        }
    },
    {
        $project:{
            _id:0,
            "reservas_pendientes._id":0
            
        }
    }
]);

```

**Consulta 20**
```
use("firstdb");
db.getCollection("reserva").aggregate([  
    {    
        $lookup: {      
            from: "cliente",     
            localField: "ID_Cliente",      
            foreignField: "ID_cliente",      
            as: "data_Cliente"   
         }  
    },  
    {
        $match: {ID_Reserva:<id>}       //remplaza el valor <id>
    },
    {
        $project: {
          _id:0
        }
    }
    
]);
```

<br>
<br>


<h3>Notas</h3>

- Las consultas asumen que tienes una base de datos "firstdb" con las colecciones correspondientes y datos de muestra para ejecutar las operaciones sin problemas.
- Asegúrate de haber iniciado el servicio de MongoDB antes de ejecutar las consultas.
- si deseas crear la base de datos de prueba la encontraras en el archivo database.mongodb

