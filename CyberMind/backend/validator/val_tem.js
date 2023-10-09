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
export class val_tem {
    constructor(id, nombre, etiqueta, ruta_parendisaje) {
        this.id = id;
        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.ruta_parendisaje = ruta_parendisaje;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'El parametro id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_tem.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    MaxLength(70, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro nombre acepta solo un numero maximo de 70 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s]+$/, { message: () => { throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_tem.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "etiqueta" }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro etiqueta acepta solo un numero maximo de 50 caracteres' }; } }),
    Matches(/^[A-Za-z0-9\s]+$/, { message: () => { throw { status: 400, message: 'el parametro etiqueta debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro etiqueta no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro etiqueta es obligatorio' }; } }),
    __metadata("design:type", String)
], val_tem.prototype, "etiqueta", void 0);
__decorate([
    Expose({ name: "ruta_parendisaje" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro ruta_parendisaje es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro ruta_parendisaje debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro ruta_parendisaje debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro ruta_parendisaje no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_tem.prototype, "ruta_parendisaje", void 0);
