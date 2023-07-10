import {Expose, Type, Transform} from 'class-transformer'

export class user{
    
    @Expose({name:"id"})
    @Transform(({ value })=> parseInt(value),{toClassOnly:true})
    ID:number;

    @Expose({name:"nombre"})
    @Type(()=>String)
    nom_com:string;

    @Expose({name:"edad"})
    @Transform(({ value })=> parseInt(value),{toClassOnly:true})
    eda:number;

    constructor(
            ID:number,
            nom_com:string,
            eda:number
        ){
            this.ID = ID;
            this.nom_com = nom_com;
            this.eda = eda;
        }
}