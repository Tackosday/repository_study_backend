import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, IsString, MaxLength, Matches,IsEmpty} from 'class-validator';


export class val_sug{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id no puede estar vacio'}}})
    id:number;
    
    @Expose({name:" usuario usuario"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usuario usuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro usuario usuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro usuario usuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro usuario usuario no puede estar vacio'}}})
    usuario:number;
    
    @Expose({name:"id_tema"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro id_tema debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro id_tema debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro id_tema no puede estar vacio'}}})
    id_tema:number;
    
    @Expose({name:"mensaje"})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'lo sentimos,el parametro mensaje solo acepta un numero maximo de 100 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s,.-]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro mensaje debe ser una cadena de texto sin caracteres especiales exepto( , . - )'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro mensaje no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro mensaje es obligatorio'}}})
    mensaje:string;

    constructor(id:number,usuario:number,id_tema:number,mensaje:string){
        this.id=id;
        this.usuario=usuario;
        this.id_tema=id_tema;
        this.mensaje=mensaje;
    }
}