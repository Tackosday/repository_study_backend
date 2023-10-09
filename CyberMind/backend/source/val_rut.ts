import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,IsEmpty,IsBoolean} from 'class-validator';


export class val_rut{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro no puede estar vacio'}}})
    id:number;

    @Expose({name:"nombre"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 50 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro es obligatorio'}}})
    nombre:string;

    @Expose({name:"etiqueta"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro es obligatorio'}}})
    etiqueta:string;

    @Expose({name:"us_creador"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro no puede estar vacio'}}})
    us_creador:number;

    @Expose({name:"configuracion"})
    @MaxLength(10, { message: ()=>{ throw { status: 400, message: 'lo sentimos, solo puedes colocar maximo 10 caracteres'}}})
    @Matches(/^[A-Za-z]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro es obligatorio'}}})
    configuracion:string;

    @Expose({name:"sugerencias"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro sugerencias es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro sugerencias debe ser positivo'}}})
    @IsBoolean({ message: ()=>{ throw { status: 400, message: 'El parametro sugerencias debe ser un booleano true o false'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro sugerencias no puede estar vacio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro sugerencias solo acepta valores de maximo 5 caracteres'}}})
    sugerencias:number;

    @Expose({name:"post_recursos"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro post_recursos es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro post_recursos debe ser positivo'}}})
    @IsBoolean({ message: ()=>{ throw { status: 400, message: 'El parametro post_recursos debe ser un booleano true o false'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro post_recursos no puede estar vacio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro post_recursos solo acepta valores de maximo 5 caracteres'}}})
    post_recursos:number;

    @Expose({name:"reacciones"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro reacciones es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro reacciones debe ser positivo'}}})
    @IsBoolean({ message: ()=>{ throw { status: 400, message: 'El parametro reacciones debe ser un booleano true o false'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro reacciones no puede estar vacio'}}})
    @MaxLength(5, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro reacciones solo acepta valores de maximo 5 caracteres'}}})
    reacciones:number;

    constructor(id:number,nombre:string,etiqueta:string,us_creador:number,configuracion:string,sugerencias:number,post_recursos:number,reacciones:number){
        this.id=id;
        this.nombre=nombre;
        this.etiqueta=etiqueta;
        this.us_creador=us_creador;
        this.configuracion=configuracion;
        this.sugerencias=sugerencias;
        this.post_recursos=post_recursos;
        this.reacciones=reacciones;
    }
}