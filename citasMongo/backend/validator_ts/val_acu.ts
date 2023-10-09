import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNotEmpty, MaxLength,MinLength, Matches,IsEmpty} from 'class-validator';

export class val_acu{

    @Expose({name:"acu_codigo"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro tipdoc_id debe estar vacia'}}})
    acu_codigo:number;
    
    @Expose({name:"acu_nombrecompleto"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro tipdoc_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio'}}})
    acu_nombrecompleto:string;
    
    @Expose({name:"acu_telefono"})
    @MaxLength(16, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro tipdoc_nombre solo un numero maximo de 16 caracteres'}}})
    @MinLength(12, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_telefono solo un numero minimo de 12 caracteres'}}})
    @Matches(/^[0-9+/s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto que solo contega numeros,espacions y +'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio'}}})
    acu_telefono:string;
    
    @Expose({name:"acu_direccion"})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_direccion solo un numero maximo de 30 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio'}}})
    acu_direccion:string;

    
    constructor(acu_codigo:number,acu_nombrecompleto:string,acu_telefono:string,acu_direccion:string){
        this.acu_codigo=acu_codigo;
        this.acu_nombrecompleto=acu_nombrecompleto;
        this.acu_telefono=acu_telefono;
        this.acu_direccion=acu_direccion;
    }
}