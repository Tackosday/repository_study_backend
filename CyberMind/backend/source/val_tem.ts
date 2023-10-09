import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, IsString, MaxLength, Matches,IsEmpty} from 'class-validator';


export class val_tem{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id no puede estar vacio'}}})
    id:number;

    @Expose({name:"nombre"})
    @MaxLength(70, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro nombre acepta solo un numero maximo de 70 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre es obligatorio'}}})
    nombre:string;

    @Expose({name:"etiqueta"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro etiqueta acepta solo un numero maximo de 50 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro etiqueta debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro etiqueta no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro etiqueta es obligatorio'}}})
    etiqueta:string;

    @Expose({name:"ruta_parendisaje"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro ruta_parendisaje es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro ruta_parendisaje debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro ruta_parendisaje debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro ruta_parendisaje no puede estar vacio'}}})
    ruta_parendisaje:number;


    constructor(id:number,nombre:string,etiqueta:string,ruta_parendisaje:number){
        this.id=id;
        this.nombre=nombre;
        this.etiqueta=etiqueta;
        this.ruta_parendisaje=ruta_parendisaje;
    }
}