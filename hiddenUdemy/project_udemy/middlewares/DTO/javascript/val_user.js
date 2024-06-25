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
import { IsDefined, IsNotEmpty, MaxLength, Matches, IsEmpty, IsNumber, IsEmail } from 'class-validator';
export class val_reg {
    constructor(id, name, user, password, phone, token, email, role, gender) {
        this.id = id;
        this.name = name;
        this.user = user;
        this.password = password;
        this.phone = phone;
        this.token = token;
        this.email = email;
        this.role = role;
        this.gender = gender;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro id debe estar vacio' }; } }),
    __metadata("design:type", Number)
], val_reg.prototype, "id", void 0);
__decorate([
    Expose({ name: "name" }),
    Matches(/^[A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro name debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro name solo un numero maximo de 50 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro name no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro name  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "name", void 0);
__decorate([
    Expose({ name: "user" }),
    Matches(/^[0-9_A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro user debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(100, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro user solo un numero maximo de 100 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro user no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro user  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "user", void 0);
__decorate([
    Expose({ name: "password" }),
    Matches(/^[0-9A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro password debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(80, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro password solo un numero maximo de 80 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro password no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro password  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "password", void 0);
__decorate([
    Expose({ name: "phone" }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'el parametro phone debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro phone no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro phone es obligatorio' }; } }),
    __metadata("design:type", Number)
], val_reg.prototype, "phone", void 0);
__decorate([
    Expose({ name: "token" }),
    __metadata("design:type", String)
], val_reg.prototype, "token", void 0);
__decorate([
    Expose({ name: "email" }),
    IsEmail({}, { message: 'Debe proporcionar una dirección de correo electrónico válida para el parametro correo' }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "email", void 0);
__decorate([
    Expose({ name: "role" }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro prefijo debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre  es obligatorio' }; } }),
    __metadata("design:type", Number)
], val_reg.prototype, "role", void 0);
__decorate([
    Expose({ name: "gender" }),
    Matches(/^[A-Za-z\sñ]+$/, { message: () => { throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales y sin tildes' }; } }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro nombre solo un numero maximo de 50 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro nombre  es obligatorio' }; } }),
    __metadata("design:type", String)
], val_reg.prototype, "gender", void 0);
;
