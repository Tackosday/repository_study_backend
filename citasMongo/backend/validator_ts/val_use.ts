import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength,IsEmail,IsPhoneNumber,MinLength, Matches,Max,IsEmpty} from 'class-validator';

export class val_use{

    @Expose({name:"id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro id debe estar vacia'}}})
    id:number;
    
    @Expose({name:"usu_tipodoc"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_tipodoc es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro usu_tipodoc debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro usu_tipodoc debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro usu_tipodoc no puede estar vacio'}}})
    usu_tipodoc:number;

    @Expose({name:"usu_genero"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_genero es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro usu_genero debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro usu_genero debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro usu_genero no puede estar vacio'}}})
    @Max(99,{message:()=>{throw{status:400, message:'el parametro usu_genero tiene que ser maximo de 2 caracteres'}}})
    usu_genero:number;

    @Expose({name:"usu_acudiente"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_acudiente es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro usu_acudiente debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro usu_acudiente debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro usu_acudiente no puede estar vacio'}}})
    usu_acudiente:number;

    @Expose({name:"usu_nombre"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_nombre solo un numero maximo de 50 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usu_nombre debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_nombre es obligatorio'}}})
    usu_nombre:string;
    
    @Expose({name:"usu_segdo"})
    @MaxLength(45, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_segdo solo un numero maximo de 45 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo es obligatorio'}}})
    usu_segdo:string;
    
    @Expose({name:"usu_primer_apellido_usuar"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_primer_apellido_usuar solo un numero maximo de 50 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usu_primer_apellido_usuar debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_primer_apellido_usuar no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_primer_apellido_usuar es obligatorio'}}})
    usu_primer_apellido_usuar:string;
    
    @Expose({name:"usu_segdo_apellido_usuar"})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_segdo_apellido_usuar solo un numero maximo de 50 caracteres'}}})
    @Matches(/^[A-Za-zñÑ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo_apellido_usuar debe ser una cadena de texto sin caracteres especiales, sin espacios y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo_apellido_usuar no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_segdo_apellido_usuar es obligatorio'}}})
    usu_segdo_apellido_usuar:string;
    
    @Expose({name:"usu_telefono"})
    @Matches(/^(\+\d{1,3}[-\s]*)?\d{10,}$/i, {message: () => {throw { status: 400, message: 'Lo sentimos, el parámetro debe ser un número de teléfono válido' }}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_telefono no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_telefono es obligatorio'}}})
    usu_telefono:string;
    
    @Expose({name:"usu_direccion"})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usu_direccion solo un numero maximo de 30 caracteres'}}})
    @Matches(/^[A-Za-z0-9\s-#@.]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usu_direccion debe ser una cadena de texto sin caracteres especiales'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_direccion no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_direccion es obligatorio'}}})
    usu_direccion:string;
    
    @Expose({name:"usu_email"})
    @IsEmail({},{message:()=>{throw{status:400,message:'el parametro usu_email no es un email valido'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usu_email no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usu_email es obligatorio'}}})
    usu_email:string;
    
    
    constructor(id:number,usu_nombre:string,usu_segdo:string,usu_primer_apellido_usuar:string,usu_segdo_apellido_usuar:string,usu_telefono:string,usu_direccion:string,usu_email:string,usu_tipodoc:number,usu_genero:number,usu_acudiente:number){
        this.id=id;
        this.usu_nombre=usu_nombre;
        this.usu_segdo=usu_segdo;
        this.usu_primer_apellido_usuar=usu_primer_apellido_usuar;
        this.usu_segdo_apellido_usuar=usu_segdo_apellido_usuar;
        this.usu_telefono=usu_telefono;
        this.usu_direccion=usu_direccion;
        this.usu_email=usu_email;
        this.usu_tipodoc=usu_tipodoc;
        this.usu_genero=usu_genero;
        this.usu_acudiente=usu_acudiente;
    }
}