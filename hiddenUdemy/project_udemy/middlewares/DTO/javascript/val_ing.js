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
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
__decorate([
    Expose({ name: "user" }),
    Matches(/^[0-9_A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro user debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro user solo un numero maximo de 100 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro user no puede estar vacio' }; } }),
    __metadata("design:type", String)
], val_ing.prototype, "user", void 0);
__decorate([
    Expose({ name: "password" }),
    Matches(/^[0-9A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro password debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(80, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro password solo un numero maximo de 80 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro password no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro password  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_ing.prototype, "password", void 0);
;
