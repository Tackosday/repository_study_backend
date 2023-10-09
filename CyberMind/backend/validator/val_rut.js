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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, IsEmpty, IsBoolean } from 'class-validator';
export class val_rut {
    constructor(id, nombre, etiqueta, us_creador, configuracion, sugerencias, post_recursos, reacciones) {
        this.id = id;
        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.us_creador = us_creador;
        this.configuracion = configuracion;
        this.sugerencias = sugerencias;
        this.post_recursos = post_recursos;
        this.reacciones = reacciones;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'El parametro no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_rut.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro es obligatorio' }; } }),
    __metadata("design:type", String)
], val_rut.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "etiqueta" }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s]+$/, { message: () => { throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro es obligatorio' }; } }),
    __metadata("design:type", String)
], val_rut.prototype, "etiqueta", void 0);
__decorate([
    Expose({ name: "us_creador" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_rut.prototype, "us_creador", void 0);
__decorate([
    Expose({ name: "configuracion" }),
    MaxLength(10, { message: () => { throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 10 caracteres' }; } }),
    Matches(/^[A-Za-z]+$/, { message: () => { throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro es obligatorio' }; } }),
    __metadata("design:type", String)
], val_rut.prototype, "configuracion", void 0);
__decorate([
    Expose({ name: "sugerencias" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro sugerencias es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro sugerencias debe ser positivo' }; } }),
    IsBoolean({ message: () => { throw { status: 400, message: 'El parametro sugerencias debe ser un booleano true o false' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro sugerencias no puede estar vacio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro sugerencias solo acepta valores de maximo 5 caracteres' }; } }),
    __metadata("design:type", Number)
], val_rut.prototype, "sugerencias", void 0);
__decorate([
    Expose({ name: "post_recursos" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro post_recursos es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro post_recursos debe ser positivo' }; } }),
    IsBoolean({ message: () => { throw { status: 400, message: 'El parametro post_recursos debe ser un booleano true o false' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro post_recursos no puede estar vacio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro post_recursos solo acepta valores de maximo 5 caracteres' }; } }),
    __metadata("design:type", Number)
], val_rut.prototype, "post_recursos", void 0);
__decorate([
    Expose({ name: "reacciones" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro reacciones es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro reacciones debe ser positivo' }; } }),
    IsBoolean({ message: () => { throw { status: 400, message: 'El parametro reacciones debe ser un booleano true o false' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro reacciones no puede estar vacio' }; } }),
    MaxLength(5, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro reacciones solo acepta valores de maximo 5 caracteres' }; } }),
    __metadata("design:type", Number)
], val_rut.prototype, "reacciones", void 0);
