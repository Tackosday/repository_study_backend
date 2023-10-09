import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined,IsNotEmpty, MaxLength,Matches,IsEmpty} from 'class-validator';

export class val_doc{

    @Expose({name:"tipdoc_id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro tipdoc_id debe estar vacia'}}})
    tipdoc_id:number;

    @Expose({name:"tipdoc_nombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro tipdoc_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_nombre es obligatorio'}}})
    tipdoc_nombre:string;

    @Expose({name:"tipdoc_abreviatura"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro tipdoc_abreviatura solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_abreviatura debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_abreviatura no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipdoc_abreviatura es obligatorio'}}})
    tipdoc_abreviatura:string;

    constructor(tipdoc_id:number,tipdoc_nombre:string,tipdoc_abreviatura:string){
    this.tipdoc_id=tipdoc_id;
    this.tipdoc_nombre=tipdoc_nombre;    
    this.tipdoc_abreviatura=tipdoc_abreviatura;    
    }
}