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
import { IsDefined, IsNotEmpty, MaxLength, MinLength, Matches, IsEmpty } from 'class-validator';
export class val_acu {
    constructor(acu_codigo, acu_nombrecompleto, acu_telefono, acu_direccion) {
        this.acu_codigo = acu_codigo;
        this.acu_nombrecompleto = acu_nombrecompleto;
        this.acu_telefono = acu_telefono;
        this.acu_direccion = acu_direccion;
    }
}
__decorate([
    Expose({ name: "acu_codigo" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro tipdoc_id debe estar vacia' }; } }),
    __metadata("design:type", Number)
], val_acu.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: "acu_nombrecompleto" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro tipdoc_nombre solo un numero maximo de 20 caracteres' }; } }),
    Matches(/^[A-Za-zñÑ]+$/, { message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_acu.prototype, "acu_nombrecompleto", void 0);
__decorate([
    Expose({ name: "acu_telefono" }),
    MaxLength(16, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro tipdoc_nombre solo un numero maximo de 16 caracteres' }; } }),
    MinLength(12, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro usu_telefono solo un numero minimo de 12 caracteres' }; } }),
    Matches(/^[0-9+/s]+$/, { message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto que solo contega numeros,espacions y +' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_acu.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: "acu_direccion" }),
    MaxLength(30, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro usu_direccion solo un numero maximo de 30 caracteres' }; } }),
    Matches(/^[A-Za-zñÑ]+$/, { message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_acu.prototype, "acu_direccion", void 0);
