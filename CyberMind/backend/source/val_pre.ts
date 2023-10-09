import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,Max} from 'class-validator';

export class val_pre{

    @Expose({name:"region"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro region solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro region debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro region no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro region es obligatorio'}}})
    region:string;

    @Expose({name:"prefijo"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro prefijo es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro prefijo debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro prefijo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro prefijo no puede estar vacio'}}})
    @Max(9999,{message:()=>{throw{status:400, message:'el parametro prefijo tiene que ser maximo de 4 caracteres'}}})
    prefijo:number;

    constructor(region:string, prefijo:number){
        this.region= region;
        this.prefijo= prefijo;
    }
};
