import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,IsEmpty,IsUrl} from 'class-validator';

export class val_res{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id no puede estar vacio'}}})
    id:number;

    @Expose({name:"tipo"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro tipo solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro tipo debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro tipo no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro tipo es obligatorio'}}})
    tipo:string;

    @Expose({name:"url"})
    @MaxLength(250, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro url solo se puede ingresar un numero maximo de 250 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro url no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro url es obligatorio'}}})
    @IsUrl(undefined,{ message: ()=>{ throw {status:400,message:'el parametro url debe ser una url valida'}}})
    url:string;

    @Expose({name:"id_tema"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro id_tema debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id_tema no puede estar vacio'}}})
    id_tema:number;

    constructor(id:number,tipo:string,url:string,id_tema:number){
        this.id=id;
        this.tipo=tipo;
        this.url=url;
        this.id_tema=id_tema;
    }
}