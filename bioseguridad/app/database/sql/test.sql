CREATE DATABASE clay_bioseguridad;
USE clay_bioseguridad;

CREATE TABLE pais(
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE departamento(
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    idPaisFk INT NOT NULL, 
    FOREIGN KEY (idPaisFk) REFERENCES pais(id)
);

CREATE TABLE municipio(
    id INT(11) PRIMARY KEY,
    nombre VARCHAR(50),
    idDepartamentoFk INT NOT NULL,
    FOREIGN KEY (idDepartamentoFk) REFERENCES departamento(id)
);

CREATE TABLE empresa(
    id INT(11) PRIMARY KEY,
    nit VARCHAR(50) NOT NULL ,
    razon_social TEXT NOT NULL,
    representante_legal VARCHAR(50),
    FechaCreacion DATE NOT NULL,
    idMunicipioFk INT(11),
    FOREIGN KEY (idMunicipioFk) REFERENCES municipio(id)
);

CREATE TABLE cargos(
id INT PRIMARY KEY,
descripcion VARCHAR(50) NOT NULL,
sueldo_base DOUBLE NOT NULL
);

CREATE TABLE empleado(
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    idCargoFk INT NOT NULL,
    fecha_Ingreso DATE NOT NULL,
    idMunicipioFk INT NOT NULL,
    FOREIGN KEY (idCargoFk) REFERENCES cargos(id),
    FOREIGN KEY (idMunicipioFk) REFERENCES municipio(id)
);

CREATE TABLE insumo(
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    valor_unit DOUBLE NOT NULL,
    stock_min DOUBLE NOT NULL,
    stock_max DOUBLE NOT NULL
);

CREATE TABLE tipo_persona(
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE proveedor(
    id INT PRIMARY KEY,
    NitProveedor VARCHAR(50) NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    IdTipoPersona INT NOT NULL,
    IdMunicipioFk INT NOT NULL,
     FOREIGN KEY (IdTipoPersona) REFERENCES tipo_persona(id),
     FOREIGN KEY (IdMunicipioFk) REFERENCES municipio(id)
);

CREATE TABLE insumo_proveedor(
    IdInsumoFk INT NOT NULL,
    IdProveedorFk INT NOT NULL,
    FOREIGN KEY (IdInsumoFk) REFERENCES insumo(id),
    FOREIGN KEY (IdProveedorFk) REFERENCES proveedor(id)
);

CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    idcliente VARCHAR(255),
    IdTipoPersonaFk INT NOT NULL,
    fechaRegistro DATE NOT NULL,
    IdMunicipioFk INT NOT NULL,
    FOREIGN KEY (IdTipoPersonaFk) REFERENCES tipo_persona(id),
    FOREIGN KEY (IdMunicipioFk) REFERENCES municipio(id)
);

CREATE TABLE forma_pago(
    id INT PRIMARY KEY,
    descripcions VARCHAR(50) NOT NULL
);

CREATE TABLE venta(
    id INT PRIMARY KEY,
    fecha DATE NOT NULL,
    IdEmpleadoFk INT NOT NULL,
    IdClienteFk INT NOT NULL,
    IdFormaPagoFk INT NOT NULL,
    FOREIGN KEY (IdEmpleadoFk) REFERENCES empleado(id),
    FOREIGN KEY (IdClienteFk) REFERENCES cliente(id),
    FOREIGN KEY (IdFormaPagoFk) REFERENCES forma_pago(id)
);

CREATE TABLE talla(
    id INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
    
);


CREATE TABLE tipo_estado(
    id INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE estado(
    id INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL,
    idTipoEstadoFk INT NOT NULL,
    FOREIGN KEY (idTipoEstadoFk) REFERENCES tipo_estado(id)
);

CREATE TABLE tipo_proteccion(
    id INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE genero(
    id INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE prenda(
    id INT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    ValorUnitCop DOUBLE NOT NULL,
    ValorUnitUsd DOUBLE NOT NULL,
    IdEstadoFk INT NOT NULL,
    IdTipoProteccion INT NOT NULL,
    IdGeneroFk INT NOT NULL,
    Codigo VARCHAR(50) NOT NULL,
    FOREIGN KEY (IdGeneroFk) REFERENCES genero(id), 
    FOREIGN KEY (IdEstadoFk) REFERENCES estado(id), 
    FOREIGN KEY (IdTipoProteccion) REFERENCES tipo_proteccion(id)
);

CREATE TABLE color(
    id INT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE orden(
    id INT PRIMARY KEY,
    fecha DATE NOT NULL,
    IdEmpleadoFk INT NOT NULL,
    idClienteFk INT NOT NULL,
    IdEstadoFk INT NOT NULL,
    FOREIGN KEY (IdEmpleadoFk) REFERENCES empleado(id),
    FOREIGN KEY (idClienteFk) REFERENCES cliente(id),
    FOREIGN KEY (IdEstadoFk) REFERENCES estado(id)
);


CREATE TABLE detalle_orden(
    id INT PRIMARY KEY,
    IdOrdenFk INT NOT NULL,
    IdPrendaFk INT NOT NULL,
    prendaId INT,
    cantidad_producir INT NOT NULL,
    idColorFk INT NOT NULL,
    cantidad_producida INT,
    idEstadoFk INT NOT NULL,
    FOREIGN KEY (IdOrdenFk) REFERENCES orden(id),
    FOREIGN KEY (IdPrendaFk) REFERENCES prenda(id),
    FOREIGN KEY (idColorFk) REFERENCES color(id),
    FOREIGN KEY (idEstadoFk) REFERENCES estado(id)
);

CREATE TABLE insumo_prendas(
    IdInsumoFk INT NOT NULL,
    IdPrendaFk INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (IdPrendaFk) REFERENCES prenda(id),
    FOREIGN KEY (IdInsumoFk) REFERENCES insumo(id)
);

CREATE TABLE inventario(
id INT PRIMARY KEY,
CodInv VARCHAR(255),
IdPrendaFk INT NOT NULL,
ValorVtaCop DOUBLE NOT NULL,
ValorVtaUsd DOUBLE NOT NULL,
FOREIGN KEY (IdPrendaFk) REFERENCES prenda(id)
);

CREATE TABLE inventario_talla(
IdInvFk INT NOT NULL,
IdTallaFk INT NOT NULL,
FOREIGN KEY (IdInvFk) REFERENCES inventario(id),
FOREIGN KEY (IdTallaFk) REFERENCES talla(id)
);

CREATE TABLE detalle_venta(
id INT PRIMARY KEY,
IdVentaFk INT NOT NULL,
IdProductoFk INT NOT NULL,
IdTallaFk INT NOT NULL,
cantidad INT NOT NULL,
valor_unit DOUBLE,
Foreign Key (IdVentaFk) REFERENCES venta(id),
Foreign Key (IdProductoFk) REFERENCES inventario(id),
Foreign Key (IdTallaFk) REFERENCES talla(id)
);