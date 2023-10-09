import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined,IsNotEmpty, MaxLength,Matches,IsEmpty} from 'class-validator';

export class val_esp{

    @Expose({name:"esp_id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro esp_id debe estar vacia'}}})
    esp_id:number;
    
    @Expose({name:"esp_nombre"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro esp_nombre solo un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro esp_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro esp_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro esp_nombre es obligatorio'}}})
    esp_nombre:string;


    constructor(esp_id:number,esp_nombre:string){
        this.esp_id=esp_id;
        this.esp_nombre=esp_nombre;
    }
}