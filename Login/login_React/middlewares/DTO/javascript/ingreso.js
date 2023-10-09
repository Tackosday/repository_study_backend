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
import { IsDefined, IsNotEmpty, MaxLength, Matches } from 'class-validator';
export class val_ing {
    constructor(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}
__decorate([
    Expose({ name: "usuario" }),
    Matches(/^[0-9A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro usuario debe ser una cadena de texto sin caracteres especiales' }; } }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro usuario solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro usuario no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro usuario  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_ing.prototype, "usuario", void 0);
__decorate([
    Expose({ name: "contrasena" }),
    Matches(/^[A-Za-z\s_-¿?!¡0-9]+$/, { message: () => { throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales' }; } }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro contrasena solo un numero maximo de 20 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro contrasena no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro contrasena  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_ing.prototype, "contrasena", void 0);
;
