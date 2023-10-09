import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty,IsDateString} from 'class-validator';

export class val_cit{

    @Expose({name:"cit_codigo"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cit_codigo es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro cit_codigo debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cit_codigo debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cit_codigo no puede estar vacio'}}})
    cit_codigo:number;

    @Expose({name:"cit_fecha"})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cit_fecha no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cit_fecha es obligatorio'}}})
    @IsDateString({},{message: ()=>{ throw { status: 400, message:'el parametro cit_fecha debe ser una fecha'}}})
    cit_fecha:Date;

    @Expose({name:"cit_estadoCita"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cit_estadoCita es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro cit_estadoCita debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cit_estadoCita debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cit_estadoCita no puede estar vacio'}}})
    cit_estadoCita:number;

    @Expose({name:"cit_medico"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cit_medico es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro cit_medico debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cit_medico debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cit_medico no puede estar vacio'}}})
    cit_medico:number;

    @Expose({name:"cit_datosUsuario"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro cit_datosUsuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro cit_datosUsuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cit_datosUsuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cit_datosUsuario no puede estar vacio'}}})
    cit_datosUsuario:number;

    constructor(cit_codigo:number,cit_fecha:Date,cit_estadoCita:number,cit_medico:number,cit_datosUsuario:number){
        this.cit_codigo=cit_codigo;
        this.cit_fecha=cit_fecha;
        this.cit_estadoCita=cit_estadoCita;
        this.cit_medico=cit_medico;
        this.cit_datosUsuario=cit_datosUsuario;
    }
}
