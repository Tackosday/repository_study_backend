import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNotEmpty, MaxLength, Matches,IsEmpty,IsNumber,IsEmail} from 'class-validator';

export class val_reg{

    @Expose({name:"id"})
    @IsEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro id debe estar vacio'}}})
    id:number;

    @Expose({name:"name"})
    @Matches(/^[A-Za-z\sñ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro name debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro name solo un numero maximo de 50 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro name no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro name  es obligatorio'}}})
    name:string;

    @Expose({name:"user"})
    @Matches(/^[0-9_A-Za-z\sñ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro user debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(100, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro user solo un numero maximo de 100 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro user no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro user  es obligatorio'}}})
    user:string;

    @Expose({name:"password"})
    @Matches(/^[0-9A-Za-z\sñ.,_]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro password debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(80, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro password solo un numero maximo de 80 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro password no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro password  es obligatorio'}}})
    password:string;

    @Expose({name:"phone"})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'el parametro phone debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro phone no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro phone es obligatorio'}}})
    phone:number;

    @Expose({name:"token"})
    token:string;

    @Expose({name:"email"})
    @IsEmail({}, { message: 'Debe proporcionar una dirección de correo electrónico válida para el parametro correo' })
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre  es obligatorio'}}})
    email:string;

    @Expose({name:"role"})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro prefijo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre  es obligatorio'}}})
    role:number;

    @Expose({name:"gender"})
    @Matches(/^[A-Za-z\sñ]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro nombre debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @MaxLength(50, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro nombre solo un numero maximo de 50 caracteres'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro nombre no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro nombre  es obligatorio'}}})
    gender:string;


    constructor(id:number,name:string,user:string,password:string,phone:number,token:string,email:string,role:number,gender:string){
        this.id= id;
        this.name= name;
        this.user= user;
        this.password= password;
        this.phone= phone;
        this.token= token;
        this.email= email;
        this.role= role;
        this.gender= gender;
    }
};
