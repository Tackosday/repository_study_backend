import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined,IsNotEmpty, MaxLength,Matches,IsNumber,IsPositive} from 'class-validator';

export class val_con{

    @Expose({name:"cons_codigo"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro med_nroMatriculaprosional es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro med_nroMatriculaprosional debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro med_nroMatriculaprosional debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro med_nroMatriculaprosional no puede estar vacio'}}})
    cons_codigo:Number

    
    @Expose({name:"cons_nombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro cons_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro cons_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro cons_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cons_nombre es obligatorio'}}})
    cons_nombre:string


    constructor(cons_codigo:number,cons_nombre:string){
        this.cons_codigo=cons_codigo;
        this.cons_nombre=cons_nombre;
    }
}
