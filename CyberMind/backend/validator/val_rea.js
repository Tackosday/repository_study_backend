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
export class val_rea {
    constructor(id, id_usuario, tipo_reaccion, id_tema, id_ruta) {
        this.id = id;
        this.id_usuario = id_usuario;
        this.tipo_reaccion = tipo_reaccion;
        this.id_tema = id_tema;
        this.id_ruta = id_ruta;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro id debe estar vacia' }; } }),
    __metadata("design:type", Number)
], val_rea.prototype, "id", void 0);
__decorate([
    Expose({ name: "id_usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro id_usuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro id_usuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro id_usuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro id_usuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_rea.prototype, "id_usuario", void 0);
__decorate([
    Expose({ name: "tipo_reaccion" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro tipo_reaccion solo acepta un numero maximo de 20 caracteres' }; } }),
    Matches(/^[A-Za-z]+$/, { message: () => { throw { status: 400, message: 'el parametro tipo_reaccion debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro tipo_reaccion no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro tipo_reaccion es obligatorio' }; } }),
    __metadata("design:type", String)
], val_rea.prototype, "tipo_reaccion", void 0);
__decorate([
    Expose({ name: "id_tema" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro id_tema es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro id_tema debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro id_tema debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro id_tema no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_rea.prototype, "id_tema", void 0);
__decorate([
    Expose({ name: "id_ruta" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro id_ruta es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro id_ruta debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro id_ruta debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro id_ruta no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_rea.prototype, "id_ruta", void 0);
