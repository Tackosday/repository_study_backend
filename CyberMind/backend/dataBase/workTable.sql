/*recomendaciones
para el uso de estas lineas de codigo tendras que tener la extencion de mySLQ y y por recomendacion 
no ejecutar seleccionando todo sino sigiendo los pasos de los comentarios*/


/*crea y usa la base de datos*/
CREATE DATABASE centerControl;
USE centerControl;



/*ejecuta la creacion de tablas de arriba hacia abajo para evitar errores*/
CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  sexo VARCHAR(20) NOT NULL,
  contrasena VARCHAR(20) NOT NULL,
  correo VARCHAR(40) NOT NULL,
  sobrenombre VARCHAR(20) NOT NULL UNIQUE,
  edad INT(3) NOT NULL,
  telefono INT(10) NOT NULL,
  region VARCHAR(20) NOT NULL
);
CREATE TABLE ruta_aprendisaje (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  etiqueta VARCHAR(50) NOT NULL,
  us_creador INT NOT NULL,
  FOREIGN KEY (us_creador) REFERENCES usuario(id),
  fec_creacion DATE NOT NULL,
  configuracion VARCHAR(10),
  sugerencias INT(1) NOT NULL,
  post_recursos INT(1) NOT NULL,
  reacciones INT(1) NOT NULL
);
CREATE TABLE temas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(70) NOT NULL,
  etiqueta VARCHAR(50) NOT NULL,
  ruta_aprendisaje INT NOT NULL,
  FOREIGN KEY (ruta_aprendisaje) REFERENCES ruta_aprendisaje(id)
);
CREATE TABLE recurso(
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50) NOT NULL,
  url VARCHAR(250) NOT NULL,
  id_tema INT NOT NULL,
  FOREIGN KEY (id_tema) REFERENCES temas(id) 
);
CREATE TABLE sugerencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario INT NOT NULL,
  FOREIGN KEY (usuario) REFERENCES usuario(id),
  id_tema INT NOT NULL,
  FOREIGN KEY (id_tema) REFERENCES temas(id),
  mensaje VARCHAR(100) NOT NULL
);
CREATE TABLE his_reacciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  tipo_reaccion VARCHAR(20) NOT NULL,
  id_tema INT NOT NULL,
  FOREIGN KEY (id_tema) REFERENCES temas(id),
  id_ruta INT NOT NULL,
  FOREIGN KEY (id_ruta) REFERENCES ruta_aprendisaje(id)
);
CREATE TABLE prefijo(
  id INT AUTO_INCREMENT PRIMARY KEY,
  region VARCHAR(20) NOT NULL,
  prefijo INT(4) NOT NULL
)
;





/*este es el acceso donde encuentras los metodos de eliminacion*/
/*comando para eliminar la base de datos*/
DROP DATABASE centerControl;

/*comando para eliminar las tablas*/
DROP TABLE recurso;
DROP TABLE his_reacciones;
DROP TABLE sugerencias;
DROP TABLE temas;
DROP TABLE ruta_aprendisaje;
DROP TABLE usuario;

