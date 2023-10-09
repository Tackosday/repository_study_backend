import { Expose } from "class-transformer";
import { IsNumber } from "class-validator";

export class use{
  
  @Expose({name:"usu_id"})
  @IsNumber(message:(throw(status:400,message:"el parametro usu_id debe ser un numer")))
  usu_id:number;
  
  
    constructor(usu_id:number,usu_nombre:string, usu_segdo_nombre:string, usu_primer_apellido_usuar:string, usu_segdo_apellido_usuar:string, usu_telefono:string, usu_direccion:string, usu_email:string, usu_tipodoc:number, usu_genero:number, usu_acudiente:number){
        this.usu_id=usu_id;
        this.usu_nombre=usu_nombre;
        this.usu_segdo_nombre=usu_segdo_nombre;
        this.usu_primer_apellido_usuar=usu_primer_apellido_usuar;
        this.usu_segdo_apellido_usuar=usu_segdo_apellido_usuar;
        this.usu_telefono=usu_telefono;
        this.usu_direccion=usu_direccion;
        this.usu_email=usu_email;
        this.usu_tipodoc=usu_tipodoc;
        this.usu_genero=usu_genero;
        this.usu_acudiente=usu_acudiente;    
}}