export class Proyecto {

    id? : number;
    nombreP : string;
    descripcionP : string;
    imagenP : string;
    urlP: string;

    constructor(nombreP:string, descripcionP:string, imagenP:string, urlP:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imagenP =imagenP;
        this.urlP =urlP;
    }
}