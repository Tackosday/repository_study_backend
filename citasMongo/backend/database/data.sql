/* uso de base de datos */
USE dbcitas;


/* datos de ejemplo */
/* ejecuta la insercion de datos de acuerdo a la relacion planteada, se recomienda ejecuta en orden decendente */
INSERT INTO acudiente (acu_nombrecompleto, acu_telefono, acu_direccion)
VALUES
  ('John Doe', '123-456-7890', '123 Main St'),
  ('Jane Smith', '987-654-3210', '456 Elm St'),
  ('Michael Johnson', '555-123-4567', '789 Oak Ave');

INSERT INTO genero (gen_nombre, gen_abreviatura)
VALUES
    ('Masculino', 'M'),
    ('Femenino', 'F'),
    ('No binario', 'NB');

INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura)
VALUES
    ('Cédula de Ciudadanía', 'CC'),
    ('Tarjeta de Identidad', 'TI'),
    ('Cédula de Extranjería', 'CE'),
    ('Pasaporte', 'PSP');

INSERT INTO usuario (usu_nombre, usu_segdo, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente)
VALUES
    ('Juan', 'Carlos', 'Gómez', 'Martínez', '123-456-7890', 'Calle 123', 'juan@example.com', 1, 1, 1),
    ('María', 'Fernanda', 'López', 'Sánchez', '987-654-3210', 'Avenida 456', 'maria@example.com', 2, 2, 2),
    ('Alejandro', '', 'Pérez', 'Ramírez', '555-123-4567', 'Plaza 789', 'alejandro@example.com', 3, 1, 3);

INSERT INTO especialidad (esp_nombre)
VALUES
    ('Pediatría'),
    ('Cardiología'),
    ('Dermatología'),
    ('Ginecología');

INSERT INTO consultorio (cons_codigo, cons_nombre)
VALUES
    (1, 'Consultorio A'),
    (2, 'Consultorio B'),
    (3, 'Consultorio C');

INSERT INTO medico (med_nroMatriculaprofesional, med_nombreCompleto,med_consultorio,med_especialidad)
VALUES
    (12345, 'Dr. John Smith',1,1),
    (67890, 'Dr. Maria Garcia',2,2),
    (54321, 'Dr. Robert Johnson',3,3);

INSERT INTO estado_cita (estcita_nombre)
VALUES
    ('Pendiente'),
    ('Confirmada'),
    ('Cancelada'),
    ('Realizada');

INSERT INTO cita (cit_fecha,cit_estadoCita,cit_medico,cit_datosUsuario)
VALUES
    ('2023-08-10',1,12345,1),
    ('2023-08-15',2,67890,3),
    ('2023-08-20',3,54321,3);

