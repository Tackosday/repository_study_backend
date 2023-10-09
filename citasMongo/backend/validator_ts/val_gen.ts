import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined,IsNotEmpty, MaxLength,Matches,IsEmpty} from 'class-validator';

export class val_gen{

    @Expose({name:"gen_id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro gen_id debe estar vacia'}}})
    gen_id:number;

    @Expose({name:"gen_nombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro gen_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro gen_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro gen_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro gen_nombre es obligatorio'}}})
    gen_nombre:string;

    @Expose({name:"gen_abreviatura"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro gen_abreviatura solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro gen_abreviatura debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro gen_abreviatura no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro gen_abreviatura es obligatorio'}}})
    gen_abreviatura:string;

    constructor(gen_id:number,gen_nombre:string,gen_abreviatura:string){
    this.gen_id=gen_id;
    this.gen_nombre=gen_nombre;    
    this.gen_abreviatura=gen_abreviatura;    
    }
}