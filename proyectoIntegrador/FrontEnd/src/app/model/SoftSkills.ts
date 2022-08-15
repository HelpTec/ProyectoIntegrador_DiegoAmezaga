export class SoftSkills {

    id? : number;
    nombreS : string;
    nivelS : number;
    iconoS : string;

    constructor(nombreS:string, nivelS:number, iconoS: string){
        this.nombreS = nombreS;
        this.nivelS = nivelS;
        this.iconoS = iconoS;
    }
}