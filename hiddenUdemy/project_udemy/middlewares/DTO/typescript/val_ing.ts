import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNotEmpty, MaxLength, Matches} from 'class-validator';

export class val_ing{
    
    @Expose({name:"user"})
    @Matches(/^[0-9_A-Za-z\sñ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro user debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro user solo un numero maximo de 100 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro user no puede estar vacio'}}})
    user:string;

    @Expose({name:"password"})
    @Matches(/^[0-9A-Za-z\sñ.,_]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro password debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(80, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro password solo un numero maximo de 80 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro password no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro password  es obligatorio'}}})
    password:string;


    constructor(user:string, password:string){
        this.user= user;
        this.password= password;
    }
};