export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    about: String;
    facebook: String;
    instangram: String;
    linkedin: String;
    github: String;
    twitter: String;

    constructor(nombre:String, apellido:String, img:String, about:String, facebook:String, instangram:String,
        linkedin:String, github:String, twitter:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.about = about;
        this.facebook = facebook;
        this.instangram = instangram;
        this.linkedin = linkedin;
        this.github = github;
        this.twitter = twitter;
    }
}