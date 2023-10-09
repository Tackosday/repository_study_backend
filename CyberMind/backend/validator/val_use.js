var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, IsEmpty, IsEmail, Max, Length } from 'class-validator';
export class val_use {
    constructor(id, nombre, sexo, contrasena, correo, sobrenombre, edad, telefono, region) {
        this.id = id;
        this.nombre = nombre;
        this.sexo = sexo;
        this.contrasena = contrasena;
        this.correo = correo;
        this.sobrenombre = sobrenombre;
        this.edad = edad;
        this.telefono = telefono;
        this.region = region;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'El parametro id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_use.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro nombre solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_use.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "sexo" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro nombre solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro es obligatorio' }; } }),
    __metadata("design:type", String)
], val_use.prototype, "sexo", void 0);
__decorate([
    Expose({ name: "contrasena" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro contrasena solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s_]+$/, { message: () => { throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro contrasena no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro contrasena es obligatorio' }; } }),
    __metadata("design:type", String)
], val_use.prototype, "contrasena", void 0);
__decorate([
    Expose({ name: "correo" }),
    MaxLength(40, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro correo solo acepta un numero maximo de 100 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro correo no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro correo es obligatorio' }; } }),
    IsEmail({}, { message: 'Debe proporcionar una dirección de correo electrónico válida para el parametro correo' }),
    __metadata("design:type", String)
], val_use.prototype, "correo", void 0);
__decorate([
    Expose({ name: "sobrenombre" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro sobrenombre solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s]+$/, { message: () => { throw { status: 400, message: 'el parametro sobrenombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    __metadata("design:type", String)
], val_use.prototype, "sobrenombre", void 0);
__decorate([
    Expose({ name: "edad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro edad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro edad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro edad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro edad no puede estar vacio' }; } }),
    Max(150, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro edad solo acepta un numero maximo de 100 caracteres' }; } }),
    __metadata("design:type", Number)
], val_use.prototype, "edad", void 0);
__decorate([
    Expose({ name: "telefono" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro telefono es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro telefono debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro telefono debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro telefono no puede estar vacio' }; } }),
    Length(10, 10, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro telefono solo acepta un numero maximo de 100 caracteres' }; } }),
    __metadata("design:type", Number)
], val_use.prototype, "telefono", void 0);
__decorate([
    Expose({ name: "region" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro region solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro region debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro region no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro region es obligatorio' }; } }),
    __metadata("design:type", String)
], val_use.prototype, "region", void 0);
