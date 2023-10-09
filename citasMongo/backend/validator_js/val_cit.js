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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, IsDateString } from 'class-validator';
export class val_cit {
    constructor(cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) {
        this.cit_codigo = cit_codigo;
        this.cit_fecha = cit_fecha;
        this.cit_estadoCita = cit_estadoCita;
        this.cit_medico = cit_medico;
        this.cit_datosUsuario = cit_datosUsuario;
    }
}
__decorate([
    Expose({ name: "cit_codigo" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro cit_codigo es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro cit_codigo debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cit_codigo debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cit_codigo no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_cit.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: "cit_fecha" }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cit_fecha no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro cit_fecha es obligatorio' }; } }),
    IsDateString({}, { message: () => { throw { status: 400, message: 'el parametro cit_fecha debe ser una fecha' }; } }),
    __metadata("design:type", Date)
], val_cit.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: "cit_estadoCita" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro cit_estadoCita es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro cit_estadoCita debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cit_estadoCita debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cit_estadoCita no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_cit.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: "cit_medico" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro cit_medico es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro cit_medico debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cit_medico debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cit_medico no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_cit.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: "cit_datosUsuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro cit_datosUsuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro cit_datosUsuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cit_datosUsuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cit_datosUsuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_cit.prototype, "cit_datosUsuario", void 0);
