export class Tipo{

    private id:string
    private nombre:string

    constructor(id:string, nombre:string){
        this.id = id
        this.nombre = nombre
    }

    //Metodos geters

    getId():string{
        return this.id
    }
    getNombre():string{
        return this.nombre
    }

    //Metodos seters

    setId(id:string){
        this.id = id
    }
    setNombre(nombre:string){
        this.nombre = nombre
    }

    
}