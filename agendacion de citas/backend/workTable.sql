CREATE DATABASE atalaya;
USE atalaya;



CREATE TABLE acudiente(
acu_codigo INT PRIMARY KEY,
acu_nombrecompleto VARCHAR(100),
acu_telefono VARCHAR(100),
acu_direccion VARCHAR(200)
);
CREATE TABLE genero(
    gen_id INT PRIMARY KEY,
    
    gen_nombre VARCHAR(20),
    gen_abreviatura VARCHAR(20)
);
CREATE TABLE tipo_documento(
    tipdoc_id INT PRIMARY KEY,
    tipdoc_nombre VARCHAR(20),
    tipdoc_abreviatura VARCHAR(20)
);
CREATE TABLE usuario(
    usu_id INT PRIMARY KEY,
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
    esp_id INT PRIMARY KEY,
    esp_nombre VARCHAR(20)
);
CREATE TABLE consultorio(
    cons_codigo INT PRIMARY KEY,
    cons_nombre VARCHAR(50)
);
CREATE TABLE medico(
    med_nroMatriculaprosional INT PRIMARY KEY,
    med_nombreCompleto VARCHAR(120),
    med_consultorio INT,
    FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo),
    med_especialidad INT,
    FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
    
);
CREATE TABLE estado_cita(
    estcita_id INT PRIMARY KEY,
    estcita_nombre VARCHAR(20)
);

CREATE TABLE cita(
    cit_codigo INT PRIMARY KEY,
    cit_fecha DATE,
    cit_estadoCita INT,
    FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id), 
    cit_medico INT,
    FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaprosional),
    cit_datosUsuario INT,
    FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
);







DROP DATABASE atalaya;



DROP TABLE cita;
DROP TABLE estado_cita;
DROP TABLE medico;
DROP TABLE especialidad;
DROP TABLE consultorio;
DROP TABLE usuario;
DROP TABLE acudiente;
DROP TABLE genero;
DROP TABLE tipo_documento;

