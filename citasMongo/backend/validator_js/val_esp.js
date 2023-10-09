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
import { IsDefined, IsNotEmpty, MaxLength, Matches, IsEmpty } from 'class-validator';
export class val_esp {
    constructor(esp_id, esp_nombre) {
        this.esp_id = esp_id;
        this.esp_nombre = esp_nombre;
    }
}
__decorate([
    Expose({ name: "esp_id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'el parametro esp_id debe estar vacia' }; } }),
    __metadata("design:type", Number)
], val_esp.prototype, "esp_id", void 0);
__decorate([
    Expose({ name: "esp_nombre" }),
    MaxLength(20, { message: () => { throw { status: 400, message: 'lo sentimos, el parametro esp_nombre solo un numero maximo de 20 caracteres' }; } }),
    Matches(/^[A-Za-zñÑ]+$/, { message: () => { throw { status: 400, message: 'el parametro esp_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro esp_nombre no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro esp_nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], val_esp.prototype, "esp_nombre", void 0);
