import {Expose} from 'class-transformer';
import {IsDefined, IsNumber, IsNotEmpty, MaxLength, Matches} from 'class-validator';

export class val_ing{
    
    @Expose({name:"usuario"})
    @Matches(/^[0-9A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usuario debe ser una cadena de texto sin caracteres especiales'}}})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usuario solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usuario no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usuario  es obligatorio'}}})
    usuario:string;

    @Expose({name:"contrasena"})
    @Matches(/^[A-Za-z\s_-¿?!¡0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales'}}})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro contrasena solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena  es obligatorio'}}})
    contrasena:string;

    constructor(usuario:string, contrasena:string){
        this.usuario= usuario;
        this.contrasena= contrasena;
    }
};