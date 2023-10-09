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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, IsEmpty } from 'class-validator';
export class val_sug {
    constructor(id, usuario, id_tema, mensaje) {
        this.id = id;
        this.usuario = usuario;
        this.id_tema = id_tema;
        this.mensaje = mensaje;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'El parametro id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_sug.prototype, "id", void 0);
__decorate([
    Expose({ name: " usuario usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro usuario usuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro usuario usuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro usuario usuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro usuario usuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_sug.prototype, "usuario", void 0);
__decorate([
    Expose({ name: "id_tema" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro id_tema es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro id_tema debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro id_tema debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro id_tema no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_sug.prototype, "id_tema", void 0);
__decorate([
    Expose({ name: "mensaje" }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro mensaje solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s,.-]+$/, { message: () => { throw { status: 400, message: 'el parametro mensaje debe ser una cadena de texto sin caracteres especiales exepto( , . - )' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro mensaje no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro mensaje es obligatorio' }; } }),
    __metadata("design:type", String)
], val_sug.prototype, "mensaje", void 0);
