/*herramientas de acceso a data, eliminacion de data y uso de base de datos*/
USE centerControl;
DELETE FROM prefijo where region="Trinidad y Tobago";
SELECT * from temas;


/*recomendaciones
para el uso de esta data de ejemplo puedes ejucutarla en el orden en el que se encuentra pero 
ten en cuenta que las tablas se encuentras relacionadas por lo tal las id podran generar error
 si no se encuentran relacionadas de igual manera si le surge un error porfavor edita las id 
 acordes a los datos ingresados*/
 
INSERT INTO prefijo (region, prefijo) VALUES
('Estados Unidos', 1),
('Canadá', 1),
('México', 52),
('Belice', 501),
('Costa Rica', 506),
('El Salvador', 503),
('Guatemala', 502),
('Honduras', 504),
('Nicaragua', 505),
('Panamá', 507),
('Bahamas', 1),
('Cuba', 53),
('República Dominicana', 1),
('Jamaica', 1),
('Puerto Rico', 1),
('Trinidad y Tobago', 1),
('Argentina', 54),
('Brasil', 55),
('Chile', 56),
('Colombia', 57),
('Ecuador', 593),
('Perú', 51),
('Venezuela', 58);


INSERT INTO usuario (nombre, sexo, contrasena, correo, sobrenombre, edad, telefono, region) 
VALUES 
('Juan Pérez', 'Masculino', 'contraseña123', 'juan@example.com', 'juanito', 30, 12345678, 'América del Norte'),
('María López', 'Femenino', 'clave456', 'maria@example.com', 'mari123', 25, 98765432, 'América Central'),
('Pedro Gómez', 'Masculino', 'password789', 'pedro@example.com', 'pedro123', 28, 55566677, 'América del Sur');
SELECT * from usuario;

INSERT INTO ruta_aprendisaje (nombre, etiqueta, us_creador, fec_creacion, configuracion, sugerencias, post_recursos, reacciones)
VALUES
('Ruta 1', 'Etiqueta 1', 1, '2023-07-23', 'Config1', true, false, true),
('Ruta 2', 'Etiqueta 2', 2, '2023-07-22', 'Config2', false, true, true),
('Ruta 3', 'Etiqueta 3', 3, '2023-07-21', 'Config3', true, true, false);
SELECT * from ruta_aprendisaje;
INSERT INTO temas (nombre, etiqueta, ruta_aprendisaje)
VALUES
('Tema 1', 'Etiqueta 1', 1),
('Tema 2', 'Etiqueta 2', 2),
('Tema 3', 'Etiqueta 3', 3);
SELECT * from temas;
INSERT INTO his_reacciones (id_usuario, tipo_reaccion,id_tema, id_ruta) 
VALUES 
(1, 'Me gusta', 1, 1),
(2, 'No me gusta', 2, 2),
(3, 'Me gusta', 3, 3);
SELECT * from his_reacciones;
INSERT INTO recurso (tipo, url, id_tema)
VALUES
  ('Video', 'http://www.ejemplo.com/video1', 1),
  ('Documento', 'http://www.ejemplo.com/documento1', 2),
  ('Enlace', 'http://www.ejemplo.com/enlace1', 3);
SELECT * from recurso;
INSERT INTO sugerencias (usuario, id_tema, mensaje)
VALUES
(1, 1, '¡Me gustaría ver más eventos culturales en la comunidad!'),
(2, 2, '¿Podemos tener más opciones de comida en el menú del comedor?'),
(3, 3, 'Propongo agregar clases de yoga en el gimnasio.');
SELECT * from sugerencias;