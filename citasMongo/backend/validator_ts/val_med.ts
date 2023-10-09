import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength,Matches,} from 'class-validator';

export class val_med{

    @Expose({name:"med_nroMatriculaprofesional"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro med_nroMatriculaprosional es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro med_nroMatriculaprosional debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro med_nroMatriculaprosional debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro med_nroMatriculaprosional no puede estar vacio'}}})
    med_nroMatriculaprofesional:number

    @Expose({name:"med_nombreCompleto"})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'lo sentimos, el parametro med_nombreCompleto solo un numero maximo de 255 caracteres'}}})
    @Matches(/^[A-Za-zñÑ\s]+$/, {  message: ()=>{ throw { status: 400, message: 'el parametro med_nombreCompleto debe ser una cadena de texto sin caracteres especiales y sin tildes'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'el parametro med_nombreCompleto no puede estar vacio'}}})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro med_nombreCompleto es obligatorio'}}})
    med_nombreCompleto:string

    @Expose({name:"med_consultorio"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro med_consultorio es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro med_consultorio debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro med_consultorio debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro med_consultorio no puede estar vacio'}}})
    med_consultorio:number

    @Expose({name:"med_especialidad"})
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'el parametro med_especialidad es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'el parametro med_especialidad debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro med_especialidad debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro med_especialidad no puede estar vacio'}}})
    med_especialidad:number


    constructor(med_nroMatriculaprofesional:number,med_nombreCompleto:string,med_consultorio:number,med_especialidad:number){
        this.med_nroMatriculaprofesional=med_nroMatriculaprofesional;
        this.med_nombreCompleto=med_nombreCompleto;
        this.med_consultorio=med_consultorio;
        this.med_especialidad=med_especialidad;

    }
}