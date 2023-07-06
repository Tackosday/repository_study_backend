CREATE DATABASE db_prueba_backed_sql;
USE  db_prueba_backed_sql;
CREATE TABLE users(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255),
    email_verified_at TIMESTAMP,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    foto VARCHAR(225),
    password VARCHAR(225),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    deleted_at TIMESTAMP
    );
DROP TABLE users;
CREATE TABLE bodegas(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    nombre VARCHAR(255),
    id_responsable BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_responsable) REFERENCES users(id),
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (created_by) REFERENCES users(id),
    update_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (update_by) REFERENCES users(id),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    deleted_at TIMESTAMP
);
DROP TABLE bodegas;
CREATE TABLE productos(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (created_by) REFERENCES users(id),
    update_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (update_by) REFERENCES users(id),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    deleted_at TIMESTAMP
);
DROP TABLE productos;
CREATE TABLE historiales(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    cantidad INT(11),
    id_bodega_origen BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_bodega_origen) REFERENCES bodegas(id),
    id_bodega_destino BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_bodega_destino) REFERENCES bodegas(id),
    id_inventario BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_inventario) REFERENCES inventarios(id),
    created_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (created_by) REFERENCES users(id),
    update_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (update_by) REFERENCES users(id),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    deleted_at TIMESTAMP
);
DROP TABLE historiales;
CREATE TABLE inventarios(
    id BIGINT(20) UNSIGNED PRIMARY KEY,
    id_bodega BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_bodega) REFERENCES bodegas(id),
    id_producto BIGINT(20) UNSIGNED,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    cantidad INT(11),
    created_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (created_by) REFERENCES users(id),
    update_by BIGINT(20) UNSIGNED,
    FOREIGN KEY (update_by) REFERENCES users(id),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    deleted_at TIMESTAMP
);