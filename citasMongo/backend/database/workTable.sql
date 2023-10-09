/* creacion de base de datos */
CREATE DATABASE dbcitas;
USE dbcitas;


/* seccion de creacion de tablas */
/* porfavor ejecute en el orden establecido decendentemente */
CREATE TABLE acudiente(
acu_codigo INT  PRIMARY KEY AUTO_INCREMENT,
acu_nombrecompleto VARCHAR(100),
acu_telefono VARCHAR(100),
acu_direccion VARCHAR(200)
);
CREATE TABLE genero(
    gen_id INT PRIMARY  KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(20),
    gen_abreviatura VARCHAR(20)
);
CREATE TABLE tipo_documento(
    tipdoc_id INT PRIMARY KEY AUTO_INCREMENT,
    tipdoc_nombre VARCHAR(30),
    tipdoc_abreviatura VARCHAR(20)
);
CREATE TABLE usuario(
    usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nombre VARCHAR(50),
    usu_segdo VARCHAR(45),
    usu_primer_apellido_usuar VARCHAR(50),
    usu_segdo_apellido_usuar VARCHAR(50),
    usu_telefono VARCHAR(50),
    usu_direccion VARCHAR(100),
    usu_email VARCHAR(100),
    usu_tipodoc INT,
    FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
    usu_genero INT,
    FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
    usu_acudiente INT,
    FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo)
);

CREATE TABLE especialidad(
    esp_id INT PRIMARY KEY AUTO_INCREMENT,
    esp_nombre VARCHAR(20)
);
CREATE TABLE consultorio(
    cons_codigo INT PRIMARY KEY,
    cons_nombre VARCHAR(50)
);
CREATE TABLE medico(
    med_nroMatriculaprofesional INT PRIMARY KEY,
    med_nombreCompleto VARCHAR(255),
    med_consultorio INT,
    FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
    med_especialidad INT,
    FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
    
);
CREATE TABLE estado_cita(
    estcita_id INT PRIMARY KEY AUTO_INCREMENT,
    estcita_nombre VARCHAR(20)
);

CREATE TABLE cita(
    cit_codigo INT PRIMARY KEY AUTO_INCREMENT,
    cit_fecha DATE,
    cit_estadoCita INT,
    FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id), 
    cit_medico INT,
    FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaprofesional),
    cit_datosUsuario INT,
    FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
);






/* seccion de DROP */
/* eliminacion de base de datos */
DROP DATABASE dbcitas;


/* eliminacion de tablas individuales */
DROP TABLE cita;
DROP TABLE estado_cita;
DROP TABLE medico;
DROP TABLE especialidad;
DROP TABLE consultorio;
DROP TABLE usuario;
DROP TABLE acudiente;
DROP TABLE genero;
DROP TABLE tipo_documento;


