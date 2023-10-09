import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, IsString, MaxLength, Matches, IsEmpty} from 'class-validator';

export class val_rea{

    @Expose({name:"id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro id debe estar vacia'}}})
    id:number;

    @Expose({name:"id_usuario"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro id_usuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro id_usuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro id_usuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id_usuario no puede estar vacio'}}})
    id_usuario:number;

    @Expose({name:"tipo_reaccion"})
    @MaxLength(20, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro tipo_reaccion solo acepta un numero maximo de 20 caracteres'}}})
    @Matches(/^[A-Za-z]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipo_reaccion debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipo_reaccion no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipo_reaccion es obligatorio'}}})
    tipo_reaccion:string;

    @Expose({name:"id_tema"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro id_tema debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id_tema no puede estar vacio'}}})
    id_tema:number;

    @Expose({name:"id_ruta"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro id_ruta es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro id_ruta debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro id_ruta debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id_ruta no puede estar vacio'}}})
    id_ruta:number;

    constructor(id:number, id_usuario:number,tipo_reaccion:string,id_tema:number,id_ruta:number){
        this.id=id;
        this.id_usuario=id_usuario;
        this.tipo_reaccion=tipo_reaccion;
        this.id_tema=id_tema;
        this.id_ruta=id_ruta;
    }
}