import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches,Max} from 'class-validator';

export class val_pre{
    
    @Expose({name:"region"})
    // propiedades del dato
    region:string;

    @Expose({name:"prefijo"})
    // propiedade de dato
    prefijo:number;
    
    constructor(region:string, prefijo:number){
        this.region= region;
        this.prefijo= prefijo;
    }
};
