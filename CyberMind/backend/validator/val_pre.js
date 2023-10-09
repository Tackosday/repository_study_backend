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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, Max } from 'class-validator';
export class val_pre {
    constructor(region, prefijo) {
        this.region = region;
        this.prefijo = prefijo;
    }
}
__decorate([
    Expose({ name: "region" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro region solo un numero maximo de 20 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro region debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro region no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro region es obligatorio' }; } }),
    __metadata("design:type", String)
], val_pre.prototype, "region", void 0);
__decorate([
    Expose({ name: "prefijo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro prefijo es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro prefijo debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro prefijo debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro prefijo no puede estar vacio' }; } }),
    Max(9999, { message: () => { throw { status: 400, message: 'el parametro prefijo tiene que ser maximo de 4 caracteres' }; } }),
    __metadata("design:type", Number)
], val_pre.prototype, "prefijo", void 0);
;
