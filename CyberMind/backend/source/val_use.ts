import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,IsEmpty,IsEmail,Max,Length} from 'class-validator';

export class val_use{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id no puede estar vacio'}}})
    id:number;

    @Expose({name:"nombre"})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro nombre solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre es obligatorio'}}})
    nombre:string;

    @Expose({name:"sexo"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro nombre solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro es obligatorio'}}})
    sexo:string;

    @Expose({name:"contrasena"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro contrasena solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s_]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena es obligatorio'}}})
    contrasena:string;

    @Expose({name:"correo"})
    @MaxLength(40, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro correo solo acepta un numero maximo de 100 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro correo no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro correo es obligatorio'}}})
    @IsEmail({}, { message: 'Debe proporcionar una dirección de correo electrónico válida para el parametro correo' })

    correo:string;

    @Expose({name:"sobrenombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro sobrenombre solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro sobrenombre debe ser una cadena de texto sin caracteres especiales'}}})
    sobrenombre:string;

    @Expose({name:"edad"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro edad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro edad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro edad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro edad no puede estar vacio'}}})
    @Max(150, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro edad solo acepta un numero maximo de 100 caracteres'}}})

    edad:number;

    @Expose({name:"telefono"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro telefono es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro telefono debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro telefono debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro telefono no puede estar vacio'}}})
    @Length(10,10, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro telefono solo acepta un numero maximo de 100 caracteres'}}})
    telefono:number;

    @Expose({name:"region"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro region solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro region debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro region no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro region es obligatorio'}}})
    region:string;

    


    constructor(id:number,nombre:string,sexo:string,contrasena:string,correo:string,sobrenombre:string,edad:number,telefono:number,region:string,){
        this.id=id;
        this.nombre=nombre;
        this.sexo=sexo;
        this.contrasena=contrasena;
        this.correo=correo;
        this.sobrenombre=sobrenombre;
        this.edad=edad;
        this.telefono=telefono;
        this.region=region;
    }
}
