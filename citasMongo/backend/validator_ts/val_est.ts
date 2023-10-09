import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined,IsNotEmpty, MaxLength,Matches,IsEmpty} from 'class-validator';

export class val_est{

    @Expose({name:"estcita_id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro estcita_id debe estar vacia'}}})
    estcita_id:Number

    
    @Expose({name:"estcita_nombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro estcita_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro estcita_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro estcita_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro estcita_nombre es obligatorio'}}})
    estcita_nombre:string


    constructor(estcita_id:number,estcita_nombre:string){
        this.estcita_id=estcita_id;
        this.estcita_nombre=estcita_nombre;
    }
}
