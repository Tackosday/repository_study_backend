import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNotEmpty, MaxLength, Matches,IsEmpty} from 'class-validator';

export class val_reg{
    
    @Expose({name:"id"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro id debe estar vacia'}}})
    id:number;

    @Expose({name:"usuario"})
    @Matches(/^[A-Za-z\s_0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro usuario debe ser una cadena de texto sin caracteres especiales'}}})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro usuario solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro usuario no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro usuario  es obligatorio'}}})
    usuario:string;

    @Expose({name:"nombre"})
    @Matches(/^[A-Za-z\sñ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro nombre solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre  es obligatorio'}}})
    nombre:string;

    @Expose({name:"contrasena"})
    @Matches(/^[A-Za-z\s_0-9]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro contrasena debe ser una cadena de texto sin caracteres especiales'}}})
    @MaxLength(30, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro contrasena solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro contrasena  es obligatorio'}}})
    contrasena:string;

    @Expose({name:"token"})
    @IsEmpty({message:()=>{throw{status:400,message: 'el parametro id debe estar vacia'}}})
    token:string;

    @Expose({name:"email"})
    @Matches(/^[A-Za-z\s._0-9@]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro email debe ser una cadena de texto sin caracteres especiales'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro email solo un numero maximo de 20 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro email no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro email  es obligatorio'}}})
    email:string;
    
    constructor(id:number,usuario:string,nombre:string,contrasena:string,token:string,email:string){
        this.id= id;
        this.usuario= usuario;
        this.nombre= nombre;
        this.contrasena= contrasena;
        this.token= token;
        this.email= email;
    }
};