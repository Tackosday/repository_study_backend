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
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, } from 'class-validator';
export class val_med {
    constructor(med_nroMatriculaprofesional, med_nombreCompleto, med_consultorio, med_especialidad) {
        this.med_nroMatriculaprofesional = med_nroMatriculaprofesional;
        this.med_nombreCompleto = med_nombreCompleto;
        this.med_consultorio = med_consultorio;
        this.med_especialidad = med_especialidad;
    }
}
__decorate([
    Expose({ name: "med_nroMatriculaprofesional" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro med_nroMatriculaprosional es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro med_nroMatriculaprosional debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro med_nroMatriculaprosional debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro med_nroMatriculaprosional no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_med.prototype, "med_nroMatriculaprofesional", void 0);
__decorate([
    Expose({ name: "med_nombreCompleto" }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro med_nombreCompleto solo un numero maximo de 255 caracteres' }; } }),
    Matches(/^[A-Za-zñÑ\s]+$/, { message: () => { throw { status: 400, message: 'el parametro med_nombreCompleto debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro med_nombreCompleto no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro med_nombreCompleto es obligatorio' }; } }),
    __metadata("design:type", String)
], val_med.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: "med_consultorio" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro med_consultorio es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro med_consultorio debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro med_consultorio debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro med_consultorio no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_med.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: "med_especialidad" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro med_especialidad es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro med_especialidad debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro med_especialidad debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro med_especialidad no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_med.prototype, "med_especialidad", void 0);
