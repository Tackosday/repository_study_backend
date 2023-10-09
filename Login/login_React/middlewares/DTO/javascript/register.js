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
import { IsDefined, IsNotEmpty, MaxLength, Matches, IsEmpty } from 'class-validator';
export class val_reg {
    constructor(id, usuario, nombre, contrasena, token, email) {
        this.id = id;
        this.usuario = usuario;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.token = token;
        this.email = email;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro id debe estar vacia' }; } }),
    __metadata("design:type", Number)
], val_reg.prototype, "id", void 0);
__decorate([
    Expose({ name: "usuario" }),
    Matches(/^[A-Za-z\s_0-9]+$/, { message: () => { throw { status: 400, message: 'el parametro usuario debe ser una cadena de texto sin caracteres especiales' }; } }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro usuario solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro usuario no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro usuario  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "usuario", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Matches(/^[A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro nombre solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "contrasena" }),
    Matches(/^[A-Za-z\s_0-9]+$/, { message: () => { throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales' }; } }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro contrasena solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro contrasena no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro contrasena  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "contrasena", void 0);
__decorate([
    Expose({ name: "token" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro id debe estar vacia' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "token", void 0);
__decorate([
    Expose({ name: "email" }),
    Matches(/^[A-Za-z\s._0-9@]+$/, { message: () => { throw { status: 400, message: 'el parametro email debe ser una cadena de texto sin caracteres especiales' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro email solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro email no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro email  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "email", void 0);
;
